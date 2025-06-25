import prompt from "prompt";
import { qrcodeSchema } from "../../prompts/schemas/qrcodeSchema.js";
import handle from "./handle.js";

const createQRCode = () => {
  prompt.get(qrcodeSchema, handle);

  prompt.start();
};

export default createQRCode;
