import prompt from "prompt";
import { qrcodePrompt } from "../../prompts/qrcodePrompt.js";
import handle from "./handle.js";

const createQRCode = () => {
  prompt.get(qrcodePrompt, handle);

  prompt.start();
};

export default createQRCode;
