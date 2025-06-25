import prompt from "prompt";
import { mainPrompt } from "./prompts/mainPrompt.js";

const main = () => {
  prompt.get(mainPrompt, (err, choice) => {
    switch (parseInt(choice.select)) {
      case 1:
        console.log("QRCODE");
        break;
      case 2:
        console.log("PASSWORD GENERATOR");
        break;
    }
  });

  prompt.start();
};

main();
