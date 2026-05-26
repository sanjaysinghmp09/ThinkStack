import { useState, useEffect } from "react";

const navLinks = ["Work", "About", "Writing", "Contact"];

const projects = [
  {
    id: 1,
    title: "Brand Identity System",
    category: "Design",
    year: "2024",
    description: "End-to-end visual language for a fintech startup — logo, type, color, motion.",
  },
  {
    id: 2,
    title: "Atlas Dashboard",
    category: "Product",
    year: "2024",
    description: "Analytics platform redesign with real-time collaboration and custom report builder.",
  },
  {
    id: 3,
    title: "Motion Library",
    category: "Engineering",
    year: "2023",
    description: "Reusable animation primitives for React — 30+ components, zero dependencies.",
  },
  {
    id: 4,
    title: "Editorial CMS",
    category: "Fullstack",
    year: "2023",
    description: "Headless content platform for independent publishers with live preview.",
  },
];

const skills = ["React", "TypeScript", "Figma", "Node.js", "Motion Design", "Systems Thinking"];

export default function App() {
  const [hovered, setHovered] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [activeNav, setActiveNav] = useState(null);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{
      minHeight: "100vh",
      background: "#faf9f7",
      fontFamily: "'DM Sans', 'Helvetica Neue', Arial, sans-serif",
      color: "#1a1916",
      overflowX: "hidden",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&family=DM+Serif+Display:ital@0;1&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body { background: #faf9f7; }

        .fade-in {
          opacity: 0;
          transform: translateY(16px);
          animation: fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        @keyframes fadeUp {
          to { opacity: 1; transform: translateY(0); }
        }

        .nav-link {
          font-size: 13px;
          font-weight: 400;
          color: #7a7670;
          text-decoration: none;
          letter-spacing: 0.02em;
          transition: color 0.2s;
          cursor: pointer;
          background: none;
          border: none;
          padding: 0;
        }
        .nav-link:hover { color: #1a1916; }
        .nav-link.active { color: #1a1916; }

        .project-row {
          display: grid;
          grid-template-columns: 48px 1fr auto;
          gap: 0 24px;
          align-items: start;
          padding: 28px 0;
          border-bottom: 1px solid #ece9e3;
          cursor: pointer;
          transition: background 0.15s;
        }
        .project-row:first-child { border-top: 1px solid #ece9e3; }
        .project-row:hover .proj-title { color: #b8956a; }
        .project-row:hover .proj-num { color: #b8956a; }

        .proj-num {
          font-size: 12px;
          font-weight: 300;
          color: #b8b3aa;
          letter-spacing: 0.04em;
          padding-top: 3px;
          transition: color 0.2s;
        }

        .proj-title {
          font-family: 'DM Serif Display', Georgia, serif;
          font-size: 22px;
          font-weight: 400;
          color: #1a1916;
          line-height: 1.2;
          transition: color 0.2s;
          margin-bottom: 6px;
        }

        .proj-desc {
          font-size: 13.5px;
          font-weight: 300;
          color: #7a7670;
          line-height: 1.6;
          max-width: 420px;
        }

        .proj-meta {
          text-align: right;
        }

        .proj-cat {
          display: inline-block;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #b8956a;
          background: #f5ede0;
          padding: 3px 10px;
          border-radius: 20px;
          margin-bottom: 6px;
        }

        .proj-year {
          font-size: 12px;
          color: #b8b3aa;
          display: block;
        }

        .skill-pill {
          display: inline-block;
          font-size: 12.5px;
          font-weight: 400;
          color: #5a5650;
          border: 1px solid #ddd8cf;
          border-radius: 20px;
          padding: 6px 16px;
          transition: all 0.2s;
          cursor: default;
        }
        .skill-pill:hover {
          background: #1a1916;
          color: #faf9f7;
          border-color: #1a1916;
        }

        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 13.5px;
          font-weight: 500;
          color: #faf9f7;
          background: #1a1916;
          border: none;
          border-radius: 28px;
          padding: 14px 28px;
          cursor: pointer;
          transition: all 0.2s;
          letter-spacing: 0.01em;
          text-decoration: none;
        }
        .cta-btn:hover {
          background: #b8956a;
          transform: translateY(-1px);
        }

        .ghost-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 13.5px;
          font-weight: 400;
          color: #1a1916;
          background: transparent;
          border: 1px solid #ddd8cf;
          border-radius: 28px;
          padding: 13px 24px;
          cursor: pointer;
          transition: all 0.2s;
          text-decoration: none;
        }
        .ghost-btn:hover {
          border-color: #1a1916;
          transform: translateY(-1px);
        }

        .status-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #6dbf91;
          display: inline-block;
          animation: pulse 2.4s ease-in-out infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        .section-label {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #b8b3aa;
          margin-bottom: 32px;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .section-label::after {
          content: '';
          flex: 1;
          height: 1px;
          background: #ece9e3;
          max-width: 60px;
        }
      `}</style>

      {/* Nav */}
      <nav style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(250,249,247,0.9)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid #ece9e3",
        padding: "0 40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "56px",
      }}>
        <span style={{
          fontFamily: "'DM Serif Display', Georgia, serif",
          fontSize: "17px",
          fontWeight: 400,
          letterSpacing: "-0.01em",
          color: "#1a1916",
        }}>
          Sanjay
        </span>
        <div style={{ display: "flex", gap: "32px", alignItems: "center" }}>
          {navLinks.map(l => (
            <button
              key={l}
              className={`nav-link ${activeNav === l ? "active" : ""}`}
              onClick={() => setActiveNav(l)}
            >
              {l}
            </button>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <section style={{
        maxWidth: "760px",
        margin: "0 auto",
        padding: "96px 40px 80px",
      }}>
        <div className="fade-in" style={{ animationDelay: "0ms" }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "40px",
          }}>
            <span className="status-dot" />
            <span style={{ fontSize: "12.5px", color: "#7a7670", fontWeight: 300 }}>
              Available for new projects
            </span>
          </div>
        </div>

        <div className="fade-in" style={{ animationDelay: "80ms" }}>
          <h1 style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: "clamp(42px, 7vw, 68px)",
            fontWeight: 400,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            color: "#1a1916",
            marginBottom: "28px",
          }}>
            Designer &<br />
            <em style={{ fontStyle: "italic", color: "#b8956a" }}>engineer</em> based<br />
            in Bhopal.
          </h1>
        </div>

        <div className="fade-in" style={{ animationDelay: "160ms" }}>
          <p style={{
            fontSize: "17px",
            fontWeight: 300,
            color: "#5a5650",
            lineHeight: 1.75,
            maxWidth: "480px",
            marginBottom: "48px",
          }}>
            I craft thoughtful digital products — from systems thinking to pixel-perfect interfaces.
            Currently open to freelance and full-time opportunities.
          </p>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a className="cta-btn" href="#">
              View my work
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a className="ghost-btn" href="#">
              Get in touch
            </a>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section style={{
        maxWidth: "760px",
        margin: "0 auto",
        padding: "0 40px 96px",
      }}>
        <div className="fade-in section-label" style={{ animationDelay: "240ms" }}>
          Selected Work
        </div>

        <div>
          {projects.map((p, i) => (
            <div
              key={p.id}
              className="project-row fade-in"
              style={{ animationDelay: `${280 + i * 60}ms` }}
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <span className="proj-num">0{p.id}</span>
              <div>
                <div className="proj-title">{p.title}</div>
                <div className="proj-desc">{p.description}</div>
              </div>
              <div className="proj-meta">
                <span className="proj-cat">{p.category}</span>
                <span className="proj-year">{p.year}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section style={{
        maxWidth: "760px",
        margin: "0 auto",
        padding: "0 40px 96px",
      }}>
        <div className="fade-in section-label" style={{ animationDelay: "520ms" }}>
          Toolkit
        </div>
        <div className="fade-in" style={{ display: "flex", gap: "8px", flexWrap: "wrap", animationDelay: "560ms" }}>
          {skills.map(s => (
            <span key={s} className="skill-pill">{s}</span>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <footer style={{
        borderTop: "1px solid #ece9e3",
        maxWidth: "760px",
        margin: "0 auto",
        padding: "64px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "24px",
      }}>
        <div>
          <p style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: "26px",
            fontWeight: 400,
            color: "#1a1916",
            marginBottom: "6px",
          }}>
            Let's build something.
          </p>
          <p style={{ fontSize: "13.5px", color: "#7a7670", fontWeight: 300 }}>
            sanjay@email.com
          </p>
        </div>
        <div style={{ display: "flex", gap: "20px" }}>
          {["Twitter", "GitHub", "LinkedIn"].map(s => (
            <a key={s} href="#" className="nav-link" style={{ fontSize: "12.5px" }}>{s}</a>
          ))}
        </div>
      </footer>
    </div>
  );
}
