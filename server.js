import express from "express";
import likeRouter from "./src/router/like.router.js";
import rateRouter from "./src/router/order.router.js";
import orderRouter from "./src/router/rate.router.js";

const app = express();
app.use(express.json());

app.use("/like", likeRouter);
app.use("/rate", rateRouter);
app.use("/order", orderRouter);

app.listen(3069, () => {
  console.log("🚀 Server running at http://localhost:3069");
});
