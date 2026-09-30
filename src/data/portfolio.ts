import {
  Code2,
  Layout,
  Palette,
  Zap,
  Github,
  ExternalLink,
  Briefcase,
  GraduationCap,
  Mail,
  MapPin,
  Download,
  ArrowUpRight,
  ChevronDown,
  Menu,
  X,
  Linkedin,
  Instagram,
  Database,
  BarChart3,
  Wrench,
  BookOpen,
  Shield,
  Monitor,
  FolderGit2,
  Globe,
  Server,
  Smartphone,
} from 'lucide-react';

export const navLinks = [
  { label: 'Tentang', href: '#about' },
  { label: 'Keahlian', href: '#skills' },
  { label: 'Proyek', href: '#projects' },
  { label: 'Perjalanan', href: '#experience' },
  { label: 'Kontak', href: '#contact' },
];

export const personalBio = {
  headline: "Full-Stack Web, Mobile & UI/UX Developer",
  summary: "Berdedikasi dengan keahlian mendalam dalam pengembangan Full-Stack Web, Mobile Application, dan UI/UX Design.",
  fullBio: `Full-Stack Web, Mobile Application, dan UI/UX Design. Memiliki rekam jejak dalam membangun solusi digital menggunakan framework modern seperti Next.js, Laravel, dan Flutter, serta pengelolaan basis data PostgreSQL dan MySQL. Berpengalaman dalam siklus DevOps mulai dari manajemen repositori Git, kontainerisasi Docker, konfigurasi server Nginx, hingga pemanfaatan cloud platform seperti Supabase dan Vercel.`,
  shortDesc: "Membangun solusi web full-stack, aplikasi mobile, dan antarmuka mutakhir dengan Next.js, Flutter, Laravel, serta infrastruktur cloud modern.",
};

export const skills = [
  { category: 'Full-Stack & Mobile Development', items: [
    { name: 'Next.js / React', level: 90 },
    { name: 'Flutter (Dart)', level: 85 },
    { name: 'Laravel (PHP)', level: 88 },
    { name: 'TypeScript / Node.js', level: 85 },
    { name: 'Tailwind CSS', level: 92 },
  ]},
  { category: 'Database & Cloud Backend', items: [
    { name: 'PostgreSQL', level: 88 },
    { name: 'MySQL', level: 85 },
    { name: 'Supabase', level: 84 },
    { name: 'Database Architecture', level: 82 },
    { name: 'Prisma / Eloquent ORM', level: 80 },
  ]},
  { category: 'DevOps & Deployment', items: [
    { name: 'Git & GitHub Workflows', level: 88 },
    { name: 'Docker Containerization', level: 78 },
    { name: 'Nginx Web Server', level: 75 },
    { name: 'Vercel / Cloud Platforms', level: 86 },
    { name: 'CI/CD Pipelines', level: 74 },
  ]},
  { category: 'UI/UX & Product Design', items: [
    { name: 'Figma UI/UX Prototyping', level: 88 },
    { name: 'Design Systems & Apple HIG', level: 84 },
    { name: 'Adobe Photoshop', level: 82 },
    { name: 'Adobe Illustrator', level: 75 },
    { name: 'Micro-interactions & Motion', level: 80 },
  ]},
  { category: 'Analisis Bisnis & Sistem', items: [
    { name: 'Business Process Analysis', level: 82 },
    { name: 'Software Engineering (SDLC)', level: 85 },
    { name: 'Requirements Engineering', level: 80 },
    { name: 'Enterprise Solutions (ERP)', level: 76 },
    { name: 'Data Analysis & Insights', level: 78 },
  ]},
  { category: 'Alat & Ekosistem', items: [
    { name: 'VS Code & Dev Tools', level: 92 },
    { name: 'Postman / API Testing', level: 85 },
    { name: 'DBeaver', level: 84 },
    { name: 'Linux / Bash Scripting', level: 78 },
    { name: 'Trello & Agile / Scrum', level: 82 },
  ]},
];

export const services = [
  { icon: Code2, title: 'Full-Stack Web Engineering', description: 'Arsitektur web modern skala produksi menggunakan Next.js, React, Laravel, dan integrasi API yang tangguh serta cepat.' },
  { icon: Smartphone, title: 'Mobile Application', description: 'Pengembangan cross-platform elegan menggunakan Flutter dengan performa native, animasi mulus, dan arsitektur rapi.' },
  { icon: Palette, title: 'UI/UX & Design Systems', description: 'Rancangan visual interaktif berstandar tinggi, glassmorphism, micro-interactions, dan pengalaman visual sekelas produk Apple.' },
  { icon: Database, title: 'Database & Cloud Solutions', description: 'Perancangan basis data relasional PostgreSQL/MySQL yang optimal, integrasi Supabase, dan data modeling skalabel.' },
  { icon: Server, title: 'DevOps & Server Deployment', description: 'Kontainerisasi Docker, reverse proxy Nginx, optimasi deployment Vercel, serta otomatisasi pipeline Git yang andal.' },
  { icon: BarChart3, title: 'Business Tech Alignment', description: 'Menghubungkan analisa proses bisnis dengan solusi teknologi tepat sasaran agar menghasilkan nilai efisiensi nyata.' },
];

export const projects = [
  {
    title: 'AI-Assistant',
    subtitle: 'Risa-Asisten-AI-Rivaldo',
    description: 'Risa adalah asisten AI pribadi Rivaldo yang siap membantu menjawab pertanyaan.',
    tech: ['HTML', 'JavaScript', 'CSS', 'Google Gemini API', 'Puter.js SDK'],
    image: 'https://i.ibb.co.com/c7ZYF01/image.png',
    github: 'https://github.com/Yourdevelover/Risa-AI-asisten',
    live: 'https://risa-ai-asisten.vercel.app/',
    featured: false,
    
  },
  {
    title: 'GatePass',
    subtitle: 'NFC & QR Parking Solution',
    description: 'GatePass dirancang untuk mendukung konsep smart city, mengintegrasikan teknologi modern dengan kebutuhan sehari-hari. Sistem ini  mempermudah pengguna dalam melakukan pembayaran parkir secara cepat dan aman.',
    tech: ['React', 'TypeScript', 'PostgreSQL', 'Tailwind CSS', 'Vite'],
    image: 'https://i.ibb.co.com/8nVzFwgt/gpt-image-2-a-cinematic-photo-of-Gate-Pass-sistem-pembayaran-parkir-online-melalui-smarphone-0.jpg',
    github: 'https://github.com/Yourdevelover/GatePass',
    live: 'https://gate-pass-jade.vercel.app/',
    featured: true,
    
  },
  {
    title: 'Design',
    subtitle: 'Portofolio Kreatif & Desain',
    description: 'koleksi karya desain grafis mencakup branding, ilustrasi digital, editing foto, dan materi promosi. Dikerjakan menggunakan Adobe Photoshop dan Illustrator untuk berbagai kebutuhan klien dan organisasi.',
    tech: ['Adobe Photoshop', 'Adobe Illustrator', 'Inkscape', 'Figma', 'Canva', 'Capcut'],
    image: 'https://i.ibb.co.com/HTxP0Lms/image.png',
    github: 'https://github.com/Yourdevelover/PortFolioDesign',
    live: 'https://port-folio-design-lake.vercel.app/',
    featured: true,
  },
  {
    title: 'FixNow',
    subtitle: 'Service Marketplace',
    description: 'Proyek ini merupakan tugas kuliah yang dikembangkan menggunakan Laravel sebagai framework utama, dengan MySQL sebagai basis data, serta dihosting pada platform InfinityFree ',
    tech: ['Laravel 10', 'php', 'Tailwind CSS', 'MySQL '],
    image: 'https://i.ibb.co.com/XrJhzm43/gpt-image-2-Namanya-adalah-Fix-Now-web-solusi-modern-untuk-kendala-perangkat-elektronik-rusak-0.jpg',
    github: 'https://github.com/Yourdevelover/fixnow',
    live: 'https://fixnow.freedev.app',
    featured: true,
    
  },
  {
    title: 'NetWatch',
    subtitle: 'Monitoring Jaringan LAN',
    description: 'Alat monitoring sederhana untuk jaringan LAN lokal yang menampilkan status koneksi, melakukan troubleshooting otomatis, dan mencatat log aktivitas jaringan untuk lingkungan lab kampus.',
    tech: ['Python', 'Networking', 'Bash', 'Linux', 'SQL'],
    image: 'https://i.ibb.co.com/7J3vZyWK/image.png',
    github: 'https://github.com/Yourdevelover/NetWatch',
    // live: '#',
    featured: false,
  },
  {
    title: 'Sistem perpustakaan',
    subtitle: 'Sistem Informasi',
    description: 'Aplikasi berbasis web untuk mengelola koleksi buku, peminjaman, dan pengembalian di perpustakaan. Dikembangkan menggunakan Laravel dan MySQL.',
    tech: ['Laravel', 'PHP', 'Bootstrap', 'MySQL', 'Figma'],
    image: 'https://images.pexels.com/photos/326502/pexels-photo-326502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    github: 'https://github.com/Yourdevelover/SistemPerpustakaan',
    live: 'https://sistemperpus.free.nf',
    featured: false,
  },
];

export const experiences = [
  {
    role: 'Mahasiswa Sistem Informasi — Semester 5',
    company: 'Universitas Swasta, Tangerang selatan',
    period: '2023 — Sekarang',
    description: 'Menempuh studi S1 Sistem Informasi dengan fokus pada pengembangan web, manajemen database, dan analisis data. Aktif mengerjakan proyek akademik yang mengasah kemampuan teknis maupun kolaboratif.',
    highlights: ['Aktif dalam proyek pengembangan web kampus', 'Mendesain dan mengelola database PostgreSQL', 'Menguasai alur SDLC dalam proyek software engineering', 'Kolaborasi tim menggunakan Trello & Google Workspace'],
  },
  {
    role: 'Freelance Designer & Web Developer',
    company: 'Proyek Mandiri',
    period: '2025 — Sekarang',
    description: 'Mengerjakan proyek desain grafis dan pengembangan web untuk klien kecil dan organisasi.',
    highlights: ['Membangun prototype website maupun aplikasi', 'Membuat branding & copywriting untuk brand', 'Mengelola konten digital dan recovery data'],
  },
  {
    role: 'Flutter Developer — Personal Project',
    company: 'Proyek Pribadi',
    period: '2025 — Sekarang',
    description: 'Mengembangkan aplikasi sederhana untuk mendukung proses pengembangan diri secara mandiri.',
    highlights: ['Membangun aplikasi Flutter dasar untuk tracking growth pribadi', 'Menerapkan state management sederhana dan clean architecture dasar', 'Publikasi dan maintenance repo GitHub pribadi'],
  },
];

export const academics = {
  thesis: {
    title: 'Coming soon',
    status: 'Dalam Proses',
    methodology: 'dalam proses',
  },
  coursework: [
    'Algoritma & Struktur Data',
    'Pemrograman Web',
    'Database Management',
    'Software Engineering',
    'Sistem Informasi Manajemen',
    'Jaringan Komputer',
    'Sistem Operasi',
    'Enterprise Resource Planning',
    'E-Business & E-Commerce',
    'Komputer Forensik',
    'Business Process Analysis',
    'Metodologi Penelitian',
  ],
};

export const socialLinks = [
  { icon: Github, href: 'https://github.com/Yourdevelover', label: 'GitHub' },
  { icon: Linkedin, href: 'linkedin.com/in/rivaldo-aldo-34b160340', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:rrivald20@gmail.com', label: 'Email' },
];

export const iconMap = {
  Code2, Layout, Palette, Zap, Github, ExternalLink,
  Briefcase, GraduationCap, Mail, MapPin, Download, ArrowUpRight, ChevronDown,
  Menu, X, Linkedin, Instagram, Database, Server, BarChart3, Wrench, BookOpen,
  Shield, Monitor, FolderGit2, Globe,
};
