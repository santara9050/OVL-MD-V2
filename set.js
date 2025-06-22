const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  PREFIXE: process.env.PREFIXE || "🤴",
  NOM_OWNER: process.env.NOM_OWNER || "𝑃𝐸𝑅𝐹𝐸𝐶𝑇_𝑂𝑁𝐸_𝐾𝐴𝑅𝐴",
  NUMERO_OWNER: process.env.NUMERO_OWNER || "22351927475",
  MODE: process.env.MODE || "public",
  SESSION_ID: process.env.SESSION_ID || "Ovl-MD_YR0xjyUe_SESSION-ID",
  LEVEL_UP: process.env.LEVEL_UP || "non",
  STICKER_PACK_NAME: process.env.STICKER_PACK_NAME || "Wa-Parfait",
  STICKER_AUTHOR_NAME: process.env.STICKER_AUTHOR_NAME || "𝑃𝐸𝑅𝐹𝐸𝐶𝑇_𝑂𝑁𝐸_𝐾𝐴𝑅𝐴",
  DATABASE: process.env.DATABASE,
  RENDER_API_KEY: process.env.RENDER_API_KEY,
  THEME: "1"
};
