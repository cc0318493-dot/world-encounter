export interface Book {
  id: string;
  title: string;
  description: string;
  format: "txt" | "epub";
  source: string;
  coverImage: string;
}

export const books: Book[] = [
  {
    id: "journey-to-the-west",
    title: "西遊記",
    description: "一場橫跨人間與神話世界的取經之旅。",
    format: "txt",
    source: "/books/journey-to-the-west.txt",
    coverImage: "/xiyouji.png",
  },

  {
    id: "mulan-legend",
    title: "木蘭奇女傳",
    description: "一位女子的傳奇冒險故事。",
    format: "txt",
    source: "/books/mulan-legend.txt",
    coverImage: "/mulan.png",
  },

  {
    id: "dream-of-red-chamber",
    title: "紅樓夢",
    description: "一段繁華與衰落交織的人生長卷。",
    format: "txt",
    source: "/books/dream-of-red-chamber.txt",
    coverImage: "/Dream.png",
  },
];

export function getBookById(id: string): Book | undefined {
  return books.find((b) => b.id === id);
}
