import React, { useState } from "react";
import BlogFooter from "../../Components/BlogFooter";
import BlogSlider from "../../Components/BlogSlider";
import BusinessBlog from "../../Components/BusinessBlog";
import CryptocurrencyGrid from "../../Components/CryptocurrencyGrid";
import GridBlogRender from "../../Components/GridBlogRender";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";

const BlogPage = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
           in place of 'smooth' */
    });
  };

  const ScrollBtn = {
    background: "#25356e",
    color: "white",
    position: "absolute",
    right: "20px",
    bottom: "20px",
    border: "1px solid #179ede",
  };

  const BlogPage = {
    position: "relative",
  };
  window.addEventListener("scroll", toggleVisible);
  return (
    <div style={BlogPage}>
      <BlogSlider />
      <GridBlogRender />
      <CryptocurrencyGrid />
      <BusinessBlog />
      <BlogFooter />
      <button style={ScrollBtn}>
        <KeyboardDoubleArrowUpIcon
          onClick={scrollToTop}
          style={{ display: visible ? "inline" : "none" }}
        />
      </button>
    </div>
  );
};

export default BlogPage;
