import React, { useState } from "react";
import { useCreatePost } from "../../../queries/PostQuery"

const PostInput: React.VFC = () => {
    const [title, setTitle] = useState("");
    const createPost = useCreatePost()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        createPost.mutate(title)
        setTitle('')
    };
    return (
        <form className="input-form" onSubmit={handleSubmit}>
            <div className="inner">
                <input
                    type="text"
                    className="input"
                    placeholder="TODOを入力してください。"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <button className="btn is-primary">追加</button>
            </div>
        </form>
    );
};

export default PostInput;
