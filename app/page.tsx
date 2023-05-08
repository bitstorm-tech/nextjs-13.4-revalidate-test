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

  function clearPosts() {
    fetch("http://localhost:3000/api/posts", { method: "delete" });
  }

  return (
    <main className="flex h-screen flex-col items-center">
      <button onClick={newPost}>{">> Add Post <<"}</button>
      <button onClick={clearPosts}>{">> Clear Posts <<"}</button>
    </main>
  );
}
