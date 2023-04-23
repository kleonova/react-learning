import React from "react";
import { createRoot } from "react-dom/client";
// import ContainerLesson1 from "./lesson1";
import ContainerLesson2 from "./lesson2";

const container = document.getElementById("root");
const root = createRoot(container);
// root.render(<ContainerLesson1 />);
root.render(<ContainerLesson2 />);