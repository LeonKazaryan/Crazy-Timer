import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type TimerProps = {
  initialTime: number;
  name: string;
};

export function Timer({ initialTime, name }: TimerProps) {
  const [countdown, setCountdown] = useState(initialTime);
  const navigate = useNavigate();

  useEffect(() => {
    if (countdown === 0) {
      navigate("/finish");
    }
  }, [countdown, navigate]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev: number) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center">
      <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-2xl border border-white/20">
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500 mb-6">
          The time began...
        </h2>
        <div className="text-2xl text-white font-medium animate-pulse">
          {name}, you have:{" "}
          <span className="text-3xl font-bold">{countdown}</span> seconds
        </div>
      </div>
    </div>
  );
}
