import axios from "axios"

export default class fetchingApi{
  static async getPizzas(url) {
    const response = await axios.get(url);
    return response.data;
  }
  static getHelloTest() {
    console.log("hello")
  }
}