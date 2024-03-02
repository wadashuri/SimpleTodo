import axios from "axios";
import { Post } from "../types/Post";

const getPosts = async (title: string) => {
    const { data } = await axios.get<Post[]>(`api/posts`, {
        params: { title: title }, // タイトルをクエリパラメータとして渡す
    });
    return data;
};

const updateDonePost = async ({ id, is_done }: Post) => {
    const { data } = await axios.patch<Post>(`api/posts/update_done/${id}`, {
        is_done: !is_done,
    });
    return data;
};

const createPost = async (title: string) => {
    const { data } = await axios.post<Post>(`api/posts`, {
        title: title,
    });
    return data;
};

const updatePost = async ({ id, post }: { id: number, post: Post }) => {
    const { data } = await axios.patch<Post>(
        `api/posts/${id}`, post
        );
    return data;
};

const deletePost = async ( id: number) => {
    const { data } = await axios.delete<Post>(
        `api/posts/${id}`
        );
    return data;
};

export { getPosts, updateDonePost,createPost,updatePost,deletePost };
