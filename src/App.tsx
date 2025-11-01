import { useState } from "react";

export default function App() {
  const posts = [
    { name: " example 1" },
    { name: " example 2" },
    { name: " example 31" },
    { name: " example 4" },
    { name: " example 5" },
  ];
  const [search, setSearch] = useState("");
  const filteredPosts = posts.filter((post) =>
    post.name.toLowerCase().includes(search.toLowerCase())
  );
  const highlightText = (text:string) => {
    const regex = new RegExp(`(${search})`, "gi");
    return text.replace(regex, (match:string) => `<mark>${match}</mark>`);
  };

  return (
    <div>
      <h1>Search</h1>
      <input
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      {filteredPosts.map((post, i) => (
        <p
          key={i}
          dangerouslySetInnerHTML={{ __html: highlightText(post.name) }}
        />
      ))}
    </div>
  );
}
