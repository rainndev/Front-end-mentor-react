import { scan } from "react-scan"; // must be imported before React and React DOM

import BlogPreviewCard from "./pages/BlogPreviewCard";
import ResultsSummary from "./pages/ResultsSummary";
import TicketGeneratorMain from "./pages/TicketGeneratorMain";
import Accordion from "./pages/Accordion";
import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router-dom";
import ProductList from "./pages/ProductList";
import AdviceGenerator from "./pages/AdviceGenerator";
// scan({
//   enabled: false,
// });

const App = () => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-[#212121] ">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/faq-accordion" element={<Accordion />} />
        <Route path="/blog-preview-card" element={<BlogPreviewCard />} />
        <Route path="/results-summary" element={<ResultsSummary />} />
        <Route
          path="/conference-ticket-generator"
          element={<TicketGeneratorMain />}
        />
        <Route path="/product-list" element={<ProductList />} />

        <Route path="/advice-generator" element={<AdviceGenerator />} />
      </Routes>
    </div>
  );
};

export default App;
