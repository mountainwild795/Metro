import chalk from "chalk";
import { House } from "../models/house";
import { housesData } from "../util/data.js";

const log = console.log;
export const seedCmd = async () => {
  log(chalk.yellowBright("Seeding random houses..."));
  const houses = housesData;
  log(chalk.blue(JSON.stringify(houses, null, 2)));
  House.insertMany(houses);
  log(chalk.green(`Successfully uploaded ${houses.length} houses!`));
};
