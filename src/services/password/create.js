import chalk from "chalk";
import handle from "./handle.js";

const createPassword = () => {
  console.log(chalk.green.italic("\nPassword generated!\n"));
  const password = handle();
  console.log(chalk.white.bgMagenta(password));
};

export default createPassword;
