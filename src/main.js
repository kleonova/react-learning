import React from "react";
import { createRoot } from "react-dom/client";
// import ContainerLesson1 from "./lesson1";
import ContainerLesson3 from "./lesson3";

const container = document.getElementById("root");
const root = createRoot(container);
// root.render(<ContainerLesson1 />);
// root.render(<ContainerLesson2 />);
root.render(<ContainerLesson3 />);

// import 'bootstrap/dist/css/bootstrap.min.css';