import axios from "axios";
import createAuthRefreshInterceptor from "axios-auth-refresh";
import { getAccessToken, getRefreshToken } from "../hooks/user.actions";

const axiosService = axios.create({
  baseURL: "backend",
  headers: {
    "content-Type": "application/json",
  },
});

axiosService.interceptors.request.use(async (config) => {
  config.headers.Authorization = `Bearer ${getAccessToken()}`;
  return config;
});

axiosService.interceptors.response.use(
  (res) => Promise.resolve(res),
  (err) => Promise.reject(err)
);

const refreshAuthLogic = async (failedRequest) => {
  return axios
    .post("/refresh/token/", null, {
      baseURL: "backend",
      headers: {
        Authorization: `Bearer ${getRefreshToken()}`,
      },
    })
    .then((resp) => {
      const { accessToken, refreshToken, user } = resp.data;
      failedRequest.response.config.headers["Authorization"] =
        "Bearer " + accessToken;
      localStorage.setItem(
        "auth",
        JSON.stringify({
          accessToken,
          refreshToken,
          user,
        })
      );
    })
    .catch(() => {
      localStorage.removeItem("auth");
    });
};

createAuthRefreshInterceptor(axiosService, refreshAuthLogic);

export async function fetcher(url) {
  const res = await axiosService.get(url);
  return res.data;
}

export default axiosService;
