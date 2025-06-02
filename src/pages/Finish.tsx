import { useNavigate } from "react-router-dom";

type FinishProps = {
  name: string;
};

export function Finish({ name }: FinishProps) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-tr from-pink-600 via-purple-500 to-blue-600 flex items-center justify-center p-8 animate-pulse">
      <div className="bg-black/30 backdrop-blur-xl rounded-3xl p-12 shadow-[0_0_50px_rgba(255,0,255,0.5)] border-4 border-white/30 transform hover:scale-105 transition-all duration-300 animate-bounce">
        <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-500 to-cyan-300 mb-8 animate-[wiggle_1s_ease-in-out_infinite]">
          Damn, {name} you are crazy! You did that!
        </div>
        <button
          onClick={() => navigate("/")}
          className="w-full py-4 px-8 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white font-bold text-xl rounded-full transform hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_10px_20px_rgba(0,0,0,0.3)] animate-pulse"
        >
          Back to Settings
        </button>
      </div>
    </div>
  );
}
