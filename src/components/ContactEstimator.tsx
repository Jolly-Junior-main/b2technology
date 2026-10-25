import React, { useState, useEffect } from 'react';
import { 
  Mail, Phone, MapPin, QrCode, Check, Send, 
  Sparkles, Clock, DollarSign, Copy, CheckCircle2, AlertCircle 
} from 'lucide-react';
import { 
  ServiceId, ProjectScope, DeliverySpeed, 
  calculateEstimate, validateInquiryForm, EstimationResult 
} from '../utils/estimator';

interface ContactEstimatorProps {
  initialServiceId?: ServiceId | null;
}

export const ContactEstimator: React.FC<ContactEstimatorProps> = ({ initialServiceId }) => {
  const [selectedServices, setSelectedServices] = useState<ServiceId[]>(['web-dev']);
  const [scope, setScope] = useState<ProjectScope>('growth');
  const [speed, setSpeed] = useState<DeliverySpeed>('standard');
  const [includeAudit, setIncludeAudit] = useState(true);
  const [dedicatedSla, setDedicatedSla] = useState(false);

  // Form inputs
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedContact, setCopiedContact] = useState(false);

  // Synchronize when initialServiceId changes
  useEffect(() => {
    if (initialServiceId && !selectedServices.includes(initialServiceId)) {
      setSelectedServices((prev) => [...prev, initialServiceId]);
    }
  }, [initialServiceId]);

  const toggleService = (id: ServiceId) => {
    setSelectedServices((prev) => 
      prev.includes(id) 
        ? (prev.length > 1 ? prev.filter((s) => s !== id) : prev) 
        : [...prev, id]
    );
  };

  const estimate: EstimationResult = calculateEstimate({
    selectedServices,
    scope,
    speed,
    includeAudit,
    dedicatedSla,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateInquiryForm({
      fullName,
      email,
      selectedServices,
      message,
    });

    if (!validation.isValid) {
      setFormErrors(validation.errors);
      return;
    }

    setFormErrors({});
    setIsSubmitted(true);
  };

  const handleCopyVCard = () => {
    const vcard = `BEGIN:VCARD\nVERSION:3.0\nFN:B2 Technologies\nORG:B2 Technologies Inc.\nEMAIL:contact@b2technologies.com\nTEL:+1-800-550-2283\nURL:https://b2technologies.com\nNOTE:Building a Smarter Tomorrow. Ideas. Websites. Solutions.\nEND:VCARD`;
    navigator.clipboard.writeText(vcard);
    setCopiedContact(true);
    setTimeout(() => setCopiedContact(false), 3000);
  };

  const serviceOptions: { id: ServiceId; label: string }[] = [
    { id: 'web-dev', label: 'Website Development' },
    { id: 'cloud-hosting', label: 'Cloud & Hosting' },
    { id: 'digital-marketing', label: 'Digital Marketing' },
    { id: 'it-support', label: 'IT Support & Maintenance' },
    { id: 'custom-solutions', label: 'Custom Solutions' },
  ];

  return (
    <section id="contact" className="relative py-20 px-4 sm:px-6 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C77DFF] mb-3">
          <span>PROJECT ESTIMATOR & INQUIRY</span>
          <span className="text-white/40">·</span>
          <span>GET IN TOUCH</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
          Ready to Build <span className="text-metallic-purple">A Smarter Tomorrow?</span>
        </h2>
        <p className="text-[#B8A9C9] text-base sm:text-lg mt-4 leading-relaxed font-sans">
          Estimate your investment and delivery timeline in real-time, or send our solutions architects a direct briefing.
        </p>
      </div>

      {/* Large Frosted Glass Split Container */}
      <div className="rounded-3xl glass-panel border border-[#C77DFF]/30 p-6 sm:p-10 lg:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] relative overflow-hidden">
        
        {/* Interior ambient light */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#7B2CBF]/20 blur-[120px] rounded-full pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Direct Contact Info & Mobile QR Card */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-[#180A2D] border border-[#C77DFF]/30 text-xs font-mono text-[#E0AAFF] mb-4">
                DIRECT ACCESS
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white mb-4">
                Connect With Our Solutions Team
              </h3>
              <p className="text-sm text-[#B8A9C9] leading-relaxed mb-8 font-sans">
                Whether you need a full enterprise overhaul or a targeted sprint, our principal engineers and architects are ready to assist.
              </p>

              {/* Contact details list */}
              <div className="space-y-4">
                <a 
                  href="mailto:contact@b2technologies.com"
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-[#120822] border border-[#C77DFF]/15 hover:border-[#C77DFF]/50 transition-colors group"
                >
                  <div className="p-2.5 rounded-lg bg-[#7B2CBF]/25 text-[#E0AAFF] group-hover:bg-[#7B2CBF] group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[#B8A9C9] block">Direct Inquiries</span>
                    <span className="text-sm font-semibold text-white group-hover:text-[#E0AAFF] transition-colors">
                      contact@b2technologies.com
                    </span>
                  </div>
                </a>

                <a 
                  href="tel:+18005502283"
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-[#120822] border border-[#C77DFF]/15 hover:border-[#C77DFF]/50 transition-colors group"
                >
                  <div className="p-2.5 rounded-lg bg-[#7B2CBF]/25 text-[#E0AAFF] group-hover:bg-[#7B2CBF] group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[#B8A9C9] block">Toll-Free Phone</span>
                    <span className="text-sm font-semibold text-white group-hover:text-[#E0AAFF] transition-colors">
                      +1 (800) 550-B2TECH
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-3.5 rounded-xl bg-[#120822] border border-[#C77DFF]/15">
                  <div className="p-2.5 rounded-lg bg-[#7B2CBF]/25 text-[#E0AAFF]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[#B8A9C9] block">Headquarters & Edge</span>
                    <span className="text-sm font-semibold text-white">
                      Silicon Valley, CA · Global Remote Edge
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive QR Code Card for Mobile Saving */}
            <div className="rounded-2xl bg-[#0C0418] border border-[#C77DFF]/25 p-5 shadow-inner">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <QrCode className="w-4 h-4 text-[#C77DFF]" />
                  <span className="text-xs font-mono font-semibold text-white uppercase tracking-wider">
                    Instant Mobile Contact Card
                  </span>
                </div>
                <button
                  onClick={handleCopyVCard}
                  className="text-[11px] font-mono text-[#C77DFF] hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
                >
                  {copiedContact ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy vCard</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center gap-4">
                {/* Clean Bespoke SVG QR Code graphic */}
                <div className="w-20 h-20 bg-white p-1.5 rounded-xl shrink-0 flex items-center justify-center shadow-[0_0_15px_rgba(199,125,255,0.4)]">
                  <svg viewBox="0 0 100 100" className="w-full h-full" fill="#0B0418">
                    {/* Top Left Corner */}
                    <rect x="10" y="10" width="28" height="28" fill="#0B0418" rx="4" />
                    <rect x="16" y="16" width="16" height="16" fill="white" rx="2" />
                    <rect x="20" y="20" width="8" height="8" fill="#7B2CBF" />

                    {/* Top Right Corner */}
                    <rect x="62" y="10" width="28" height="28" fill="#0B0418" rx="4" />
                    <rect x="68" y="16" width="16" height="16" fill="white" rx="2" />
                    <rect x="72" y="20" width="8" height="8" fill="#7B2CBF" />

                    {/* Bottom Left Corner */}
                    <rect x="10" y="62" width="28" height="28" fill="#0B0418" rx="4" />
                    <rect x="16" y="68" width="16" height="16" fill="white" rx="2" />
                    <rect x="20" y="72" width="8" height="8" fill="#7B2CBF" />

                    {/* Data Pattern */}
                    <rect x="44" y="12" width="10" height="6" />
                    <rect x="44" y="24" width="8" height="8" fill="#7B2CBF" />
                    <rect x="12" y="44" width="8" height="8" />
                    <rect x="24" y="44" width="12" height="6" fill="#7B2CBF" />
                    <rect x="42" y="42" width="16" height="16" fill="#0B0418" rx="2" />
                    <rect x="46" y="46" width="8" height="8" fill="#C77DFF" />
                    <rect x="64" y="44" width="10" height="6" />
                    <rect x="78" y="44" width="10" height="8" fill="#7B2CBF" />
                    <rect x="44" y="64" width="8" height="12" />
                    <rect x="56" y="64" width="12" height="8" fill="#7B2CBF" />
                    <rect x="72" y="74" width="16" height="14" />
                  </svg>
                </div>
                <div className="text-xs text-[#B8A9C9] space-y-1 font-mono">
                  <p className="text-white font-semibold">Scan with smartphone camera</p>
                  <p className="text-[11px]">Save B2 Technologies vCard directly to iOS / Android contacts with 1 tap.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Estimator & Inquiry Form */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 rounded-2xl bg-[#0E051D] border border-[#C77DFF]/40 animate-fade-in space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/40 shadow-[0_0_25px_rgba(16,185,129,0.4)]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-display font-extrabold text-white">
                  Inquiry Dispatched Successfully
                </h4>
                <p className="text-sm text-[#B8A9C9] max-w-md">
                  Thank you, <span className="text-white font-semibold">{fullName}</span>. Our lead solutions architect has received your briefing and will follow up at <span className="text-[#E0AAFF] font-mono">{email}</span> within 24 hours.
                </p>

                <div className="p-4 rounded-xl bg-[#140826] border border-[#C77DFF]/20 text-left w-full max-w-md text-xs font-mono space-y-1.5 mt-2">
                  <div className="flex justify-between">
                    <span className="text-[#B8A9C9]">Selected Pillars:</span>
                    <span className="text-white font-medium">{selectedServices.length} Services</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#B8A9C9]">Estimated Range:</span>
                    <span className="text-[#C77DFF] font-bold">
                      ${estimate.minBudget.toLocaleString()} – ${estimate.maxBudget.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#B8A9C9]">Timeline:</span>
                    <span className="text-emerald-300 font-semibold">{estimate.minWeeks}–{estimate.maxWeeks} Weeks</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setMessage('');
                  }}
                  className="mt-4 px-6 py-2.5 rounded-xl glass-panel text-xs font-semibold text-white hover:border-[#C77DFF] transition-colors cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Service Selection Pill Toggles */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#E0AAFF] mb-2.5">
                    1. Select Core Services Needed:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {serviceOptions.map((svc) => {
                      const isSelected = selectedServices.includes(svc.id);
                      return (
                        <button
                          key={svc.id}
                          type="button"
                          onClick={() => toggleService(svc.id)}
                          className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 border cursor-pointer ${
                            isSelected
                              ? 'bg-[#7B2CBF] text-white border-[#C77DFF] shadow-[0_0_15px_rgba(157,78,221,0.5)]'
                              : 'bg-[#120822] text-[#B8A9C9] border-[#C77DFF]/20 hover:border-[#C77DFF]/50 hover:text-white'
                          }`}
                        >
                          {isSelected && <span className="mr-1.5 text-white">✓</span>}
                          {svc.label}
                        </button>
                      );
                    })}
                  </div>
                  {formErrors.selectedServices && (
                    <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {formErrors.selectedServices}
                    </p>
                  )}
                </div>

                {/* Scope & Speed Controls */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Scope Selector */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#E0AAFF] mb-2">
                      2. Project Scope Tier:
                    </label>
                    <div className="grid grid-cols-3 gap-1 bg-[#120822] p-1 rounded-xl border border-[#C77DFF]/20">
                      {(['startup', 'growth', 'enterprise'] as ProjectScope[]).map((tier) => (
                        <button
                          key={tier}
                          type="button"
                          onClick={() => setScope(tier)}
                          className={`py-1.5 rounded-lg text-xs font-semibold capitalize transition-all cursor-pointer ${
                            scope === tier
                              ? 'bg-[#7B2CBF] text-white shadow'
                              : 'text-[#B8A9C9] hover:text-white'
                          }`}
                        >
                          {tier}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Delivery Speed Selector */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#E0AAFF] mb-2">
                      3. Target Delivery Pace:
                    </label>
                    <div className="grid grid-cols-2 gap-1 bg-[#120822] p-1 rounded-xl border border-[#C77DFF]/20">
                      {(['standard', 'accelerated'] as DeliverySpeed[]).map((spd) => (
                        <button
                          key={spd}
                          type="button"
                          onClick={() => setSpeed(spd)}
                          className={`py-1.5 rounded-lg text-xs font-semibold capitalize transition-all cursor-pointer ${
                            speed === spd
                              ? 'bg-[#7B2CBF] text-white shadow'
                              : 'text-[#B8A9C9] hover:text-white'
                          }`}
                        >
                          {spd === 'accelerated' ? '⚡ Sprint' : 'Standard'}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Live Real-Time Dynamic Estimate Output Banner */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-[#170A2E] to-[#120525] border border-[#C77DFF]/30 shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs font-mono text-[#E0AAFF] mb-0.5">
                      <DollarSign className="w-3.5 h-3.5 text-[#C77DFF]" />
                      <span>Estimated Investment</span>
                    </div>
                    <div className="text-xl sm:text-2xl font-display font-extrabold text-white">
                      ${estimate.minBudget.toLocaleString()} – ${estimate.maxBudget.toLocaleString()}
                    </div>
                    <span className="text-[10px] font-mono text-[#B8A9C9]">
                      Includes synergy package discount
                    </span>
                  </div>

                  <div className="sm:border-l sm:border-[#C77DFF]/20 sm:pl-4">
                    <div className="flex items-center gap-1.5 text-xs font-mono text-[#E0AAFF] mb-0.5">
                      <Clock className="w-3.5 h-3.5 text-[#C77DFF]" />
                      <span>Estimated Timeline</span>
                    </div>
                    <div className="text-lg sm:text-xl font-display font-bold text-emerald-400">
                      {estimate.minWeeks}–{estimate.maxWeeks} Weeks
                    </div>
                    <span className="text-[10px] font-mono text-[#B8A9C9]">
                      Milestone delivery sprints
                    </span>
                  </div>
                </div>

                {/* Contact Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#E0AAFF] mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0D041A] border border-[#C77DFF]/20 text-white placeholder-[#B8A9C9]/40 text-sm focus:outline-none focus:border-[#C77DFF] focus:ring-1 focus:ring-[#C77DFF] transition-colors"
                    />
                    {formErrors.fullName && (
                      <p className="text-xs text-red-400 mt-1 font-mono">{formErrors.fullName}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#E0AAFF] mb-1.5">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0D041A] border border-[#C77DFF]/20 text-white placeholder-[#B8A9C9]/40 text-sm focus:outline-none focus:border-[#C77DFF] focus:ring-1 focus:ring-[#C77DFF] transition-colors"
                    />
                    {formErrors.email && (
                      <p className="text-xs text-red-400 mt-1 font-mono">{formErrors.email}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#E0AAFF] mb-1.5">
                    Project Requirements & Goals *
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your current tech stack, target timeline, and what you are building..."
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0D041A] border border-[#C77DFF]/20 text-white placeholder-[#B8A9C9]/40 text-sm focus:outline-none focus:border-[#C77DFF] focus:ring-1 focus:ring-[#C77DFF] transition-colors resize-none"
                  />
                  {formErrors.message && (
                    <p className="text-xs text-red-400 mt-1 font-mono">{formErrors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl text-sm sm:text-base font-semibold text-white transition-all duration-300 shadow-[0_0_30px_rgba(123,44,191,0.6)] hover:shadow-[0_0_45px_rgba(199,125,255,0.85)] border border-[#C77DFF]/50 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
                  style={{
                    background: 'linear-gradient(135deg, #7B2CBF 0%, #9D4EDD 60%, #C77DFF 100%)',
                  }}
                >
                  <Send className="w-4 h-4 text-white" />
                  <span>Send Project Briefing & Lock In Estimate</span>
                </button>

              </form>
            )}
          </div>

        </div>
      </div>

    </section>
  );
};
