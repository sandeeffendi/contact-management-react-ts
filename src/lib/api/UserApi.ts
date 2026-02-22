const baseUrl = import.meta.env.VITE_API_PATH;

interface IUser {
  username: string;
  password: string;
  name: string;
}

export const userRegister = async ({ username, password, name }: IUser) => {
  return await fetch(`${baseUrl}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ username, password, name }),
  });
};
