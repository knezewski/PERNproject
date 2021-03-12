import React from 'react'
import { useQuery } from 'react-query';
import { fetchTodos } from '../api';

export default function ListTodos() {
   const { isLoading, error, data } = useQuery('todos', fetchTodos);

   if (isLoading) {
     return <span>Loading...</span>
   }

   if (error) {
     return <span>Error: {error.message}</span>
   }

   return (
      <>
        <table class="table mt-5 text-center">
          <thead>
            <tr>
              <th>Description</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map(todo => (
              <tr key={todo.todo_id}>
                <td>{todo.dscription}</td>
                <td>
                  {/* <EditTodo todo={todo} /> */}
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                  //   onClick={() => deleteTodo(todo.todo_id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
 }