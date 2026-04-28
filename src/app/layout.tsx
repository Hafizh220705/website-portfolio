import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hafizh Fadhl Muhammad | Data Scientist & Analyst",
  description:
    "6th-semester Computer Science student at Universitas Padjadjaran specializing in Data Analytics, Business Intelligence, and Machine Learning.",
  openGraph: {
    title: "Hafizh Fadhl Muhammad | Data Scientist & Analyst",
    description:
      "I Turn Raw Data into Actionable Insights that drive smarter business decisions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <head>
        <script
          src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"
          defer
        />
      </head>
      <body className="antialiased overflow-x-hidden text-neutral-400 font-sans bg-neutral-950 relative">
        {/* ── Animated Background — UnicornStudio WebGL ── */}
        <div
          className="fixed top-0 w-full h-screen -z-10"
          style={{
            maskImage:
              "linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)",
          }}
        >
          <div className="top-0 w-full -z-10 absolute h-full">
            <div
              data-us-project="ILgOO23w4wEyPQOKyLO4"
              className="absolute w-full h-full left-0 top-0 -z-10"
            />
          </div>
        </div>

        {/* Background Grid & Ambient Light */}
        <div className="fixed inset-0 pointer-events-none z-0 bg-grid h-full w-full" />
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-violet-500/5 blur-[120px] rounded-full pointer-events-none z-0" />

        {children}

        {/* UnicornStudio Loader */}
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head||document.body).appendChild(i)}}();`,
          }}
        />
      </body>
    </html>
  );
}
