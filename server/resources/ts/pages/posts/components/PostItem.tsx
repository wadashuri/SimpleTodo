import React, { useState } from "react";
import { Post } from "../../../types/Post";
import {
    useUpdateDonePost,
    useUpdatePost,
    useDeletePost,
} from "../../../queries/PostQuery";
import { toast } from "react-toastify";

type Props = {
    post: Post;
};

const PostItem: React.VFC<Props> = ({ post }) => {
    const updateDonePost = useUpdateDonePost();
    const updatePost = useUpdatePost();
    const deletePost = useDeletePost();

    const [editTitle, setEditTitle] = useState<string | undefined>(undefined);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditTitle(e.target.value);
    };

    const handleToggleEdit = () => {
        setEditTitle(post.title);
    };

    const handleUpdate = (e: React.FormEvent<HTMLFormElement>|React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (!editTitle) {
            toast.error("タイトルを入力してください");
            return;
        }
        const newPost = { ...post };
        newPost.title = editTitle;

        updatePost.mutate({
            id: post.id,
            post: newPost,
        });
    };

    const handleOnKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (["Escape", "Tab"].includes(e.key)) {
            setEditTitle(undefined);
        }
    };
    const itemInput = () => {
        return (
            <>
                <form onSubmit={handleUpdate}>
                    <input
                        type="text"
                        className="input"
                        defaultValue={editTitle}
                        onChange={handleInputChange}
                        onKeyDown={handleOnKey}
                    />
                </form>
                <button className="btn" onClick={handleUpdate}>
                    更新
                </button>
            </>
        );
    };

    const itemText = () => {
        return (
            <>
                <div onClick={handleToggleEdit}>
                    <span>{post.title}</span>
                </div>
                <button className="btn is-delete" onClick={() => deletePost.mutate(post.id)}>削除</button>
            </>
        );
    };

    return (
        <li className={post.is_done ? "done" : ""}>
            <label className="checkbox-label">
                <input
                    type="checkbox"
                    className="checkbox-input"
                    onClick={() => updateDonePost.mutate(post)}
                />
            </label>
            {editTitle === undefined ? itemText() : itemInput()}
        </li>
    );
};

export default PostItem;
