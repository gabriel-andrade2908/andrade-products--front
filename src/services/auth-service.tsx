import axios from "axios";

const baseUrl = "https://localhost:7035/v1/auth/";

export class AuthService {
validateLogin(userName: string, password: string) {
  return axios.get(baseUrl + "login/", {
      params: {userName: userName, password: password }
  });
  }
}