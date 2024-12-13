import express from "express";
import { paths } from "../config/paths.js";

export const staticMiddleware = express.static(paths.client.dist);
