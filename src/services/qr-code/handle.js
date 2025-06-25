import chalk from "chalk";
import qr from "qrcode-terminal";

const handle = (err, result) => {
  if (err) {
    console.error("QRCode Error: " + err);
    return;
  }

  const isSmall = parseInt(result.type) === 2;
  qr.generate(result.link, { small: isSmall }, qrcode => {
    console.log(chalk.green.italic("QR Code gerado com sucesso!\n"));
    console.log(qrcode);
  });
};

export default handle;
