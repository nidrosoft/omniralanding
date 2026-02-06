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

const siteUrl = "https://omnira.space";
const siteName = "Omnira";
const siteTitle = "Omnira for Dental — AI Operating System for Your Practice";
const siteDescription =
    "Replace 5-10 software tools with one AI-native platform. Omnira deploys 5 specialized agents that handle scheduling, insurance verification, billing, patient communication, and operations 24/7 — so your dental team focuses on patient care, not paperwork.";

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: siteTitle,
        template: `%s | ${siteName}`,
    },
    description: siteDescription,
    keywords: [
        "dental practice management software",
        "AI dental practice",
        "dental office automation",
        "dental practice AI agents",
        "dental billing software",
        "dental scheduling software",
        "dental insurance verification",
        "HIPAA compliant dental software",
        "dental practice operating system",
        "Dentrix alternative",
        "Eaglesoft alternative",
        "dental claims management",
        "dental patient communication",
        "practice management AI",
        "dental office software",
    ],
    authors: [{ name: "Nidrosoft LLC", url: "https://nidrosoft.com" }],
    creator: "Nidrosoft LLC",
    publisher: "Omnira",
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    icons: {
        icon: "/images/omnira-favicon.png",
        shortcut: "/images/omnira-favicon.png",
        apple: "/images/omnira-favicon.png",
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: siteUrl,
        siteName: siteName,
        title: siteTitle,
        description: siteDescription,
        images: [
            {
                url: "/fb-og-image.png",
                width: 1200,
                height: 630,
                alt: "Omnira — 5 AI Agents. One Platform. Your Dental Practice Running Itself.",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: siteTitle,
        description: siteDescription,
        images: ["/twitter-card.png"],
        creator: "@omnaboraspace",
    },
    alternates: {
        canonical: siteUrl,
    },
    category: "Healthcare Technology",
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Omnira for Dental",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Windows, macOS",
    description: siteDescription,
    url: siteUrl,
    offers: {
        "@type": "Offer",
        price: "1500",
        priceCurrency: "USD",
        priceValidUntil: "2027-12-31",
        availability: "https://schema.org/PreOrder",
    },
    aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        ratingCount: "500",
        bestRating: "5",
        worstRating: "1",
    },
    provider: {
        "@type": "Organization",
        name: "Nidrosoft LLC",
        url: "https://nidrosoft.com",
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
                <link rel="canonical" href={siteUrl} />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(jsonLd),
                    }}
                />
            </head>
            <body className={cn(rubik.className, hostGrotesk.className)}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
