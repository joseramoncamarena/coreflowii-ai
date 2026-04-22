export type DemoUser = {
  name: string;
  email: string;
  password: string;
  accountType: "Personal" | "Business";
  createdAt: string;
  isAdmin?: boolean;
};

const USERS_KEY = "coreflow-demo-users";
const CURRENT_USER_KEY = "coreflow-current-user";

function readUsers(): DemoUser[] {
  if (typeof window === "undefined") return [];
  const raw = window.localStorage.getItem(USERS_KEY);
  if (!raw) return [];

  try {
    return JSON.parse(raw) as DemoUser[];
  } catch {
    return [];
  }
}

function saveUsers(users: DemoUser[]) {
  window.localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function registerDemoUser(user: DemoUser) {
  const users = readUsers();
  const exists = users.some(
    (item) => item.email.toLowerCase() === user.email.toLowerCase()
  );

  if (exists) {
    throw new Error("Ese correo ya está registrado en la demo local.");
  }

  const nextUsers = [...users, user];
  saveUsers(nextUsers);
  window.localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
  return user;
}

export function loginDemoUser(email: string, password: string) {
  const users = readUsers();
  const match = users.find(
    (item) =>
      item.email.toLowerCase() === email.toLowerCase() &&
      item.password === password
  );

  if (!match) {
    throw new Error("Correo o contraseña incorrectos en la demo local.");
  }

  window.localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(match));
  return match;
}

export function getCurrentDemoUser(): DemoUser | null {
  if (typeof window === "undefined") return null;
  const raw = window.localStorage.getItem(CURRENT_USER_KEY);
  if (!raw) return null;

  try {
    const user = JSON.parse(raw) as DemoUser;

    return {
      ...user,
      isAdmin: user.email.toLowerCase() === "joseracamarena@icloud.com"
    };
  } catch {
    return null;
  }
}

export function logoutDemoUser() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(CURRENT_USER_KEY);
}