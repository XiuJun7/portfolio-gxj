import React from "react";
import { CheckCircle2, ShieldCheck, ShoppingCart, Settings, Users, Package, ServerCog, KeyRound, LockKeyhole, Database, Image as ImageIcon, Github, Globe } from "lucide-react";

/**
 * Portfolio project detail page for an internship e‑commerce portal
 * You can drop this component into your portfolio codebase.
 * TailwindCSS recommended. All images are placeholders—replace with your own.
 */

const screenshots = [
  {
    title: "Homepage – Featured Products & Responsive Nav",
    caption: "Promotional banner, featured products, and quick links to Login / Register / Catalog.",
    src: "/assets/bwhomepage.png",
  },
  {
    title: "Member – Shopping Cart & Checkout",
    caption: "AJAX-powered cart updates, order summary, and secure checkout flow.",
    src: "/assets/bworderform.png",
  },
  {
    title: "Book Details",
    caption: "Detailed book information including description, price, and stock.",
    src: "/assets/bwbook.png",
  },
  {
    title: "Order Details",
    caption: "View past orders with itemized breakdown of purchased books.",
    src: "/assets/bworder.png",
  },
  {
    title: "Authentication and Authorization",
    caption: "Secure login and registration with ASP.NET Identity integration and OAuth integration for seamless registration and login.",
    src: "/assets/bwaouth.png",
  },
  {
    title: "Member/Admin – Profile Management",
    caption: "View & edit profile, password change, client+server validation, anti-forgery tokens.",
    src: "/assets/bwupdate.png",
  },
  {
    title: "API Testing (Postman)",
    caption: "Verified backend endpoints using Postman to ensure reliability.",
    src: "/assets/bwpostman.png",
  },
  
];

const tech = [
  { label: "ASP.NET MVC", icon: <ServerCog className="w-4 h-4" /> },
  { label: "C#", icon: <KeyRound className="w-4 h-4" /> },
  { label: "Entity Framework", icon: <Database className="w-4 h-4" /> },
  { label: "SQL Server", icon: <Database className="w-4 h-4" /> },
  { label: "RESTful API", icon: <Globe className="w-4 h-4" /> },
  { label: "jQuery + AJAX", icon: <ImageIcon className="w-4 h-4" /> },
  { label: "Bootstrap", icon: <ImageIcon className="w-4 h-4" /> },
  { label: "SweetAlert / Bootbox", icon: <ImageIcon className="w-4 h-4" /> },
  { label: "ASP.NET Identity", icon: <LockKeyhole className="w-4 h-4" /> },
  { label: "OAuth (Facebook)", icon: <ShieldCheck className="w-4 h-4" /> },
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
            loading="lazy"
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

export default function Bookweb() {
  return (
    <div className="min-h-screen ">
      {/* Hero */}
      <header className="relative">
        <div className="max-w-6xl mx-auto px-6 pt-12 pb-8">
          <div className="flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 text-xs text-gray-600">
              <Tag>Internship Project</Tag>
              <Tag>Sole Developer</Tag>
              <Tag>Full‑Stack</Tag>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900">
              Member & Admin Portal — E‑Commerce Platform
            </h1>
            <p className="text-gray-600 md:text-lg">
              A production-style web application designed and built end‑to‑end by me during my internship. It
              features a customer-facing Member Portal and an Admin Portal for operational control, with secure
              authentication, RESTful APIs, responsive UI, and a robust data model.
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
            I led the full development lifecycle as the <b>sole developer</b>: requirements clarification, UI/UX,
            front‑end, back‑end, database schema, REST API implementation, authentication & authorization, and
            testing.
          </Card>
          <Card title="Outcome" icon={<ShoppingCart className="w-4 h-4 text-gray-700" />}>
            Delivered a responsive, secure, and scalable portal enabling <b>member shopping</b>, <b>order history</b>, and
            a comprehensive <b>admin dashboard</b> for users, orders, and products.
          </Card>
          <Card title="Security" icon={<ShieldCheck className="w-4 h-4 text-gray-700" />}>
            Implemented <b>ASP.NET Identity</b>, role‑based access control, OAuth (Facebook), server & client
            validation, and anti‑forgery tokens to mitigate CSRF.
          </Card>
        </div>
      </Section>

      {/* Features */}
      <Section title="Key Features" icon={<Settings className="w-5 h-5 text-indigo-600" />}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border bg-white p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Member Portal</h3>
            <ul className="space-y-2 text-gray-700 text-sm list-disc pl-5">
              <li>User registration, secure login, profile & password management.</li>
              <li>Shopping cart with AJAX updates, order summary, and purchase flow.</li>
              <li>Transaction history with order details, statuses, and timestamps.</li>
            </ul>
          </div>
          <div className="rounded-2xl border bg-white p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Admin Portal</h3>
            <ul className="space-y-2 text-gray-700 text-sm list-disc pl-5">
              <li>Secure admin login with role‑based authorization.</li>
              <li>User management: create / update accounts and access levels.</li>
              <li>Order management: review purchases, track status changes.</li>
              <li>Product settings: add / edit / remove products and manage inventory.</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Technical Highlights */}
      <Section title="Technical Highlights" icon={<Package className="w-5 h-5 text-blue-600" />}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card title="RESTful API & Testing" icon={<Globe className="w-4 h-4 text-gray-700" />}>
            Designed stateless REST endpoints (GET/POST/PUT/DELETE) for products, users, carts, and orders.
            Thoroughly tested with <b>Postman</b> to validate correct responses and edge cases (400/404 handling).
          </Card>
          <Card title="Client‑Side UX" icon={<ImageIcon className="w-4 h-4 text-gray-700" />}>
            Implemented <b>jQuery + AJAX</b> for seamless interactions without page reloads. Integrated
            <b> SweetAlert</b> and <b>Bootbox</b> for confirmations and feedback.
          </Card>
          <Card title="Data Integrity" icon={<Database className="w-4 h-4 text-gray-700" />}>
            Resolved an order‑overwriting issue by revising schema & logic to ensure all orders persist correctly,
            improving reliability for both users and admins.
          </Card>
        </div>
      </Section>

      {/* Screenshots */}
      <Section title="Screenshots" icon={<ImageIcon className="w-5 h-5 text-rose-600" />}>
        <ScreenshotCarousel />
        <p className="text-xs text-gray-500 mt-3">* Screenshots shown are representative. Full production source is proprietary to the internship host company.</p>
      </Section>

      {/* Simple Architecture Sketch */}
      <Section title="System Diagram (Simplified)" icon={<ServerCog className="w-5 h-5 text-teal-600" />}>
        <div className="rounded-2xl border bg-white p-6 overflow-x-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="text-center">
              <div className="mx-auto w-40 h-24 rounded-xl border flex items-center justify-center bg-gray-50">Frontend (MVC)</div>
              <p className="text-xs text-gray-500 mt-2">Responsive UI, jQuery + AJAX</p>
            </div>
            <div className="text-center">
              <div className="mx-auto w-40 h-24 rounded-xl border flex items-center justify-center bg-gray-50">REST API</div>
              <p className="text-xs text-gray-500 mt-2">IHttpActionResult, validation & status codes</p>
            </div>
            <div className="text-center">
              <div className="mx-auto w-40 h-24 rounded-xl border flex items-center justify-center bg-gray-50">Database</div>
              <p className="text-xs text-gray-500 mt-2">Entity Framework + SQL Server</p>
            </div>
          </div>
          <div className="flex items-center justify-center mt-4 text-xs text-gray-500 gap-2">
            <ShieldCheck className="w-4 h-4" />
            <span>ASP.NET Identity, Roles, OAuth (Facebook), Anti‑forgery Tokens</span>
          </div>
        </div>
      </Section>

      {/* Footer CTAs (Optional) */}
      <footer className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-gray-500">Interested in the implementation details? I’m happy to walk through the architecture and code decisions during an interview.</p>
          
        </div>
      </footer>
    </div>
  );
}
