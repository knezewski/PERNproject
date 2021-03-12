import React from "react";
import "./App.css";
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';

import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";

const queryClient = new QueryClient()


function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className="container">
          <InputTodo />
          <ListTodos />
        </div>
      </QueryClientProvider>
    </>
  );
}

export default App;