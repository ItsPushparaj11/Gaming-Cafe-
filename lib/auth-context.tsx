"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export interface User {
  id: string;
  email: string;
  name: string;
  role: "user" | "admin";
  createdAt: Date;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  signup: (name: string, email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Demo admin credentials
const ADMIN_CREDENTIALS = {
  email: "admin@pixelarena.com",
  password: "Admin@123",
  name: "Admin User",
};

// Simulated user database (in production, this would be a real database)
const DEMO_USERS: Map<string, { user: User; password: string }> = new Map([
  [
    ADMIN_CREDENTIALS.email,
    {
      user: {
        id: "admin-001",
        email: ADMIN_CREDENTIALS.email,
        name: ADMIN_CREDENTIALS.name,
        role: "admin",
        createdAt: new Date("2024-01-01"),
      },
      password: ADMIN_CREDENTIALS.password,
    },
  ],
]);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for existing session
    const storedUser = localStorage.getItem("pixelarena_user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch {
        localStorage.removeItem("pixelarena_user");
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    setIsLoading(true);
    
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    const storedUser = DEMO_USERS.get(email.toLowerCase());
    
    if (storedUser && storedUser.password === password) {
      setUser(storedUser.user);
      localStorage.setItem("pixelarena_user", JSON.stringify(storedUser.user));
      setIsLoading(false);
      return { success: true };
    }

    setIsLoading(false);
    return { success: false, error: "Invalid email or password" };
  };

  const signup = async (name: string, email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    setIsLoading(true);
    
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    const normalizedEmail = email.toLowerCase();
    
    if (DEMO_USERS.has(normalizedEmail)) {
      setIsLoading(false);
      return { success: false, error: "An account with this email already exists" };
    }

    // Create new user
    const newUser: User = {
      id: `user-${Date.now()}`,
      email: normalizedEmail,
      name,
      role: "user",
      createdAt: new Date(),
    };

    DEMO_USERS.set(normalizedEmail, { user: newUser, password });
    setUser(newUser);
    localStorage.setItem("pixelarena_user", JSON.stringify(newUser));
    setIsLoading(false);
    return { success: true };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("pixelarena_user");
  };

  const isAdmin = user?.role === "admin";

  return (
    <AuthContext.Provider value={{ user, isLoading, login, signup, logout, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
