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

export default MyApp

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${quicksand.className} antialiased select-none`}
      >
        {children}
import "./globals.css";
import { useEffect, useRef } from "react";

export default function RootLayout({ children }) {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      let volume = 0;
      audio.volume = 0;
      audio.play().catch(() => {
        console.log("Autoplay blocked, waiting for user interaction.");
      });

      const fadeIn = setInterval(() => {
        if (volume < 0.3) {
          volume += 0.01;
          audio.volume = volume;
        } else {
          clearInterval(fadeIn);
        }
      }, 200);
    }
  }, []);

  useEffect(() => {
    const glow = document.querySelector(".cursor-glow");
    const moveGlow = (e) => {
      glow.style.left = e.clientX + "px";
      glow.style.top = e.clientY + "px";
    };
    window.addEventListener("mousemove", moveGlow);
    return () => window.removeEventListener("mousemove", moveGlow);
  }, []);

  return (
    <html lang="en">
      <body>
        <audio ref={audioRef} src="/music.mp3" loop />
        {children}
        <div className="cursor-glow" />
      </body>
    </html>
  );
}
