"use client";

import { Typography } from "@material-tailwind/react";
import CourseCard from "@/components/course-card";

const OTHER_COURSES = [
  {
    img: "/image/blogs/blog-1.png",
    title: "Limpeza de Fossas e Caixas",
    desc: "",
    buttonLabel: "Desejo esse serviço!",
    link: "https://api.whatsapp.com/send?phone=5585985477461&text=Ol%C3%A1%20vim%20pelo%20site%20e%20estou%20interessado%20no%20servi%C3%A7o%20de%20%22Limpeza%20de%20fossas%20e%20caixas%22"
  },
  {
    img: "/image/blogs/blog2.png",
    title: "Caixa de Visita",
    desc: "",
    buttonLabel: "Desejo esse serviço!",
    link: "https://api.whatsapp.com/send?phone=5585985477461&text=Ol%C3%A1%20vim%20pelo%20site%20e%20estou%20interessado%20no%20servi%C3%A7o%20de%20%22Caixa%20de%20visita%22"
  },
  {
    img: "/image/blogs/blog3.png",
    title: "Caixa de Gordura",
    desc: "",
    buttonLabel: "Desejo esse serviço!",
    link: "https://api.whatsapp.com/send?phone=5585985477461&text=Ol%C3%A1%20vim%20pelo%20site%20e%20estou%20interessado%20no%20servi%C3%A7o%20de%20%22Caixa%20de%20Gordura%22"
  },
  {
    img: "/image/blogs/blog4.png",
    title: "Ralos, Pias e Sanitários",
    desc: "",
    buttonLabel: "Desejo esse serviço!",
    link: "https://api.whatsapp.com/send?phone=5585985477461&text=Ol%C3%A1%20vim%20pelo%20site%20e%20estou%20interessado%20no%20servi%C3%A7o%20de%20%22Ralos,%20Pias%20e%20Sanit%C3%A1rios%22"
  },
];

export function OtherCourses() {
  return (
    <section className="pb-20 px-8" id="servicos">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          Nossos serviços
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
        >
          Análise alguns de nossos serviços e escolha qual irá resolver seu problema!
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {OTHER_COURSES.map((props, idx) => (
          <CourseCard key={idx} {...props} />
        ))} 
      </div>
    </section>
  );
}

export default OtherCourses;
