import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

import useAlert from "../hooks/useAlert.js";
import Alert from "../components/Alert.jsx";

const Contact = () => {
  const formRef = useRef();

  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Goh Xiu Jun",
          from_email: form.email,
          to_email: "xiujun717@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: "Thank you for your message 😃",
            type: "success",
          });

          setTimeout(() => {
            hideAlert(false);
            setForm({ name: "", email: "", message: "" });
          }, 3000);
        },
        (error) => {
          setLoading(false);
          console.error(error);

          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: "danger",
          });
        }
      );
  };

  return (
    <section
      className="relative c-space my-20 flex items-center justify-center min-h-screen"
      id="contact"
    >
      {alert.show && <Alert {...alert} />}

      {/* 表单卡片 */}
      <div
        className="relative z-10 p-10 w-full max-w-lg rounded-2xl
                   bg-white border border-gray-200 shadow-xl"
      >
        <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Let’s Talk
        </h3>
        <p className="text-gray-600 text-center mb-8">
          Whether you’re looking to build a new website, improve your platform,
          or bring a unique project to life — I’m here to help.
        </p>

        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col space-y-6">
          <label className="space-y-2">
            <span className="text-sm font-semibold text-gray-700">Full Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-gray-500 focus:outline-none"
              placeholder="ex., Lim Ting Ting"
            />
          </label>

          <label className="space-y-2">
            <span className="text-sm font-semibold text-gray-700">Email address</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-gray-500 focus:outline-none"
              placeholder="ex., tingting@gmail.com"
            />
          </label>

          <label className="space-y-2">
            <span className="text-sm font-semibold text-gray-700">Your message</span>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-gray-500 focus:outline-none"
              placeholder="Share your thoughts or inquiries..."
            />
          </label>

          <button
            className="flex items-center justify-center gap-2 px-6 py-3 
                       rounded-lg bg-gradient-to-r from-black-500 to-gray-500 
                       text-white font-semibold shadow hover:opacity-90 
                       transition disabled:opacity-50"
            type="submit"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
