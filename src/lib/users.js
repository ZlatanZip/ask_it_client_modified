import Axios from "axios";
const URL = process.env.REACT_APP_API_URL;
const PORT = process.env.REACT_APP_API_PORT;

const dataFromStorage = localStorage.getItem("userData");
let userId;
if (dataFromStorage) {
  const parsedData = JSON.parse(dataFromStorage);
  userId = parsedData.userId;
}

export async function handleRegistration(data) {
  const registerUrl = `${URL}${PORT}/api/users`;
  const register = await Axios.post(registerUrl, {data});
  return register;
}

export async function login(email, password) {
  const loginUrl = `${URL}${PORT}/auth/signin`;
  const loginData = await Axios.post(loginUrl, {email, password});
  return loginData;
}

export async function getUsersWithMostAnswers() {
  const getUsersWithMostAnswersUrl = `${URL}${PORT}/api/users/answers`;
  const getUsersWithMostAnswersData = await Axios.get(
    getUsersWithMostAnswersUrl
  );
  return getUsersWithMostAnswersData;
}

export async function getUserData() {
  const userDataUrl = `${URL}${PORT}/api/users/${userId}`;
  const userDataData = await Axios.get(userDataUrl);
  return userDataData;
}
