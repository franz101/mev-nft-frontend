import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./Header";
import MainFeaturedPost from "./MainFeaturedPost";
import FeaturedPost from "./FeaturedPost";
import Main from "./Main";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import post1 from "!!raw-loader!./blog-post.1.md";
import post2 from "!!raw-loader!./blog-post.2.md";
import post3 from "!!raw-loader!./blog-post.3.md";
import Mint from "./Mint";

import Typography from "@mui/material/Typography";
console.log(post3);

const mainFeaturedPost = {
  title: "MEV-NFT",
  description:
    "Making MEV more transparent. Research on improving consumer protection. In-Contract Arbitrage protection",
  image: "/screenshot1.jpg",
  imageText: "main image description",
  linkText: "Continue reading…",
};

const featuredPosts = [
  {
    title: "ERC-721 MEV-NFT Protection Standard",
    date: "Nov 12",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "/screenshot2.jpg",
    imageLabel: "Image Text",
  },
  {
    title: "Cross-Market Price comparision",
    date: "Nov 11",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "/screenshot3.jpg",
    imageLabel: "Image Text",
  },
];

const posts = [post1];

const sidebar = {
  title: "About",
  description:
    "MEV-NFT: ERC-721 Arbitrage Protection. Protecting users from sandwich trades (arbitrage) through contract design and price comparisons across exchanges. Providing transparency and bot detection.",
  archives: [
    // { title: "March 2020", url: "#" },
    // { title: "February 2020", url: "#" },
  ],
  social: [
    // { name: "GitHub", icon: GitHubIcon },
    // { name: "Twitter", icon: TwitterIcon },
    // { name: "Facebook", icon: FacebookIcon },
  ],
};

export default function Blog() {
  return (
    <div>
      <MainFeaturedPost post={mainFeaturedPost} />
      <Mint />
      <Grid container spacing={4}>
        {featuredPosts.map((post) => (
          <FeaturedPost key={post.title} post={post} />
        ))}
      </Grid>
      <Grid container spacing={5} sx={{ mt: 3 }}>
        <Main title="From the firehose" posts={posts} />
        <Sidebar
          title={sidebar.title}
          description={sidebar.description}
          archives={sidebar.archives}
          social={sidebar.social}
        />
      </Grid>
    </div>
  );
}
