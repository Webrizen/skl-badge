import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/system/navbar";
import { ThemeProvider } from "@/providers/theme-provider";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  title: "SKLBadge | AI-Powered ID Card Generator for Schools & Businesses",
  description: "Create professional student IDs, corporate badges, and secure credentials in seconds. Custom templates, bulk generation, and QR security included.",
  keywords: [
    "ID card generator",
    "student ID maker",
    "corporate badge creator",
    "digital credentials",
    "QR code badges",
    "school ID system",
    "employee badge software"
  ],
  openGraph: {
    title: "SKLBadge: Instant Professional ID Cards",
    description: "Generate compliant student/corporate IDs with built-in security features. No design skills needed.",
    url: "https://sklbadge.webrizen.com",
    siteName: "SKLBadge",
    images: [
      {
        url: "https://sklbadge.webrizen.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "SKLBadge Dashboard Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SKLBadge | AI-Powered ID Card Generator",
    description: "Turn spreadsheets into secure IDs in 1 click. Perfect for schools and enterprises.",
    images: ["https://sklbadge.webrizen.com/twitter-card.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${bricolage.className} antialiased`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
