import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function CompletedPage() {
  return (
    <div className="min-h-[calc(100dvh-4rem)] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative background logo */}
      <img 
        src="/logo.png" 
        alt="" 
        className="absolute inset-0 m-auto w-96 h-96 object-contain opacity-5 pointer-events-none"
        aria-hidden="true"
      />
      
      <div className="max-w-2xl mx-auto text-center relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="font-serif text-3xl md:text-5xl tracking-widest text-foreground mb-12"
        >
          你已完成這段旅程。
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col gap-4 text-muted-foreground text-sm md:text-base leading-loose tracking-widest mb-16"
        >
          <p>如果你也相信，</p>
          <p>每一個世界都值得一次相遇的機會。</p>
          <p>歡迎分享給更多人。</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <Link
            to="/worlds"
            className="inline-block border border-primary text-primary font-serif tracking-widest px-8 py-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-500"
          >
            繼續探索世界
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
