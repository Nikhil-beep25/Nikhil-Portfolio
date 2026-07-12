import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface AnimatedRoleProps {
  className?: string;
}

export default function AnimatedRole({ className = "" }: AnimatedRoleProps) {
  const roles = ["Full Stack Developer", "Python Developer"];
  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const currentFullText = roles[roleIndex];

    if (!isDeleting) {
      // Type letter-by-letter (70ms speed)
      if (displayText.length < currentFullText.length) {
        timer = setTimeout(() => {
          setDisplayText(currentFullText.slice(0, displayText.length + 1));
        }, 70);
      } else {
        // Pause for 2 seconds after complete text
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      }
    } else {
      // Delete letter-by-letter (40ms speed)
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(currentFullText.slice(0, displayText.length - 1));
        }, 40);
      } else {
        // Switch to the next role
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <div className={`inline-flex items-center text-[#111827] font-bold tracking-normal leading-[1.2] select-none ${className}`}>
      <motion.span
        animate={{ opacity: isDeleting ? 0.6 : 1 }}
        transition={{ duration: 0.15 }}
      >
        {displayText}
      </motion.span>
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
        className="ml-0.5"
      >
        |
      </motion.span>
    </div>
  );
}
