import { motion } from "framer-motion";
import { styles } from "../styles";
import { cn } from "../utils/lib";
import calvinface from "../assets/calvinface.jpg";

// Hero
export const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto flex justify-center items-center">
      <div
        className={cn(
          styles.paddingX,
          "flex flex-col items-center justify-center h-full mt-[-90px]" // Adjust the margin here
        )}
      >
        {/* Image in the center */}
        <div className="flex flex-col items-center">
          <img src={calvinface} alt="Calvin Tjoaquinn" className="w-48 h-48 rounded-full object-cover" />
          <h1 className={cn(styles.heroHeadText, "text-white mt-5")}>
            Hi, I'm <span className="text-[#915eff]">Calvin Tjoaquinn</span>
          </h1>
          <p className={cn(styles.heroSubText, "text-white-100 mt-2")}>
            I develop User Experience, user interfaces, and web applications.
          </p>
        </div>
      </div>

      {/* Scroll to about section */}
      <div className="absolute bottom-10 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};
