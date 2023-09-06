import MainLayout from "@/components/layout";
import React from "react";

const Newses = () => {
  return <div>this is the news section</div>;
};

export default Newses;

Newses.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
