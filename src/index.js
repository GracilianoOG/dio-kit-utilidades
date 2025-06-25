import prompt from "prompt";
import { mainSchema } from "./prompts/schemas/mainSchema.js";
import createQRCode from "./services/qr-code/create.js";
import createPassword from "./services/password/create.js";

const main = () => {
  prompt.get(mainSchema, (err, choice) => {
    if (err) {
      console.error("Erro ao executar a aplicação: " + err);
    }

    switch (parseInt(choice.select)) {
      case 1:
        createQRCode();
        break;
      case 2:
        createPassword();
        break;
    }
  });

  prompt.start();
};

main();
