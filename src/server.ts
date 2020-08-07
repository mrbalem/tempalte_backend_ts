/** @format */

// Register module/require aliases
import "module-alias/register";
//[*] import variables de entorno
import * as dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
// Getting base GraphQL Schema

import cookieParser from "cookie-parser";
import cors from "cors";
import helmet from "helmet";

import logger from "@util/logger";

//[*] load port from env
dotenv.config();

const { PORT } = process.env;

// Instantiate an Express Application

const app = express();

// Configure Express App Instance
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// Configure custom logger middleware
app.use(logger.dev, logger.combined);

app.use(morgan("dev"));
app.use(cookieParser());
app.use(cors());
app.use(helmet());

// This middleware adds the json header to every response
app.use("*", (_req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  next();
});

// Assign Routes
import router from "./routes/router";
app.use("/api/rest", router);

// Handle not valid route
app.use("*", (_req, res) => {
  res.status(404).json({ status: false, message: "Endpoint Not Found" });
});

// Open Server on configurated Port
const server = app;

server.listen(PORT, () => console.info("Server listening on port ", PORT));

//[*] ejemplo socket io
// let io = require("socket.io")(server);

// io.on("connection", (socket) => {
//   console.log("new client connectes");
//   socket.emit("FromAPI", { info: "wordkhjhjhhgfg" });
//   socket.on("disconnect", function () {
//     console.log("Cliente desconectado");
//   });
// });
