import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const ErrorPage = () => {
  const router = useRouter();
  setTimeout(() => {
    router.push("/");
  }, 4000);
  return (
    <div>
      <Image
        height={500}
        width={500}
        alt="404"
        style={{
          height: "100vh",
          objectFit: "cover",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
        src="https://www.artzstudio.com/content/images/wordpress/2020/05/404-error-not-found-page-lost.png"
      />
      <Link href={"/"}>
        {/* <Button
          type="primary"
          className="btn btn-ghost"
          style={{ position: "absolute", top: "50vh", right: "50vw" }}
        >
          Go Home
        </Button> */}
      </Link>
    </div>
  );
};

export default ErrorPage;
