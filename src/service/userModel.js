
export const registerModel = `INSERT INTO users (name, email, password, updated_at)
VALUES ( $1 , $2 , $3, now()) returning * ; `;  

export const loginModel = `SELECT * FROM users WHERE email = $1 AND password = $2;`;

export const getCurrentUserModel = `SELECT * FROM users WHERE id = $1;`;

export const getUserByEmailModel = `SELECT * FROM users WHERE email = $1;`;