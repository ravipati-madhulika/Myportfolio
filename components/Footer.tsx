"use client";

import { useState } from "react";

export default function Footer() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
  
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  
    // auto hide after 3s
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <footer className="footer">

      {/* LEFT */}
      <div className="footer-left">
        <h2>Let’s Connect</h2>

        <div className="footer-links">
          <a href="https://github.com/ravipati-madhulika" target="_blank">GitHub</a>
          <a href="https://leetcode.com/u/its_madhu_lika/" target="_blank">LeetCode</a>
          <a href="https://www.linkedin.com/in/rps-madhulika" target="_blank">LinkedIn</a>
        </div>
      </div>

      {/* RIGHT FORM */}
      <form className="footer-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />

        <input
          type="email"
          placeholder="Your Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />

        <textarea
          placeholder="Your Message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          required
        />

        <button type="submit">Send →</button>
        {status === "success" && (
          <p style={{ color: "lime" }}>Message sent successfully!</p>
        )}
        {status === "error" && (
          <p style={{ color: "red" }}>Something went wrong!</p>
        )}
      </form>

    </footer>
  );
}