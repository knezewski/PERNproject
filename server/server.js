import express from "express";
const app = express();
import cors from "cors";

import routes from './routes.js';

//middleware
app.use(cors());
app.use(express.json()); //req.body

//routes
app.use("/", routes);

app.listen(5000, () => {
   console.log("Server is running on port 5000")
});