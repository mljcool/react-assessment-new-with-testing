import httpClient from './httpClient';

const getAllUsers = async (): Promise<any> => {
    return await httpClient.get(`users`);
};

const getAllPostsByUserId = async (id: string | number): Promise<any> => {
    return await httpClient.get(`posts?userId=${id || 1}`);
};

const getOnePost = async (id: string | number) => {
    return await httpClient.get(`posts/${id}`);
};

const getCommentsByPostId = async (id: string): Promise<any> => {
    return await httpClient.get(`comments?postId=${id}`);
};

const deletePost = async (id: string): Promise<any> => {
    return await httpClient.delete(`posts/${id}`);
};

const addPosts = async (data: string): Promise<any> => {
    return await httpClient.post('posts', JSON.stringify(data));
};
export {
    getAllUsers,
    getAllPostsByUserId,
    getOnePost,
    getCommentsByPostId,
    deletePost,
    addPosts,
};
