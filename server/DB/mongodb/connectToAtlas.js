const mongoose = require("mongoose");
const chalk = require("chalk");
const config = require("config");

const userName = config.get("efratdonat");
const password = config.get("Ed3247668");

mongoose
  .connect(
    `mongodb+srv://efratdonat:Ed3247668@efrat.kxf2wzw.mongodb.net/`
  )
  .then(() => console.log(chalk.magentaBright("connected to MongoDb cloud!")))
  .catch((error) =>
    console.log(chalk.redBright.bold(`could not connect to mongoDb: ${error}`))
  );
