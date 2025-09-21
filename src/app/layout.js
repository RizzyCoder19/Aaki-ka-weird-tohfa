import { Quicksand } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "A Cute Surprise!",
  description: "A simple yet heartfelt little surprise, made just for you — with a playful twist at the end.",
};

// src/pages/_app.js
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Audio that auto-plays and loops */}
      <audio src="Tu Itni Khoobsurat Hai (PenduJatt.Com.Se).mp3" autoPlay loop />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${quicksand.className} antialiased select-none`}
      >
        {children}
      </body>
    </html>
  );
}
