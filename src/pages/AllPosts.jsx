import React, { useEffect, useState } from "react";
import { Container, PostCard } from "../components";
import appwriteService from "../appwrite/conf";

function AllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  return (
    <div className="w-full py-10">
      <Container>

        {posts.length === 0 ? (
          <div className="text-center py-20 text-gray-500 text-lg">
            No posts available yet.
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {posts.map((post) => (
              <div
                key={post.$id}
                className="transform hover:scale-105 transition duration-300"
              >
                <PostCard {...post} />
              </div>
            ))}
          </div>
        )}

      </Container>
    </div>
  );
}

export default AllPosts;