import { TextEffect } from "../motion-primitives/text-effect";
import { AnimatePresence, motion } from "motion/react";
import { useState, useEffect } from "react";
import { FONT_QRADA } from "@/lib/font";
import { cn } from "@/lib/utils";

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
            <h2
              className={cn(
                FONT_QRADA.variable,
                "text-4xl  md:text-[10.4vw]  text-white text-center -tracking-[0.2rem] md:-tracking-[0.5vw] font-qrada "
              )}
            >
              <TextEffect
                per="char"
                as="span"
                preset="fade"
                className="text-white text-center"
              >
                BEYOND SCENCES
              </TextEffect>
            </h2>
          </section>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
