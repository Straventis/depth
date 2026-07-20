// Depth — L2 project data. Source: base resume only, no invented facts.
// Rendered into #projList on the /depthL2/ page.
(function () {
  const projects = [
    { org: 'Eagle RTEC LLC · 2005–2007', title: 'Honda-Yazaki Instrument Cluster Integration',
      problem: 'A startup environment with high organizational chaos and rapidly shifting responsibilities, including being stranded in Japan with delayed payroll mid-assignment.',
      role: 'Application Engineer, individual contributor on a cross-cultural team with a Japan-based OEM partner.',
      delivered: 'Built systems integration and HIL testing protocols for instrument cluster electronics, developed low-level firmware and embedded control logic, and migrated legacy control software onto a standardized computing platform that abstracted hardware from application logic.',
      why: 'Reduced hardware integration failures in later deployment stages, improved system response times for safety-critical functions, and cut development cycle times for subsequent product lines via a reusable software foundation.' },
    { org: 'Caterpillar Inc. · 2008–2010', title: 'Engine Platform Controls System Optimization',
      problem: 'Engineering troubleshooting relied on guesswork; software defects were found too late in the engine control development cycle, and physical prototype hardware was a scarce validation bottleneck.',
      role: 'Senior Engineer, shifted into Technical Program Management synchronizing hardware, software, and testing teams for a major product launch.',
      delivered: 'Architected early telemetry and data logging pipelines for field-deployed fleets, and built automated simulation environments to validate control algorithms before hardware availability, using structured Agile practices tailored for cyber-physical systems.',
      why: 'Delivered the program on-time, cut root-cause analysis time ~40% via telemetry, and reduced defect discovery time 25% and post-deployment defects 15% by shifting validation left.' },
    { org: 'Caterpillar Inc. · 2011–2016', title: 'CAT 785C DGB — Large Mining Truck Program',
      problem: 'Teams lacked validation rigor, ownership, and coordination across distributed locations; engine controller platforms needed faster, more trustworthy regression coverage.',
      role: 'Senior Engineer → Engineering Program Manager, leading a 5-person embedded validation team across distributed engineering sites.',
      delivered: 'Developed automated HIL validation frameworks running fault injection, regression, and system-level validation ahead of physical hardware; served as Scrum Master; introduced Agile coaching and Six Sigma DMAIC/DMEDI initiatives.',
      why: 'Cut manual engine testing effort ~40% through automation, improved defect detection 85%, team efficiency 30%, and software reliability 20%.' },
    { org: 'Harman · 2016–2019', title: 'Ford Global Infotainment Program',
      problem: "A $36M, 3-year global infotainment program originally scoped for US/Mexico manufacturing was thrown into a major scope change when Ford discontinued the US Focus mid-program, forcing a shift to EU/APAC, plus a late USB-A to USB-C spec change and a manufacturing flash-time bottleneck.",
      role: 'Customer Technical Program Manager, the liaison across Ford OEM engineering, Tier 1/2 suppliers, and 3 international factories.',
      delivered: 'Realigned factories, suppliers, and launch plans across 5 vehicle programs; ran a data-driven impact analysis to negotiate a phased USB-C rollout; led root-cause analysis and incremental flashing to fix a 50% flash-time spike; applied VA/VE to the BOM.',
      why: '100% on-time launch, zero program-caused delays, $224M+ lifetime sales, 22% BOM cost cut without warranty risk, and the USB-C conflict resolved without missing the Job 1 date.' },
    { org: 'Harman · 2019–2020', title: 'Project Argus',
      problem: 'The Ford program needed a clean wrap-up while Harman needed to stand up an entirely new ADAS platform effort from a standing start, with no proven architecture and a fragmented 3-party supplier ecosystem.',
      role: 'Customer Technical Program Manager → Platform Product Manager, bridging program close-out and a new platform launch.',
      delivered: 'Closed the Ford program while kicking off lidar/CV proof-of-concept work; defined a scalable L2+ to L4 autonomous driving architecture on TI Jacinto processors with AUTOSAR Adaptive middleware; integrated HD map matching with GNSS/IMU odometry.',
      why: '$224M+ lifetime sales secured on program close; established a technical foundation for ≥70% software reuse across autonomy tiers; proved deep learning outperformed heuristic CV models.' },
    { org: 'Harman · 2021–2022', title: 'AI Perception on Edge Compute',
      problem: "Internal pressure pushed an expensive ($1,000+) lidar sensor investment that wasn't market-ready; a vendor's ML model also dropped accuracy over 10% under a compute budget 3 weeks before an OEM demo, and the ADAS ECU failed thermal/EMC testing during DV.",
      role: 'Platform Product Manager, owning platform architecture end-to-end across hardware, firmware, ML, and OEM demo readiness.',
      delivered: 'Built a TAM/SAM/SOM business case and pivoted to a modular, camera-first Edge-AI platform; diagnosed the ML accuracy drop via profiler data and recalibration; fixed the thermal/EMC failure via frame rate scaling, power gating, and spread-spectrum clocking without a hardware redesign.',
      why: 'Secured $3.2M in internal venture funding, proved a camera-only fallback saving $700–900/vehicle in BOM, recovered ML accuracy to a 0.8% drop at 81ms latency, and avoided a $120K board respin.' },
    { org: 'Xperi · 2022–2025', title: 'Enterprise Data Platform (OnePipeline)',
      problem: "A monolithic, rule-based metadata pipeline couldn't keep pace with modern OTT/VOD volume; a later ML matcher migration created a data-integrity deadlock, and pipeline cost/latency crept up silently despite no job failures.",
      role: 'Senior Technical Program/Product Manager, owning platform architecture and delivery across 4 engineering teams.',
      delivered: 'Replaced the legacy pipeline with an ML-driven, service-oriented architecture on AWS/Snowflake/Databricks; halted a migration to prevent DB corruption and redesigned the ML-to-Knowledge-Graph data contract; decoupled the Ad Platform via a CAM microservice; enforced cardinality governance after tracing a row-explosion issue.',
      why: 'Scaled to 240M records/month across 100+ partners and 5M+ MAUs, delivered $7.9M modeled net benefit and $11M legacy OpEx eliminated, cut processing from 25+ hours to ~30 minutes, and protected $500K in at-risk revenue.' },
    { org: 'Xperi · 2024–2025', title: 'Salesforce Q2C &amp; AWS Control Tower',
      problem: 'Certification and royalty tracking was manual (PDFs/emails/SharePoint) with no lab-partner systemization, causing ~$800K–$1M/year in missed revenue and a 70% manual-flow error rate. Separately, AWS usage had no centralized governance and a misconfiguration caused a multi-hour outage.',
      role: 'Senior Technical Product Manager, the bridge across Engineering, Sales, IT, Security, FinOps, and external partners including AWS/Caylent.',
      delivered: 'Owned the Salesforce Global Certification Hub with an anonymized lab-routing engine and zero-touch SDK provisioning via CI/CD; led AWS Control Tower implementation, migrating ~90 accounts into a governed, Terraform-provisioned structure integrated with ServiceNow.',
      why: 'Corrected ~$800K–$1M/year in revenue, cut processing time 50% and workflow errors 70%, hit 92% first-time-right SDK delivery, and closed the RAM/IPAM outage risk.' },
    { org: 'Xperi · 2024', title: 'Xperi LumApps DFD',
      problem: 'A legacy SharePoint intranet left employees without a centralized hub, forcing them to navigate multiple disconnected systems for HR, communications, and daily tools.',
      role: 'Senior Technical Product Manager, owning the implementation over a 6-month timeline from discovery through handover.',
      delivered: 'Configured LumApps and built integrations to pull existing systems into one Digital Front Door, migrated essential communications from SharePoint, ran UAT, and trained the Marketing team on content management and governance.',
      why: 'Launched a centralized hub on schedule within 6 months without disrupting existing workflows, and Marketing became fully self-sufficient managing communications post-handover.' },
    { org: 'Straventis Advisory Group · 2025–Present', title: 'ContentIQ',
      problem: 'Manually exporting and reviewing content performance was easy to forget and gave only a single snapshot in time, with no historical growth tracking per post.',
      role: 'Founder &amp; Principal Consultant, solo build across product, architecture, and public launch.',
      delivered: "Built a content analytics pipeline from scratch with defensive multi-format parsing after the source platform changed its export format without warning; shipped a full working dashboard with KPI cards, engagement views, and date-range filtering; took it from private tool to a public product with a landing page, roadmap, and signup flow; chose Cloudflare Workers for the backend and documented that tradeoff.",
      why: 'Turned a manual, easy-to-forget export process into a real historical growth record, delivering a concrete working tool rather than a resume line, positioned for both portfolio showcase and live beta-tester recruitment.' },
    { org: 'Straventis Advisory Group · 2025–Present', title: 'Particleblack / Ascension DFD',
      problem: 'A four-vendor Digital Front Door engagement for Ascension Health was at risk with reactive escalation and no clear ownership layers; later, Oracle HCM APIs were severely delayed and stakeholders conflicted over which features to prioritize.',
      role: 'Founder &amp; Principal Consultant, program leadership for the engagement.',
      delivered: 'Standardized Agile delivery and value-based prioritization across 4 vendors; built a 4-layer governance operating model; instituted Jira as the single source of truth; negotiated a UI workaround for the delayed system and prioritized the highest user-impact features first.',
      why: 'Shifted an at-risk program to a 6-week cadence delivering 95% of planned content, extended the engagement into a $3M contract, and stabilized the SIT 3 window by driving completion of 36 delayed endpoints.' }
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
