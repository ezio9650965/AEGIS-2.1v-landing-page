import React, { useState } from 'react';
import { X, ShieldCheck, ArrowRight, Building, Mail, User, Server } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    currentFirewall: 'pfSense / OPNsense',
    userCount: '25 - 100 users',
    interest: 'Both Gateway & MSSP SOC'
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/75 backdrop-blur-md transition-all">
      <div 
        className="w-full max-w-xl rounded-3xl border p-6 sm:p-8 relative overflow-hidden transition-all shadow-2xl"
        style={{
          backgroundColor: theme === 'dark' ? '#0A0E17' : '#FFFFFF',
          borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.15)' : '#CBD5E1',
          boxShadow: theme === 'dark' 
            ? '0 25px 50px -12px rgba(0, 0, 0, 0.8), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)' 
            : '0 20px 40px -10px rgba(15, 23, 42, 0.18)',
        }}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-6 right-6 p-2 rounded-xl border transition-colors"
          style={{
            backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : '#F1F5F9',
            borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : '#CBD5E1',
            color: theme === 'dark' ? '#94A3B8' : '#64748B',
          }}
        >
          <X className="w-4 h-4" />
        </button>

        {isSubmitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-2xl mx-auto flex items-center justify-center border"
              style={{
                backgroundColor: theme === 'dark' ? 'rgba(52, 211, 153, 0.15)' : '#DCFCE7',
                borderColor: theme === 'dark' ? 'rgba(52, 211, 153, 0.3)' : '#BBF7D0',
                color: theme === 'dark' ? '#34D399' : '#15803D',
              }}
            >
              <ShieldCheck className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-bold"
              style={{ color: theme === 'dark' ? '#FFFFFF' : '#0F172A' }}
            >
              {t.demoModal.successTitle}
            </h3>

            <p className="text-xs sm:text-sm leading-relaxed max-w-md mx-auto"
              style={{ color: theme === 'dark' ? '#94A3B8' : '#475569' }}
            >
              {t.demoModal.successMessage}
            </p>

            <div className="p-4 rounded-xl border text-xs font-mono text-left max-w-md mx-auto"
              style={{
                backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.03)' : '#F8FAFC',
                borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : '#E2E8F0',
                color: theme === 'dark' ? '#CBD5E1' : '#334155',
              }}
            >
              <div className="text-[11px] font-bold mb-1"
                style={{ color: theme === 'dark' ? '#38BDF8' : '#0369A1' }}
              >
                SUMMARY OF SCOPE:
              </div>
              <div>• Organization: {formData.company || 'Confidential'}</div>
              <div>• Edge: {formData.currentFirewall}</div>
              <div>• Scale: {formData.userCount}</div>
            </div>

            <button
              onClick={handleClose}
              className="mt-6 px-6 py-2.5 rounded-xl text-xs font-mono font-bold transition-all"
              style={{
                backgroundColor: theme === 'dark' ? '#06B6D4' : '#0369A1',
                color: theme === 'dark' ? '#020617' : '#FFFFFF',
              }}
            >
              {t.demoModal.closeButton}
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono mb-2 border"
                style={{
                  backgroundColor: theme === 'dark' ? 'rgba(56, 189, 248, 0.1)' : '#E0F2FE',
                  borderColor: theme === 'dark' ? 'rgba(56, 189, 248, 0.25)' : '#BAE6FD',
                  color: theme === 'dark' ? '#38BDF8' : '#0369A1',
                }}
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>CONFIDENTIAL ARCHITECTURE REVIEW</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight"
                style={{ color: theme === 'dark' ? '#FFFFFF' : '#0F172A' }}
              >
                {t.demoModal.title}
              </h3>
              <p className="text-xs leading-relaxed mt-1"
                style={{ color: theme === 'dark' ? '#94A3B8' : '#475569' }}
              >
                {t.demoModal.subtitle}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-semibold mb-1"
                    style={{ color: theme === 'dark' ? '#CBD5E1' : '#334155' }}
                  >
                    {t.demoModal.fieldFullName} *
                  </label>
                  <div className="relative">
                    <User className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Alex Morgan"
                      className="w-full pl-9 pr-3 py-2 rounded-xl border text-xs focus:outline-none transition-colors"
                      style={{
                        backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.04)' : '#FFFFFF',
                        borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.15)' : '#CBD5E1',
                        color: theme === 'dark' ? '#FFFFFF' : '#0F172A',
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold mb-1"
                    style={{ color: theme === 'dark' ? '#CBD5E1' : '#334155' }}
                  >
                    {t.demoModal.fieldEmail} *
                  </label>
                  <div className="relative">
                    <Mail className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full pl-9 pr-3 py-2 rounded-xl border text-xs focus:outline-none transition-colors"
                      style={{
                        backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.04)' : '#FFFFFF',
                        borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.15)' : '#CBD5E1',
                        color: theme === 'dark' ? '#FFFFFF' : '#0F172A',
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-semibold mb-1"
                    style={{ color: theme === 'dark' ? '#CBD5E1' : '#334155' }}
                  >
                    {t.demoModal.fieldCompany} *
                  </label>
                  <div className="relative">
                    <Building className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={e => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Acme Corp"
                      className="w-full pl-9 pr-3 py-2 rounded-xl border text-xs focus:outline-none transition-colors"
                      style={{
                        backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.04)' : '#FFFFFF',
                        borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.15)' : '#CBD5E1',
                        color: theme === 'dark' ? '#FFFFFF' : '#0F172A',
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold mb-1"
                    style={{ color: theme === 'dark' ? '#CBD5E1' : '#334155' }}
                  >
                    {t.demoModal.fieldCurrentPerimeter}
                  </label>
                  <div className="relative">
                    <Server className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <select
                      value={formData.currentFirewall}
                      onChange={e => setFormData({ ...formData, currentFirewall: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 rounded-xl border text-xs focus:outline-none transition-colors"
                      style={{
                        backgroundColor: theme === 'dark' ? '#0F172A' : '#FFFFFF',
                        borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.15)' : '#CBD5E1',
                        color: theme === 'dark' ? '#FFFFFF' : '#0F172A',
                      }}
                    >
                      <option value="pfSense / OPNsense">pfSense / OPNsense</option>
                      <option value="Fortinet / FortiGate">Fortinet / FortiGate</option>
                      <option value="Palo Alto Networks">Palo Alto Networks</option>
                      <option value="Cisco ASA / Firepower">Cisco ASA / Firepower</option>
                      <option value="Standard Cloud Security Groups">Cloud Security Groups (AWS/GCP/Azure)</option>
                      <option value="Other / Multiple">Other / Hybrid Stack</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-semibold mb-1"
                  style={{ color: theme === 'dark' ? '#CBD5E1' : '#334155' }}
                >
                  {t.demoModal.fieldOrgSize}
                </label>
                <select
                  value={formData.userCount}
                  onChange={e => setFormData({ ...formData, userCount: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border text-xs focus:outline-none transition-colors"
                  style={{
                    backgroundColor: theme === 'dark' ? '#0F172A' : '#FFFFFF',
                    borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.15)' : '#CBD5E1',
                    color: theme === 'dark' ? '#FFFFFF' : '#0F172A',
                  }}
                >
                  <option value="1 - 25 users">1 - 25 users (Early Stage / Pilot)</option>
                  <option value="25 - 100 users">25 - 100 users (Growing Business)</option>
                  <option value="100 - 500 users">100 - 500 users (Mid-Market)</option>
                  <option value="500+ users">500+ users (Enterprise Scale)</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl font-mono text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all active:scale-[0.99] shadow-md"
                  style={{
                    backgroundColor: theme === 'dark' ? '#06B6D4' : '#0369A1',
                    color: theme === 'dark' ? '#020617' : '#FFFFFF',
                  }}
                >
                  <span>{t.demoModal.submitButton}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>

            <div className="text-[11px] font-mono text-center"
              style={{ color: theme === 'dark' ? '#64748B' : '#94A3B8' }}
            >
              {t.demoModal.privacyNotice}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
