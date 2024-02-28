const { ServerConfig, Logger } = require("./config/index");
const express = require("express");
const apiRoutes = require("./routes/index");
const app = express();
const Cron = require("./utils/common/cron-jobs");
const mailsender = require("./config/email-config");
app.use(express.json());
// to help express read json body
app.use(express.urlencoded({ extended: true }));
// to read url encodeed stuff
app.use("/api", apiRoutes);

app.listen(ServerConfig.PORT, async () => {
  console.log(`Server Listening on port ${ServerConfig.PORT}`);
  Logger.info("Successfully started the server");

  // try {
  //   console.log("hi");
  //   const response = await mailsender.sendMail({
  //     from: ServerConfig.GMAIL_EMAIL,
  //     to: "ishanmoorjmalani009@gmail.com",
  //     subject: "Service Test Working",
  //     text: "Airline Service Testing",
  //   });
  //   console.log(response);
  // } catch (error) {
  //   console.log(error);
  // }
});
