import Layout from "../components/Layout";
import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();
  console.log(router);
  return (
    <Layout>
      <div>
        <h1>This Blog post id about {router.query.title}</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
          incidunt nostrum voluptas repellendus, quod quaerat vitae facilis
          sequi libero reiciendis non. Dolores deserunt asperiores ea distinctio
          id consectetur? Quasi qui eius quo officiis aperiam. Ad modi
          voluptatem, error reiciendis quo in nulla temporibus sequi natus
          praesentium blanditiis expedita quis repellat.
        </p>
      </div>
    </Layout>
  );
};

export default Post;
