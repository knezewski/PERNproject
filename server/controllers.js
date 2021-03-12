import express from "express";
import pool from "./db.js";
const router = express.Router();

export const createPost = async (req, res) => {
   try {
      const { dscription } = req.body;
      const newTodo = await pool.query(
         "INSERT INTO todo (dscription) VALUES($1) RETURNING*", [dscription]);
      res.json(newTodo.rows[0]);
   } catch (error) {
      console.log(error.message);
   }
};

export const getPosts = async (req, res) => {
   try {
      const allTodos = await pool.query("SELECT * FROM todo");
      res.json(allTodos.rows);
   } catch (error) {
      console.log(error.message);
   }
};

export const getPost = async (req, res) => {
   try {
      const { id } = req.params;
      const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id]);
      res.json(todo.rows[0]);
   } catch (error) {
      console.log(error.message)
   }
};

export const updatePost = async (req, res) => {
   try {
      const { id } = req.params;
      const { dscription } = req.body;
      const updateTodo = await pool.query("UPDATE todo SET dscription  = $1 WHERE todo_id = $2", [dscription, id]);
      res.json("Todo was updated.");
   } catch (error) {
      console.log(error.message)
   }
};

export const deletePost =  async (req, res) => {
   try {
      const { id } = req.params;
      const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [id]);
      res.json("Todo was deleted.");
   } catch (error) {
      console.log(error.message)
   }
};

export default router;
