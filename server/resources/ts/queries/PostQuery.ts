import * as api from "../api/PostApi"
import { useQuery, useMutation, useQueryClient } from "react-query"
import { toast } from "react-toastify"

const usePosts = ()=> {
    return useQuery('posts', () => api.getPosts())
}

const useUpdateDonePost = ()=> {
    const queryClient = useQueryClient()

    return useMutation(api.updateDonePost, {
        onSuccess: () => {
            queryClient.invalidateQueries('posts')
        },
        onError: () => {
            toast.error('更新に失敗しました')
        }
    })
}

export {
    usePosts,
    useUpdateDonePost
}