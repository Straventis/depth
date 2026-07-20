// Depth — L2 project data. Source: base resume only, no invented facts.
// Rendered into #projList on the /depthL2/ page.
(function () {
  const projects = [
    { org: 'Straventis Advisory Group · 2025–Present', title: 'Digital Front Door — Ascension Health',
      problem: 'A four-vendor healthcare program had lost cadence and stakeholder confidence.',
      role: 'Founder &amp; Principal Consultant, brought in to rebuild the delivery model from scratch.',
      delivered: 'Standardized Agile delivery and a four-layer governance model across all four vendors; moved the program to a six-week cadence delivering 95% of planned scope.',
      why: "The engagement's outcome extended the original scope into a $3M contract." },
    { org: 'Xperi (TiVo) · 2022–2025', title: 'OnePipeline — AI/ML Metadata Platform',
      problem: "TiVo's metadata pipeline was a monolithic, rule-based system that couldn't keep pace with modern OTT/VOD volume, taking 25+ hours to process incremental updates.",
      role: 'Senior Technical Product Manager, owned the initiative from business case through go-live.',
      delivered: 'Set the ML accuracy targets (85% accuracy, 0.65 macro F1) and the two-stage matching architecture, scaling to 240M records/month across 100+ partners and cutting processing time to about 30 minutes.',
      why: 'Delivered ~$7.9M in modeled net benefit and avoided ~$11M in legacy infrastructure cost over three years.' },
    { org: 'Xperi (TiVo) · 2022–2025', title: 'Salesforce Certification Platform',
      problem: 'Manufacturers certifying products for DTS, IMAX Enhanced, and HD Radio went through a manual, email-tracked process with no reliable way to match SDKs to contracts.',
      role: 'Senior Technical Product Manager, wrote the PRDs and workflow designs that became the build.',
      delivered: 'A Salesforce platform connecting the internal console, customer portal, and CPQ/billing engine, later extended with Einstein AI and a pilot of AgentForce for automated routing.',
      why: 'Recovered ~$1M/year in revenue leakage and ~$3.5M in combined savings over three years.' },
    { org: 'Harman International · 2020–2022', title: 'ADAS / DMS Platform (0-to-1)',
      problem: 'Harman had no production-ready driver monitoring system and no established path into the $2.4B ADAS market.',
      role: 'Engineering Product Manager, owned the roadmap from zero.',
      delivered: "Evaluated lidar hardware from four vendors, concluded an $8,000 sensor wasn't commercially viable in 2020, and redirected the roadmap to a camera-first DMS/OMS platform; held delivery to ISO 26262 ASIL-B, clearing every milestone six weeks ahead of the OEM audit.",
      why: "The pivot shaped Harman's entire ADAS entry strategy; traceability reached 90–95% from requirement to shipped content." },
    { org: 'Harman International · 2016–2020', title: 'Ford Global Infotainment Program',
      problem: 'A three-year, $36M infotainment program spanning multiple factories and regions needed a single point of technical program accountability.',
      role: 'Customer Technical Program Manager, the liaison between Ford engineering and Harman delivery.',
      delivered: 'Ran the program from design spec through global production launch across APAC and EMEA, applying VA/VE principles that cut BOM cost 22% without affecting quality or OEM warranty commitments.',
      why: '100% on-time launch, zero program-caused delays, and $224M+ in lifetime sales.' },
    { org: 'Caterpillar Inc. · 2005–2016', title: 'Embedded Program Management',
      problem: 'Mining truck engine programs needed to move from ad hoc engineering support to structured program delivery.',
      role: 'Started as an application engineer writing control system models in C and Matlab/Simulink, then moved into program management for embedded software delivery.',
      delivered: 'Eleven years of engineering and program execution on safety-relevant embedded systems.',
      why: "The origin of the traceability and validation instincts that carried into every ADAS and infotainment program since." }
  ];

  document.addEventListener('DOMContentLoaded', () => {
    const list = document.getElementById('projList');
    if (!list) return;
    projects.forEach((p, i) => {
      const el = document.createElement('details');
      el.className = 'proj';
      if (i === 0) el.open = true;
      el.innerHTML = `
        <summary>
          <div><span class="path">${p.org}</span><h3>${p.title}</h3></div>
          <span class="chevron">▾</span>
        </summary>
        <div class="body">
          <div class="field"><div class="k">The problem</div><p>${p.problem}</p></div>
          <div class="field"><div class="k">My role</div><p>${p.role}</p></div>
          <div class="field"><div class="k">What shipped</div><p>${p.delivered}</p></div>
          <div class="field"><div class="k">Why it mattered</div><p>${p.why}</p></div>
        </div>`;
      list.appendChild(el);
    });
  });
})();
