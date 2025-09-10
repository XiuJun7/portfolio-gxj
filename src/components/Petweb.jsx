import React from "react";
import {
  CheckCircle2,
  ShieldCheck,
  Settings,
  Users,
  Package,
  ServerCog,
  KeyRound,
  LockKeyhole,
  Database,
  Image as ImageIcon,
  Globe,
} from "lucide-react";

const tech = [
  { label: "Dreamweaver (Workflow)", icon: <ImageIcon className="w-4 h-4" /> },
  { label: "HTML5", icon: <Globe className="w-4 h-4" /> },
  { label: "CSS / Bootstrap", icon: <ImageIcon className="w-4 h-4" /> },
  { label: "JavaScript (ES6)", icon: <KeyRound className="w-4 h-4" /> },
  { label: "jQuery + AJAX", icon: <ImageIcon className="w-4 h-4" /> },
  { label: "SQL (MySQL / SQL Server)", icon: <Database className="w-4 h-4" /> },
  { label: "Password Hashing (bcrypt)", icon: <LockKeyhole className="w-4 h-4" /> },
  { label: "REST-style Endpoints", icon: <ServerCog className="w-4 h-4" /> },
];

function Tag({ children }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border px-2 py-1 text-xs text-gray-700 bg-white/60 backdrop-blur-sm">
      {children}
    </span>
  );
}

function Section({ title, children, icon }) {
  return (
    <section className="max-w-6xl mx-auto px-6 py-8">
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <h2 className="text-xl md:text-2xl font-bold text-gray-900">{title}</h2>
      </div>
      <div>{children}</div>
    </section>
  );
}

function Card({ title, children, icon }) {
  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm hover:shadow-md transition">
      <div className="flex items-center gap-2 mb-2">
        {icon}
        <h3 className="font-semibold text-gray-900">{title}</h3>
      </div>
      <div className="text-sm text-gray-600 leading-relaxed">{children}</div>
    </div>
  );
}

function ScreenshotCarousel() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {screenshots.map((s, i) => (
        <figure key={i} className="group rounded-xl overflow-hidden border bg-white">
          <img
            src={s.src}
            alt={s.title}
            className="w-full h-64 object-cover group-hover:opacity-95 transition"
          />
          <figcaption className="p-4">
            <p className="font-medium text-gray-900">{s.title}</p>
            <p className="text-sm text-gray-600">{s.caption}</p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export default function Petweb() {
  return (
    <div className="min-h-screen ">
      {/* Hero */}
      <header className="relative">
        <div className="max-w-6xl mx-auto px-6 pt-12 pb-8">
          <div className="flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 text-xs text-gray-600">
              <Tag>Class Project</Tag>
              <Tag>Developer</Tag>
              <Tag>Full‑Stack</Tag>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900">
              Pet Adopt — Pet Adoption Platform
            </h1>
            <p className="text-gray-600 md:text-lg">
              A production‑style web application designed with Dreamweaver using HTML, JavaScript, and SQL.
              Users can browse adoptable dogs and cats, create accounts, submit adoption forms, and donate via
              Touch ’n Go (TNG) QR code.
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              {tech.map((t, i) => (
                <Tag key={i}>
                  {t.icon}
                  <span>{t.label}</span>
                </Tag>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Overview */}
      <Section title="Project Overview" icon={<CheckCircle2 className="w-5 h-5 text-emerald-600" />}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card title="My Role" icon={<Users className="w-4 h-4 text-gray-700" />}>
            Led end‑to‑end delivery as <b>developer</b>: UI/UX, front‑end (HTML/JS),
            SQL schema, CRUD endpoints, authentication, and testing.
          </Card>
          <Card title="Outcome" icon={<Package className="w-4 h-4 text-gray-700" />}>
            Delivered a responsive portal enabling <b>pet browsing</b>, <b>secure signup/login</b>, <b>adoption
            applications</b>, and <b>TNG QR donations</b> for operations.
          </Card>
          <Card title="Security" icon={<ShieldCheck className="w-4 h-4 text-gray-700" />}>
            Implemented password <b>hashing (bcrypt)</b>, server & client validation, parameterized SQL to
            prevent SQL injection.
          </Card>
        </div>
      </Section>

      {/* Features */}
      <Section title="Key Features" icon={<Settings className="w-5 h-5 text-indigo-600" />}>
        <div className="grid grid-cols-2 md:grid-cols-1 gap-6">
          <div className="rounded-2xl border bg-white p-6">
            <ul className="space-y-2 text-gray-700 text-m list-disc pl-5">
              <li>Sign up, login, profile update; hashed passwords stored in SQL.</li>
              <li>Browse dogs & cats details.</li>
              <li>Pet detail pages with name, gender, age and description.</li>
              <li>Adoption application form; submissions saved to SQL.</li>
              <li>Donation page with Touch’n Go (TNG) static QR.</li>
            </ul>
          </div>
          
        </div>
      </Section>

      {/* Technical Highlights */}
      <Section title="Technical Highlights" icon={<Package className="w-5 h-5 text-blue-600" />}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card title="HTML/JS Front‑End" icon={<Globe className="w-4 h-4 text-gray-700" />}>
            Built with semantic HTML5, Bootstrap utilities, JS/jQuery and
            AJAX form submissions. Designed/edited in Dreamweaver.
          </Card>
          <Card title="Data & Security" icon={<Database className="w-4 h-4 text-gray-700" />}>
            Tables: <b>Users</b>, <b>Cats</b>, <b>Dogs</b>, <b>Adoption Form</b>. Passwords stored as
            <b> bcrypt hashes + salt</b>. All DB writes use parameterized queries.
          </Card>
          <Card title="Donations via TNG QR" icon={<ShieldCheck className="w-4 h-4 text-gray-700" />}>
            Donation page shows a static Touch ’n Go QR. Donors scan & pay.
          </Card>
        </div>
      </Section>  

      
      {/* YouTube Demo */}
    <Section title="Project Demo Video" icon={<ServerCog className="w-5 h-5 text-teal-600" />}>
        <div className="rounded-2xl border bg-white p-6 text-center">
        <p className="text-gray-700 mb-4">Watch the full walkthrough of this project on YouTube:</p>
        <a href="https://youtu.be/DbdvO-xy03k"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
            Watch Website Demo
        </a>
        </div>
    </Section>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            Want a walkthrough of the website? I’m happy to dive into
            the implementation details.
          </p>
        </div>
      </footer>
    </div>
  );
}
