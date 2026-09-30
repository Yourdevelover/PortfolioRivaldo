import { Code2, Database, Layout, BarChart3, BookOpen, Palette } from 'lucide-react';

export const courseCards = [
  {
    icon: <Code2 className="size-4 text-apple-blue" />,
    title: 'Pemrograman & Web',
    description: 'Algoritma, Pemrograman Web, Java, Python, PHP, JavaScript, React',
    tag: '6 MK',
    className: 'hover:-translate-y-10 before:absolute before:w-full before:h-full before:rounded-apple before:outline-1 before:outline-white/[0.06] before:content-[\'\'] before:bg-black/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0 relative',
  },
  {
    icon: <Database className="size-4 text-apple-cyan" />,
    title: 'Database & Data',
    description: 'Database Management, SQL, PostgreSQL, Data Analysis, DBeaver',
    tag: '3 MK',
    className: 'translate-x-10 translate-y-16 hover:-translate-y-[-25px] before:absolute before:w-full before:h-full before:rounded-apple before:outline-1 before:outline-white/[0.06] before:content-[\'\'] before:bg-black/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0 relative',
  },
  {
    icon: <Layout className="size-4 text-apple-green" />,
    title: 'Sistem & Infrastruktur',
    description: 'Sistem Informasi, Jaringan Komputer, Sistem Operasi, Cloud Computing',
    tag: '4 MK',
    className: 'translate-x-20 translate-y-32 hover:-translate-y-[-90px] relative',
  },
];

export const managementCards = [
  {
    icon: <BarChart3 className="size-4 text-apple-purple" />,
    title: 'Manajemen & Bisnis',
    description: 'Software Engineering (SDLC), ERP, E-Business, Manajemen TI',
    tag: '4 MK',
    className: 'hover:-translate-y-10 before:absolute before:w-full before:h-full before:rounded-apple before:outline-1 before:outline-white/[0.06] before:content-[\'\'] before:bg-black/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0 relative',
  },
  {
    icon: <BookOpen className="size-4 text-apple-orange" />,
    title: 'Riset & Akademik',
    description: 'Metodologi Penelitian, Penulisan Akademik, Skripsi',
    tag: '3 MK',
    className: 'translate-x-10 translate-y-16 hover:-translate-y-[-25px] before:absolute before:w-full before:h-full before:rounded-apple before:outline-1 before:outline-white/[0.06] before:content-[\'\'] before:bg-black/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0 relative',
  },
  {
    icon: <Palette className="size-4 text-apple-pink" />,
    title: 'Desain & Praktik',
    description: 'UI/UX Design, Adobe Photoshop, Illustrator, Video Editing, Branding',
    tag: 'Praktik',
    className: 'translate-x-20 translate-y-32 hover:-translate-y-[-90px] relative',
  },
];
