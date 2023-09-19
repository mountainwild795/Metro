#!/usr/bin/env node

import figlet from "figlet";
import { program } from "commander";
import { housesCmd } from "./commands/house";
import { initDB } from "./db";
import { seedCmd } from "./commands/seed";

console.log(figlet.textSync("MongoDB CLI"));

initDB();

program.version("1.0.0").description("An CLI tool to seed data into MongoDB");

program
  .command("houses")
  .description("Shows collection of all houses in MongoDB")
  .option("-c, --count", "Only get the count. If not specified it will show all data.")
  .action((options) => housesCmd(options.count));

program.command("seed").description("Uploads random houses onto MongoDB").action(seedCmd);

program.parse(process.argv);
