import figlet from "figlet";
import { program } from "commander";

console.log(figlet.textSync("MongoDB CLI"));

program.version("1.0.0").description("An CLI tool to seed data into MongoDB");

program
  .command("books")
  .description("Shows collection of all books in MongoDB")
  .action(() => console.log("Action for books"));

program.parse();
