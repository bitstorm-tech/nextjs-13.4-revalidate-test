export default async function PostsPage() {
  const response = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });
  const posts = await response.json();

  return (
    <>
      <h1>Posts</h1>
      <p>{JSON.stringify(posts)}</p>
    </>
  );
}
