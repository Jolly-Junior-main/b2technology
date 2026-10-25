import React, { useState } from 'react';
import { ShieldCheck, Zap, Activity, Code2, Server } from 'lucide-react';

export const B2RibbonHero: React.FC = () => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [activeSnippetTab, setActiveSnippetTab] = useState<'stack' | 'deploy'>('stack');

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -16;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div 
      className="relative w-full max-w-5xl mx-auto py-8 px-4"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Surrounding Ambient Radial Glow behind the dashboard */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[580px] h-[400px] bg-gradient-to-tr from-[#7B2CBF]/30 via-[#9D4EDD]/25 to-[#C77DFF]/15 blur-[100px] rounded-full pointer-events-none -z-10" />

      {/* Main Glassmorphic Portal Showcase */}
      <div 
        className="relative rounded-2xl glass-panel p-6 sm:p-8 transition-transform duration-300 ease-out"
        style={{
          transform: `perspective(1200px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
        }}
      >
        {/* Top Header of the Showcase Dashboard */}
        <div className="flex items-center justify-between border-b border-[#C77DFF]/15 pb-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/70 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70 inline-block" />
            </div>
            <span className="text-xs font-mono text-[#B8A9C9] tracking-wider ml-2">
              b2-command-portal.engine // enterprise-tier
            </span>
          </div>
          <div className="flex items-center gap-3 text-xs font-mono text-[#E0AAFF]">
            <span className="flex items-center gap-1.5 bg-[#9D4EDD]/15 px-2.5 py-1 rounded-md border border-[#C77DFF]/25">
              <Activity className="w-3.5 h-3.5 text-[#C77DFF]" />
              99.99% UPTIME
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5 text-[#B8A9C9]">
              <Zap className="w-3.5 h-3.5 text-[#C77DFF]" />
              24ms EDGE LATENCY
            </span>
          </div>
        </div>

        {/* Center Grid: 3D Ribbon Logo + Surrounding Floating Widgets */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Left Column Widgets */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            {/* Widget 1: Cloud & Hosting SLA */}
            <div className="glass-panel p-4 rounded-xl border border-[#C77DFF]/20 hover:border-[#C77DFF]/50 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1.5 rounded-lg bg-[#7B2CBF]/30 text-[#E0AAFF]">
                  <Server className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-white">Edge Fleet</h4>
                  <p className="text-[10px] text-[#B8A9C9]">42 Global Locations</p>
                </div>
              </div>
              <div className="space-y-1.5 pt-2 border-t border-[#C77DFF]/10 text-[11px] font-mono">
                <div className="flex justify-between">
                  <span className="text-[#B8A9C9]">Throughput</span>
                  <span className="text-white font-medium">1.4M req/sec</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#B8A9C9]">DDoS Shield</span>
                  <span className="text-[#C77DFF]">Zero-Trust Active</span>
                </div>
              </div>
            </div>

            {/* Widget 2: Security & IT Support */}
            <div className="glass-panel p-4 rounded-xl border border-[#C77DFF]/20 hover:border-[#C77DFF]/50 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1.5 rounded-lg bg-[#7B2CBF]/30 text-[#E0AAFF]">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-white">24/7 Security SOC</h4>
                  <p className="text-[10px] text-[#B8A9C9]">Proactive Monitoring</p>
                </div>
              </div>
              <div className="w-full bg-[#130924] rounded-full h-1.5 mt-2 overflow-hidden">
                <div className="bg-gradient-to-r from-[#7B2CBF] to-[#C77DFF] h-full rounded-full w-[98%]" />
              </div>
              <p className="text-[10px] font-mono text-[#E0AAFF] mt-1.5 text-right">0 Critical Vulnerabilities</p>
            </div>
          </div>

          {/* Centerpiece: The 3D Purple Ribbon "B2" Emblem */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center py-4 relative">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center">
              {/* Outer orbital rings */}
              <div className="absolute inset-0 rounded-full border border-[#C77DFF]/20 animate-spin" style={{ animationDuration: '30s' }} />
              <div className="absolute inset-4 rounded-full border border-dashed border-[#9D4EDD]/25 animate-spin" style={{ animationDuration: '45s', animationDirection: 'reverse' }} />

              {/* 3D Purple Ribbon B2 Vector Sculpture */}
              <svg 
                viewBox="0 0 320 320" 
                className="w-full h-full relative z-10 drop-shadow-[0_20px_45px_rgba(157,78,221,0.55)]"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Front Ribbon Gradient */}
                  <linearGradient id="ribbonFront" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFFFFF" />
                    <stop offset="25%" stopColor="#E0AAFF" />
                    <stop offset="60%" stopColor="#9D4EDD" />
                    <stop offset="100%" stopColor="#5A189A" />
                  </linearGradient>

                  {/* Back Ribbon Shadow Gradient */}
                  <linearGradient id="ribbonBack" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#240046" />
                    <stop offset="50%" stopColor="#3C096C" />
                    <stop offset="100%" stopColor="#7B2CBF" />
                  </linearGradient>

                  {/* Ribbon Fold Edge Highlight */}
                  <linearGradient id="ribbonFold" x1="0%" y1="0%" x2="100%" y2="50%">
                    <stop offset="0%" stopColor="#C77DFF" />
                    <stop offset="50%" stopColor="#7B2CBF" />
                    <stop offset="100%" stopColor="#10002B" />
                  </linearGradient>

                  {/* Specular Glint */}
                  <radialGradient id="glint" cx="50%" cy="30%" r="40%">
                    <stop offset="0%" stopColor="rgba(255, 255, 255, 0.9)" />
                    <stop offset="50%" stopColor="rgba(224, 170, 255, 0.4)" />
                    <stop offset="100%" stopColor="transparent" />
                  </radialGradient>

                  <filter id="purpleGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="8" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Back twist layer of the 3D Ribbon */}
                <path
                  d="M110 80 C70 80, 50 120, 50 160 C50 200, 75 240, 120 240 C150 240, 175 220, 195 190 L165 170 C145 195, 130 205, 115 205 C90 205, 80 185, 80 160 C80 135, 95 115, 120 115 C145 115, 160 130, 175 150 L205 130 C185 100, 155 80, 110 80 Z"
                  fill="url(#ribbonBack)"
                  opacity="0.85"
                />

                {/* Foreground Primary Ribbon Loop 'B' and '2' twist */}
                <path
                  d="M95 65 C135 65, 170 85, 195 120 C220 155, 240 205, 275 205 C295 205, 305 190, 305 175 C305 155, 285 140, 260 140 L260 110 C295 110, 330 135, 330 175 C330 215, 295 240, 260 240 C215 240, 185 195, 160 155 C140 125, 125 98, 95 98 C80 98, 70 108, 70 125 L40 125 C40 90, 65 65, 95 65 Z"
                  fill="url(#ribbonFront)"
                  filter="url(#purpleGlow)"
                />

                {/* Overlapping Sharp 3D Fold Ribbon Bevel */}
                <path
                  d="M160 155 L195 120 L210 135 L175 170 Z"
                  fill="url(#ribbonFold)"
                />

                {/* Specular 3D Highlight Curve */}
                <path
                  d="M100 70 C130 70, 160 85, 185 115 L175 125 C155 100, 130 85, 105 85 Z"
                  fill="url(#glint)"
                />
                
                {/* Secondary 3D Specular Highlight */}
                <path
                  d="M235 180 C245 210, 265 225, 285 225 C298 225, 310 215, 310 195 L295 195 C295 205, 288 212, 280 212 C265 212, 252 200, 245 175 Z"
                  fill="#FFFFFF"
                  opacity="0.6"
                />

                {/* Floating Core Holographic Emblem Badge */}
                <circle cx="160" cy="160" r="36" fill="#0B0318" stroke="url(#ribbonFold)" strokeWidth="2.5" />
                <circle cx="160" cy="160" r="32" fill="none" stroke="#C77DFF" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
                
                <text 
                  x="160" 
                  y="167" 
                  textAnchor="middle" 
                  fill="#FFFFFF" 
                  fontSize="22" 
                  fontWeight="800" 
                  fontFamily="'Outfit', sans-serif"
                  letterSpacing="1"
                  filter="drop-shadow(0 0 6px #C77DFF)"
                >
                  B2
                </text>
              </svg>

              {/* Holographic Platform Base */}
              <div className="absolute -bottom-4 w-44 h-8 bg-gradient-to-r from-transparent via-[#C77DFF]/40 to-transparent blur-md rounded-full pointer-events-none" />
            </div>

            <p className="text-center text-xs font-mono tracking-widest text-[#B8A9C9] mt-2">
              B2 ARCHITECTURAL EMBLEM // 3D RIBBON
            </p>
          </div>

          {/* Right Column: Code Snippet & Interactive Architecture Preview */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            {/* Widget 3: Live Code Snippet */}
            <div className="glass-panel p-4 rounded-xl border border-[#C77DFF]/20 hover:border-[#C77DFF]/50 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5 text-xs text-white font-mono">
                  <Code2 className="w-3.5 h-3.5 text-[#C77DFF]" />
                  <span>pipeline.ts</span>
                </div>
                <div className="flex items-center gap-1 bg-[#130924] p-0.5 rounded text-[10px] font-mono">
                  <button 
                    onClick={() => setActiveSnippetTab('stack')}
                    className={`px-1.5 py-0.5 rounded transition-colors ${activeSnippetTab === 'stack' ? 'bg-[#7B2CBF] text-white' : 'text-[#B8A9C9]'}`}
                  >
                    Stack
                  </button>
                  <button 
                    onClick={() => setActiveSnippetTab('deploy')}
                    className={`px-1.5 py-0.5 rounded transition-colors ${activeSnippetTab === 'deploy' ? 'bg-[#7B2CBF] text-white' : 'text-[#B8A9C9]'}`}
                  >
                    Deploy
                  </button>
                </div>
              </div>

              {activeSnippetTab === 'stack' ? (
                <pre className="text-[10px] font-mono text-[#E0AAFF] bg-[#070210] p-2.5 rounded-lg overflow-x-auto leading-relaxed border border-[#C77DFF]/10">
                  <code>{`// B2 Core Stack
export const b2Solution = {
  frontend: "Next / React 19",
  cloud: "Multi-Region Edge",
  security: "Zero-Trust TLS",
  sla: "99.99% Guaranteed"
};`}</code>
                </pre>
              ) : (
                <pre className="text-[10px] font-mono text-emerald-300 bg-[#070210] p-2.5 rounded-lg overflow-x-auto leading-relaxed border border-[#C77DFF]/10">
                  <code>{`$ b2 deploy --prod
✓ Built in 410ms
✓ Distributed to 42 PoPs
✓ SSL Certificates Active
STATUS: HEALTHY 🟢`}</code>
                </pre>
              )}
            </div>

            {/* Widget 4: Growth / Scaling Metric */}
            <div className="glass-panel p-4 rounded-xl border border-[#C77DFF]/20 hover:border-[#C77DFF]/50 transition-colors">
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#B8A9C9]">Client Growth Metric</span>
                <span className="text-xs font-mono font-semibold text-[#C77DFF]">+240%</span>
              </div>
              <div className="h-10 flex items-end gap-1.5 mt-2 pt-2 border-t border-[#C77DFF]/10">
                <div className="flex-1 bg-[#7B2CBF]/30 rounded-t h-[35%]" />
                <div className="flex-1 bg-[#7B2CBF]/40 rounded-t h-[48%]" />
                <div className="flex-1 bg-[#7B2CBF]/50 rounded-t h-[62%]" />
                <div className="flex-1 bg-[#9D4EDD]/70 rounded-t h-[78%]" />
                <div className="flex-1 bg-[#C77DFF] rounded-t h-[95%] shadow-[0_0_8px_#C77DFF]" />
              </div>
              <p className="text-[9px] text-[#B8A9C9] mt-1 text-center font-mono">Quarter-over-Quarter Organic Scale</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
