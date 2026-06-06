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

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
        {books.map((book, i) => (
          <motion.div
            key={book.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 * i }}
            data-testid={`card-book-${book.id}`}
            className="group bg-card rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-xl transition-all duration-500 border border-card-border flex flex-col items-start"
          >
            <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-8">
              <span className="font-serif text-primary text-2xl">{book.title[0]}</span>
            </div>
            <h2 className="font-serif text-2xl tracking-widest text-foreground mb-4">{book.title}</h2>
            <p className="text-muted-foreground leading-relaxed flex-1 mb-10 tracking-wide">
              {book.description}
            </p>
            <Link
              to={`/reader/${book.id}`}
              data-testid={`button-enter-${book.id}`}
              className="text-primary font-medium tracking-widest text-sm hover:text-primary/80 transition-all flex items-center gap-2 group-hover:gap-4 duration-300"
            >
              進入世界 <span>→</span>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
