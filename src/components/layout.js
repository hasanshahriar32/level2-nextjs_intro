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
      <main className="" style={{ width: "100%" }}>
        {children}
      </main>
    </Layout>
  );
}
