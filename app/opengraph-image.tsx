import { ImageResponse } from "next/og"

import { formatCzechDate, siteConfig } from "@/lib/site"

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          background:
            "radial-gradient(circle at top left, rgba(234, 88, 12, 0.22), transparent 28%), linear-gradient(135deg, #fff8f1 0%, #fffdf9 46%, #f4ede2 100%)",
          color: "#24120b",
          padding: "56px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-between",
            border: "1px solid rgba(105, 47, 18, 0.12)",
            borderRadius: "36px",
            background: "rgba(255, 255, 255, 0.8)",
            padding: "44px",
            boxShadow: "0 24px 80px rgba(120, 53, 15, 0.08)",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            <div
              style={{
                display: "flex",
                fontFamily: "system-ui, sans-serif",
                fontSize: 24,
                fontWeight: 600,
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                color: "#9a3412",
              }}
            >
              Prosím, neplať kartou
            </div>
            <div style={{ display: "flex", fontSize: 68, lineHeight: 1.06, maxWidth: "900px" }}>
              Když chceme hotovost nebo převod, neznamená to, že něco skrýváme.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              gap: "24px",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            <div style={{ display: "flex", maxWidth: "760px", fontSize: 28, lineHeight: 1.4, color: "#57534e" }}>
              Stručné vysvětlení nákladů, cash-flow, sporů, technických závislostí a datové stopy
              karetních plateb z pohledu obchodníka.
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "8px" }}>
              <div style={{ display: "flex", fontSize: 24, fontWeight: 700 }}>{siteConfig.shortName}</div>
              <div style={{ display: "flex", fontSize: 18, color: "#78716c" }}>
                Aktualizováno {formatCzechDate(siteConfig.updatedAt)}
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  )
}
