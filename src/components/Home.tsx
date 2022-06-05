import * as React from "react";
import { Routes, Route } from "react-router-dom";
import {
  createTheme,
  CssBaseline,
  Container,
  ThemeProvider,
} from "@mui/material";
import Footer from "./Footer";
import Header from "./Header";
import Blog from "./Blog";
import PriceChecker from "./PriceChecker";

const theme = createTheme();
const sections = [
  { title: "Technology", url: "#" },
  { title: "Design", url: "#" },
];
export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="MEV-NFT" sections={sections} />
        <main>
          <Routes>
            <Route path="/about" element={<div>hi1</div>} />
            <Route path="/users" element={<div>hi2</div>} />
            <Route path="/prices" element={<PriceChecker />} />
            <Route path="/" element={<Blog />} />
          </Routes>
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
}
