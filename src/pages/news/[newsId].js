import { useRouter } from "next/router";

const NewsDetails = () => {
  const router = useRouter();
  return (
    <div>
      News News page
      <p>{router.query.newsId}</p>
    </div>
  );
};

export default NewsDetails;
