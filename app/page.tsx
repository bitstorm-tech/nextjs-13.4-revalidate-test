"use client";
export default function Home() {
  function newPost() {
    fetch("http://localhost:3000/api/posts", {
      method: "post",
      body: JSON.stringify({
        post: "New post " + Math.random().toString(),
      }),
    });
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={newPost}>New Post</button>
    </main>
  );
}
