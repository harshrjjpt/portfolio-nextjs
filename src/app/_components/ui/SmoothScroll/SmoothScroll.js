'use client'
import { useEffect } from "react";
import ScrollBar from "smooth-scrollbar";

var options = {
  damping: 0.07,
};
const Scroll = () => {
  useEffect(() => {
    ScrollBar.init(document.body, options);
  }, []);
  return null; 
};

export default Scroll;
