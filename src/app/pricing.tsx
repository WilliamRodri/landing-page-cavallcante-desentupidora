"use client";
import React from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";

export function Pricing() {
  return (
    <div className="grid min-h-screen place-items-center">
      <section className="container mx-auto px-10">
        <div className="grid place-items-center pb-20 text-center">
          <Typography variant="h2" color="blue-gray">
            Principais dúvidas
          </Typography>
        </div>
        {/* @ts-expect-error Tipagem quebrada na lib */}
        <Card className="px-6 pb-5">
          {/* @ts-expect-error Tipagem quebrada na lib */}
          <CardBody>
            <Typography variant="h3" color="blue-gray">
              Posso usar produtos químicos para desentupir canos?
            </Typography>
            <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
              <div>
                <Typography
                  variant="paragraph"
                  className="mb-10 mt-2 w-full font-normal !text-gray-500"
                >
                  O uso de produtos químicos agressivos pode ser prejudicial às tubulações e ao meio ambiente. É recomendável evitar esses produtos e, em vez disso, contar com profissionais especializados em desentupimento, que utilizam métodos mais seguros e eficazes.
                </Typography>
              </div>
            </div>
          </CardBody>
          {/* @ts-expect-error Tipagem quebrada na lib */}
          <CardBody>
            <Typography variant="h3" color="blue-gray">
              Quanto tempo leva para desentupir um encanamento?
            </Typography>
            <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
              <div>
                <Typography
                  variant="paragraph"
                  className="mb-10 mt-2 w-full font-normal !text-gray-500"
                >
                  O tempo necessário para desentupir um encanamento varia dependendo da gravidade do entupimento e do método utilizado. Alguns entupimentos podem ser resolvidos em questão de minutos, enquanto outros podem levar mais tempo. É melhor consultar um profissional para avaliar e estimar o tempo necessário.
                </Typography>
              </div>
            </div>
          </CardBody>
          {/* @ts-expect-error Tipagem quebrada na lib */}
          <CardBody>
            <Typography variant="h3" color="blue-gray">
              Quanto é o custo médio de serviços de desentupimento?
            </Typography>
            <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
              <div>
                <Typography
                  variant="paragraph"
                  className="mb-10 mt-2 w-full font-normal !text-gray-500"
                >
                  O custo de serviços de desentupimento pode variar amplamente de acordo com a extensão, gravidade do entupimento e o método utilizado. Solicite um orçamento sem compromisso, para obter uma estimativa precisa.
                </Typography>
              </div>
            </div>
          </CardBody>
        </Card>
      </section>
    </div>
  );
}


export default Pricing;
