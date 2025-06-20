import { Poppins } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Add weights you need
  variable: "--font-poppins",
});


export const metadata = {
  title: "Foodie",
  description: "A food delivery app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={`${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
