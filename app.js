import React from "react";
import { createRoot } from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "mayuri h1"),
    React.createElement("h2", {}, "mayuri h2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "h1"),
    React.createElement("h2", {}, "h2"),
  ]),
]);

const root = createRoot(document.getElementById("root"));
root.render(parent);
