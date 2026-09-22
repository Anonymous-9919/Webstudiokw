import { ImageResponse } from "next/og"

export const dynamic = "force-static"

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "stretch",
          background: "#061b19",
          color: "#ffffff",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: "64px 72px",
          width: "100%",
        }}
      >
        <div style={{ alignItems: "center", display: "flex", justifyContent: "space-between" }}>
          <div style={{ alignItems: "center", display: "flex" }}>
            <svg aria-hidden="true" height="88" viewBox="0 0 220 220" width="88">
              <rect
                fill="none"
                height="112"
                stroke="#00d2ba"
                strokeWidth="38"
                transform="rotate(45 110 110)"
                width="112"
                x="54"
                y="54"
              />
            </svg>
            <span style={{ fontSize: 38, fontWeight: 700, letterSpacing: "-1.5px", marginLeft: 22 }}>
              WebStudio<span style={{ color: "#00d2ba" }}>KW</span>
            </span>
          </div>
          <span style={{ color: "#9cc5bb", fontSize: 22, letterSpacing: "2px" }}>KUWAIT</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ color: "#00d2ba", fontSize: 28, fontWeight: 700, letterSpacing: "3px" }}>
            WEB DESIGN & DEVELOPMENT
          </span>
          <span style={{ fontSize: 66, fontWeight: 700, letterSpacing: "-2.5px", marginTop: 18 }}>
            Websites That Convert.
          </span>
          <span style={{ color: "#b7d4cc", fontSize: 34, marginTop: 12 }}>Built For Growth.</span>
        </div>

        <div style={{ alignItems: "center", display: "flex", justifyContent: "space-between" }}>
          <span style={{ color: "#9cc5bb", fontSize: 24 }}>Professional websites, ecommerce stores & custom web apps</span>
          <span style={{ color: "#00d2ba", fontSize: 24, fontWeight: 700 }}>webstudiokw.com</span>
        </div>
      </div>
    ),
    { height: 630, width: 1200 }
  )
}
