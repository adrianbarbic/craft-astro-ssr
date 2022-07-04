import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(1);

  return (
    <div className="p-8 bg-slate-50">
      <p>This is a hydrated component.</p>
      <p>You clicked {count} times</p>
      <button
        className="bg-slate-200 border p-2 border-cyan-700"
        onClick={() => setCount(count + 1)}
      >
        Click me
      </button>
    </div>
  );
};
