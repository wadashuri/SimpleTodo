export type Post = {
    id: number;
    user_id: number;
    title: string;
    content: string;
    comment: string;
    is_done: boolean;
    created_at: Date;
    updated_at: Date;
};