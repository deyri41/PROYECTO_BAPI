import bcrypt from "bcrypt";


// ─── Encriptar Password ──────────────────────────────────────────────────────


export const encryptPassword = async (password) => {
  return await bcrypt.hash(password, 8);
};

// ─── Comparar Password ───────────────────────────────────────────────────────

export const isCorrectPass = async (password, passwordHashado) => {
  return await bcrypt.compare(password, passwordHashado);
};


