import { ThemeProvider } from "@/context/ThemeContext";
import favicon from "../../public/assets/common/logo2.png";
import "./globals.css";

export const metadata = {
  title: "Loan Dashboard",
  description:
    "AI-powered loan recovery, analytics, borrower management and disbursement platform.",
  icons: {
    icon: favicon.src,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
