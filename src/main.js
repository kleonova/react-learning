import React from "react";
import { createRoot } from "react-dom/client";
import Container from "./lesson1/lesson1";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Container />);