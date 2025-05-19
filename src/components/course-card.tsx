import { Typography, Card, CardBody, CardHeader, Button } from "@material-tailwind/react";
import Image from "next/image";

interface CourseCardProps {
  img: string;
  title: string;
  desc: string;
  buttonLabel: string;
  link: string;
}

export function CourseCard({ img, title, desc, buttonLabel, link }: CourseCardProps) {
  return (
    // @ts-expect-error Tipagem quebrada na lib
    <Card color="transparent" shadow={false}>
      {/* @ts-expect-error Tipagem quebrada na lib */}
      <CardHeader floated={false} className="mx-0 mt-0 mb-6 h-48">
        <Image width={768} height={768} src={img} alt={title} className="h-full w-full object-cover" />
      </CardHeader>
      {/* @ts-expect-error Tipagem quebrada na lib */}
      <CardBody className="p-0">
        <a
          href="#"
          className="text-blue-gray-900 transition-colors hover:text-gray-800"
        >
          <Typography variant="h5" className="mb-2">
            {title}
          </Typography>
        </a>
        <Typography className="mb-6 font-normal !text-gray-500">
          {desc}
        </Typography>
        <a href={link} target="_blank">
          {/* @ts-expect-error Tipagem quebrada na lib */}
          <Button color="gray" size="sm">
            {buttonLabel}
          </Button>
        </a>
      </CardBody>
    </Card>
  );
}

export default CourseCard;