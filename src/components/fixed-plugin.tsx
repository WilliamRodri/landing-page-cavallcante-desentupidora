"use client";
import Image from "next/image";
import { Button } from "@material-tailwind/react";

export function FixedPlugin() {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=5585985477461&text=Ol%C3%A1%20vim%20pelo%20site%20e%20desejo%20fazer%20um%20or%C3%A7amento!"
      target="_blank"
      rel="noopener noreferrer"
    >
      {/* @ts-expect-error Tipagem quebrada na lib */}
      <Button
        size="sm"
        className="!fixed bottom-4 right-4 flex gap-1 pl-2 items-center border border-blue-gray-50"
        style={{ backgroundColor: "#25D366", color: "white" }}
      >
        <Image
          width={128}
          height={128}
          className="w-5 h-5"
          alt="WhatsApp"
          src="https://img.icons8.com/?size=100&id=16712&format=png&color=ffffff"
        />{" "}
        Entre em contato no WhatsApp
      </Button>
    </a>
  );
}

export default FixedPlugin;