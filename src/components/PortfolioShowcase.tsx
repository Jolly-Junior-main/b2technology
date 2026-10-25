import React, { useState } from 'react';
import { ExternalLink, Zap, Layers, Server, ShoppingBag, Cpu, CheckCircle } from 'lucide-react';

interface ProjectCaseStudy {
  id: string;
  title: string;
  category: string;
  tag: string;
  description: string;
  stats: { label: string; value: string }[];
  accentColor: string;
  uiMockup: React.ReactNode;
}

export const PortfolioShowcase: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<string | null>(null);

  const projects: ProjectCaseStudy[] = [
    {
      id: 'apex-cloud',
      title: 'Apex Global Cloud Engine',
      category: 'Cloud & Hosting',
      tag: 'Cloud & Infrastructure',
      description: 'Architected a multi-region distributed edge compute network with automated zero-downtime rolling deploys and DDoS telemetry mitigation for a high-frequency trading platform.',
      stats: [
        { label: 'Throughput Scaling', value: '+420%' },
        { label: 'Global Edge Latency', value: '18ms' },
        { label: 'Uptime SLA', value: '99.999%' },
      ],
      accentColor: '#C77DFF',
      uiMockup: (
        <div className="w-full h-44 bg-[#090314] rounded-xl p-3 border border-[#C77DFF]/20 flex flex-col justify-between font-mono text-[10px]">
          <div className="flex items-center justify-between border-b border-[#C77DFF]/10 pb-2">
            <div className="flex items-center gap-1.5 text-[#E0AAFF]">
              <Server className="w-3.5 h-3.5 text-[#C77DFF]" />
              <span>edge-cluster-us-east.mesh</span>
            </div>
            <span className="text-emerald-400 font-semibold">ONLINE 100%</span>
          </div>
          <div className="grid grid-cols-3 gap-2 py-2">
            <div className="bg-[#140826] p-2 rounded border border-[#C77DFF]/15">
              <span className="text-[#B8A9C9] block text-[9px]">Ingress</span>
              <span className="text-white font-bold text-xs">84.2 GB/s</span>
            </div>
            <div className="bg-[#140826] p-2 rounded border border-[#C77DFF]/15">
              <span className="text-[#B8A9C9] block text-[9px]">P99 Latency</span>
              <span className="text-[#C77DFF] font-bold text-xs">18.4 ms</span>
            </div>
            <div className="bg-[#140826] p-2 rounded border border-[#C77DFF]/15">
              <span className="text-[#B8A9C9] block text-[9px]">Active PoPs</span>
              <span className="text-white font-bold text-xs">42 nodes</span>
            </div>
          </div>
          <div className="flex items-center justify-between text-[9px] text-[#B8A9C9] pt-1 border-t border-[#C77DFF]/10">
            <span>TLS 1.3 Certified</span>
            <span className="text-[#E0AAFF]">Zero packet loss</span>
          </div>
        </div>
      ),
    },
    {
      id: 'lumina-luxury',
      title: 'Lumina Digital Commerce',
      category: 'Website Development',
      tag: 'Web Dev & UI/UX',
      description: 'Engineered an ultra-luxurious, dark-mode headless e-commerce experience featuring 3D product interactions, instant edge caching, and a frictionless 1-click checkout flow.',
      stats: [
        { label: 'Mobile Conversion', value: '+165%' },
        { label: 'First Contentful Paint', value: '0.9s' },
        { label: 'Q4 Pipeline Revenue', value: '$4.2M' },
      ],
      accentColor: '#9D4EDD',
      uiMockup: (
        <div className="w-full h-44 bg-[#090314] rounded-xl p-3 border border-[#C77DFF]/20 flex flex-col justify-between font-mono text-[10px]">
          <div className="flex items-center justify-between border-b border-[#C77DFF]/10 pb-2">
            <div className="flex items-center gap-1.5 text-white font-sans font-semibold">
              <ShoppingBag className="w-3.5 h-3.5 text-[#C77DFF]" />
              <span>LUMINA LUXE STOREFRONT</span>
            </div>
            <span className="text-[#C77DFF] text-[9px]">CART (2)</span>
          </div>
          <div className="flex items-center gap-3 py-1">
            <div className="w-16 h-16 rounded-lg bg-gradient-to-tr from-[#240046] to-[#7B2CBF] flex items-center justify-center text-white border border-[#C77DFF]/30 text-[10px] font-sans font-bold">
              3D VIEW
            </div>
            <div className="flex-1 space-y-1">
              <span className="text-white font-sans text-xs font-semibold block">Chronograph Obsidian Edition</span>
              <span className="text-emerald-400 font-bold">$2,850.00</span>
              <span className="text-[9px] text-[#B8A9C9] block">Instant Next-Day Air Delivery</span>
            </div>
          </div>
          <div className="bg-[#7B2CBF]/30 p-1.5 rounded text-center text-white font-sans font-semibold text-[10px] border border-[#C77DFF]/30">
            Apple Pay · Instant Checkout
          </div>
        </div>
      ),
    },
    {
      id: 'nexaflow-erp',
      title: 'NexaFlow Enterprise Orchestrator',
      category: 'Custom Solutions',
      tag: 'Custom Software & APIs',
      description: 'Built a custom unified operations engine integrating disparate legacy ERP databases, automated invoice routing, and real-time cross-departmental supply chain tracking.',
      stats: [
        { label: 'Automated Operations', value: '75%' },
        { label: 'API Sync Speedup', value: '10x' },
        { label: 'Enterprise Users', value: '2,500+' },
      ],
      accentColor: '#7B2CBF',
      uiMockup: (
        <div className="w-full h-44 bg-[#090314] rounded-xl p-3 border border-[#C77DFF]/20 flex flex-col justify-between font-mono text-[10px]">
          <div className="flex items-center justify-between border-b border-[#C77DFF]/10 pb-2">
            <div className="flex items-center gap-1.5 text-[#E0AAFF]">
              <Cpu className="w-3.5 h-3.5 text-[#C77DFF]" />
              <span>pipeline-orchestrator.sync</span>
            </div>
            <span className="text-emerald-400 text-[9px]">LIVE SYNC</span>
          </div>
          <div className="space-y-1.5 py-1">
            <div className="flex items-center justify-between bg-[#130826] px-2 py-1 rounded">
              <span className="text-[#B8A9C9]">Warehouse DB ↔ CRM</span>
              <span className="text-emerald-300">Synchronized (0ms)</span>
            </div>
            <div className="flex items-center justify-between bg-[#130826] px-2 py-1 rounded">
              <span className="text-[#B8A9C9]">Automated Billing Dispatch</span>
              <span className="text-[#C77DFF]">1,420 invoices processed</span>
            </div>
          </div>
          <div className="flex items-center justify-between text-[9px] text-[#B8A9C9] pt-1 border-t border-[#C77DFF]/10">
            <span>Audit Invariants: Passed</span>
            <span className="text-white font-mono">SOC2 Type II</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="portfolio" className="relative py-20 px-4 sm:px-6 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C77DFF] mb-3">
          <span>FEATURED WORK & CASE STUDIES</span>
          <span className="text-white/40">·</span>
          <span>PROVEN ROI & BENCHMARKS</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
          Transformative Outcomes In{' '}
          <span className="text-metallic-purple">Action</span>
        </h2>
        <p className="text-[#B8A9C9] text-base sm:text-lg mt-4 leading-relaxed font-sans">
          Inspect how our multidisciplinary approach turns technical complexity into tangible business growth.
        </p>
      </div>

      {/* 3 Sleek Glassmorphic Portfolio Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group rounded-2xl glass-panel p-6 flex flex-col justify-between border border-[#C77DFF]/20 hover:border-[#C77DFF]/60 hover:shadow-[0_15px_45px_rgba(157,78,221,0.3)] transition-all duration-300 relative overflow-hidden"
          >
            {/* Top Badge & Tag */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono text-[#E0AAFF] bg-[#160A2A] px-2.5 py-1 rounded-md border border-[#C77DFF]/20">
                  {project.tag}
                </span>
                <span className="text-xs text-[#B8A9C9] font-mono">
                  {project.category}
                </span>
              </div>

              {/* Dark mode UI Mockup Frame */}
              <div className="mb-6 transform group-hover:scale-[1.02] transition-transform duration-300 shadow-lg">
                {project.uiMockup}
              </div>

              <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-[#E0AAFF] transition-colors">
                {project.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#B8A9C9] leading-relaxed mb-6 font-sans">
                {project.description}
              </p>
            </div>

            {/* Hover-Reveal Performance Stats Bar */}
            <div className="pt-4 border-t border-[#C77DFF]/15">
              <div className="grid grid-cols-3 gap-2 text-center bg-[#100620]/80 p-3 rounded-xl border border-[#C77DFF]/15 group-hover:border-[#C77DFF]/40 transition-colors">
                {project.stats.map((stat) => (
                  <div key={stat.label}>
                    <span className="text-sm sm:text-base font-display font-extrabold text-[#C77DFF] block">
                      {stat.value}
                    </span>
                    <span className="text-[9px] font-mono text-[#B8A9C9] block truncate">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setSelectedCase(selectedCase === project.id ? null : project.id)}
                className="w-full mt-4 py-2 rounded-xl text-xs font-semibold text-[#E0AAFF] hover:text-white glass-panel border border-[#C77DFF]/20 hover:border-[#C77DFF]/60 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>{selectedCase === project.id ? 'Close Details' : 'View Architecture'}</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#C77DFF]" />
              </button>
            </div>

            {/* In-card architecture breakdown when expanded */}
            {selectedCase === project.id && (
              <div className="mt-4 p-4 rounded-xl bg-[#090212] border border-[#C77DFF]/30 text-xs space-y-2 animate-fade-in">
                <span className="text-xs font-mono font-semibold text-[#E0AAFF] block">
                  Technical Implementation Highlights:
                </span>
                <ul className="space-y-1.5 text-[#B8A9C9]">
                  <li className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-[#C77DFF] shrink-0" />
                    <span>Deployed on Global Multi-Zone Edge Nodes</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-[#C77DFF] shrink-0" />
                    <span>Automated Continuous Integration & Zero Downtime</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-[#C77DFF] shrink-0" />
                    <span>Custom Security Audit & Ingress Shielding</span>
                  </li>
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

    </section>
  );
};
