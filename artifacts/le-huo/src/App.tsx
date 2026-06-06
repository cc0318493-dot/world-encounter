import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Nav from "@/components/Nav";
import HomePage from "@/pages/HomePage";
import WorldsPage from "@/pages/WorldsPage";
import ReaderPage from "@/pages/ReaderPage";
import CompletedPage from "@/pages/CompletedPage";

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <div className="min-h-[100dvh] bg-background text-foreground flex flex-col font-sans">
        <Routes>
          <Route path="/reader/:id" element={<ReaderPage />} />
          <Route path="*" element={<LayoutWithNav />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function LayoutWithNav() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/worlds" element={<WorldsPage />} />
          <Route path="/completed" element={<CompletedPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
