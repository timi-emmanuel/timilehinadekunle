import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Timilehin Adekunle — Full-Stack Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px 100px",
          backgroundColor: "#0A0D0B",
          border: "2px solid #26302A",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: "#E5E8E3",
              letterSpacing: "-0.02em",
            }}
          >
            Timilehin Adekunle
          </div>
          <div
            style={{
              fontSize: 38,
              fontWeight: 600,
              color: "#F2B84B",
              letterSpacing: "-0.01em",
            }}
          >
            Full-Stack Engineer
          </div>
          <div
            style={{
              fontSize: 26,
              color: "#E5E8E3",
              marginTop: "8px",
            }}
          >
            React · Next.js · TypeScript · PostgreSQL
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid #26302A",
            paddingTop: "24px",
            fontSize: 22,
            color: "#A3B0A7",
          }}
        >
          77 merchant accounts · ₦2.2M+ merchant sales · QuiqOrder
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
