import axios from "axios";

const BASE_URL = "https://simpleblogapi.herokuapp.com";

const BASE_CONNECTION = axios.create({
  baseURL: BASE_URL,
});

const api = {
  getPosts: () => BASE_CONNECTION.get("/posts"),
  getPostById: (id) => BASE_CONNECTION.get(`/posts/${id}?_embed=comments`),
  createComent: (data, id) =>
    BASE_CONNECTION.post(`/comments`, { postId: id, body: data, id: id }),
};

export default api;
