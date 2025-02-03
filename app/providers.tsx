"use client";
import { ThemeProvider } from "./theme-provider";
import { Toaster } from "react-hot-toast";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Toaster position="bottom-right" />
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </>
  );
}
export default Providers;
