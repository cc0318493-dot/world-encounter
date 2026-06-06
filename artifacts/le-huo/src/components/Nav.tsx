import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="樂活" className="h-8 w-auto object-contain" />
          <span className="font-serif text-lg tracking-wider font-medium text-foreground">樂活</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors tracking-wide">首頁</Link>
            <Link to="/worlds" className="hover:text-foreground transition-colors tracking-wide">探索世界</Link>
          </div>
          <Link
            to="/worlds"
            className="bg-primary text-primary-foreground px-5 py-2 text-sm rounded-full hover:bg-primary/90 transition-colors tracking-widest"
          >
            開始探索
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden p-2 text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-t border-border/40 bg-background p-4 flex flex-col gap-4">
          <Link to="/" className="text-foreground font-medium px-2 py-1 tracking-wide" onClick={() => setIsOpen(false)}>首頁</Link>
          <Link to="/worlds" className="text-foreground font-medium px-2 py-1 tracking-wide" onClick={() => setIsOpen(false)}>探索世界</Link>
          <Link
            to="/worlds"
            className="bg-primary text-primary-foreground px-4 py-2 text-center text-sm rounded-full mt-2 tracking-widest"
            onClick={() => setIsOpen(false)}
          >
            開始探索
          </Link>
        </div>
      )}
    </nav>
  );
}
