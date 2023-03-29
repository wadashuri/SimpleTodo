import React, { useState } from "react";
import { useCreatePost } from "../../../queries/PostQuery"
import { Form, Button } from "react-bootstrap";

const PostInput: React.VFC = () => {
    const [title, setTitle] = useState("");
    const createPost = useCreatePost()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        createPost.mutate(title)
        setTitle('')
    };
    return (
        <Form className="input-form" onSubmit={handleSubmit}>
          <div className="d-flex justify-content-center align-items-center gap-2">
            <Form.Group controlId="formTitle" className="mr-2">
              <Form.Control
                as="textarea"
                placeholder="TODOを入力してください。"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={{ width: "400px", resize: "none" }}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              追加
            </Button>
          </div>
        </Form>
      );
};

export default PostInput;
