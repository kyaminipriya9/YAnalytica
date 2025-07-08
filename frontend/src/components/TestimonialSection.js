import React from 'react';

const testimonials = [
  {
    name: "Divya Rao",
    role: "Data Analyst at MyBiz",
    quote: "YAnalytica helped us cut down data interpretation time by 70%. The visuals are beautiful and instant.",
    image: "https://randomuser.me/api/portraits/women/45.jpg"
  },
  {
    name: "Rahul Mehta",
    role: "Founder, InsightDash",
    quote: "We use YAnalytica in our daily operations. It’s like having a junior analyst that never sleeps!",
    image: "https://randomuser.me/api/portraits/men/36.jpg"
  },
];

const TestimonialSection = () => {
  return (
    <section id="testimonial" className="py-20 px-6 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12" data-aos="fade-up">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700"
              data-aos="fade-up"
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-14 h-14 rounded-full mx-auto mb-4"
              />
              <p className="italic text-gray-600 dark:text-gray-300 mb-4">“{t.quote}”</p>
              <h4 className="font-semibold">{t.name}</h4>
              <span className="text-sm text-gray-500 dark:text-gray-400">{t.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;