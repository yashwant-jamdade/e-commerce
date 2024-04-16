import { lazy } from "react";

const Home = lazy(() => import("../features/frontend/Home"));
const About = lazy(() => import("../features/frontend/About"));

export default [
  {
    label: "Home",
    component: <Home />,
    path: "",
  },
  {
    label: "About",
    component: <About />,
    path: "/about",
  },
];
