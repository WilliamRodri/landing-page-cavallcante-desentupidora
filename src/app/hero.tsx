"use client";

import { Button, Typography } from "@material-tailwind/react";

function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-[url('/image/course.png')] bg-cover bg-no-repeat">
    <div className="absolute inset-0 h-full w-full bg-gray-900/60" />
    <div className="grid min-h-screen px-8">
      <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
        <Typography
          variant="h1"
          color="white"
          className="md:max-w-full lg:max-w-3xl"
        >
          Desentupidora Cavalcante
        </Typography>
        <Typography
          variant="lead"
          color="white"
          className="mt-6 mb-10 w-full md:max-w-full lg:max-w-3xl"
        >
          Desentupidora e Limpa Fossa. Desentupimento em geral. Ralos, pias, sanitários, Caixa de gordura e visita.
        </Typography>
        <div>
          <a target="_blank" href="https://api.whatsapp.com/send?phone=5585985477461&text=Ol%C3%A1%20vim%20pelo%20site%20e%20desejo%20fazer%20um%20or%C3%A7amento!">
            <Button variant="gradient" color="white">
              Entre em contato conosco
            </Button>
          </a>
        </div>
      </div>
    </div>
  </div>
  );
}
export default Hero;
