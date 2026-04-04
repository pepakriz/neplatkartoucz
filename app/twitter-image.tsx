import { ImageResponse } from "next/og"

import { formatCzechDate, siteConfig } from "@/lib/site"

export const size = {
  width: 1200,
  height: 600,
}

export const contentType = "image/png"

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          background: "linear-gradient(135deg, #fff8f1 0%, #f8efe1 100%)",
          color: "#24120b",
          padding: "48px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-between",
            borderRadius: "32px",
            background: "rgba(255, 255, 255, 0.86)",
            padding: "40px",
            boxShadow: "0 24px 80px rgba(120, 53, 15, 0.08)",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div
              style={{
                display: "flex",
                fontFamily: "system-ui, sans-serif",
                fontSize: 20,
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#c2410c",
              }}
            >
              Prosím, neplať kartou
            </div>
            <div style={{ display: "flex", maxWidth: "860px", fontSize: 54, lineHeight: 1.08 }}>
              Proč část obchodníků raději bere hotovost nebo převod než kartu.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "24px",
              fontFamily: "system-ui, sans-serif",
              fontSize: 22,
              color: "#57534e",
            }}
          >
            <div style={{ display: "flex", maxWidth: "760px", lineHeight: 1.4 }}>
              Podklady, zdroje a vysvětlení poplatků, cash-flow, sporů i datové stopy karetních
              plateb.
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px", alignItems: "flex-end" }}>
              <div style={{ display: "flex", fontWeight: 700, color: "#292524" }}>{siteConfig.shortName}</div>
              <div style={{ display: "flex" }}>Aktualizováno {formatCzechDate(siteConfig.updatedAt)}</div>
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  )
}
