import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AboutSection from "../components/AboutSection";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}{" "}
      <section className="relative h-[85vh]">
        {/* 背景圖片 */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/world-gate.png')",
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        {/* Hero 內容 */}
        <div
          className="
          relative z-10
          h-full
          flex
          flex-col
          items-center
          justify-center
          text-center
          px-6
          translate-y-10
          "
        >
          {/* 提問 */}
          <div className="space-y-2 md:space-y-3 mb-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="
            font-serif
            text-white
            text-3xl
            md:text-5xl
            leading-tight
          "
            >
              如果每一個故事都是一個世界，
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="
            font-serif
            text-white
            text-3xl
            md:text-4xl
            leading-tight
          "
            >
              為什麼有些世界，
            </motion.h2>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="
            font-serif
            text-white
            text-3xl
            md:text-4xl
            leading-tight
          "
            >
              還來不及被看見，就得消失？
            </motion.h2>
          </div>

          {/* 分隔線 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="w-24 h-px bg-white/40 mb-6"
          />

          {/* 回答 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="max-w-3xl text-white mb-8"
          >
            <p className="text-lg md:text-xl leading-loose">
              我們相信只要有一個念頭就能打造世界。
            </p>

            <p className="text-lg md:text-xl leading-loose mt-2">
              在這裡，每一個世界都值得被看見。
            </p>

            <p className="text-lg md:text-xl leading-loose mt-2">
              每一個故事，都有機會找到相信它的人。
            </p>
          </motion.div>

          {/* 按鈕 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <Link
              to="/worlds"
              className="
            inline-block
            bg-white
            text-black
            font-serif
            text-base
            md:text-lg
            px-10
            py-4
            rounded-full
            shadow-xl
            hover:scale-105
            transition
          "
            >
              開始探索世界
            </Link>
          </motion.div>
        </div>
      </section>
      {/* 第二屏 */}
      <AboutSection />
    </div>
  );
}
