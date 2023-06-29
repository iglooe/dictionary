"use client";
import { ThemeProvider } from "next-themes";
import { Nav } from "./components/nav";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <Nav />
      {children}
    </ThemeProvider>
  );
}
