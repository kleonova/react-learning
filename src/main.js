import React from "react";
import { createRoot } from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import ContainerLesson3 from "./lesson3";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<ContainerLesson3 />);