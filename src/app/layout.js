import "./globals.css";
import "./hetafu.css";

export const metadata = {
  title:
    "What is Dental Nutrition? | Hetafu",
  description:
    "Dental nutrition is oral care in edible form. Learn how Hetafu's formulas provide day-long protection for your oral health.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="mo-site min-h-full flex flex-col"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
