import * as api from "../api/PostApi";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

const usePosts = (title: string) => {
    return useQuery("posts", () => api.getPosts(title));
};

const useUpdateDonePost = () => {
    const queryClient = useQueryClient();

    return useMutation(api.updateDonePost, {
        onSuccess: () => {
            queryClient.invalidateQueries("posts");
        },
        onError: () => {
            toast.error("更新に失敗しました");
        },
    });
};

const useCreatePost = () => {
    const queryClient = useQueryClient();

    return useMutation(api.createPost, {
        onSuccess: () => {
            queryClient.invalidateQueries("posts");
            toast.success("登録に成功しました");
        },
        onError: (error: AxiosError) => {
            if (error.response?.data.errors) {
                Object.values(error.response?.data.errors).map(
                    (messages: any) => {
                        messages.map((message: string) => {
                            toast.error(message);
                        });
                    }
                );
            } else {
                toast.error("登録に失敗しました");
            }
        },
    });
};

const useUpdatePost = () => {
    const queryClient = useQueryClient();

    return useMutation(api.updatePost, {
        onSuccess: () => {
            queryClient.invalidateQueries("posts");
            toast.success("更新に成功しました");
        },
        onError: (error: AxiosError) => {
            if (error.response?.data.errors) {
                Object.values(error.response?.data.errors).map(
                    (messages: any) => {
                        messages.map((message: string) => {
                            toast.error(message);
                        });
                    }
                );
            } else {
                toast.error("更新に失敗しました");
            }
        },
    });
};

const useDeletePost = () => {
    const queryClient = useQueryClient();

    return useMutation(api.deletePost, {
        onSuccess: () => {
            queryClient.invalidateQueries("posts");
            toast.success("削除に成功しました");
        },
        onError: (error: AxiosError) => {
            toast.error("削除に失敗しました");
        },
    });
};

export { usePosts, useUpdateDonePost, useCreatePost,useDeletePost,useUpdatePost };
