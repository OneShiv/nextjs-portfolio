import Layout from "../components/Layout";
import Link from "next/link";

const PostLink = ({ title, slug }) => {
  return (
    <li>
      <Link as={`${slug}`} href={`/post?title=${title}`}>
        <a>{title}</a>
      </Link>
    </li>
  );
};
const Blog = () => {
  return (
    <Layout title="Blogs">
      <ul>
        <PostLink slug="rpost" title="React" />
        <PostLink slug="apost" title="Angular" />
        <PostLink slug="vpost" title="Vue" />
      </ul>
    </Layout>
  );
};

export default Blog;
