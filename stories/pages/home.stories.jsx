import React from "react";
import Home from "../../pages/index.js";

export default {
  title: 'Pages/Home',
  component: Home,
  args: {
    name: "John Dor",
  }
};

export const homePage = () => <Home name="John Doe"/>
homePage.args = { name: "John Dough" }
