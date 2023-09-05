import Home from "@/components/Main/Home/Home";
import Layout from "@/components/layout";

export default function Page() {
  return (
    <div>
      <h1>My page</h1>
      <p>lorem ipsum...</p>
    </div>
  );
}

Page.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Home>{page}</Home>
    </Layout>
  );
};
