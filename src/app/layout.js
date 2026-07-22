import "./globals.css";
export const metadata = {
  title:
    "What is Dental Nutrition? | Hetafu",
  description:
    "Dental nutrition is oral care in edible form. Learn how Hetafu's formulas provide day-long protection for your oral health.",
  icons: {
    icon: "/Logos/LogoBlack.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="m-0 min-h-full flex flex-col bg-[#fcfcfc] text-[#401e17] [font-family:var(--body-font)] text-base leading-[1.65] tracking-[0.02em] [&_a]:text-inherit [&_a]:no-underline [&_img]:block [&_img]:h-auto [&_img]:max-w-full [&_ul]:m-0 [&_ul]:list-none [&_ul]:p-0"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
