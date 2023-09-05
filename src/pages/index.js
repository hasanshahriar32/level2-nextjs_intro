import Home from "@/components/Main/Home/Home";
import Layout from "@/components/layout";

export default function Page() {
  return <Home></Home>;
}

Page.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
