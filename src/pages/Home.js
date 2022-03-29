import React from 'react';
import { Box } from '@material-ui/core';
import HeroCarousel from '../components/HeroCarousel';
import { CarouselData } from '../components/CarouselData';
import PaperForm from '../components/PaperForm';






export default function Home() {

  return (
    <Box>
      <HeroCarousel carouselsItems={CarouselData}/>
      <PaperForm />
    </Box>
  )
}
