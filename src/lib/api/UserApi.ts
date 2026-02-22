const baseUrl = import.meta.env.VITE_API_PATH;

export const userRegister = async ({
  username,
  password,
  name,
}: {
  username: string;
  password: string;
  name: string;
}) => {
  return await fetch(`${baseUrl}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ username, password, name }),
  });
};
