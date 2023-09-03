import Link from "next/link";
import React from "react";

const ErrorPage = () => {
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
        <button
          className="btn btn-ghost"
          style={{ position: "absolute", top: "50vh", right: "50vw" }}
        >
          Go Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
