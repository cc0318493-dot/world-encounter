import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-16"
        >
          <div className="w-24 h-px bg-border mx-auto" />

          <div className="font-serif text-2xl md:text-4xl leading-[1.9] text-foreground">
            <p>有些世界被寫進歷史。</p>

            <p className="mt-4">有些世界被收藏在書頁之間。</p>

            <p className="mt-4">
              有些世界，
              <br />
              甚至從未被真正看見。
            </p>
          </div>

          <div className="text-lg md:text-xl leading-[2] text-muted-foreground">
            <p>樂活從公有領域經典文學開始。</p>

            <p className="mt-4">透過 Project Gutenberg 保存下來的作品，</p>

            <p className="mt-4">
              讓那些跨越時代的世界，
              <br />
              再次被閱讀。
            </p>
          </div>

          <div className="text-lg md:text-xl leading-[2] text-muted-foreground">
            <p>如果你也認同這份理念，</p>

            <p className="mt-4">
              歡迎分享樂活，
              <br />
              或支持網站持續前行。
            </p>
          </div>

          <div className="font-serif text-2xl md:text-4xl leading-[1.8] text-foreground">
            <p>每一次相遇，</p>

            <p>都可能讓一個世界被重新看見。</p>
          </div>

          <div className="w-24 h-px bg-border mx-auto" />
        </motion.div>
      </div>
    </section>
  );
}
