import { Roboto, League_Gothic } from "next/font/google";

const league = League_Gothic({
  subsets: ["latin"],
  variable: "--font-league",
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["100", "300", "400", "500", "700", "900"],
});

export { league, roboto };
