import React from "react";
import { usePosts } from "../../../queries/PostQuery"
import PostItem from "./PostItem"

const PostList: React.VFC = () => {
    const { data:posts, status } = usePosts();

    if(status === 'loading'){
        return <div className="d-flex justify-content-center">
                 <div className="spinner-border" role="status"></div>
                </div>
    } else if(status === "error") {
        return <div className="align-center">データの読み込みに失敗しました。</div>
    } else if(!posts || posts.length <= 0 ) {
        return <div className="align-center">登録されたTODOはありません。</div>
    }

    return (
        <>
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
