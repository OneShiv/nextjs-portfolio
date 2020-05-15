import Link from "next/link";
import Layout from "../components/Layout";
const About = () => (
  <Layout>
    <h1>About</h1>
    <p>This is about pagell we are rendeing imgae</p>
    <img src="/download.png" alt="javascript" height="200px" />
    <Link href="/">
      <a>Home</a>
    </Link>
  </Layout>
);

export default About;
