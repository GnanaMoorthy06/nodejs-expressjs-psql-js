export const getAllUsersModel = `select * from contact WHERE created_by = $1;`;

export const getUsersbyIdModel = `select * from contact  WHERE id = $1;`;

export const createUsersModel = `INSERT INTO contact (name, email, phone, updated_at , created_by)
VALUES ( $1 , $2 , $3, now(), $4) returning * ; `;

export const updateUsersModel = `UPDATE contact
SET name = $1 , email = $2 , updated_at = now() WHERE id = $3 returning * ; `;

export const deleteUserByIdModel = `DELETE FROM contact WHERE id = $1;`;