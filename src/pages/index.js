import Home from "@/components/Main/Home/Home";
import MainLayout from "@/components/layout";

export default function Page() {
  return <Home></Home>;
}

Page.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
