import { Button } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const ErrorPage = () => {
  const router = useRouter();
  setTimeout(() => {
    router.push("/");
  }, 10000);
  return (
    <div>
      <img
        style={{
          height: "100vh",
          objectFit: "cover",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
        src="https://www.artzstudio.com/content/images/wordpress/2020/05/404-error-not-found-page-lost.png"
        alt="404"
      />
      <Link href={"/"}>
        <Button
          type="primary"
          className="btn btn-ghost"
          style={{ position: "absolute", top: "50vh", right: "50vw" }}
        >
          Go Home
        </Button>
      </Link>
    </div>
  );
};

export default ErrorPage;
