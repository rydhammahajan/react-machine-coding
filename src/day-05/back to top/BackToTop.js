import { useEffect, useState } from "react";
import './backToTop.module.css'

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const dummy = new Array(60).fill(1) ; 

  useEffect(() => {
    // Add scroll event listener to toggle visibility

    const handleScroll = () => {
      console.log("scrollY:", window.scrollY);

      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  function scrollToTop() {
    // Implement smooth scroll to top
    window.scrollTo({top: 0, behavior : "smooth"});
  }
  return (
    <div className="backToTop">
      <h1>Back To Top</h1>

      {/* Add some content to enable scrolling */}

      <div className="scroll-content">
        {
          dummy.map((_, index) => {
            return <p>This is a paragraph {index}</p>
        })
      }
      </div>


      <div className="container">
        {/* Show this button only after scrolling down */}
        {isVisible && <button
          className="backtotop-btn"
          onClick={scrollToTop}
          data-testid="back-to-top-btn"
        >
          Back to Top
        </button>}
      </div>
    </div>
  );
}
export default BackToTop;
