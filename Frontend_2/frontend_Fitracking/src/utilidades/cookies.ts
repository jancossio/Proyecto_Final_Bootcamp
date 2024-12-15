import Cookies from "js-cookie";

export const getUserFromCookie = () => {
  const userCookie = Cookies.get("user");
  if (!userCookie) return null;

  try {
    return JSON.parse(userCookie);
  } catch (error) {
    console.error("Failed to parse user cookie:", error);
    return null;
  }
};

interface User {
  id: number;
  name: string;
}

export const setUserCookie = (user: User) => {
  Cookies.set("user", JSON.stringify(user), { expires: 7 });
};

export const removeUserCookie = () => {
  Cookies.remove("user");
};