import React, { useState, useEffect } from "react";
import { Container, PostForm } from "../components";
import appwriteService from "../appwrite/conf";
import { useNavigate, useParams } from "react-router-dom";

function EditPost() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) {
          setPost(post);
        } else {
          navigate("/");
        }
        setLoading(false);
      });
    }
  }, [slug, navigate]);

  if (loading) {
    return (
      <div className="text-center py-20 text-gray-500">
        Loading post...
      </div>
    );
  }

  return post ? (
    <div className="py-10">
      <Container>

        <h1 className="text-3xl font-bold mb-6 text-slate-800">
          Edit Post
        </h1>

        <div className="bg-white shadow-lg rounded-xl p-6">
          <PostForm post={post} />
        </div>

      </Container>
    </div>
  ) : null;
}

export default EditPost;