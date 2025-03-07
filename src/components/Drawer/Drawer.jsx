import React, { useState, useEffect, useRef } from "react";
import Image from "../Image/Image";
import closeIcon from "./icons/x-close.svg";
import "./drawer.scss";

const Drawer = ({ children, isOpen, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStartY, setTouchStartY] = useState(null);
  const [translateY, setTranslateY] = useState(0);
  const drawerRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      setTimeout(() => setIsAnimating(true), 10); // Small delay for animation
    } else {
      setIsAnimating(false);
      setTimeout(() => setIsVisible(false), 1000); // Wait for animation (1s)
    }
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) handleClose();
  };

  const handleTouchStart = (e) => setTouchStartY(e.touches[0].clientY);

  const handleTouchMove = (e) => {
    if (touchStartY !== null) {
      const diffY = e.touches[0].clientY - touchStartY;
      if (diffY > 0) setTranslateY(diffY);
    }
  };

  const handleTouchEnd = () => {
    if (translateY > 100) {
      setIsAnimating(false);
      setTimeout(() => {
        setIsVisible(false);
        onClose();
      }, 1000); // Animate close (1s)
    }
    setTranslateY(0);
    setTouchStartY(null);
  };

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, 1000);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`drawer-overlay ${isAnimating ? "open" : ""}`}
      onClick={handleOverlayClick}
    >
      <div
        ref={drawerRef}
        className={`drawer-content ${isAnimating ? "open" : ""}`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ transform: `translateY(${translateY}px)` }}
      >
        <button className="drawer-close-btn" onClick={handleClose}>
          <Image src={closeIcon} alt="Close" />
        </button>
        <div className="drawer-children">{children}</div>
      </div>
    </div>
  );
};

export default Drawer;
