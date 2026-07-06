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
} from 'lucide-react';

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Academics', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const skills = [
  { category: 'Pemrograman & Pengembangan Web', items: [
    { name: 'React.js', level: 82 },
    { name: 'JavaScript (ES6+)', level: 85 },
    { name: 'HTML5 & CSS3', level: 90 },
    { name: 'TypeScript', level: 72 },
    { name: 'Tailwind CSS', level: 80 },
    { name: 'PHP', level: 75 },
    { name: 'Python', level: 70 },
    { name: 'Java', level: 68 },
  ]},
  { category: 'Database & Analisis Data', items: [
    { name: 'SQL / PostgreSQL', level: 80 },
    { name: 'Database Design', level: 78 },
    { name: 'DBeaver', level: 82 },
    { name: 'Data Analysis & Reporting', level: 75 },
    { name: 'Modular Query Scripting', level: 73 },
  ]},
  { category: 'Desain & Kreativitas', items: [
    { name: 'UI/UX Design', level: 78 },
    { name: 'Adobe Photoshop', level: 85 },
    { name: 'Adobe Illustrator', level: 72 },
    { name: 'Video Editing', level: 70 },
    { name: 'Branding & Copywriting', level: 76 },
  ]},
  { category: 'Sistem & Infrastruktur', items: [
    { name: 'Jaringan Komputer (LAN)', level: 70 },
    { name: 'Sistem Operasi', level: 72 },
    { name: 'Cloud Computing (Dasar)', level: 65 },
    { name: 'Troubleshooting Hardware', level: 78 },
    { name: 'Keamanan Jaringan Dasar', level: 62 },
  ]},
  { category: 'Manajemen & Bisnis Digital', items: [
    { name: 'Software Engineering (SDLC)', level: 75 },
    { name: 'ERP Systems', level: 65 },
    { name: 'E-Business & E-Commerce', level: 72 },
    { name: 'Digital Marketing', level: 68 },
    { name: 'Manajemen TI', level: 70 },
  ]},
  { category: 'Alat & Kolaborasi', items: [
    { name: 'Git / GitHub', level: 78 },
    { name: 'Trello', level: 82 },
    { name: 'Google Workspace', level: 88 },
    { name: 'Microsoft Office 365', level: 90 },
    { name: 'Figma', level: 70 },
  ]},
];

export const services = [
  { icon: Code2, title: 'Web Development', description: 'Membangun aplikasi web responsif dan fungsional menggunakan React, JavaScript, dan teknologi front-end modern.' },
  { icon: Palette, title: 'UI/UX & Creative Design', description: 'Merancang antarmuka yang intuitif dan visual yang menarik — dari wireframe hingga desain siap produksi.' },
  { icon: Database, title: 'Database Management', description: 'Merancang skema database, menulis query SQL yang efisien, dan mengelola data menggunakan PostgreSQL dan DBeaver.' },
  { icon: BarChart3, title: 'Data Analysis', description: 'Mengolah dan menganalisis data akademik maupun bisnis, menyusun laporan dan kesimpulan berbasis bukti.' },
  { icon: Wrench, title: 'Technical Troubleshooting', description: 'Pemecahan masalah perangkat dan perangkat lunak — dari recovery data hingga konfigurasi sistem.' },
  { icon: Shield, title: 'Branding & Content', description: 'Membuat identitas visual, tagline, deskripsi produk, dan strategi komunikasi untuk platform digital.' },
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
    image: 'https://i.ibb.co.com/chBSb8jK/image.png',
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
