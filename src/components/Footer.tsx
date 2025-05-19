import { Typography, Button, Input } from "@material-tailwind/react";

const LINKS = [
  {
    title: "Menu Principal",
    items: [
      {text: "Início", link: "/"},
      {text: "Serviços", link: "#servicos"},
      {text: "Sobre nós", link: "#sobre"},
      {text: "Entre em contato", link: "https://api.whatsapp.com/send?phone=5585985477461&text=Ol%C3%A1%20vim%20pelo%20site%20e%20desejo%20fazer%20um%20or%C3%A7amento!"}
    ],
  }
];

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="px-8 pt-24 pb-8">
      <div className="container max-w-6xl flex flex-col mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 !w-full ">
          <div className="flex col-span-2 items-center gap-10 mb-10 lg:mb-0 md:gap-36">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography variant="h6" color="blue-gray" className="mb-4">
                  {title}
                </Typography>
                {LINKS[0].items.map(({ text, link }) => (
                  <li key={text}>
                    <Typography
                      as="a"
                      href={link}
                      className="py-1 font-normal !text-gray-700 transition-colors hover:!text-gray-900"
                    >
                      {text}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <Typography
          color="blue-gray"
          className="md:text-center mt-16 font-normal !text-gray-700"
        >
          &copy; {CURRENT_YEAR} Desenvolvido {" "}
          by{" "}
          <a href="#crapestack">
            GrapeStack
          </a>
          .
        </Typography>
      </div>
    </footer>
  );
}

export default Footer;
