import React from "react";
import PostInput from "./components/PostInput";
import PostList from "./components/PostList";
import { Container } from "react-bootstrap";

const PostPage: React.VFC = () => {
    return (
        <Container>
            <PostInput />
            <PostList />
        </Container>
    );
};

export default PostPage;
