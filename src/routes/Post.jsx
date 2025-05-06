import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import blogFetch from "../axios/config";

const Post = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        const loadPost = async () => {
        try {
            const response = await blogFetch.get(`/posts/${id}`);
            setPost(response.data);
        } catch (error) {
            console.error("Erro ao carregar o post", error);
        }
        };

        loadPost();
    }, [id]);

    if (!post) return <p>Carregando post...</p>;

    return (
        <div className="post-detalhado">
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        </div>
    );
};

export default Post;
