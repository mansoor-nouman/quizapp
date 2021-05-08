import axios from "axios";

export function addQuestion(id, data) {
  return axios.put(`https://605c14386d85de00170d93e0.mockapi.io/quiz/${id}`, data);
}

export function getQuiz() {
  return axios.get(`https://605c14386d85de00170d93e0.mockapi.io/quiz`);
}

export function getCurrentQuiz(id) {
  return axios.get(`https://605c14386d85de00170d93e0.mockapi.io/quiz/${id}`);
}

export function createQuizData(data) {
  return axios.post(`https://605c14386d85de00170d93e0.mockapi.io/quiz`, data);
}
