import axios from "axios";
import { Post } from "../types/Post";

const getPosts = async () => {
    const { data } = await axios.get<Post[]>("api/posts");
    return data;
};

const updateDonePost = async ({ id, is_done }: Post) => {
    const { data } = await axios.patch<Post[]>(`api/posts/update_done/${id}`, {
        is_done: !is_done,
    });
    return data;
};

export { getPosts, updateDonePost };
