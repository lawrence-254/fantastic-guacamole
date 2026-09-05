import { Suspense, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";

import LoadingPage from "./pages/LoadingPage";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import CreatePost from "./pages/CreatePost";
import AboutUs from "./pages/AboutUs";
import ReadPost from "./pages/ReadPost";

const DelayedIndex = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 800);

    return () => clearTimeout(timer);
  }, [navigate]);

  return <LoadingPage />;
};

function App() {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Routes>
        <Route path="/" element={<DelayedIndex />} />
        <Route path="/home" element={<Home />} />

        <Route
          path="/post"
          element={
            <ProtectedRoutes>
              <CreatePost />
            </ProtectedRoutes>
          }
        />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/read-post/:post-id" element={<ReadPost />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
