import Link from "next/link";
import Layout from "../components/Layout";

const Index = () => (
  <Layout title="Home Page">
    Welcome
    <Link href="/about">
      <a>here</a>
    </Link>
  </Layout>
);

export default Index;
