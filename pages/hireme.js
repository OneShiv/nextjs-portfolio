import Error from "next/error";
import Layout from "../components/Layout";

const HireMe = ({ user, errorCode }) => {
  if (errorCode) {
    return <Error statusCode={errorCode} />;
  }
  return (
    <Layout>
      <h1>Hey its {user.name} there !!</h1>
      <p>Bio: {user.bio}</p>
      <p>
        <img src={user.avatar_url} alt="shiv" />
        You can hire me at{" "}
        <a href="mailto:shejwal1shivshankar@gmail.com">Shivshankar shejwal</a>
      </p>
    </Layout>
  );
};

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch("https://api.github.com/users/oneshiv");
  const errorCode = res.ok ? false : res.status;
  const user = await res.json();
  // By returning { props: posts }, the Blog component
  // will receive `user` as a prop at build time
  return {
    props: {
      user,
      errorCode,
    },
  };
}

export default HireMe;
