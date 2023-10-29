import { Chart } from "./Chart";
import { useState } from "react";

function App() {
  const [login, setLogin] = useState(false);
  return (
    <>
      <header className="bg-emerald-900 flex text-white justify-around">
        <h1 className="text-3xl p-2">ADMIN PANEL</h1>
        <div className="flex items-center gap-3">
          <p>{login ? "Welcome back, Admin" : "Welcome back, Guest"}</p>
          <button
            onClick={() => setLogin(!login)}
            className="bg-white text-emerald-900 py-1 px-5 rounded-md transition-all hover:bg-emerald-700"
          >
            {login ? "Logout" : "Login"}
          </button>
        </div>
      </header>
      <div className=" h-screen flex justify-center items-center">
        {login ? <Chart /> : "You must be logged in to see the content"}
      </div>
    </>
  );
}

export default App;
