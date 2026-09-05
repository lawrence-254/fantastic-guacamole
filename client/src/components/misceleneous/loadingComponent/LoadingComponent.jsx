import { useEffect, useState } from "react";
import "./LoadingComponent.css";

const LoadingComponent = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const nextProgress = prev + 100 / 8;
        if (nextProgress >= 100) {
          clearInterval(interval);
        }
        return nextProgress;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="mainLoadingContainer">
      <div className="title">MEGA.news</div>
      <div className="progressBarContainer">
        <div className="progressBar" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default LoadingComponent;
