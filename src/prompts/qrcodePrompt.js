import chalk from "chalk";

export const qrcodePrompt = [
  {
    name: "link",
    description: chalk.blue.bold("Digite o link para gerar o QR Code: "),
  },
  {
    name: "type",
    description: chalk.blue.bold(
      "Escolha entre o tipo de QR Code (1 - NORMAL ou (2 - TERMINAL"
    ),
    pattern: /^[1-2]+$/,
    message: chalk.red.italic("Escolha apenas entre 1 e 2"),
    required: true,
  },
];
