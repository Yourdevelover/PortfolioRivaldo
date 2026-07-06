import { useState } from 'react';
import { Mail, MapPin, Send, Github, Linkedin, Instagram } from 'lucide-react';
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
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="section-label">Hubungi Saya</p>
          <h2 className="section-title">
            Mari berkolaborasi dan <span className="gradient-text">membangun sesuatu</span>
          </h2>
          <p className="text-navy-400 mt-3 max-w-xl">
            Saya terbuka untuk kesempatan magang, proyek freelance, kolaborasi open-source,
            atau sekadar berdiskusi tentang teknologi. Jangan ragu untuk menghubungi saya.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-5 gap-10">
          <div className={`md:col-span-2 space-y-6 transition-all duration-700 delay-200 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="glass-card p-6 space-y-5">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-400">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium text-navy-200">Email</p>
                  <a href="mailto:rrivald20@gmail.com" className="text-sm text-navy-400 hover:text-amber-400 transition-colors">
                    rrivald20@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium text-navy-200">Lokasi</p>
                  <p className="text-sm text-navy-400">Jakarta, Indonesia</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6">
              <p className="text-sm font-medium text-navy-200 mb-4">Temukan saya</p>
              <div className="flex gap-3">
                {[
                  { Icon: Github, href: 'https://github.com/Yourdevelover', label: 'GitHub' },
                  { Icon: Linkedin, href: 'https://www.linkedin.com/in/rivaldo-aldo-34b160340', label: 'LinkedIn' },
                ].map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="p-3 rounded-lg border border-navy-700/50 text-navy-400 hover:text-amber-400 hover:border-amber-500/30 hover:bg-navy-800/30 transition-all duration-300"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            <div className="glass-card p-6">
              <p className="text-sm font-medium text-navy-200 mb-2">Terbuka untuk</p>
              <div className="flex flex-wrap gap-2">
                {['Magang / Internship', 'Freelance Project', 'Open Source', 'Kolaborasi Riset'].map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-xs font-medium rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className={`md:col-span-3 transition-all duration-700 delay-400 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8 space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-navy-200 mb-1.5">
                  Nama
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData((d) => ({ ...d, name: e.target.value }))}
                  className="w-full px-4 py-3 rounded-lg bg-navy-800/50 border border-navy-700/50 text-navy-100 placeholder-navy-500 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 transition-all"
                  placeholder="Nama Anda"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-navy-200 mb-1.5">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData((d) => ({ ...d, email: e.target.value }))}
                  className="w-full px-4 py-3 rounded-lg bg-navy-800/50 border border-navy-700/50 text-navy-100 placeholder-navy-500 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 transition-all"
                  placeholder="anda@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-navy-200 mb-1.5">
                  Pesan
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData((d) => ({ ...d, message: e.target.value }))}
                  className="w-full px-4 py-3 rounded-lg bg-navy-800/50 border border-navy-700/50 text-navy-100 placeholder-navy-500 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 transition-all resize-none"
                  placeholder="Ceritakan tentang proyek atau kesempatan Anda..."
                />
              </div>
              <button
                type="submit"
                className="group w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-amber-500 text-navy-950 font-semibold rounded-lg hover:bg-amber-400 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/20"
              >
                {submitted ? (
                  'Pesan Terkirim!'
                ) : (
                  <>
                    Kirim Pesan
                    <Send size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
