import { useState } from 'react';
import { Mail, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { useInView } from '../hooks/useInView';

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
      {/* Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-px bg-white/[0.06]" />

      <div className="max-w-5xl mx-auto" ref={ref}>
        {/* Header */}
        <div className={`text-center transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="section-eyebrow mb-4">Hubungi Saya</p>
          <h2 className="section-headline">
            Mari{' '}
            <span className="apple-gradient-text">berkolaborasi.</span>
          </h2>
          <p className="section-subheadline mt-4 max-w-xl mx-auto">
            Terbuka untuk magang, freelance, dan kolaborasi open-source.
          </p>
        </div>

        <div className="mt-14 sm:mt-16 grid md:grid-cols-5 gap-6 sm:gap-8">
          {/* Sidebar */}
          <div className={`md:col-span-2 space-y-4 sm:space-y-5 transition-all duration-700 delay-200 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            {/* Contact info */}
            <div className="apple-glass p-5 sm:p-6 space-y-5">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-apple-sm bg-apple-blue/10 text-apple-blue flex-shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-sm font-medium text-white/70">Email</p>
                  <a href="mailto:rrivald20@gmail.com" className="text-sm text-white/40 hover:text-apple-blue transition-colors">
                    rrivald20@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-apple-sm bg-apple-blue/10 text-apple-blue flex-shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-sm font-medium text-white/70">Lokasi</p>
                  <p className="text-sm text-white/40">Jakarta, Indonesia</p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="apple-glass p-5 sm:p-6">
              <p className="text-sm font-medium text-white/70 mb-4">Temukan saya</p>
              <div className="flex gap-3">
                {[
                  { Icon: Github, href: 'https://github.com/Yourdevelover', label: 'GitHub' },
                  { Icon: Linkedin, href: 'https://www.linkedin.com/in/rivaldo-aldo-34b160340', label: 'LinkedIn' },
                ].map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="p-2.5 rounded-full text-white/40 hover:text-apple-blue transition-all duration-300 apple-focus"
                    style={{
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.06)',
                    }}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="apple-glass p-5 sm:p-6">
              <p className="text-sm font-medium text-white/70 mb-3">Terbuka untuk</p>
              <div className="flex flex-wrap gap-2">
                {['Magang', 'Freelance', 'Open Source', 'Kolaborasi Riset'].map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-xs font-medium rounded-full bg-apple-blue/10 text-apple-blue border border-apple-blue/15"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className={`md:col-span-3 transition-all duration-700 delay-400 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            <form onSubmit={handleSubmit} className="apple-glass p-6 sm:p-8 space-y-5">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-white/60 mb-2">
                  Nama
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData((d) => ({ ...d, name: e.target.value }))}
                  className="w-full px-4 py-3 rounded-apple-sm text-sm text-white placeholder-white/20 focus:outline-none focus:ring-1 focus:ring-apple-blue/50 transition-all"
                  style={{
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                  }}
                  placeholder="Nama Anda"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-white/60 mb-2">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData((d) => ({ ...d, email: e.target.value }))}
                  className="w-full px-4 py-3 rounded-apple-sm text-sm text-white placeholder-white/20 focus:outline-none focus:ring-1 focus:ring-apple-blue/50 transition-all"
                  style={{
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                  }}
                  placeholder="anda@email.com"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-white/60 mb-2">
                  Pesan
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData((d) => ({ ...d, message: e.target.value }))}
                  className="w-full px-4 py-3 rounded-apple-sm text-sm text-white placeholder-white/20 focus:outline-none focus:ring-1 focus:ring-apple-blue/50 transition-all resize-none"
                  style={{
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                  }}
                  placeholder="Ceritakan tentang proyek atau kesempatan Anda..."
                />
              </div>
              <button
                type="submit"
                className="group w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-apple-blue text-white font-medium rounded-full hover:bg-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-apple-blue/20 apple-focus"
              >
                {submitted ? (
                  'Pesan Terkirim ✓'
                ) : (
                  <>
                    Kirim Pesan
                    <Send size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
