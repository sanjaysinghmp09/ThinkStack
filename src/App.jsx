import { useState } from "react";

const whyItems = [
  { icon: "🌿", hi: "100% जैविक", en: "100% Organic", desc: "बिना कीटनाशक की शुद्ध सोयाबीन" },
  { icon: "🚜", hi: "सीधे खेत से", en: "Direct from Farm", desc: "Deepgaon Kalan, Harda – MP" },
  { icon: "⚖️", hi: "सही तोल", en: "Honest Weight", desc: "पूरा वजन, पूरी कीमत" },
  { icon: "📦", hi: "थोक उपलब्ध", en: "Bulk Available", desc: "50 kg – 500 quintal तक" },
];

const specs = [
  { label: "फसल / Crop", value: "सोयाबीन / Soyabean" },
  { label: "किस्म / Variety", value: "JS-335 / MACS-450" },
  { label: "नमी / Moisture", value: "Max 12%" },
  { label: "प्रोटीन / Protein", value: "38–42%" },
  { label: "स्थान / Location", value: "Deepgaon Kalan, Harda, MP" },
  { label: "उपलब्धता / Availability", value: "अक्टूबर–मार्च / Oct–Mar" },
];

export default function FarmerHome() {
  const [form, setForm] = useState({ name: "", phone: "", qty: "", msg: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div style={{ fontFamily: "'Hind', sans-serif", background: "#fffdf5", color: "#2d2409", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500;600&family=Tiro+Devanagari+Hindi:ital@0;1&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .fade { animation: fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) both; }
        @keyframes fadeUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }

        .nav-link { color: #5a4a1a; text-decoration: none; font-size: 14px; font-weight: 500; transition: color 0.2s; }
        .nav-link:hover { color: #b8830a; }

        .hero-bg {
          background: linear-gradient(160deg, #1a3a0a 0%, #2d5c10 45%, #4a7c1a 100%);
          position: relative;
          overflow: hidden;
        }

        .hero-bg::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle at 20% 80%, rgba(184,131,10,0.18) 0%, transparent 50%),
                            radial-gradient(circle at 80% 20%, rgba(255,255,255,0.05) 0%, transparent 40%);
        }

        .leaf-pattern {
          position: absolute;
          right: -60px;
          top: -60px;
          width: 360px;
          height: 360px;
          opacity: 0.06;
          background: radial-gradient(circle, #fff 0%, transparent 70%);
          border-radius: 50%;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(184,131,10,0.18);
          border: 1px solid rgba(184,131,10,0.4);
          color: #f5d97a;
          font-size: 12px;
          font-weight: 500;
          padding: 5px 14px;
          border-radius: 20px;
          letter-spacing: 0.04em;
          margin-bottom: 24px;
        }

        .hero-title {
          font-family: 'Tiro Devanagari Hindi', serif;
          font-size: clamp(36px, 6vw, 62px);
          font-weight: 400;
          color: #fff;
          line-height: 1.15;
          margin-bottom: 10px;
        }

        .hero-sub {
          font-size: clamp(18px, 3vw, 26px);
          font-weight: 300;
          color: rgba(255,255,255,0.75);
          margin-bottom: 20px;
        }

        .hero-loc {
          font-size: 14px;
          color: rgba(255,255,255,0.55);
          margin-bottom: 36px;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #b8830a;
          color: #fff;
          border: none;
          border-radius: 8px;
          padding: 14px 28px;
          font-size: 15px;
          font-weight: 600;
          font-family: 'Hind', sans-serif;
          cursor: pointer;
          transition: all 0.2s;
          text-decoration: none;
        }
        .btn-primary:hover { background: #9a6d08; transform: translateY(-2px); }

        .btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          color: #fff;
          border: 1.5px solid rgba(255,255,255,0.4);
          border-radius: 8px;
          padding: 13px 24px;
          font-size: 15px;
          font-weight: 500;
          font-family: 'Hind', sans-serif;
          cursor: pointer;
          transition: all 0.2s;
          text-decoration: none;
        }
        .btn-ghost:hover { border-color: #fff; background: rgba(255,255,255,0.08); }

        .price-card {
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 16px;
          padding: 24px 28px;
          text-align: center;
          backdrop-filter: blur(8px);
          min-width: 200px;
        }

        .section { max-width: 900px; margin: 0 auto; padding: 72px 24px; }

        .section-tag {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #b8830a;
          margin-bottom: 10px;
        }

        .section-title {
          font-family: 'Tiro Devanagari Hindi', serif;
          font-size: clamp(26px, 4vw, 38px);
          font-weight: 400;
          color: #2d2409;
          margin-bottom: 48px;
          line-height: 1.25;
        }

        .why-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 16px;
        }

        .why-card {
          background: #fff;
          border: 1px solid #e8dfc0;
          border-radius: 12px;
          padding: 24px 20px;
          transition: box-shadow 0.2s, transform 0.2s;
        }
        .why-card:hover { transform: translateY(-3px); box-shadow: 0 8px 24px rgba(45,36,9,0.08); }

        .why-icon { font-size: 32px; margin-bottom: 12px; }
        .why-hi { font-family: 'Tiro Devanagari Hindi', serif; font-size: 17px; font-weight: 400; color: #2d2409; }
        .why-en { font-size: 13px; color: #b8830a; font-weight: 600; margin-bottom: 6px; }
        .why-desc { font-size: 13px; color: #7a6830; line-height: 1.5; }

        .specs-table { width: 100%; border-collapse: collapse; }
        .specs-table tr { border-bottom: 1px solid #e8dfc0; }
        .specs-table tr:last-child { border-bottom: none; }
        .specs-table td { padding: 14px 0; font-size: 15px; }
        .specs-table td:first-child { color: #7a6830; font-weight: 500; width: 45%; }
        .specs-table td:last-child { color: #2d2409; font-weight: 600; }

        .specs-box {
          background: #fff;
          border: 1px solid #e8dfc0;
          border-radius: 16px;
          padding: 8px 28px 20px;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: start;
        }
        @media (max-width: 640px) {
          .contact-grid { grid-template-columns: 1fr; }
          .hero-btns { flex-direction: column; }
        }

        .input-field {
          width: 100%;
          background: #fff;
          border: 1.5px solid #ddd4a8;
          border-radius: 8px;
          padding: 12px 16px;
          font-size: 14px;
          font-family: 'Hind', sans-serif;
          color: #2d2409;
          margin-bottom: 12px;
          transition: border-color 0.2s;
          outline: none;
        }
        .input-field:focus { border-color: #b8830a; }
        .input-field::placeholder { color: #b0a070; }

        .contact-info-item {
          display: flex;
          gap: 14px;
          margin-bottom: 24px;
          align-items: flex-start;
        }
        .ci-icon {
          width: 42px;
          height: 42px;
          background: #f5edc8;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          flex-shrink: 0;
        }
        .ci-label { font-size: 12px; color: #7a6830; font-weight: 500; margin-bottom: 2px; }
        .ci-val { font-size: 15px; font-weight: 600; color: #2d2409; }

        footer {
          background: #1a3a0a;
          color: rgba(255,255,255,0.7);
          text-align: center;
          padding: 32px 24px;
          font-size: 13px;
          line-height: 1.8;
        }
        footer strong { color: #f5d97a; }

        .wa-float {
          position: fixed;
          bottom: 24px;
          right: 24px;
          background: #25d366;
          color: #fff;
          border-radius: 50px;
          padding: 12px 20px 12px 16px;
          font-size: 14px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 4px 20px rgba(37,211,102,0.4);
          cursor: pointer;
          z-index: 100;
          text-decoration: none;
          transition: transform 0.2s;
        }
        .wa-float:hover { transform: scale(1.05); }
      `}</style>

      {/* Navbar */}
      <nav style={{
        background: "#fff",
        borderBottom: "1px solid #e8dfc0",
        padding: "0 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "58px",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ fontSize: "24px" }}>🌱</span>
          <div>
            <div style={{ fontFamily: "'Tiro Devanagari Hindi', serif", fontSize: "16px", color: "#2d2409", lineHeight: 1.1 }}>किसान सोयाबीन</div>
            <div style={{ fontSize: "11px", color: "#7a6830" }}>Deepgaon Kalan, Harda</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: "28px" }}>
          <a href="#about" className="nav-link">हमारे बारे में</a>
          <a href="#specs" className="nav-link">Specs</a>
          <a href="#contact" className="nav-link">संपर्क</a>
        </div>
      </nav>

      {/* Hero */}
      <div className="hero-bg" style={{ padding: "80px 24px 64px" }}>
        <div className="leaf-pattern" />
        <div style={{ maxWidth: "900px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div className="fade" style={{ animationDelay: "0ms" }}>
            <div className="badge">
              <span>✅</span> हरदा जिले की प्रीमियम सोयाबीन · Harda District MP
            </div>
          </div>

          <div className="fade" style={{ animationDelay: "80ms" }}>
            <h1 className="hero-title">
              सीधे खेत से<br />
              <span style={{ color: "#f5d97a" }}>ताज़ी सोयाबीन</span>
            </h1>
            <p className="hero-sub">Fresh Soyabean — Direct from Farmer</p>
            <p className="hero-loc">
              📍 Deepgaon Kalan Village, Harda, Madhya Pradesh
            </p>
          </div>

          <div className="fade hero-btns" style={{ display: "flex", gap: "12px", flexWrap: "wrap", animationDelay: "160ms", marginBottom: "56px" }}>
            <a href="#contact" className="btn-primary">📞 अभी संपर्क करें · Call Now</a>
            <a href="#specs" className="btn-ghost">📋 Quality Details</a>
          </div>

          {/* Price Strip */}
          <div className="fade" style={{ animationDelay: "240ms", display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <div className="price-card">
              <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.6)", marginBottom: "6px", letterSpacing: "0.06em", textTransform: "uppercase" }}>थोक भाव / Wholesale</div>
              <div style={{ fontSize: "30px", fontWeight: "700", color: "#f5d97a" }}>₹4,200<span style={{ fontSize: "15px", fontWeight: 400 }}>/qtl</span></div>
              <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", marginTop: "4px" }}>50 qtl+</div>
            </div>
            <div className="price-card">
              <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.6)", marginBottom: "6px", letterSpacing: "0.06em", textTransform: "uppercase" }}>छोटा लॉट / Small Lot</div>
              <div style={{ fontSize: "30px", fontWeight: "700", color: "#f5d97a" }}>₹4,450<span style={{ fontSize: "15px", fontWeight: 400 }}>/qtl</span></div>
              <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", marginTop: "4px" }}>10–50 qtl</div>
            </div>
            <div className="price-card" style={{ background: "rgba(184,131,10,0.2)", borderColor: "rgba(245,217,122,0.4)" }}>
              <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.6)", marginBottom: "6px", letterSpacing: "0.06em", textTransform: "uppercase" }}>उपलब्ध स्टॉक</div>
              <div style={{ fontSize: "30px", fontWeight: "700", color: "#f5d97a" }}>500+<span style={{ fontSize: "15px", fontWeight: 400 }}> qtl</span></div>
              <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", marginTop: "4px" }}>अभी उपलब्ध</div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Us */}
      <div id="about" style={{ background: "#fffdf5" }}>
        <div className="section">
          <div className="section-tag">हमारी खासियत · Why Choose Us</div>
          <h2 className="section-title">क्यों खरीदें हमसे?<br /><span style={{ fontSize: "0.6em", color: "#7a6830" }}>Why buy from us?</span></h2>
          <div className="why-grid">
            {whyItems.map((w, i) => (
              <div key={i} className="why-card fade" style={{ animationDelay: `${i * 80}ms` }}>
                <div className="why-icon">{w.icon}</div>
                <div className="why-hi">{w.hi}</div>
                <div className="why-en">{w.en}</div>
                <div className="why-desc">{w.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Soyabean image strip */}
      <div style={{
        background: "linear-gradient(135deg, #2d5c10 0%, #3a7a15 100%)",
        padding: "40px 24px",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <div style={{ fontSize: "56px", marginBottom: "12px" }}>🫘🌾🚜</div>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "18px", fontFamily: "'Tiro Devanagari Hindi', serif" }}>
            "हमारी सोयाबीन — हमारे पसीने की मेहनत से उगाई हुई"
          </p>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "13px", marginTop: "6px" }}>
            Grown with dedication on the fertile lands of Harda, MP
          </p>
        </div>
      </div>

      {/* Specs */}
      <div id="specs" style={{ background: "#f5f0e0" }}>
        <div className="section">
          <div className="section-tag">गुणवत्ता · Quality Specifications</div>
          <h2 className="section-title">सोयाबीन की जानकारी<br /><span style={{ fontSize: "0.6em", color: "#7a6830" }}>Product Details</span></h2>
          <div className="specs-box">
            <table className="specs-table">
              {specs.map((s, i) => (
                <tr key={i}>
                  <td>{s.label}</td>
                  <td>{s.value}</td>
                </tr>
              ))}
            </table>
          </div>
          <div style={{
            marginTop: "20px",
            background: "#fff8e0",
            border: "1px solid #e8dfc0",
            borderRadius: "10px",
            padding: "14px 20px",
            fontSize: "13.5px",
            color: "#5a4a1a",
            display: "flex",
            gap: "10px",
            alignItems: "flex-start",
          }}>
            <span style={{ fontSize: "18px" }}>ℹ️</span>
            <span>भाव बाजार के अनुसार बदल सकते हैं। नवीनतम रेट के लिए सीधे कॉल करें। · Prices subject to market rates. Call for latest quote.</span>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div id="contact" style={{ background: "#fffdf5" }}>
        <div className="section">
          <div className="section-tag">संपर्क करें · Get in Touch</div>
          <h2 className="section-title">ऑर्डर करें या पूछें<br /><span style={{ fontSize: "0.6em", color: "#7a6830" }}>Order or Enquire</span></h2>

          <div className="contact-grid">
            {/* Info */}
            <div>
              <div className="contact-info-item">
                <div className="ci-icon">📞</div>
                <div>
                  <div className="ci-label">फोन / Phone</div>
                  <div className="ci-val">+91 XXXXX XXXXX</div>
                  <div style={{ fontSize: "12px", color: "#7a6830", marginTop: "2px" }}>सुबह 7 – शाम 8 · 7AM–8PM</div>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="ci-icon">📍</div>
                <div>
                  <div className="ci-label">पता / Address</div>
                  <div className="ci-val">Deepgaon Kalan</div>
                  <div style={{ fontSize: "12px", color: "#7a6830", marginTop: "2px" }}>Harda District, Madhya Pradesh</div>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="ci-icon">💬</div>
                <div>
                  <div className="ci-label">WhatsApp</div>
                  <div className="ci-val">+91 XXXXX XXXXX</div>
                  <div style={{ fontSize: "12px", color: "#7a6830", marginTop: "2px" }}>तस्वीर / फोटो भेज सकते हैं</div>
                </div>
              </div>
              <div style={{
                background: "#f0fce8",
                border: "1px solid #b8e09a",
                borderRadius: "10px",
                padding: "14px 16px",
                fontSize: "13px",
                color: "#2d5c10",
              }}>
                🚚 <strong>Free pickup</strong> available at farm.<br />
                गाड़ी भेजने पर <strong>लोडिंग में मदद</strong> मिलेगी।
              </div>
            </div>

            {/* Form */}
            <div>
              {sent ? (
                <div style={{
                  background: "#f0fce8",
                  border: "1px solid #b8e09a",
                  borderRadius: "16px",
                  padding: "40px 28px",
                  textAlign: "center",
                }}>
                  <div style={{ fontSize: "48px", marginBottom: "16px" }}>✅</div>
                  <div style={{ fontFamily: "'Tiro Devanagari Hindi', serif", fontSize: "22px", color: "#2d5c10", marginBottom: "8px" }}>धन्यवाद!</div>
                  <div style={{ fontSize: "14px", color: "#3a7a15" }}>हम जल्द आपसे संपर्क करेंगे।<br />We'll contact you soon.</div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{
                  background: "#fff",
                  border: "1px solid #e8dfc0",
                  borderRadius: "16px",
                  padding: "28px",
                }}>
                  <div style={{ fontFamily: "'Tiro Devanagari Hindi', serif", fontSize: "18px", color: "#2d2409", marginBottom: "20px" }}>
                    पूछताछ फॉर्म · Enquiry Form
                  </div>
                  <input
                    className="input-field"
                    name="name"
                    placeholder="आपका नाम / Your Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                  <input
                    className="input-field"
                    name="phone"
                    placeholder="मोबाइल नंबर / Phone Number"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    type="tel"
                  />
                  <input
                    className="input-field"
                    name="qty"
                    placeholder="कितनी मात्रा चाहिए? / Quantity needed (qtl)"
                    value={form.qty}
                    onChange={handleChange}
                  />
                  <textarea
                    className="input-field"
                    name="msg"
                    placeholder="कोई सवाल? / Any questions?"
                    value={form.msg}
                    onChange={handleChange}
                    rows={3}
                    style={{ resize: "vertical" }}
                  />
                  <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                    📨 send sms · Soyabean lene hetu sampark kre 
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <div style={{ fontSize: "28px", marginBottom: "10px" }}>🌱</div>
        <strong>किसान सोयाबीन · Kisan Soyabean</strong><br />
        Deepgaon Kalan Village, Harda District, Madhya Pradesh<br />
        <span style={{ fontSize: "12px" }}>© 2025 · शुद्ध खेती, सच्चा माल</span>
      </footer>

      {/* WhatsApp Float Button */}
      <a href="https://wa.me/91XXXXXXXXXX" className="wa-float" target="_blank" rel="noopener noreferrer">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.115.55 4.103 1.517 5.829L.057 23.854a.5.5 0 00.614.614l6.025-1.46A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.958 9.958 0 01-5.073-1.385l-.363-.214-3.761.912.928-3.76-.235-.376A9.959 9.959 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
        </svg>
        WhatsApp करें
      </a>
    </div>
  );
}