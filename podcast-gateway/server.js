const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const podcastRoutes = require("./app/routes/podcastRoute");

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// max 100 req per 15 min
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 min
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res) => {
    res.status(429).json({
      error: "Too many requests, please try again later.",
    });
  },
});

app.use("/api/podcasts", limiter);

app.use("/api/podcasts", podcastRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
