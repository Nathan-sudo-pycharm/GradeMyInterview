import { Inter } from "next/font/google";
import { cn } from "@/utils/cn";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const fontHeading = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

const fontBody = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});
export const metadata = {
  title: "IntelliMock",
  description: "will put something here soon",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={cn("antialiased", fontHeading.variable, fontBody.variable)}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
