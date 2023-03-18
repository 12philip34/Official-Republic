import React from "react";
import BlogSlider from "../../Components/BlogSlider";
import CryptocurrencyGrid from "../../Components/CryptocurrencyGrid";
import GridBlogRender from "../../Components/GridBlogRender";

const BlogPage = () => {

    return (
        <div>
            <BlogSlider />
            <GridBlogRender />
            <CryptocurrencyGrid />
        </div>
    )
}

export default BlogPage;