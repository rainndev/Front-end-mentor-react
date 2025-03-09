import BlogPreviewCard from "./component/BlogPreviewCard";
import Accordion from "./pages/Accordion";
import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-[#212121]">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/faq-accordion" element={<Accordion />} />
        <Route path="/blog-preview-card" element={<BlogPreviewCard />} />
      </Routes>
    </div>
  );
};

export default App;
