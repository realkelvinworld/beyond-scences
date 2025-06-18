// import { TextEffect } from "../motion-primitives/text-effect";
import { AnimatePresence, motion } from "motion/react";
import { useState, useEffect } from "react";

import Image from "next/image";
import { Logo } from "@/public/Images";

export function LoadingAnimation() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="h-dvh w-dvw fixed top-0 left-0 bg-black z-600 overflow-hidden flex flex-col items-center justify-center"
          initial={{ opacity: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 0.5 }}
        >
          <section className="">
            <Image src={Logo} alt="logo of beyond scenes" width={400} />
          </section>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
