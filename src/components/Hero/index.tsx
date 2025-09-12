'use client';

import React, { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';

import IMG1 from './img/slider-1.jpg';
import IMG2 from './img/slider-2.jpg';
import IMG3 from './img/slider-3.jpg';
import IMG4 from './img/slider-4.jpg';
import IMG5 from './img/slider-5.jpg';

const slides = [IMG1, IMG2, IMG3, IMG4, IMG5];
import {
  //card
  Card,
  CardContent,

  //Carousel
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui';
import Image from 'next/image';

export function Hero() {
  const plugin = React.useRef(Autoplay({ delay: 5000 }));

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full h-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {slides.map((image, index) => (
          <CarouselItem key={index}>
            <div>
              <Card className="p-0">
                <CardContent className="flex aspect-square items-center justify-center relative w-screen h-96">
                  <Image src={image} alt="o" fill className="object-cover" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
