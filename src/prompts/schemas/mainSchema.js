import chalk from "chalk";

export const mainSchema = [
  {
    name: "select",
    description: chalk.blue.bold(
      "Escolha a ferramenta desejada:\n(1) - QRCODE\n(2) - PASSWORD GENERATOR\nOPÇÃO"
    ),
    pattern: /^[1-2]+$/,
    message: chalk.red.italic("Escolha apenas entre 1 e 2"),
    required: true,
  },
];
