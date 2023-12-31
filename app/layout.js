"use client";
import { createContext, useState } from "react";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const contexty = createContext();

export default function RootLayout({ children }) {
  const [tasks, setTasks] = useState([]);
  return (
    <html lang="en">
      <body className={inter.className}>
        <contexty.Provider value={{ tasks, setTasks }}>
          {children}
        </contexty.Provider>
      </body>
    </html>
  );
}
