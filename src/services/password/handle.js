const getPermittedCharacters = () => {
  const characters = [];

  if (process.env.UPPERCASE_LETTERS === "true") {
    characters.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  }

  if (process.env.LOWERCASE_LETTERS === "true") {
    characters.push(..."abcdefghijklmnopqrstuvwxyz");
  }

  if (process.env.NUMBERS === "true") {
    characters.push(..."0123456789");
  }

  if (process.env.SPECIAL_CHARACTERS === "true") {
    characters.push(..."!@#$%^&*()-_");
  }

  return characters;
};

const handle = () => {
  const characters = getPermittedCharacters();
  const password = [];

  const passwordLength = process.env.PASSWORD_LENGTH;

  for (let i = 0; i < passwordLength; i++) {
    const charIndex = Math.floor(Math.random() * characters.length);
    password.push(characters[charIndex]);
  }

  return password.join("");
};

export default handle;
