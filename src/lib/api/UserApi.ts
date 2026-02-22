const baseUrl = import.meta.env.VITE_API_PATH;

interface IUser {
  username: string;
  password: string;
  name: string;
}

// user register ajax
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

// user login ajax
export const userLogin = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  return await fetch(`${baseUrl}/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "applicaiton/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });
};
