"use client";

import React from "react";
import Image from "next/image";
import { Typography } from "@material-tailwind/react";

export function OnlineCourse() {
  return (
    <section className="py-28 px-8" id="sobre">
      <div className="container mx-auto grid grid-cols-1 place-items-center lg:grid-cols-3">
        <div className="col-span-1 rounded-xl lg:mb-0 mb-12">
          <Image
            width={768}
            height={500}
            src="/image/online-course.png"
            className="h-full max-h-[500px] w-full object-cover scale-110"
            alt="Estamos sempre prontos para você!"
          />
        </div>
        <div className="col-span-2 lg:pl-24">
          <Typography variant="h2" color="blue-gray" className="mb-4">
            Estamos sempre prontos para você!
          </Typography>
          <Typography
            variant="lead"
            className="mb-5 max-w-lg px-4 text-left text-lg !text-gray-500 lg:px-0  "
          >
            O nosso objetivo é executar os serviços com qualidade, garantia e agilidade, a Cavallcante tem como principal diferença a qualidade e o compromisso com seus clientes.
          </Typography>
        </div>
      </div>
    </section>
  );
}

export default OnlineCourse;
