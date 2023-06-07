import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./App";
import "./styles.css";

var mountNode = document.getElementById("app");
const root = createRoot(mountNode);
root.render(<App />);
