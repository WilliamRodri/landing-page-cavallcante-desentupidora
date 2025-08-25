"use client";

import { Button } from "@material-tailwind/react";

function Hero() {
  return (
    <div className="relative w-full">
      {/* Imagem Desktop */}
      <img
        src="/image/course.png"
        alt="Limpa Fossa Cavalcante"
        className="hidden w-full object-cover md:block"
      />
      {/* Imagem Mobile */}
      <img
        src="/image/course-mobile.jpg"
        alt="Limpa Fossa Cavalcante"
        className="block w-full object-cover md:hidden"
      />

      {/* Conteúdo com botão embaixo */}
      <div className="absolute inset-0 flex flex-col justify-end items-center px-4 pb-10 text-center">
        <a
          href="https://api.whatsapp.com/send?phone=5585985477461&text=Ol%C3%A1%20vim%20pelo%20site%20e%20desejo%20fazer%20um%20or%C3%A7amento!"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* @ts-expect-error Tipagem quebrada na lib */}
          <Button
            style={{ backgroundColor: "#25D366" }}
            size="sm"
            className="z-10"
          >
            Entre em contato conosco
          </Button>
        </a>
      </div>
    </div>
  );
}

export default Hero;