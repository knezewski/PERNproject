import React, { useState } from "react";
import { useMutation } from "react-query";
import { url } from "../api/index";
import axios from "axios";

export default function InputTodo () {
   const [description, setDescription] = useState('')

   // const addMutation = useMutation(axios.post(url), {
   //    onSuccess: () => queryClient.invalidateQueries('todos'),
   // })
   // const mutation = useMutation(newTodo => axios.post('/todos', newTodo))
   const mutate = useMutation(
      description => axios.post(url, { description }),
      {
        onSuccess: () => {
         setDescription('')
        },
      }
    )


  return (
    <>
      <h1 className="text-center mt-5">Pern Todo List</h1>
      <form className="d-flex mt-5"
         onSubmit={event => {
            event.preventDefault();
            mutate(description)
            }
         }
      >
        <input
          className="form-control"
          placeholder="enter something"
          value={description}
          onChange={event => setDescription(event.target.value)}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </>
  );
};
