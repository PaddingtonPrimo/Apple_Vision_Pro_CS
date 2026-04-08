import { useState } from "react";

const VP = {
  purple: "#6e56cf",
  purpleLight: "#9b8adb",
  purpleGlow: "rgba(110,86,207,0.15)",
  blue: "#5a9cf5",
  coral: "#e8604c",
  coralSoft: "#f0997b",
  teal: "#3ec9a7",
  amber: "#f0a830",
  bg: "#111119",
  card: "rgba(30,30,48,0.85)",
  glass: "rgba(255,255,255,0.06)",
  glassBorder: "rgba(255,255,255,0.12)",
  text: "#e8e8ed",
  dim: "#8e8ea0",
};

const Tag = ({ color, children }) => {
  const map = {
    coral: { bg: "rgba(232,96,76,0.2)", fg: VP.coralSoft },
    teal: { bg: "rgba(62,201,167,0.2)", fg: VP.teal },
    purple: { bg: "rgba(110,86,207,0.2)", fg: VP.purpleLight },
    amber: { bg: "rgba(240,168,48,0.2)", fg: VP.amber },
    blue: { bg: "rgba(90,156,245,0.2)", fg: VP.blue },
  };
  const c = map[color] || map.purple;
  return (
    <span style={{ display: "inline-block", fontSize: 10, padding: "3px 10px", borderRadius: 12, fontWeight: 500, background: c.bg, color: c.fg }}>{children}</span>
  );
};

const Card = ({ children, borderColor, style }) => (
  <div style={{ background: VP.card, border: `0.5px solid ${VP.glassBorder}`, borderRadius: 12, padding: "1.25rem", marginBottom: 12, borderLeft: borderColor ? `3px solid ${borderColor}` : undefined, borderTopLeftRadius: borderColor ? 0 : 12, borderBottomLeftRadius: borderColor ? 0 : 12, ...style }}>{children}</div>
);

const H3 = ({ children }) => (
  <h3 style={{ fontSize: 15, fontWeight: 500, marginBottom: 8, display: "flex", alignItems: "center", gap: 8, color: VP.text }}>{children}</h3>
);

const P = ({ children, style }) => (
  <p style={{ fontSize: 13.5, color: VP.dim, lineHeight: 1.65, margin: 0, ...style }}>{children}</p>
);

const ImpactBar = ({ label, pct, color, value }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 8, margin: "8px 0" }}>
    <span style={{ fontSize: 11, color: VP.dim, minWidth: 110 }}>{label}</span>
    <div style={{ flex: 1, height: 8, background: "rgba(255,255,255,0.04)", borderRadius: 4, overflow: "hidden" }}>
      <div style={{ height: "100%", width: `${pct}%`, background: color, borderRadius: 4, transition: "width 0.8s ease" }} />
    </div>
    <span style={{ fontSize: 11, fontWeight: 500, minWidth: 55, textAlign: "right", color }}>{value}</span>
  </div>
);

const Connector = ({ gapTitle, gapText, fixTitle, fixText }) => (
  <div style={{ display: "flex", alignItems: "stretch", gap: 10, marginBottom: 12 }}>
    <div style={{ flex: 1, background: "rgba(232,96,76,0.06)", border: "0.5px solid rgba(232,96,76,0.2)", borderRadius: 12, padding: 14 }}>
      <div style={{ fontSize: 11, letterSpacing: 1.5, textTransform: "uppercase", color: VP.coral, marginBottom: 6, fontWeight: 500 }}>What happened</div>
      <h4 style={{ fontSize: 13, fontWeight: 500, marginBottom: 4, color: VP.text }}>{gapTitle}</h4>
      <P>{gapText}</P>
    </div>
    <div style={{ display: "flex", alignItems: "center", color: VP.purpleLight, fontSize: 20, flexShrink: 0 }}>&rarr;</div>
    <div style={{ flex: 1, background: "rgba(62,201,167,0.06)", border: "0.5px solid rgba(62,201,167,0.2)", borderRadius: 12, padding: 14 }}>
      <div style={{ fontSize: 11, letterSpacing: 1.5, textTransform: "uppercase", color: VP.teal, marginBottom: 6, fontWeight: 500 }}>What a field team delivers</div>
      <h4 style={{ fontSize: 13, fontWeight: 500, marginBottom: 4, color: VP.text }}>{fixTitle}</h4>
      <P>{fixText}</P>
    </div>
  </div>
);

const Callout = ({ children }) => (
  <div style={{ background: "rgba(110,86,207,0.08)", border: "0.5px solid rgba(110,86,207,0.25)", borderRadius: 10, padding: "14px 16px", margin: "12px 0" }}>
    <p style={{ fontSize: 13, color: VP.purpleLight, fontStyle: "italic", margin: 0, lineHeight: 1.65 }}>{children}</p>
  </div>
);

const Dot = ({ color }) => <span style={{ width: 8, height: 8, borderRadius: "50%", display: "inline-block", background: color }} />;
const SecHeader = ({ color, children }) => (
  <div style={{ fontSize: 17, fontWeight: 500, marginBottom: 14, color: VP.text, display: "flex", alignItems: "center", gap: 8 }}><Dot color={color} />{children}</div>
);

const sections = [
  {
    id: "context", label: "Context", content: () => (
      <>
        <SecHeader color={VP.purple}>The setup</SecHeader>
        <Card>
          <P>Apple launched the Vision Pro in February 2024 at $3,499, positioning it as a "spatial computer" rather than a VR headset. The device featured micro-OLED displays, hand/eye tracking, and iris-based authentication (Optic ID) requiring precise physical fitting to each customer's face.</P>
          <P style={{ marginTop: 8 }}>This was arguably the most technically demanding consumer electronics product to ever hit a retail floor. It needed a retail operation to match. Instead, Apple's in-store teams were set up to fail.</P>
        </Card>
        <Card>
          <H3>What the product demanded from retail</H3>
          <ul style={{ paddingLeft: 18, margin: "6px 0 0" }}>
            {["Consultative, low-pressure engagement to justify a $3,499 investment", "Precise, hands-on facial fitting across diverse face shapes", "Deep technical fluency in spatial computing as an entirely new paradigm", "Four-hour guided workshops delivering consistent 'wow moments'"].map((t, i) => <li key={i} style={{ fontSize: 13.5, color: VP.dim, lineHeight: 1.65, marginBottom: 6 }}>{t}</li>)}
          </ul>
        </Card>
        <Callout>By early 2026, Apple had slashed production and cut marketing spend 95%+. Total first-year sales: fewer than 500,000 units. The product had real limitations (price, weight, battery, app ecosystem), but the retail experience ensured many customers never even saw the device at its best.</Callout>
      </>
    ),
  },
  {
    id: "training", label: "Gap 1: Training", content: () => (
      <>
        <SecHeader color={VP.coral}>Gap 1: Inadequate staff training</SecHeader>
        <Card>
          <H3><Tag color="coral">The failure</Tag></H3>
          <P>Despite hosting select employees at Apple Park for high-level sessions, the on-the-ground reality was starkly different. Most frontline associates received approximately 20 minutes of hands-on preparation before being placed in front of customers for complex, multi-hour demos.</P>
          <P style={{ marginTop: 8 }}>Associates were expected to explain spatial computing as a new paradigm, troubleshoot Optic ID calibration, guide customers through immersive experiences, and close a $3,499 sale — all with virtually no rehearsal time.</P>
          <ImpactBar label="Preparedness" pct={8} color={VP.coral} value="Low" />
          <ImpactBar label="Complexity" pct={95} color={VP.amber} value="High" />
          <ImpactBar label="CX impact" pct={90} color={VP.coral} value="Severe" />
        </Card>
        <Connector gapTitle="20-minute crash course" gapText="Staff learned features at a surface level. No role-play, no objection handling, no fitting practice on diverse face shapes." fixTitle="Structured product certification" fixText="Tiered training with hands-on fitting labs, customer scenario role-play, and verified fluency checkpoints before reps hit the floor." />
        <Connector gapTitle="Knowledge concentrated at HQ" gapText="Apple Park sessions reached a tiny fraction of the retail footprint. Expertise didn't cascade to frontline associates." fixTitle="Distributed expertise at scale" fixText="Embedded field reps carry product expertise directly into stores, training and coaching associates on an ongoing cadence — not a one-time event." />
      </>
    ),
  },
  {
    id: "culture", label: "Gap 2: Culture", content: () => (
      <>
        <SecHeader color={VP.coral}>Gap 2: Erosion of retail culture</SecHeader>
        <Card>
          <H3><Tag color="coral">The failure</Tag></H3>
          <P>Apple Retail was originally built around a customer-first philosophy: educate, don't sell. Over time, the culture shifted toward aggressive sales metrics and efficiency targets. By the time the Vision Pro launched, the consultative DNA the product demanded had been systematically deprioritized.</P>
          <P style={{ marginTop: 8 }}>Selling a $3,499 device that requires a paradigm shift in how customers think about computing can't be driven by transactional KPIs. It requires patience, curiosity, and a willingness to spend time without guaranteed conversion.</P>
        </Card>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          <Card borderColor={VP.coral}>
            <H3>Metric-driven culture</H3>
            <ul style={{ paddingLeft: 18, margin: "6px 0 0" }}>
              {["Optimize for units per hour", "Minimize time per customer", "Drive attachment and AOV", "Prioritize high-conversion SKUs"].map((t, i) => <li key={i} style={{ fontSize: 13.5, color: VP.dim, lineHeight: 1.65, marginBottom: 4 }}>{t}</li>)}
            </ul>
          </Card>
          <Card borderColor={VP.teal}>
            <H3>What Vision Pro needed</H3>
            <ul style={{ paddingLeft: 18, margin: "6px 0 0" }}>
              {["Invest 30–60 min per customer", "Educate before selling", "Build comfort with a new paradigm", "Accept lower conversion, higher quality"].map((t, i) => <li key={i} style={{ fontSize: 13.5, color: VP.dim, lineHeight: 1.65, marginBottom: 4 }}>{t}</li>)}
            </ul>
          </Card>
        </div>
        <Connector gapTitle="Sales floor, not showroom" gapText="Associates were incentivized to move volume, not to sit with a customer for 45 minutes building understanding of a brand-new product category." fixTitle="Dedicated brand advocacy" fixText="Field reps operate outside the retailer's metric stack. Their job is education, experience, and brand storytelling — with time and patience built into the role." />
      </>
    ),
  },
  {
    id: "fitting", label: "Gap 3: Fitting", content: () => (
      <>
        <SecHeader color={VP.coral}>Gap 3: The fitting challenge</SecHeader>
        <Card>
          <H3><Tag color="coral">The failure</Tag></H3>
          <P>The Vision Pro required precise physical fitting to unlock its core value. Optic ID (iris authentication), visual clarity, and comfort all depended on the headset sitting correctly on each customer's unique face shape. This was a hands-on, high-touch process that demanded a "human touch" most associates had never been trained to provide.</P>
          <P style={{ marginTop: 8 }}>Inconsistent fitting led directly to degraded demos: blurry visuals, failed Optic ID enrollment, discomfort, and ultimately customers walking away having experienced a $3,499 product performing at a fraction of its capability.</P>
        </Card>
        <Card>
          <H3>Downstream effects of poor fitting</H3>
          <ImpactBar label="Visual quality" pct={85} color={VP.coral} value="Degraded" />
          <ImpactBar label="Optic ID success" pct={70} color={VP.coral} value="Unreliable" />
          <ImpactBar label="Comfort" pct={75} color={VP.amber} value="Poor" />
          <ImpactBar label="Demo impression" pct={90} color={VP.coral} value="Undermined" />
          <ImpactBar label="Return risk" pct={80} color={VP.amber} value="Elevated" />
        </Card>
        <Connector gapTitle="Trial and error on the customer" gapText="Associates guessed at light seal sizes and strap adjustments with no structured fitting protocol or practice reps on varied face shapes." fixTitle="Fitting expertise as a discipline" fixText="Trained field reps develop repeatable fitting protocols, practice across face shapes, and deliver consistent 'first impression' quality every time." />
      </>
    ),
  },
  {
    id: "takeaways", label: "Takeaways", content: () => (
      <>
        <SecHeader color={VP.teal}>The field team value proposition</SecHeader>
        <Callout>The Vision Pro didn't just need a better product. It needed a better retail experience. An informed, embedded field team addresses every gap that Apple's own retail operation failed to close.</Callout>
        {[
          { color: VP.teal, tag: "teal", tagText: "Training gap", title: "Field teams scale expertise to the floor", text: "HQ training sessions don't survive the trip to the sales floor. Field reps carry certified product knowledge directly into retail locations, coaching and reinforcing on a sustained cadence. They ensure every associate who touches the product can demonstrate it with confidence — not just awareness." },
          { color: VP.teal, tag: "teal", tagText: "Culture gap", title: "Field teams protect the brand experience", text: "Retailers optimize for their own KPIs. Field reps operate as the brand's presence inside the store, free to prioritize education, dwell time, and customer experience over transactional velocity. They bridge the gap between what the brand needs and what the retailer's culture incentivizes." },
          { color: VP.teal, tag: "teal", tagText: "Fitting gap", title: "Field teams own the physical experience", text: "For wearable and body-worn tech, the in-store fitting is the product experience. Dedicated field reps build fitting proficiency as a core skill, developing protocols and muscle memory that generalist retail associates will never have time to build." },
          { color: VP.purple, tag: "purple", tagText: "Return mitigation", title: "Better demos = fewer returns", text: "Customers who experience the product at its best during the demo set accurate expectations. Proper fitting reduces discomfort-driven returns. Educated buyers understand the product's strengths and limitations before purchasing, leading to higher satisfaction and lower return rates." },
          { color: VP.purple, tag: "purple", tagText: "Feedback loop", title: "Field intelligence flows upstream", text: "Embedded field teams generate real-time insight on customer objections, fitting pain points, demo friction, and competitive questions. This intel feeds back to product, marketing, and training teams — creating an improvement loop that a disconnected retail workforce cannot provide." },
        ].map((item, i) => (
          <Card key={i} borderColor={item.color}>
            <H3><Tag color={item.tag}>{item.tagText}</Tag>{item.title}</H3>
            <P>{item.text}</P>
          </Card>
        ))}
      </>
    ),
  },
  {
    id: "outlook", label: "Category outlook", content: () => (
      <>
        <SecHeader color={VP.purpleLight}>Implications for smart glasses and wearables</SecHeader>
        <Card>
          <H3>The wearable wave is coming</H3>
          <P>Meta, Samsung, Google, and others are actively developing smart glasses and mixed-reality wearables for mainstream launch windows in 2026–2027. Every one of these products will share the Vision Pro's core retail challenge: they are body-worn, technically complex, and require a physical experience to sell.</P>
          <P style={{ marginTop: 8 }}>The brands that invest in informed field teams will have a structural advantage over those that rely on undertrained retail generalists.</P>
        </Card>
        <Card>
          <H3>Where field teams become non-negotiable</H3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 10 }}>
            {[
              { color: VP.teal, label: "Smart glasses", desc: "Frame fitting, prescription integration, gesture/voice UX education" },
              { color: VP.purpleLight, label: "MR headsets", desc: "Facial fitting, immersive demos, use-case storytelling, return prevention" },
              { color: VP.amber, label: "Advanced wearables", desc: "Sensor accuracy depends on fit; health features require guided setup" },
              { color: VP.blue, label: "AI-powered devices", desc: "New paradigms require patient education, not a spec sheet on a shelf tag" },
            ].map((item, i) => (
              <div key={i} style={{ background: VP.glass, padding: 14, borderRadius: 8 }}>
                <div style={{ fontSize: 13, fontWeight: 500, color: item.color, marginBottom: 4 }}>{item.label}</div>
                <div style={{ fontSize: 12, color: VP.dim }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </Card>
        <Callout>The lesson from Vision Pro is clear: for the next generation of wearable and spatial computing products, the field team isn't a nice-to-have. It's the difference between a customer experiencing the product at its best — or walking away from a broken demo.</Callout>
      </>
    ),
  },
];

export default function VisionProCaseStudy() {
  const [active, setActive] = useState("context");
  const ActiveContent = sections.find((s) => s.id === active)?.content;

  return (
    <div style={{ background: VP.bg, color: VP.text, fontFamily: "var(--font-sans, -apple-system, BlinkMacSystemFont, sans-serif)", lineHeight: 1.7, minHeight: "100vh" }}>
      <div style={{ textAlign: "center", padding: "2.5rem 1.5rem 1.5rem", background: "linear-gradient(180deg, rgba(110,86,207,0.12) 0%, transparent 100%)" }}>
        <div style={{ fontSize: 11, letterSpacing: 3, color: VP.purpleLight, textTransform: "uppercase", marginBottom: 6 }}>Retail case study</div>
        <h1 style={{ fontSize: 26, fontWeight: 500, marginBottom: 4, color: VP.text }}>The Vision Pro retail gap</h1>
        <p style={{ fontSize: 14, color: VP.dim, maxWidth: 540, margin: "0 auto" }}>How undertrained retail teams undermined a $3,499 product launch, and what informed field teams would have changed</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0,1fr))", gap: 10, padding: "0 1.5rem", margin: "1rem auto 1.5rem", maxWidth: 680 }}>
        {[
          { val: "20 min", lbl: "Avg. staff training", color: VP.coral },
          { val: "4 hrs", lbl: "Workshop they had to lead", color: VP.amber },
          { val: "12:1", lbl: "Complexity-to-training ratio", color: VP.teal },
        ].map((m, i) => (
          <div key={i} style={{ background: VP.card, border: `0.5px solid ${VP.glassBorder}`, borderRadius: 12, padding: "14px 12px", textAlign: "center" }}>
            <span style={{ fontSize: 22, fontWeight: 500, display: "block", color: m.color }}>{m.val}</span>
            <span style={{ fontSize: 11, color: VP.dim, display: "block", marginTop: 2 }}>{m.lbl}</span>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", gap: 4, padding: "0 1.5rem", marginBottom: "1.5rem", overflowX: "auto", maxWidth: 680, marginLeft: "auto", marginRight: "auto" }}>
        {sections.map((s) => (
          <button key={s.id} onClick={() => setActive(s.id)} style={{ flexShrink: 0, background: active === s.id ? VP.purple : "transparent", border: `0.5px solid ${active === s.id ? VP.purple : VP.glassBorder}`, color: active === s.id ? "#fff" : VP.dim, fontSize: 13, padding: "7px 14px", borderRadius: 20, cursor: "pointer", transition: "all 0.2s" }}>
            {s.label}
          </button>
        ))}
      </div>

      <div style={{ maxWidth: 680, margin: "0 auto", padding: "0 1.5rem 3rem" }}>
        {ActiveContent && <ActiveContent />}
      </div>
    </div>
  );
}
