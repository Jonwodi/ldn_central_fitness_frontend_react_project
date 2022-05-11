import React from "react";
import { Box } from "@material-ui/core";
import HeroCarousel from "../components/HeroCarousel";
import { CarouselData } from "../components/CarouselData";
import TailwindPaperForm from "../components/TailwindPaperForm";

export default function Home() {
  return (
    <Box className="mb-16">
      <HeroCarousel carouselsItems={CarouselData} />
      <TailwindPaperForm />
    </Box>
  );
}
