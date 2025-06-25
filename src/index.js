import prompt from "prompt";
import { mainPrompt } from "./prompts/mainPrompt.js";
import createQRCode from "./services/qr-code/create.js";

const main = () => {
  prompt.get(mainPrompt, (err, choice) => {
    switch (parseInt(choice.select)) {
      case 1:
        createQRCode();
        break;
      case 2:
        console.log("PASSWORD GENERATOR");
        break;
    }
  });

  prompt.start();
};

main();
