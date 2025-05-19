// components
import { Navbar } from "@/components";

// sections
import Hero from "./hero";
import OnlineCourse from "./online-course";
import Pricing from "./pricing";
import OtherCourses from "./other-courses";

export default function Campaign() {
  return (
    <>
      <Navbar />
      <Hero />
      <OnlineCourse />
      <OtherCourses />
      <Pricing />
    </>
  );
}
