import { Link } from "react-router-dom";
import { books } from "@/data/books";
import { motion } from "framer-motion";

export default function WorldsPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-16 md:mb-24">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-serif text-3xl md:text-4xl tracking-widest text-foreground mb-6"
        >
          等待相遇的世界
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-muted-foreground tracking-wider"
        >
          每一本書，都是一個等待被開啟的世界。
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {books.map((book, i) => (
          <motion.div
            key={book.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <Link
              to={`/reader/${book.id}`}
              className="block max-w-[300px] mx-auto"
            >
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-3xl
                  aspect-square
                  shadow-lg
                  group
                  cursor-pointer
                "
              >
                <img
                  src={book.coverImage}
                  alt={book.title}
                  className="
                    absolute
                    inset-0
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-b
                    from-black/20
                    via-black/10
                    to-black/60
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    p-8
                    flex
                    flex-col
                  "
                >
                  <div>
                    <span
                      className="
                        inline-block
                        px-3
                        py-1
                        rounded-full
                        text-xs
                        bg-white/80
                        text-black
                      "
                    >
                      經典世界
                    </span>
                  </div>

                  <div className="mt-8">
                    <h2
                      className="
                        text-white
                        text-4xl
                        font-serif
                        mb-4
                      "
                    >
                      {book.title}
                    </h2>

                    <p
                      className="
                        text-white/90
                        leading-relaxed
                        max-w-xs
                      "
                    >
                      {book.description}
                    </p>
                  </div>

                  <div className="mt-auto">
                    <div
                      className="
                        inline-flex
                        items-center
                        gap-2
                        bg-white/90
                        text-black
                        px-5
                        py-3
                        rounded-full
                      "
                    >
                      進入世界 →
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
