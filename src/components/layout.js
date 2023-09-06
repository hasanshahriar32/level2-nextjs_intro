import SiderComponent from "./Main/Sider";
import { Layout } from "antd";
export default function MainLayout({ children }) {
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <SiderComponent />
      <main>{children}</main>
    </Layout>
  );
}
