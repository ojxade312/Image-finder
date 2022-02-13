import { Routes, Route, Link } from "react-router-dom";
import { Home } from "../pages/index";
import { Results } from "../pages/results";

export const Router = () => {
   return (
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/results/:id" element={<Results />} />
      </Routes>
   );
};
