import cn from "classnames";
import "@/styles/app.sass";
import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import localFont from "next/font/local";
import { Providers } from "./providers";

const hostGrotesk = localFont({ src: "./fonts/HostGrotesk-Bold.woff2" });

const rubik = Rubik({
    weight: ["300", "400", "500", "600", "700"],
    subsets: ["latin"],
    display: "block",
    variable: "--font-rubik",
});

export const metadata: Metadata = {
    title: "Omnira for Dental — AI Operating System for Your Practice",
    description: "Omnira deploys 5 AI agents that handle scheduling, insurance, billing, patient communication, and operations so your team focuses on patient care, not paperwork.",
    icons: {
        icon: "/images/omnira-favicon.png",
        shortcut: "/images/omnira-favicon.png",
        apple: "/images/omnira-favicon.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                {/* Description */}
                <meta name="description" content="Omnira deploys 5 AI agents that handle scheduling, insurance, billing, patient communication, and operations so your team focuses on patient care, not paperwork." />
                <meta name="product-name" content="Omnira for Dental" />
                {/* Twitter Card data */}
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content="Omnira for Dental — AI Operating System for Your Practice" />
                <meta
                    name="twitter:description"
                    content="Omnira deploys 5 AI agents that handle scheduling, insurance, billing, patient communication, and operations so your team focuses on patient care, not paperwork."
                />
                {/* Open Graph data */}
                <meta property="og:title" content="Omnira for Dental — AI Operating System for Your Practice" />
                <meta property="og:type" content="website" />
                <meta
                    property="og:description"
                    content="Omnira deploys 5 AI agents that handle scheduling, insurance, billing, patient communication, and operations so your team focuses on patient care, not paperwork."
                />
                <meta property="og:site_name" content="Omnira" />
            </head>
            <body className={cn(rubik.className, hostGrotesk.className)}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
