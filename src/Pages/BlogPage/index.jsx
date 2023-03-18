import React from "react";
import BlogSlider from "../../Components/BlogSlider";
import BusinessBlog from "../../Components/BusinessBlog";
import CryptocurrencyGrid from "../../Components/CryptocurrencyGrid";
import GridBlogRender from "../../Components/GridBlogRender";

const BlogPage = () => {

    return (
        <div>
            <BlogSlider />
            <GridBlogRender />
            <CryptocurrencyGrid />
            <BusinessBlog />
        </div>
    )
}

export default BlogPage;