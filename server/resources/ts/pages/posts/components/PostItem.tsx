import React from "react";
import { Post } from "../../../types/Post";
import { useUpdateDonePost } from "../../../queries/PostQuery";

type Props = {
    post: Post;
};

const PostItem: React.VFC<Props> = ({ post }) => {
    const updateDonePost = useUpdateDonePost();
    return (
        <li className={post.is_done ? "done" : ""}>
            <label className="checkbox-label">
                <input
                    type="checkbox"
                    className="checkbox-input"
                    onClick={() => updateDonePost.mutate(post)}
                />
            </label>
            <div>
                <span>{post.title}</span>
            </div>
            <button className="btn is-delete">削除</button>
        </li>
    );
};

export default PostItem;
