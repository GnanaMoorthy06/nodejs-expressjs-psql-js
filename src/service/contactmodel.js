export const getAllUsersModel = `select * from users ;`;

export const getUsersbyIdModel = `select * from users  WHERE id = $1;`;

export const createUsersModel = `INSERT INTO users (name, email, password)
VALUES ( $1 , $2 , $3) returning * ; `;

export const updateUsersModel = `UPDATE users
SET name = $1 , email = $2 WHERE id = $3 returning * ; `;

export const deleteUserByIdModel = `DELETE FROM users WHERE id = $1;
`;