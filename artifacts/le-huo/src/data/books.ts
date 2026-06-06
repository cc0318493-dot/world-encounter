export interface Book {
  id: string;
  title: string;
  description: string;
  epubPath: string;
}

export const books: Book[] = [
  {
    id: "journey-to-the-west",
    title: "西遊記",
    description: "一場橫跨人間與神話世界的取經之旅。",
    epubPath: "/books/journey-to-the-west.epub",
  },
  {
    id: "dream-of-red-chamber",
    title: "紅樓夢",
    description: "一段繁華與衰落交織的人生長卷。",
    epubPath: "/books/dream-of-red-chamber.epub",
  },
  {
    id: "mulan-legend",
    title: "木蘭奇女傳",
    description: "一位女子的傳奇冒險故事。",
    epubPath: "/books/mulan-legend.epub",
  },
];

export function getBookById(id: string): Book | undefined {
  return books.find((b) => b.id === id);
}
