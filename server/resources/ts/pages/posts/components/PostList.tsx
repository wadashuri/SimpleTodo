import React, { useState } from "react";
import { usePosts } from "../../../queries/PostQuery"
import PostItem from "./PostItem"

const PostList: React.VFC = () => {
    const [title, setTitle] = useState("");
    const { data:posts, status } = usePosts(title);

    if(status === 'loading'){
        return <div className="loader"/>
    } else if(status === "error") {
        return <div className="align-center">データの読み込みに失敗しました。</div>
    } else if(!posts || posts.length <= 0 ) {
        return <div className="align-center">登録されたTODOはありません。</div>
    }

    return (
        <>
            <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="キーワードを入力"
            className="mb-3"
            />
            <div className="inner">
                <ul className="task-list">
                    {posts.map((post) => (
                        <PostItem key={post.id} post={post} />
                    ))}
                </ul>
            </div>
        </>
    );
};

export default PostList;
