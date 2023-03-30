import React, { useState } from "react";
import { Post } from "../../../types/Post";
import {
    useUpdateDonePost,
    useUpdatePost,
    useDeletePost,
} from "../../../queries/PostQuery";
import { toast } from "react-toastify";
import { Form, Button, ListGroup } from "react-bootstrap";

type Props = {
    post: Post;
};

const PostItem: React.VFC<Props> = ({ post }) => {
    const updateDonePost = useUpdateDonePost();
    const updatePost = useUpdatePost();
    const deletePost = useDeletePost();

    const [editTitle, setEditTitle] = useState<string | undefined>(undefined);

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setEditTitle(e.target.value);
    };

    const handleToggleEdit = () => {
        setEditTitle(post.title);
    };

    const handleUpdate = (
        e:
            | React.FormEvent<HTMLFormElement>
            | React.MouseEvent<HTMLButtonElement>
    ) => {
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

    const handleOnKey = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (["Escape", "Tab"].includes(e.key)) {
            setEditTitle(undefined);
        }
    };

    const itemInput = () => {
        return (
            <Form
                onSubmit={handleUpdate}
                className="d-flex align-items-center"
            >
                <Form.Control
                    as="textarea"
                    defaultValue={editTitle}
                    onChange={handleInputChange}
                    onKeyDown={handleOnKey}
                />
                <Button type="submit" variant="primary">
                    更新
                </Button>
            </Form>
        );
    };

    const itemText = () => {
        return (
            <>
                <div onClick={handleToggleEdit}>
                    <span>{post.title}</span>
                </div>
                <Button
                    className="btn is-delete"
                    onClick={() => deletePost.mutate(post.id)}
                    variant="danger"
                >
                    削除
                </Button>
            </>
        );
    };

    return (
        <li className={post.is_done ? "done" : ""}>
            <label className="checkbox-label">
          <Form.Check
            type={'checkbox'}
            className="m-2"
            onClick={() => updateDonePost.mutate(post)}
            checked={post.is_done}
          />
          </label>
          {editTitle === undefined ? itemText() : itemInput()}
        </li>
      );
};

export default PostItem;
