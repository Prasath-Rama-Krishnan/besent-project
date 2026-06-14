import { Navigate, Route, Routes } from "react-router-dom";
import Layouts from "./Layout";
import Login from "./Login";
import Home from "./Home";
import About from "./About.tsx";
import Controlled from "./Controlled.tsx";
import Uncontrolled from "./Uncontrolled.tsx";
import AuthGuard from "./AuthGuard";
import Hooks from "./Hooks.tsx";
import ComA from "./ComA.tsx";
import ComC from "./ComC.tsx";
import ComB from "./ComB.tsx";
import Api from "./Api.tsx";

function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/Login" />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Home" element={<AuthGuard />}>
        <Route element={<Layouts />}>
          <Route index element={<Navigate to="home" replace />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="controlled" element={<Controlled />} />
          <Route path="uncontrolled" element={<Uncontrolled />} />
          <Route path="hooks" element={<Hooks />} />
          <Route path="ComA" element={<ComA />} />
          <Route path="ComB" element={<ComB />} />
          <Route path="ComC" element={<ComC />} />
          <Route path="Api" element={<Api />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default MyRoutes;