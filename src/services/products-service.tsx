import axios from "axios";

const baseUrl = "https://localhost:7035/v1/product/";

export class ProductService {
getAllProducts() {
  return axios.get(baseUrl, {
    headers: {
      'Authorization': sessionStorage.getItem('Bearer')
  }
  });
  }
}