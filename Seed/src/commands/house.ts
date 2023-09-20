import chalk from "chalk";
import { House } from "../models/house";

const log = console.log;
export const housesCmd = async (onlyShowCount: boolean) => {
  log(chalk.yellowBright("Current houses in stock:"));
  const houses = await House.find({});
  log(chalk.green(`Found ${houses.length} houses in stock`));
  if (!onlyShowCount) {
    log(chalk.blue(houses));
  }
};
