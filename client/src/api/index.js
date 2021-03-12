import axios from 'axios';

export const url = "http://localhost:5000/todos";

export const fetchTodos = async () => {
   const { data } = await axios.get(url);
      return data;
}
