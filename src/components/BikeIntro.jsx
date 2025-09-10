import React from "react";

export default function BikeIntro() {
  const projects = [
    {
        title: "User Registration & Login",
        desc: "Users can create an account and log in using Firebase Authentication with email, phone number, and password validation."
      },
      {
        title: "Profile Management",
        desc: "Users can update their personal details anytime like username, password and phone number within the app."
      },
      {
        title: "Bike Availability Check",
        desc: "View a real-time map of available bikes at rental stations across the UTHM campus."
      },      
      {
        title: "Payment Integration",
        desc: "Pay securely for bike rentals through Razorpay, supporting smooth and cashless transactions."
      },
      {
        title: "Ride History",
        desc: "View ride history on my bike page directly in the app."
      },
      {
        title: "Weather Integration",
        desc: "Get real-time weather updates to plan safe and convenient cycling trips around the campus."
      }      
    ];

  return (
    <section className="relative z-10 py-16 px-6 md:px-20 mt-20">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-[#008000]">
        Project Features
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((item, idx) => (
          <div
            key={idx}
            className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
          >
            <h3 className="text-lg font-bold text-[#008000] mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
        
      </div>
    </section>
  );
}
