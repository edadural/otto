import axios from 'axios';

const appAxios = axios.create({
  baseURL: 'http://localhost:3000/api', 
  headers: {
    // "Content-type":'application/json;', // bu post ederken veriyi nasıl göndereceğinle alakalı bişeydi unuttum aklında bulunsun lazım olursa gpt ye sorar kullanırsın
    'token': localStorage.getItem("token"),
  },
});

export default appAxios;
