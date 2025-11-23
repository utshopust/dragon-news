import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 250);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {visible && (
        <button
          onClick={scrollTop}
          className="fixed left-1/2 bottom-10 transform -translate-x-1/2 flex items-center gap-2 px-6 py-3 rounded-full text-white font-medium shadow-xl
                     bg-gradient-to-r from-blue-500 to-purple-600 
                     backdrop-blur-md bg-opacity-30 hover:scale-105 transition-all duration-300"
        >
          <ArrowUp className="w-5 h-5 text-white" />
          Move to Top
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
