import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api/";
const client = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export function getArticles() {
  return client.get("/articles/short?limit=340");
}
export function sendMail(params) {
  return client.post("/users/mail", JSON.stringify(params));
}
export function postArticle(params) {
  return client.post("/articles/include", JSON.stringify(params));
}
export function deleteArticle(id) {
  return client.delete(`/articles/delete/${id}`);
}