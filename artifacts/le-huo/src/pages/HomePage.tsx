import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-[calc(100dvh-4rem)]">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center px-4 py-20 text-center">
        <motion.img
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          src="/logo.png"
          alt="樂活"
          className="w-24 h-24 md:w-32 md:h-32 object-contain mb-12 opacity-90"
        />

        <div className="font-serif text-2xl md:text-4xl leading-[2] md:leading-[2.2] tracking-widest text-foreground max-w-3xl mx-auto mb-12 flex flex-col gap-4 md:gap-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            如果每一個故事都是一個世界，
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}>
            為什麼有些世界，
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }}>
            還來不及被看見，就得消失？
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="text-sm md:text-base leading-loose text-muted-foreground max-w-xl mx-auto mb-16 flex flex-col gap-2"
        >
          <p>我們相信只要有一個念頭就能打造世界，</p>
          <p>在這裡，</p>
          <p>讓世界都有機會相遇相信它真實存在的人。</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.0 }}
        >
          <Link
            to="/worlds"
            className="inline-block bg-primary text-primary-foreground font-serif tracking-widest px-8 py-4 rounded-full hover:bg-primary/90 transition-all hover:-translate-y-1 hover:shadow-lg duration-300"
          >
            開始探索世界
          </Link>
        </motion.div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-4 relative flex items-center justify-center">
        <div className="absolute top-0 w-24 h-[1px] bg-border left-1/2 -translate-x-1/2"></div>
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-serif text-lg md:text-xl leading-[2.5] text-foreground/80 tracking-wide">
            樂活是一個讓故事與讀者相遇的地方。<br />
            從公有領域作品開始，<br />
            未來也保留給更多創作者一個被發現的機會。
          </p>
        </div>
        <div className="absolute bottom-0 w-24 h-[1px] bg-border left-1/2 -translate-x-1/2"></div>
      </section>
    </div>
  );
}
