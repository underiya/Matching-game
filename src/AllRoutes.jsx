import { Route, Routes } from "react-router-dom";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/next" element={<Page2 />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
