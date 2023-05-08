export const revalidate = 0;

export default async function PostsPage() {
  const response = await fetch("http://localhost:3000/api/posts");
  const body: { posts: string[] } = await response.json();

  return (
    <div className="flex flex-col gap-10 h-screen items-center">
      <ul>
        {body.posts.map((post, index) => (
          <li key={index}>{post}</li>
        ))}
      </ul>
    </div>
  );
}
