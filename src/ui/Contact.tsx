import { useState } from 'react';
import { Mail, MapPin, Send, Github, Linkedin, MessageSquare } from 'lucide-react';
import { useInView } from '../state/useInView';
import TiltCard from './TiltCard';
import MagneticButton from './MagneticButton';

export default function Contact() {
  const { ref, isInView } = useInView(0.1);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section-padding relative">
      {/* Liquid Glass Divider Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="max-w-5xl mx-auto" ref={ref}>
        {/* Header */}
        <div className={`text-center transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="section-eyebrow mb-4 justify-center">
            <MessageSquare size={14} className="text-apple-blue" />
            <span>Kontak & Kolaborasi</span>
          </div>
          <h2 className="section-headline">
            Mari{' '}
            <span className="apple-gradient-text">berkembang lebih lanjut dengan saya.</span>
          </h2>
          <p className="section-subheadline mt-4 max-w-xl mx-auto">
            Terbuka untuk posisi magang, proyek freelance, dan riset akademik.
          </p>
        </div>

        <div className="mt-14 sm:mt-16 grid md:grid-cols-5 gap-6 sm:gap-8">
          {/* Sidebar Info */}
          <div className={`md:col-span-2 space-y-6 transition-all duration-700 delay-200 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            {/* Contact Details */}
            <TiltCard className="p-6 space-y-5">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-white/[0.08] border border-white/12 text-apple-cyan shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-white/50 mb-0.5">Email Direct</p>
                  <a href="mailto:rrivald20@gmail.com" className="text-sm font-semibold text-white hover:text-apple-cyan transition-colors">
                    rrivald20@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-white/[0.08] border border-white/12 text-apple-green shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-white/50 mb-0.5">Lokasi Utama</p>
                  <p className="text-sm font-semibold text-white">Tangerang Selatan & Jakarta, Indonesia</p>
                </div>
              </div>
            </TiltCard>

            {/* Social Media */}
            <TiltCard className="p-6">
              <p className="text-xs font-bold uppercase tracking-wider text-white/50 mb-4">Jaringan Sosial</p>
              <div className="flex gap-3">
                {[
                  { Icon: Github, href: 'https://github.com/Yourdevelover', label: 'GitHub' },
                  { Icon: Linkedin, href: 'https://www.linkedin.com/in/rivaldo-aldo-34b160340', label: 'LinkedIn' },
                ].map(({ Icon, href, label }) => (
                  <MagneticButton
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="p-3 rounded-full text-white/70 hover:text-white hover:border-apple-cyan transition-all apple-glass-hover"
                  >
                    <Icon size={18} />
                  </MagneticButton>
                ))}
              </div>
            </TiltCard>

            {/* Career Availability */}
            <TiltCard className="p-6">
              <p className="text-xs font-bold uppercase tracking-wider text-white/50 mb-3">Status Karir</p>
              <div className="flex flex-wrap gap-2">
                {['Magang Web/App', 'Freelance Project', 'UI/UX Design', 'Open Source'].map((item) => (
                  <span
                    key={item}
                    className="px-3.5 py-1.5 text-xs font-bold rounded-full bg-apple-blue/15 text-apple-cyan border border-apple-blue/25 shadow-[0_0_10px_rgba(0,122,255,0.15)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </TiltCard>
          </div>

          {/* Contact Form */}
          <div className={`md:col-span-3 transition-all duration-700 delay-400 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            <TiltCard className="p-7 sm:p-9">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-wider text-white/70 mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData((d) => ({ ...d, name: e.target.value }))}
                    className="w-full px-4 py-3.5 rounded-xl text-sm text-white placeholder-white/30 focus:outline-none focus:border-sky-400 transition-all backdrop-blur-md"
                    style={{
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                    }}
                    placeholder="Nama Anda"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-bold uppercase tracking-wider text-white/70 mb-2">
                    Email Aktif
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData((d) => ({ ...d, email: e.target.value }))}
                    className="w-full px-4 py-3.5 rounded-xl text-sm text-white placeholder-white/30 focus:outline-none focus:border-sky-400 transition-all backdrop-blur-md"
                    style={{
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                    }}
                    placeholder="email@domain.com"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-bold uppercase tracking-wider text-white/70 mb-2">
                    Pesan & Penawaran
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData((d) => ({ ...d, message: e.target.value }))}
                    className="w-full px-4 py-3.5 rounded-xl text-sm text-white placeholder-white/30 focus:outline-none focus:border-sky-400 transition-all resize-none backdrop-blur-md"
                    style={{
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                    }}
                    placeholder="Tuliskan detail proyek atau kesempatan kerja sama..."
                  />
                </div>

                <MagneticButton
                  onClick={() => {}}
                  className="liquid-btn w-full text-sm font-extrabold tracking-wide py-4"
                >
                  {submitted ? (
                    'Pesan Terkirim ✓'
                  ) : (
                    <>
                      Kirim Pesan Sekarang
                      <Send size={16} />
                    </>
                  )}
                </MagneticButton>
              </form>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
}
