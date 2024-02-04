/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

export const runtime = "edge";
export const alt = "cluj.dev - Open Source Community";
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
          backgroundImage:
            "linear-gradient(to bottom right, #E0E7FF 25%, #ffffff 50%, #CFFAFE 75%)",
        }}
      >
        <img
          src={`https://${process.env.VERCEL_URL || "cluj.dev"}/logo.png`}
          alt="Cluj.dev Logo"
          tw="w-20 h-20 mb-4 opacity-95"
        />
        <h1
          style={{
            fontSize: "100px",
            fontFamily: "Geist Sans",
            background:
              "linear-gradient(to bottom right, #000000 21.66%, #78716c 86.47%)",
            backgroundClip: "text",
            color: "transparent",
            lineHeight: "5rem",
            letterSpacing: "-0.02em",
          }}
        >
          cluj.dev
        </h1>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
