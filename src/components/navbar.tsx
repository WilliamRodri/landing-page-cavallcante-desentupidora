import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  IconButton,
  Typography,
  Button,
} from "@material-tailwind/react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}
function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <Typography
        as="a"
        href={href || "#"}
        variant="small"
        className="font-medium"
      >
        {children}
      </Typography>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  React.useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // @ts-expect-error Tipagem quebrada na lib
    <MTNavbar
      fullWidth
      shadow={false}
      blurred={false}
      color={isScrolling ? "white" : "transparent"}
      className="fixed top-0 z-50 border-0"
    >
      <div className="container mx-auto flex items-center justify-between">
        <Typography variant="h6" color={isScrolling ? "blue-gray" : "white"}>
          Limpa Fossa Cavalcante
        </Typography>
        <ul
          className={`ml-10 hidden items-center gap-6 lg:flex ${
            isScrolling ? "text-gray-900" : "text-white"
          }`}
        >
          <NavItem href="/">Início</NavItem>
          <NavItem href="#sobre">Sobre nós</NavItem>
          <NavItem href="https://api.whatsapp.com/send?phone=5585985477461&text=Ol%C3%A1%20vim%20pelo%20site%20e%20desejo%20fazer%20um%20or%C3%A7amento!">Entre em contato</NavItem>
          <NavItem href="#servicos">Serviços</NavItem>
        </ul>
        <div className="hidden gap-2 lg:flex">
          <a href="tel:+5585985477461" target="_blank">
            {/* @ts-expect-error Tipagem quebrada na lib */}
            <Button color={isScrolling ? "gray" : "white"} size="sm">
              Ligue agora
            </Button>
          </a>
        </div>
        {/* @ts-expect-error Tipagem quebrada na lib */}
        <IconButton
          variant="text"
          color={isScrolling ? "gray" : "white"}
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-4 rounded-lg bg-white px-6 py-5">
          <ul className="flex flex-col gap-4 text-blue-gray-900">
            <NavItem href="/">Início</NavItem>
            <NavItem href="#sobre">Sobre nós</NavItem>
            <NavItem href="https://api.whatsapp.com/send?phone=5585985477461&text=Ol%C3%A1%20vim%20pelo%20site%20e%20desejo%20fazer%20um%20or%C3%A7amento!">Entre em contato</NavItem>
            <NavItem href="#servicos">Serviços</NavItem>
            <NavItem href="tel:+5585985477461">Ligue Agora</NavItem>
          </ul>
          <div className="mt-4 flex gap-2">
            <a href="tel:+5585985477461" target="_blank">
              {/* @ts-expect-error Tipagem quebrada na lib */}
              <Button color="gray" size="sm" className="ml-auto">
                Ligue Agora
              </Button>
            </a>
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
