import React, { useEffect, useState } from "react";
//import "../App.css"; // Add custom CSS for styling

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0, scale: 1 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      //setPosition({ x: e.clientX, y: e.clientY });
      const pageX = e.pageX; // Tracks the cursor's position relative to the full document
      const pageY = e.pageY;
      setPosition({ x: pageX, y: pageY, scale: 1 });
    };

    const handleHoverStart = () => {
      const ring = document.querySelector(".cursor-ring") as HTMLDivElement;
      if (ring) {
        ring.style.transform = "scale(1.5)";
        ring.style.borderColor = "#ddf272"; // Color when hovering
      }
    };

    const handleHoverEnd = () => {
      const ring = document.querySelector(".cursor-ring") as HTMLDivElement;
      if (ring) {
        ring.style.transform = "scale(1)";
        ring.style.borderColor = "#f81257"; // Reset color
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    // Attach hover events to all links and buttons globally
    const interactiveElements = document.querySelectorAll("a, button, .interactive-element");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleHoverStart);
      el.addEventListener("mouseleave", handleHoverEnd);
    });

    // Cleanup event listeners on unmount
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverStart);
        el.removeEventListener("mouseleave", handleHoverEnd);
      });
    };
  }, []);

  return (
    <>
      <div
        className="cursor"
        style={{
          left: `${position.x - 8}px`, // Adjust to center the dot
          top: `${position.y - 8}px`, // Adjust to center the dot
        }}
      ></div>
      <div
        className="cursor-ring"
        style={{
          left: `${position.x - 26}px`, // Adjust to center the ring around the dot
          top: `${position.y - 26}px`, // Adjust to center the ring around the dot
        }}
      ></div>
    </>
  );
};

//<a href="#link2" className="interactive-element">Link 2</a>

export default CustomCursor;
