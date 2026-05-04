import { useEffect, useMemo, useState } from "react";
import {
  ArrowUpRight,
  Briefcase,
  Code2,
  Database,
  Download,
  Earth,
  FileText,
  GraduationCap,
  Github,
  Languages,
  Linkedin,
  Mail,
  MapPin,
  MonitorSmartphone,
  MoonStar,
  Phone,
  Radar,
  Rocket,
  Satellite,
  Server,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
import resumeImage from "../assets/Images/image.png";

const content = {
  th: {
    nav: ["ภารกิจ", "ความสามารถ", "โปรเจกต์", "ประสบการณ์", "ติดต่อ"],
    status: "พร้อมร่วมทีม / พร้อมลุยโปรเจกต์ใหม่",
    role: "Full Stack Developer",
    headline: "ออกแบบและพัฒนา Product ที่เร็ว ลื่น และดูดี เหมือนระบบควบคุมยานแม่",
    intro:
      "ผมคือ Dev ที่ชอบแปลงไอเดียให้กลายเป็นประสบการณ์ใช้งานจริง ตั้งแต่หน้าเว็บที่ลื่นไหล ไปจนถึงระบบหลังบ้านที่เสถียร อ่านง่าย และขยายต่อได้ง่ายในระยะยาว",
    missionTitle: "Mission Brief",
    missionText:
      "โฟกัสงานสาย Frontend และ Full Stack ด้วย React, Next.js, Node.js และ .NET พร้อม mindset แบบ builder ที่สนทั้งความเร็วของทีม คุณภาพของโค้ด และผลลัพธ์ที่ผู้ใช้สัมผัสได้จริง",
    stats: [
      { value: "2+ ปี", label: "ประสบการณ์ลงมือทำจริง" },
      { value: "10+", label: "เทคโนโลยีที่พร้อมใช้งาน" },
      { value: "3 ด้าน", label: "Frontend, Backend, Mobile" },
    ],
    sections: {
      skills: "ความสามารถ",
      projects: "โปรเจกต์เด่น",
      experience: "ประสบการณ์",
      contact: "ติดต่อ",
    },
    skillSubtitle: "Core systems ที่ใช้ขับเคลื่อนงานตั้งแต่ prototype จน deploy",
    projectShowcaseTitle: "โปรเจกต์ที่เอาไว้โชว์ตอนสัมภาษณ์",
    projectShowcaseSubtitle:
      "หยิบงานจาก GitHub และประสบการณ์จริงมาเล่าแบบให้เห็นว่าไม่ได้แค่ทำหน้าเว็บ แต่คิด flow, backend, data และ deployment ไปพร้อมกัน",
    categories: [
      {
        title: "Orbital Frontend",
        icon: Code2,
        items: ["React", "Next.js", "Vite", "Tailwind CSS", "Responsive UI"],
      },
      {
        title: "Backend Engine",
        icon: Server,
        items: ["Node.js", "Express", ".NET", "Django / Flask", "REST API", "JWT"],
      },
      {
        title: "Data & Infra",
        icon: Database,
        items: ["SQL Server", "PostgreSQL", "MongoDB", "AWS EC2", "S3", "Docker"],
      },
      {
        title: "Cross-Platform",
        icon: MonitorSmartphone,
        items: ["React Native", "API Integration", "CI/CD", "Performance Tuning"],
      },
    ],
    strengths: [
      "แปล requirement ให้กลายเป็น UI/UX ที่ใช้งานจริงได้เร็ว",
      "เขียนโค้ดเป็นระบบ อ่านง่าย และพร้อมต่อยอด",
      "เชื่อม frontend, backend และฐานข้อมูลได้ครบ flow",
      "ช่วยทีมแก้ปัญหาและจัดลำดับงานได้ดีภายใต้เวลาจำกัด",
    ],
    projects: [
      {
        title: "Synnex Online Commerce Platform",
        type: "E-Commerce / Admin System",
        role: "Full Stack Developer",
        summary:
          "แพลตฟอร์มขายออนไลน์ครบ flow ตั้งแต่สมัครสมาชิก, Login, JWT, catalog, cart, order, payment และ dashboard สำหรับหลังบ้าน",
        stack: ["Next.js", "React", "Node.js", "Express", "MongoDB", "JWT", "Stripe", "Admin Dashboard"],
        highlight:
          "โชว์ความเป็น Full Stack แบบชัดมาก เพราะมีทั้ง customer flow, secure auth, payment flow และระบบหลังบ้านที่ทีมใช้จัดการ operation ได้จริง",
        impact: ["End-to-end commerce journey", "JWT-based authentication", "Admin dashboard for operations"],
        repoStatus: "Private GitHub repo / พร้อมเล่าเป็น case study",
      },
      {
        title: "Nintendo Booking Platform",
        type: "Launch / Booking / Cloud",
        role: "Full Stack + Cloud Builder",
        summary:
          "ระบบจอง/แคมเปญ Nintendo ที่ผสมหน้าโปรโมต, booking flow, API, authentication และ cloud deployment ให้รองรับงาน launch ที่ต้องดูดีและเสถียร",
        stack: ["React", "Vite", "Tailwind CSS", "Node.js", "REST API", "AWS EC2", "Amazon S3", "AWS Lambda", "SQS"],
        highlight:
          "จุดขายคือไม่ได้ทำแค่ landing page สวย ๆ แต่คิดระบบแบบ scalable: static assets บน S3, backend บน EC2, async workflow ผ่าน Lambda/SQS และ frontend ที่ responsive",
        impact: ["Campaign-ready visual experience", "Scalable booking architecture", "AWS deployment workflow"],
        repoStatus: "Private GitHub repo / พร้อมเปิด walkthrough",
      },
      {
        title: "Admin API Operations Dashboard",
        type: "Internal Tool / Backend Ops",
        role: "Backend-integrated Web Developer",
        summary:
          "ระบบหลังบ้านสำหรับทีมงานภายในที่รวม dashboard, API, database และ deployment pipeline เพื่อให้ทีมจัดการข้อมูลได้เร็วและตรวจสอบง่าย",
        stack: ["React", "Python", "Django", "Flask", "PostgreSQL", "Docker", "CI/CD", "REST API"],
        highlight:
          "เหมาะมากสำหรับเล่าในสัมภาษณ์สาย Web/Full Stack เพราะครอบคลุมตั้งแต่ UI หลังบ้าน, API design, database, deployment และการทำงานร่วมกับทีม QA/DevOps",
        impact: ["Operational dashboard", "PostgreSQL-backed APIs", "Dockerized delivery pipeline"],
        repoStatus: "Internal project / อธิบาย architecture ได้",
      },
    ],
    timeline: [
      {
        period: "ล่าสุด",
        title: "Full Stack Developer",
        company: "Project-driven / Freelance / Internal Products",
        points: [
          "พัฒนา UI ที่ responsive และมีเอกลักษณ์สำหรับงาน web app และ landing page",
          "เชื่อม API, จัดการ state และออกแบบ component ให้ reuse ได้จริง",
          "ช่วยดู flow ของระบบตั้งแต่หน้าบ้านจนถึงการเชื่อมฐานข้อมูล",
        ],
      },
      {
        period: "ก่อนหน้า",
        title: "Frontend & App Development",
        company: "Business tools / Employee systems",
        points: [
          "ทำระบบที่รองรับการใช้งานของทีมงานภายในองค์กร",
          "ปรับ UX ให้ใช้งานง่ายขึ้นบนมือถือและหน้าจอ desktop",
          "แก้ปัญหา bug และปรับ performance เพื่อให้ release ได้มั่นใจขึ้น",
        ],
      },
    ],
    contactTitle: "พร้อมปล่อยยานไปโปรเจกต์ถัดไป",
    contactText:
      "ถ้าต้องการ Dev ที่ทำงานได้ทั้งเรื่องภาพลักษณ์ของหน้าเว็บและ logic ของระบบหลังบ้าน ผมพร้อมคุยและพร้อม build ไปด้วยกันครับ",
    actions: {
      contact: "เริ่มคุยงาน",
      resume: "บันทึกเป็น PDF",
    },
  },
  en: {
    nav: ["Mission", "Capabilities", "Projects", "Experience", "Contact"],
    status: "Open to work / ready for the next launch",
    role: "Full Stack Developer",
    headline:
      "I build fast, polished digital products with the confidence of a mission control system.",
    intro:
      "I enjoy turning raw ideas into real experiences, from smooth frontend interfaces to reliable backend systems that are easy to maintain and extend.",
    missionTitle: "Mission Brief",
    missionText:
      "My focus is frontend and full stack development with React, Next.js, Node.js, and .NET. I care about shipping quickly, writing maintainable code, and creating products that feel great in real use.",
    stats: [
      { value: "2+ yrs", label: "hands-on building experience" },
      { value: "10+", label: "production-ready tools" },
      { value: "3 zones", label: "frontend, backend, mobile" },
    ],
    sections: {
      skills: "Capabilities",
      projects: "Featured Projects",
      experience: "Experience",
      contact: "Contact",
    },
    skillSubtitle:
      "Core systems I use to move products from prototype to deployment.",
    projectShowcaseTitle: "Interview-ready project arsenal",
    projectShowcaseSubtitle:
      "A sharper GitHub-inspired showcase that frames each project as product thinking, backend logic, data flow and deployment ownership, not just UI screens.",
    categories: [
      {
        title: "Orbital Frontend",
        icon: Code2,
        items: ["React", "Next.js", "Vite", "Tailwind CSS", "Responsive UI"],
      },
      {
        title: "Backend Engine",
        icon: Server,
        items: ["Node.js", "Express", ".NET", "Django / Flask", "REST API", "JWT"],
      },
      {
        title: "Data & Infra",
        icon: Database,
        items: ["SQL Server", "PostgreSQL", "MongoDB", "AWS EC2", "S3", "Docker"],
      },
      {
        title: "Cross-Platform",
        icon: MonitorSmartphone,
        items: ["React Native", "API Integration", "CI/CD", "Performance Tuning"],
      },
    ],
    strengths: [
      "Turn requirements into fast, practical UI/UX flows",
      "Write structured code that stays readable and scalable",
      "Connect frontend, backend, and data into one clean product flow",
      "Work calmly under pressure and help teams unblock delivery",
    ],
    projects: [
      {
        title: "Synnex Online Commerce Platform",
        type: "E-Commerce / Admin System",
        role: "Full Stack Developer",
        summary:
          "A complete online commerce flow covering membership, login, JWT, product catalog, cart, orders, payment and an admin dashboard.",
        stack: ["Next.js", "React", "Node.js", "Express", "MongoDB", "JWT", "Stripe", "Admin Dashboard"],
        highlight:
          "A strong full-stack story: customer journey, secure authentication, payment flow and back-office operations in one polished product.",
        impact: ["End-to-end commerce journey", "JWT-based authentication", "Admin dashboard for operations"],
        repoStatus: "Private GitHub repo / case-study walkthrough available",
      },
      {
        title: "Nintendo Booking Platform",
        type: "Launch / Booking / Cloud",
        role: "Full Stack + Cloud Builder",
        summary:
          "A Nintendo launch and booking experience combining campaign UI, booking flow, API integration, authentication and cloud deployment.",
        stack: ["React", "Vite", "Tailwind CSS", "Node.js", "REST API", "AWS EC2", "Amazon S3", "AWS Lambda", "SQS"],
        highlight:
          "More than a landing page: responsive frontend, S3-hosted assets, EC2 backend deployment, and async-ready architecture with Lambda/SQS.",
        impact: ["Campaign-ready visual experience", "Scalable booking architecture", "AWS deployment workflow"],
        repoStatus: "Private GitHub repo / walkthrough available",
      },
      {
        title: "Admin API Operations Dashboard",
        type: "Internal Tool / Backend Ops",
        role: "Backend-integrated Web Developer",
        summary:
          "An internal back-office system combining dashboard UI, APIs, database management and deployment workflow for operational teams.",
        stack: ["React", "Python", "Django", "Flask", "PostgreSQL", "Docker", "CI/CD", "REST API"],
        highlight:
          "A practical full-stack narrative for interviews: admin UI, API design, database work, deployment and collaboration with QA/DevOps.",
        impact: ["Operational dashboard", "PostgreSQL-backed APIs", "Dockerized delivery pipeline"],
        repoStatus: "Internal project / architecture can be discussed",
      },
    ],
    timeline: [
      {
        period: "Recent",
        title: "Full Stack Developer",
        company: "Project-driven / Freelance / Internal Products",
        points: [
          "Built responsive interfaces for web apps and landing pages with a strong visual signature.",
          "Connected APIs, managed state, and shaped reusable component systems.",
          "Worked across the full flow from frontend delivery to backend and database integration.",
        ],
      },
      {
        period: "Earlier",
        title: "Frontend & App Development",
        company: "Business tools / Employee systems",
        points: [
          "Delivered internal systems that supported daily business operations.",
          "Improved UX across mobile and desktop workflows.",
          "Fixed bugs and tuned performance to make releases more reliable.",
        ],
      },
    ],
    contactTitle: "Ready for the next mission",
    contactText:
      "If you want a developer who cares about both visual impact and system logic, I am ready to help build the next product with you.",
    actions: {
      contact: "Start a conversation",
      resume: "Save as PDF",
    },
  },
};

const orbitDots = Array.from({ length: 22 }, (_, index) => ({
  id: index,
  size: index % 4 === 0 ? 3 : 2,
  top: `${(index * 11) % 100}%`,
  left: `${(index * 17) % 100}%`,
  delay: `${(index % 7) * 0.6}s`,
  duration: `${6 + (index % 5)}s`,
}));

const classicResumeContent = {
  th: {
    labels: {
      skills: "Skills",
      languages: "Languages",
      experience: "Experience",
      projects: "Projects",
      education: "Education",
    },
    personal: {
      name: "Thanachai Jankaew",
      role: "Full stack Dev",
      phone: "0622484854",
      email: "thanachaino168@gmail.com",
      location:
        "politan aqua 36 ซ. นนทบุรี 15 บางกระสอ อำเภอเมืองนนทบุรี นนทบุรี 11000",
    },
    skills: [
      { name: "Web API", level: 5, label: "Expert" },
      { name: "C#", level: 5, label: "Expert" },
      { name: "ASP.NET", level: 5, label: "Expert" },
      { name: "Node.js", level: 5, label: "Expert" },
      { name: "UX/UI Design", level: 5, label: "Expert" },
      { name: "React", level: 5, label: "Expert" },
      { name: "JavaScript", level: 5, label: "Expert" },
    ],
    languages: [
      { name: "Thai", level: 5, label: "Native" },
      { name: "English", level: 3, label: "Intermediate" },
    ],
    experience: [
      {
        title: "Web Developer",
        company: "synnex thailand",
        period: "",
        details:
          "พัฒนาเว็บไซต์และระบบหลังบ้าน (Admin Dashboard) สร้าง API ด้วย Python (Django / Flask) จัดการ Database PostgreSQL Deploy ระบบด้วย Docker และ CI/CD",
      },
      {
        title: "Full stack Dev",
        company: "synnex thailand",
        period: "Mar 2024",
        details:
          "Fullstack Developer ABC Company Co., Ltd. | 2023 - Present พัฒนา Web Application ทั้ง Frontend และ Backend ออกแบบและพัฒนา RESTful API ด้วย Node.js / Express พัฒนา UI ด้วย React / Next.js และ Tailwind CSS จัดการฐานข้อมูล MySQL / MongoDB ปรับปรุง Performance และแก้ไข Bug ทำงานร่วมกับทีม UX/UI, QA และ DevOps",
      },
    ],
    projects: [
      {
        title: "E-Commerce Web Application",
        stack: "Next.js, Node.js, MongoDB, Stripe",
        link: "https://github.com/Almzaba/SynnexOnline",
        details:
          "ระบบสมัครสมาชิก / Login / JWT ระบบสินค้า ตะกร้า ใบสั่งซื้อ ชำระเงิน และ Dashboard สำหรับ Admin",
      },
      {
        title: "Nintendo Booking Platform",
        stack: "Fullstack + AWS",
        link: "https://github.com/Almzaba/NintendoProjects",
        details:
          "Designed and developed a scalable booking system using modern Fullstack architecture. Built RESTful APIs and implemented secure authentication and authorization. Deployed backend services on Amazon EC2 and managed static assets via Amazon S3. Leveraged AWS Lambda and SQS for asynchronous workflows and improved system reliability.",
      },
    ],
    education: {
      degree: "Computer Engineering",
      school: "King Mongkut's University of Technology North Bangkok",
      period: "2020 - 2024",
      location: "Nonthaburi, Thailand",
    },
  },
  en: {
    labels: {
      skills: "Skills",
      languages: "Languages",
      experience: "Experience",
      projects: "Projects",
      education: "Education",
    },
    personal: {
      name: "Thanachai Jankaew",
      role: "Full stack Dev",
      phone: "0622484854",
      email: "thanachaino168@gmail.com",
      location:
        "politan aqua 36, Soi Nonthaburi 15, Bang Kraso, Mueang Nonthaburi, Nonthaburi 11000",
    },
    skills: [
      { name: "Web API", level: 5, label: "Expert" },
      { name: "C#", level: 5, label: "Expert" },
      { name: "ASP.NET", level: 5, label: "Expert" },
      { name: "Node.js", level: 5, label: "Expert" },
      { name: "UX/UI Design", level: 5, label: "Expert" },
      { name: "React", level: 5, label: "Expert" },
      { name: "JavaScript", level: 5, label: "Expert" },
    ],
    languages: [
      { name: "Thai", level: 5, label: "Native" },
      { name: "English", level: 3, label: "Intermediate" },
    ],
    experience: [
      {
        title: "Web Developer",
        company: "synnex thailand",
        period: "",
        details:
          "Developed websites and admin dashboard systems, built APIs with Python (Django / Flask), managed PostgreSQL databases, and deployed services with Docker and CI/CD.",
      },
      {
        title: "Full stack Dev",
        company: "synnex thailand",
        period: "Mar 2024",
        details:
          "Fullstack Developer ABC Company Co., Ltd. | 2023 - Present. Developed frontend and backend web applications, designed RESTful APIs with Node.js / Express, built UI with React / Next.js and Tailwind CSS, managed MySQL / MongoDB, improved performance, fixed bugs, and collaborated with UX/UI, QA and DevOps teams.",
      },
    ],
    projects: [
      {
        title: "E-Commerce Web Application",
        stack: "Next.js, Node.js, MongoDB, Stripe",
        link: "https://github.com/Almzaba/SynnexOnline",
        details:
          "Membership, login, JWT, product catalog, cart, orders, payment flow and admin dashboard.",
      },
      {
        title: "Nintendo Booking Platform",
        stack: "Fullstack + AWS",
        link: "https://github.com/Almzaba/NintendoProjects",
        details:
          "Designed and developed a scalable booking system using modern Fullstack architecture. Built RESTful APIs and implemented secure authentication and authorization. Deployed backend services on Amazon EC2 and managed static assets via Amazon S3. Leveraged AWS Lambda and SQS for asynchronous workflows and improved system reliability.",
      },
    ],
    education: {
      degree: "Computer Engineering",
      school: "King Mongkut's University of Technology North Bangkok",
      period: "2020 - 2024",
      location: "Nonthaburi, Thailand",
    },
  },
};

function LevelDots({ level, total = 5 }) {
  return (
    <div className="flex items-center gap-1.5">
      {Array.from({ length: total }, (_, index) => (
        <span
          key={index}
          className={`h-3 w-3 rounded-full ${
            index < level ? "bg-[#432a86]" : "bg-[#d8d9e6]"
          }`}
        />
      ))}
    </div>
  );
}

function ClassicSectionTitle({ children }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <h2 className="shrink-0 text-xl font-bold text-[#1f223f]">{children}</h2>
      <span className="h-px flex-1 bg-[#d6d7e4]" />
    </div>
  );
}

function ClassicResume({ language }) {
  const data = classicResumeContent[language] ?? classicResumeContent.th;

  return (
    <section className="classic-resume-shell pb-12">
      <div className="classic-resume-sheet mx-auto max-w-[980px] rounded-lg bg-[#f4f2f8] px-6 py-7 text-left text-[#6b6f8f] shadow-[0_30px_100px_rgba(2,6,23,0.45)] sm:px-10 lg:px-12">
        <header className="grid gap-6 pb-12 md:grid-cols-[140px_1fr] md:items-start">
          <div className="flex justify-center md:justify-start">
            <div className="flex h-32 w-32 items-center justify-center rounded-full border-4 border-white bg-[radial-gradient(circle_at_35%_25%,#7dd3fc,#54359a_48%,#15162d_100%)] text-4xl font-bold text-white shadow-lg">
              TJ
            </div>
          </div>

          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold leading-tight text-[#1d2142] sm:text-5xl">
              {data.personal.name}
            </h1>
            <p className="mt-2 text-lg font-medium text-[#6b46b8]">
              {data.personal.role}
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-x-5 gap-y-3 text-sm md:justify-start">
              <a
                className="inline-flex items-center gap-1.5"
                href={`tel:${data.personal.phone}`}
              >
                <Phone size={14} className="text-[#5b6381]" />
                {data.personal.phone}
              </a>
              <a
                className="inline-flex items-center gap-1.5"
                href={`mailto:${data.personal.email}`}
              >
                <Mail size={14} className="text-[#5b6381]" />
                {data.personal.email}
              </a>
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={14} className="text-[#5b6381]" />
                {data.personal.location}
              </span>
            </div>
          </div>
        </header>

        <div className="grid gap-10 lg:grid-cols-[260px_1fr]">
          <aside className="space-y-10">
            <section>
              <ClassicSectionTitle>{data.labels.skills}</ClassicSectionTitle>
              <div className="space-y-6">
                {data.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="grid grid-cols-[1fr_auto] items-start gap-4"
                  >
                    <p className="text-sm">{skill.name}</p>
                    <div className="text-right">
                      <LevelDots level={skill.level} />
                      <p className="mt-1 text-xs">{skill.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <ClassicSectionTitle>{data.labels.languages}</ClassicSectionTitle>
              <div className="space-y-6">
                {data.languages.map((item) => (
                  <div
                    key={item.name}
                    className="grid grid-cols-[1fr_auto] items-start gap-4"
                  >
                    <p className="text-sm">{item.name}</p>
                    <div className="text-right">
                      <LevelDots level={item.level} />
                      <p className="mt-1 text-xs">{item.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </aside>

          <main className="space-y-10">
            <section>
              <ClassicSectionTitle>{data.labels.experience}</ClassicSectionTitle>
              <div className="space-y-7">
                {data.experience.map((job) => (
                  <article key={`${job.title}-${job.period || job.company}`}>
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="text-lg font-bold text-[#1f223f]">
                          {job.title}
                        </h3>
                        <p className="mt-1 text-base font-medium text-[#6b46b8]">
                          {job.company}
                        </p>
                      </div>
                      {job.period ? (
                        <p className="text-sm text-[#6b6f8f]">{job.period}</p>
                      ) : null}
                    </div>
                    <p className="mt-4 text-sm leading-7">{job.details}</p>
                  </article>
                ))}
              </div>
            </section>

            <section>
              <ClassicSectionTitle>{data.labels.projects}</ClassicSectionTitle>
              <div className="space-y-6">
                {data.projects.map((project) => (
                  <article key={project.title} className="text-sm leading-7">
                    <div className="flex items-start gap-2">
                      <Code2
                        size={16}
                        className="mt-1 shrink-0 text-[#6b46b8]"
                      />
                      <div>
                        <h3 className="font-semibold text-[#4f5473]">
                          {project.title} Tech: {project.stack}
                        </h3>
                        <p>{project.details}</p>
                        <a
                          className="inline-flex items-center gap-1 text-[#5d4c97] underline decoration-[#5d4c97]/40 underline-offset-2"
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Github size={14} />
                          {project.link}
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section>
              <ClassicSectionTitle>{data.labels.education}</ClassicSectionTitle>
              <div className="flex items-start gap-3">
                <GraduationCap
                  size={18}
                  className="mt-1 shrink-0 text-[#6b46b8]"
                />
                <div>
                  <h3 className="text-lg font-bold text-[#1f223f]">
                    {data.education.degree}
                  </h3>
                  <p className="mt-1 text-base font-medium text-[#6b46b8]">
                    {data.education.school}
                  </p>
                  <p className="mt-1 text-sm">
                    {data.education.period}
                    <span className="mx-3 text-[#c3c4d2]">|</span>
                    {data.education.location}
                  </p>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </section>
  );
}

function ResumeImagePreview({ language }) {
  const data = classicResumeContent[language] ?? classicResumeContent.th;

  return (
    <section className="resume-image-shell pb-12">
      <div className="resume-image-frame mx-auto max-w-[860px] rounded-lg border border-white/10 bg-white p-2 shadow-[0_30px_100px_rgba(2,6,23,0.45)] sm:p-3">
        <img
          className="resume-image-file block h-auto w-full rounded-md"
          src={resumeImage}
          alt={`${data.personal.name} resume`}
        />
      </div>
    </section>
  );
}

function Resume() {
  const [language, setLanguage] = useState("th");
  const [viewMode, setViewMode] = useState("portfolio");
  const [activeProject, setActiveProject] = useState(0);
  const [activeSection, setActiveSection] = useState("mission");
  const t = content[language];

  const sections = useMemo(
    () => [
      { id: "mission", label: t.nav[0] },
      { id: "capabilities", label: t.nav[1] },
      { id: "projects", label: t.nav[2] },
      { id: "experience", label: t.nav[3] },
      { id: "contact", label: t.nav[4] },
    ],
    [t.nav]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.45 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  const activeMission = t.projects[activeProject];

  return (
    <div className="relative min-h-screen overflow-hidden bg-[var(--space-bg)] text-[var(--text-main)]">
      <div className="pointer-events-none absolute inset-0 opacity-90">
        <div className="space-grid absolute inset-0" />
        <div className="nebula nebula-a" />
        <div className="nebula nebula-b" />
        <div className="nebula nebula-c" />
        {orbitDots.map((dot) => (
          <span
            key={dot.id}
            className="star-particle absolute rounded-full bg-white/80"
            style={{
              width: `${dot.size}px`,
              height: `${dot.size}px`,
              top: dot.top,
              left: dot.left,
              animationDelay: dot.delay,
              animationDuration: dot.duration,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
        <nav className="no-print sticky top-4 z-30 mb-8 rounded-full border border-white/10 bg-white/6 px-4 py-3 backdrop-blur-xl shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_24px_80px_rgba(4,8,30,0.55)]">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/10 text-cyan-200 shadow-[0_0_30px_rgba(94,234,212,0.25)]">
                <Rocket size={18} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-cyan-200/70">
                  Thanachai Nomaya
                </p>
                <p className="text-sm text-[var(--text-soft)]">{t.role}</p>
              </div>
            </div>

            <div className="hidden items-center gap-2 lg:flex">
              {viewMode === "portfolio" ? (
                sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() =>
                      document
                        .getElementById(section.id)
                        ?.scrollIntoView({ behavior: "smooth", block: "start" })
                    }
                    className={`rounded-full px-4 py-2 text-sm transition ${
                      activeSection === section.id
                        ? "bg-cyan-300 text-slate-950"
                        : "text-[var(--text-soft)] hover:bg-white/8 hover:text-white"
                    }`}
                  >
                    {section.label}
                  </button>
                ))
              ) : (
                <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">
                  <FileText size={16} />
                  Resume Preview
                </span>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex rounded-full border border-white/12 bg-white/8 p-1">
                {[
                  { id: "portfolio", label: "Portfolio" },
                  { id: "resume", label: "Resume" },
                ].map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setViewMode(option.id)}
                    className={`rounded-full px-3 py-1.5 text-sm transition ${
                      viewMode === option.id
                        ? "bg-cyan-300 text-slate-950"
                        : "text-[var(--text-soft)] hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setLanguage(language === "th" ? "en" : "th")}
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-sm text-[var(--text-main)] transition hover:border-cyan-300/40 hover:bg-cyan-300/12"
              >
                <Languages size={16} />
                {language === "th" ? "TH" : "EN"}
              </button>
              <button
                onClick={() => window.print()}
                className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/12 px-4 py-2 text-sm text-cyan-100 transition hover:bg-cyan-300/20"
              >
                <Download size={16} />
                {t.actions.resume}
              </button>
            </div>
          </div>
        </nav>

        {viewMode === "portfolio" ? (
          <>
        <section
          id="mission"
          className="grid gap-6 pb-10 pt-4 lg:grid-cols-[1.15fr_0.85fr]"
        >
          <div className="space-panel rounded-[2rem] p-6 sm:p-8 lg:p-10">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-emerald-200">
                <ShieldCheck size={14} />
                {t.status}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-fuchsia-300/20 bg-fuchsia-300/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-fuchsia-100">
                <MoonStar size={14} />
                Cosmic Resume
              </span>
            </div>

            <p className="mb-4 text-sm uppercase tracking-[0.45em] text-[var(--text-dim)]">
              {t.missionTitle}
            </p>
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-7xl">
              Thanachai Nomaya
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-cyan-100/90 sm:text-xl">
              {t.headline}
            </p>
            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--text-soft)] sm:text-lg">
              {t.intro}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:thanachaino168@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--accent-gold)] px-5 py-3 text-sm font-medium text-slate-950 transition hover:scale-[1.02]"
              >
                <Mail size={16} />
                {t.actions.contact}
              </a>
              <a
                href="https://github.com/Almzaba"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-5 py-3 text-sm text-white transition hover:border-cyan-300/40 hover:bg-white/10"
              >
                <Github size={16} />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/mr-thanachai-nomaya-bb4147369/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-5 py-3 text-sm text-white transition hover:border-cyan-300/40 hover:bg-white/10"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="space-panel rounded-[2rem] p-6">
              <div className="mb-5 flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.35em] text-[var(--text-dim)]">
                  Mission Feed
                </p>
                <Satellite className="text-cyan-200" size={18} />
              </div>

              <div className="relative mx-auto flex aspect-square max-w-[22rem] items-center justify-center">
                <div className="absolute h-full w-full rounded-full border border-cyan-300/20" />
                <div className="absolute h-[84%] w-[84%] rounded-full border border-fuchsia-300/20" />
                <div className="absolute h-[68%] w-[68%] rounded-full border border-amber-300/20" />
                <div className="orbital-ring absolute h-[92%] w-[92%] rounded-full border border-cyan-300/10" />
                <div className="orbital-ring absolute h-[76%] w-[76%] rounded-full border border-fuchsia-300/10 [animation-duration:16s]" />
                <div className="flex h-36 w-36 items-center justify-center rounded-full border border-cyan-200/30 bg-[radial-gradient(circle_at_30%_30%,rgba(125,211,252,0.5),rgba(15,23,42,0.2)_60%,rgba(15,23,42,0.95)_100%)] shadow-[0_0_80px_rgba(34,211,238,0.22)]">
                  <Rocket className="text-white" size={42} />
                </div>
                <div className="absolute left-[10%] top-1/2 h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_25px_rgba(34,211,238,0.8)]" />
                <div className="absolute right-[18%] top-[22%] h-3 w-3 rounded-full bg-fuchsia-300 shadow-[0_0_25px_rgba(232,121,249,0.8)]" />
                <div className="absolute bottom-[16%] right-[26%] h-3 w-3 rounded-full bg-amber-300 shadow-[0_0_25px_rgba(252,211,77,0.8)]" />
              </div>

              <p className="mt-5 text-center text-base leading-7 text-[var(--text-soft)]">
                {t.missionText}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {t.stats.map((item) => (
                <div
                  key={item.label}
                  className="space-panel rounded-[1.5rem] px-5 py-6 text-center"
                >
                  <p className="text-3xl font-semibold text-white">{item.value}</p>
                  <p className="mt-2 text-sm leading-6 text-[var(--text-soft)]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="capabilities"
          className="grid gap-6 py-10 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <div className="space-panel rounded-[2rem] p-6 sm:p-8">
            <div className="mb-5 flex items-center gap-3">
              <Radar className="text-cyan-200" size={20} />
              <p className="text-xs uppercase tracking-[0.35em] text-[var(--text-dim)]">
                {t.sections.skills}
              </p>
            </div>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              {t.skillSubtitle}
            </h2>
            <div className="mt-8 space-y-4">
              {t.strengths.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/5 p-4"
                >
                  <Sparkles className="mt-1 shrink-0 text-amber-300" size={18} />
                  <p className="text-[var(--text-soft)]">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {t.categories.map((category) => (
              <article
                key={category.title}
                className="space-panel rounded-[1.8rem] p-6 transition hover:-translate-y-1"
              >
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/8 text-cyan-200">
                    <category.icon size={22} />
                  </div>
                  <Star className="text-fuchsia-200/70" size={18} />
                </div>
                <h3 className="text-xl font-medium text-white">{category.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-slate-950/35 px-3 py-2 text-sm text-cyan-50/90"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="py-10">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[var(--text-dim)]">
                {t.sections.projects}
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                {t.projectShowcaseTitle}
              </h2>
              <p className="mt-3 max-w-3xl text-base leading-7 text-[var(--text-soft)]">
                {t.projectShowcaseSubtitle}
              </p>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
            <div className="space-panel rounded-[2rem] p-4">
              <div className="space-y-3">
                {t.projects.map((project, index) => (
                  <button
                    key={project.title}
                    onClick={() => setActiveProject(index)}
                    className={`w-full rounded-[1.4rem] border px-4 py-4 text-left transition ${
                      index === activeProject
                        ? "border-cyan-300/40 bg-cyan-300/12"
                        : "border-white/8 bg-white/4 hover:bg-white/8"
                    }`}
                  >
                    <p className="text-xs uppercase tracking-[0.28em] text-[var(--text-dim)]">
                      {project.type}
                    </p>
                    <h3 className="mt-2 text-lg font-medium text-white">
                      {project.title}
                    </h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.stack.slice(0, 3).map((item) => (
                        <span
                          key={`${project.title}-${item}`}
                          className="rounded-full border border-white/10 bg-slate-950/35 px-2.5 py-1 text-xs text-cyan-50/80"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-panel rounded-[2rem] p-6 sm:p-8">
              <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
                <div>
                  <span className="inline-flex rounded-full border border-amber-300/25 bg-amber-300/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-amber-100">
                    {activeMission.type}
                  </span>
                  <h3 className="mt-4 text-3xl font-semibold text-white">
                    {activeMission.title}
                  </h3>
                  <p className="mt-2 text-sm font-medium uppercase tracking-[0.28em] text-cyan-200/80">
                    {activeMission.role}
                  </p>
                  <p className="mt-4 text-base leading-8 text-[var(--text-soft)]">
                    {activeMission.summary}
                  </p>
                  <p className="mt-6 rounded-2xl border border-cyan-300/14 bg-cyan-300/8 p-4 text-sm leading-7 text-cyan-50/90">
                    {activeMission.highlight}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {activeMission.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/6 px-3 py-2 text-sm text-white"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  {activeMission.link ? (
                    <a
                      href={activeMission.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-4 py-2 text-sm text-cyan-100 transition hover:border-cyan-300/40 hover:bg-cyan-300/12"
                    >
                      <Github size={16} />
                      GitHub / Case Study
                      <ArrowUpRight size={15} />
                    </a>
                  ) : (
                    <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-4 py-2 text-sm text-cyan-100">
                      <Github size={16} />
                      {activeMission.repoStatus}
                    </p>
                  )}
                </div>

                <div className="rounded-[1.75rem] border border-white/8 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.18),rgba(10,14,31,0.2)_45%,rgba(10,14,31,0.92))] p-5">
                  <div className="mb-4 flex items-center justify-between">
                    <p className="text-xs uppercase tracking-[0.32em] text-[var(--text-dim)]">
                      Impact Signal
                    </p>
                    <Earth className="text-cyan-200" size={18} />
                  </div>
                  <div className="relative flex min-h-[18rem] flex-col justify-between overflow-hidden rounded-[1.4rem] border border-white/8 bg-slate-950/40 p-5">
                    <div className="absolute h-44 w-44 rounded-full bg-cyan-400/25 blur-3xl" />
                    <div className="absolute right-6 top-6 h-32 w-32 rounded-full border border-cyan-300/20" />
                    <div className="absolute bottom-4 right-10 h-52 w-52 rounded-full border border-fuchsia-300/10" />
                    <div className="relative">
                      <p className="text-xs uppercase tracking-[0.3em] text-cyan-100/60">
                        Built for
                      </p>
                      <p className="mt-2 text-2xl font-semibold text-white">
                        {activeMission.type}
                      </p>
                    </div>
                    <div className="relative space-y-3">
                      {activeMission.impact.map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/6 p-3"
                        >
                          <Star className="mt-0.5 shrink-0 text-amber-300" size={16} />
                          <p className="text-sm leading-6 text-cyan-50/90">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <a
                    href="mailto:thanachaino168@gmail.com"
                    className="mt-5 inline-flex items-center gap-2 text-sm text-cyan-200 transition hover:text-white"
                  >
                    Request full walkthrough
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="py-10">
          <div className="mb-6">
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--text-dim)]">
              {t.sections.experience}
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              Flight history
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {t.timeline.map((item) => (
              <article
                key={`${item.period}-${item.title}`}
                className="space-panel rounded-[2rem] p-6 sm:p-8"
              >
                <div className="mb-5 flex items-center justify-between gap-4">
                  <span className="rounded-full border border-fuchsia-300/20 bg-fuchsia-300/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-fuchsia-100">
                    {item.period}
                  </span>
                  <Briefcase className="text-cyan-200" size={18} />
                </div>
                <h3 className="text-2xl font-medium text-white">{item.title}</h3>
                <p className="mt-2 text-[var(--text-soft)]">{item.company}</p>
                <div className="mt-6 space-y-3">
                  {item.points.map((point) => (
                    <div
                      key={point}
                      className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/4 p-4"
                    >
                      <Star className="mt-1 shrink-0 text-amber-300" size={16} />
                      <p className="text-sm leading-7 text-[var(--text-soft)]">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="py-10">
          <div className="space-panel rounded-[2rem] p-6 sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-[var(--text-dim)]">
                  {t.sections.contact}
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                  {t.contactTitle}
                </h2>
                <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--text-soft)]">
                  {t.contactText}
                </p>
              </div>

              <div className="grid gap-4">
                {[
                  {
                    icon: Mail,
                    label: "Email",
                    value: "thanachaino168@gmail.com",
                    href: "mailto:thanachaino168@gmail.com",
                  },
                  {
                    icon: Phone,
                    label: "Phone",
                    value: "062-248-4854",
                    href: "tel:0622484854",
                  },
                  {
                    icon: MapPin,
                    label: "Location",
                    value: "Bangkok, Thailand",
                    href: null,
                  },
                ].map((item) => {
                  const contentBlock = (
                    <div className="flex items-center gap-4 rounded-[1.4rem] border border-white/10 bg-white/5 p-4 transition hover:border-cyan-300/35 hover:bg-white/8">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/12 text-cyan-200">
                        <item.icon size={20} />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.26em] text-[var(--text-dim)]">
                          {item.label}
                        </p>
                        <p className="mt-1 text-white">{item.value}</p>
                      </div>
                    </div>
                  );

                  return item.href ? (
                    <a key={item.label} href={item.href}>
                      {contentBlock}
                    </a>
                  ) : (
                    <div key={item.label}>{contentBlock}</div>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/8 pt-6 text-sm text-[var(--text-dim)]">
              <p>Built with React, Vite and a ridiculous amount of space energy.</p>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/Almzaba"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-white"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/mr-thanachai-nomaya-bb4147369/"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-white"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
          </>
        ) : (
          <ResumeImagePreview language={language} />
        )}
      </div>
    </div>
  );
}

export default Resume;
