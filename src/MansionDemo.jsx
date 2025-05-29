
import { useState } from "react";
import "./index.css";

export default function MansionDemo() {
  const [command, setCommand] = useState("");
  const [response, setResponse] = useState("欢迎回府，主人。请吩咐今日事务。");

  const handleCommand = () => {
    if (command.includes("吃")) {
      setResponse("厨房今日备有香菇炖鸡与桂花酒酿，是否合您心意？");
    } else if (command.includes("表现")) {
      setResponse("小翠今日清扫后院极为仔细，还为您摘来几枝栀子花。");
    } else {
      setResponse("管家正在安排中，请稍候。");
    }
    setCommand("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100 to-amber-200 p-6">
      <h1 className="text-3xl font-serif mb-4">吾之府邸 · 管家台</h1>
      <div className="bg-white p-4 rounded shadow mb-4">
        <p className="text-lg">{response}</p>
      </div>
      <div className="flex gap-2">
        <input
          placeholder="向管家下达指令..."
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          className="flex-1 border rounded px-3 py-2"
        />
        <button onClick={handleCommand} className="bg-amber-500 text-white px-4 py-2 rounded">
          吩咐
        </button>
      </div>
    </div>
  );
}
