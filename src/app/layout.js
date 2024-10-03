import Auth from "./auth";
import Providers from "./providers";
import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata = {
  metadataBase: new URL("https://verexan.com"),
  title: "Verexan - Undetected Hacks and Cheats for PC",
  description:
    "Discover Verexan, your ultimate destination for undetected hacks and cheats for PC gaming. Unlock new levels of gameplay with our reliable, safe, and user-friendly tools. Stay ahead of the competition and enhance your gaming experience without the risk of detection. Join our community today and elevate your skills with Verexan!",
  openGraph: {
    title: "Verexan - Undetected Hacks and Cheats for PC",
    description:
      "Discover Verexan, your ultimate destination for undetected hacks and cheats for PC gaming. Unlock new levels of gameplay with our reliable, safe, and user-friendly tools. Stay ahead of the competition and enhance your gaming experience without the risk of detection. Join our community today and elevate your skills with Verexan!",
    url: "https://verexan.com",
    siteName: "Verexan",
    images:
      "https://cdn.verexan.com/images/logo.png",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@rkrealizt",
    title: "Verexan - Shop & eCommerce React Template",
    description:
      "Unlock your gaming potential with Verexan! 🎮✨ Explore our undetected hacks and cheats for PC, designed for a safe and enhanced gameplay experience. Join the revolution and level up your skills today! #Gaming #Hacks #Verexan",
    image:
      "https://cdn.verexan.com/images/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Auth>{children}</Auth>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
