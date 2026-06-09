import { useEffect, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getBookById } from "@/data/books";
import { Menu, X, ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react";

export default function ReaderPage() {
  const { id } = useParams<{ id: string }>();
  const bookData = id ? getBookById(id) : undefined;

  const viewerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const bookRef = useRef<EpubBook | null>(null);
  const renditionRef = useRef<EpubRendition | null>(null);

  const [toc, setToc] = useState<EpubTocItem[]>([]);
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [txtContent, setTxtContent] = useState("");
  const [chapters, setChapters] = useState<string[]>([]);
  const [currentChapter, setCurrentChapter] = useState(1);
  const [chapterTitles, setChapterTitles] = useState<string[]>([]);

  useEffect(() => {
    if (!bookData) return;

    if (bookData.format === "txt") {
      fetch(bookData.source)
        .then((res) => res.text())
        .then((text) => {
          console.log(text);

          let matches: string[] = [];
          let parts: string[] = [];

          if (bookData.id === "dream-of-red-chamber") {
            const sections = text.split("<chapter>");

            matches = sections.slice(1).map((section) => {
              const firstLine = section.trim().split("\n")[0];
              return firstLine || "";
            });

            parts = sections;
          } else {
            const chapterRegex = /^第[^\n]{0,50}回[^\n]*$/gm;

            matches = (text.match(chapterRegex) || []).filter(
              (title) => title.length < 35,
            );

            parts = text.split(chapterRegex);
          }

          setChapterTitles(matches);
          setChapters(parts);

          setTxtContent(text);
          setIsReady(true);
        })
        .catch((err) => {
          console.error("TXT讀取失敗:", err);
        });
    }
  }, [bookData]);

  if (!bookData) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background">
        <p className="font-serif text-xl mb-6 tracking-widest">
          這個世界尚未被發現。
        </p>
        <Link
          to="/worlds"
          className="text-primary hover:underline tracking-wider"
        >
          ← 返回探索世界
        </Link>
      </div>
    );
  }

  const goNext = () => {
    if (currentChapter < chapters.length - 1) {
      setCurrentChapter(currentChapter + 1);

      setTimeout(() => {
        contentRef.current?.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, 0);
    }
  };

  const goPrev = () => {
    if (currentChapter > 1) {
      setCurrentChapter(currentChapter - 1);
    }
  };
  const goTo = (href: string) => {
    renditionRef.current?.display(href);
    setIsTocOpen(false);
  };

  return (
    <div className="flex flex-col h-[100dvh] bg-background">
      {/* Top Bar */}
      <div className="h-14 border-b border-border/40 flex items-center justify-between px-4 shrink-0 bg-background/90 z-20">
        <div className="flex items-center gap-4 w-1/3">
          <Link
            to="/worlds"
            data-testid="button-back-worlds"
            className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 text-sm tracking-widest"
          >
            <ArrowLeft size={16} />{" "}
            <span className="hidden sm:inline">返回探索世界</span>
          </Link>
        </div>
        <div className="w-1/3 text-center">
          <span className="font-serif tracking-widest font-medium">
            {bookData.title}
            {chapterTitles[currentChapter - 1] &&
              `｜${chapterTitles[currentChapter - 1]}`}
          </span>
        </div>
        <div className="w-1/3 flex justify-end">
          <button
            onClick={() => setIsTocOpen(!isTocOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-foreground"
          >
            {isTocOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden relative">
        {/* TOC Sidebar */}
        <div
          className={`
          absolute md:relative z-10 w-64 h-full bg-card border-r border-border/40 flex flex-col transition-transform duration-300
          ${isTocOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
        >
          <div className="p-6 overflow-y-auto h-full">
            <h3 className="font-serif text-lg mb-6 tracking-widest border-b border-border/50 pb-4">
              目錄
            </h3>
            <ul className="space-y-4">
              {chapterTitles.map((title, index) => (
                <li key={index}>
                  <button
                    onClick={() => {
                      setCurrentChapter(index + 1);
                      setIsTocOpen(false);

                      setTimeout(() => {
                        contentRef.current?.scrollTo({
                          top: 0,
                          behavior: "smooth",
                        });
                      }, 0);
                    }}
                    className={`text-left text-sm transition-colors w-full tracking-wide ${
                      currentChapter === index + 1
                        ? "text-foreground font-medium"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {title}
                  </button>
                </li>
              ))}
              {chapterTitles.length === 0 && (
                <li className="text-sm text-muted-foreground tracking-wide">
                  載入中...
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Reader Area */}
        <div className="flex-1 flex flex-col relative h-full">
          <div ref={contentRef} className="flex-1 overflow-auto p-8">
            <pre className="whitespace-pre-wrap font-serif text-base leading-8">
              {chapters[currentChapter]}
            </pre>
          </div>

          {/* Bottom Controls */}
          {isReady && (
            <div className="h-16 shrink-0 border-t border-border/30 flex items-center justify-between px-4 sm:px-8 bg-background/50 backdrop-blur-sm">
              <button
                onClick={goPrev}
                data-testid="button-prev-page"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ChevronLeft size={20} />{" "}
                <span className="text-sm tracking-widest hidden sm:inline">
                  上一頁
                </span>
              </button>

              <Link
                to="/completed"
                className="text-xs text-primary/70 hover:text-primary transition-colors tracking-widest"
              >
                你已完成這段旅程？
              </Link>

              <button
                onClick={goNext}
                data-testid="button-next-page"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="text-sm tracking-widest hidden sm:inline">
                  下一頁
                </span>{" "}
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
