import React from "react";
import PostInput from "./components/PostInput";
import PostList from "./components/PostList";

const PostPage: React.VFC = () => {

    return (
        <>
            <PostInput />
            <PostList />
        </>
    );
};

export default PostPage;
