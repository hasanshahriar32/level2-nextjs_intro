import Home from "@/components/Main/Home/Home";
import MainLayout from "@/components/layout";
import Head from "next/head";

export default function Page() {
  return <Home></Home>;
}

Page.getLayout = function getLayout(page) {
  return (
    <div>
      <Head>
        <title>Next Home Page</title>
        <meta
          name="home page"
          description="this is a next js intro home page"
          content="initial-scale=1.0, width=device-width"
        />
      </Head>
      <MainLayout>{page}</MainLayout>
    </div>
  );
};
