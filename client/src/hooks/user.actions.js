import axios from "axios";
import { useNavigate } from "react-router-dom";

function useUserActions() {
  const navigate = useNavigate();
  const baseUrl = "https://backend/api";

  async function login(data) {
    console.log("user login data", data);
    console.log("base url", baseUrl);
    // const res = await axios.post(`${baseUrl}/auth/login`, data);
    // setUserData(data);
    navigate("/");
    // return res;
  }

  function logout() {
    localStorage.removeItem("auth");
    navigate("/login");
  }

  async function register(data) {
    console.log("user login data", data);
    console.log("base url", baseUrl);
    // const res = await axios.post(`${baseUrl}/auth/register`, data);
    // setUserData(data);
    navigate("/");
    // return res;
  }
  function getUser() {
    const auth = JSON.parse(localStorage.getItem("auth"));
    console.log("user from get user function in user actions hook", auth);
    return auth.user;
  }

  function getAccessToken() {
    const auth = JSON.parse(localStorage.getItem("auth"));
    return auth.accessToken;
  }

  function getRefreshToken() {
    const auth = JSON.parse(localStorage.getItem("auth"));
    return auth.refreshToken;
  }

  function setUserData(data) {
    localStorage.setItem(
      "auth",
      JSON.stringify({
        accessToken: data.res.accessToken,
        refreshToken: data.res.refreshToken,
        user: data.res.user,
      })
    );
  }

  return {
    login,
    logout,
    register,
    getUser,
    setUserData,
    getAccessToken,
    getRefreshToken,
  };
}

export { useUserActions };
