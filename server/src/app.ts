import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/index";

dotenv.config();

const app = express();

// allow access from our client at specified port
var corsOptions = {
  origin: process.env.CLIENT_HOST,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));
app.use(express.json({ type: ['application/json'] }));

app.set("port", process.env.PORT || 3000);
app.use("/api", router);

export default app;
