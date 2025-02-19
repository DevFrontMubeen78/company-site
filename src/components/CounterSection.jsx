import { useEffect, useState, useRef } from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion"; // 👈 Animation ke liye

const counterData = [
  { end: 125, text: "Mobile Application" },
  { end: 45, text: "Web Applications" },
  { end: 101, text: "Logos & Branding" },
  { end: 11, text: "AI Systems" },
  { end: 20, text: "Staff Augmentation" },
];

const CounterSection = () => {
  const [visibleIndexes, setVisibleIndexes] = useState([]);
  const counterRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setVisibleIndexes((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.5 }
    );

    counterRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="overflow-hidden counter padTop bg-[#e8c6d7] p-5">
      <div className="container">
        <div className="main grid md:grid-cols-5 grid-cols-2 md:gap-20 gap-10">
          {counterData.map((item, index) => (
            <motion.div
              key={index}
              ref={(el) => (counterRefs.current[index] = el)}
              className="flex flex-col gap-5 items-center text-[#FF0066]"
              initial={{ opacity: 0, y: 50 }}
              animate={visibleIndexes.includes(index) ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.3 }} // 👈 Delay se one by one aye ga
            >
              {visibleIndexes.includes(index) ? (
                <CountUp
                  className="md:text-6xl text-4xl font-bold"
                  end={item.end}
                  suffix="+"
                  duration={2}
                />
              ) : (
                <span className="md:text-6xl text-4xl font-bold">0+</span>
              )}
              <p className="text-[#000] text-lg">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CounterSection;
