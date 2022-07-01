// Main page
const express = require("express");
const app = express();

// middle the working time
const workingHours = require("./middlewares/working_hours");
app.use(workingHours);

// Routes
const HomeRouter = require("./Routes/home");
app.use("/", HomeRouter);

const ContactRouter = require("./Routes/Contact us");
app.use("/contact", ContactRouter);

const ServicesRouter = require("./Routes/Our Services");
app.use("/services", ServicesRouter);

app.use(express.static(__dirname + "/views"));

// server port
app.listen(7000, () => {
  console.log("server is runnig port 7000");
});
