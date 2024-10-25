import Image from "next/image";
import getPosts from "@/server/actions/get-posts";

export default async function Home() {
  const { error, success } = await getPosts();
  if (error) {
    throw new Error(error)
  }

  if(success)
  return (
    <main>
      {success.map((post) => (
        <div key={post.id}>
          <h1>{post.title}</h1>
        </div>
      ))}

      <h1>Welcome to Next.js</h1>
      {Date.now()}
      <Image src="/vercel.svg" alt="Vercel logo" width={72} height={16} />
    </main>
  );
}
