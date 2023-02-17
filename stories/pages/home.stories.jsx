import React from "react";
import Home, { getServerSideProps } from "../../pages/index.js";

export default {
  title: 'Pages/Home',
  component: Home,
  // default args
  // args: {
  //   name: "John Dor",
  // }
};

export const homePage = (args, { loaded: {name}}) => <Home {...args} name={name}/>
// homePage.args = { name: "John Dough" }
HomePage.loaders = [
  async () => {
    let data = await getServerSideProps()
    return data.props
  }
]