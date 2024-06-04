import "./App.css";

import AllRoutes from "./AllRoutes";

function App() {
  return (
    <>
      <div
        className="app bg-cover object-fill bg-no-repeat bg-center 10px h-screen"
        style={{
          backgroundImage: "url(/background.png)",
        }}
      >
        <AllRoutes />
      </div>
    </>
  );
}

export default App;
