import SectionTitle from "../../../reusable/sectionTitle";
import {
  IoMdArrowDropleftCircle,
  IoMdArrowDroprightCircle,
} from "react-icons/io";
import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import "../PopularClasses/PopularClasses.css";
import InstructorCard from "./InstructorCard";

const popularInstructorsDes =
  "Get to know some of our highly skilled and experienced instructors who'll lead your way throughout this journey. Each of our instructor brings a unique teaching style and a wealth of practical experience, ensuring that our students receive the best instruction possible.";

let numberOfSlides = null;

if (window.innerWidth > 576) {
  numberOfSlides = 4;
} else {
  numberOfSlides = 1;
}

const PopularInstructors = () => {
  return (
    <div className="px-5 lg:px-10 lg:mt-24 mt-6 lg:mb-32 mb-12 pt-11 relative">
      <SectionTitle
        title1={"popular"}
        title2={"instructors"}
        description={popularInstructorsDes}
      />
      <div>
        <Carousel
          className="popularClassSection cursor-pointer"
          plugins={[
            "infinite",
            "arrows",
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: numberOfSlides,
                arrowLeft: <IoMdArrowDropleftCircle></IoMdArrowDropleftCircle>,
                arrowLeftDisabled: (
                  <IoMdArrowDropleftCircle></IoMdArrowDropleftCircle>
                ),
                arrowRight: (
                  <IoMdArrowDroprightCircle></IoMdArrowDroprightCircle>
                ),
                arrowRightDisabled: (
                  <IoMdArrowDroprightCircle></IoMdArrowDroprightCircle>
                ),
                addArrowClickHandler: true,
              },
            },
          ]}
        >
          <InstructorCard></InstructorCard>
          <InstructorCard></InstructorCard>
          <InstructorCard></InstructorCard>
          <InstructorCard></InstructorCard>
          <InstructorCard></InstructorCard>
          <InstructorCard></InstructorCard>
        </Carousel>
      </div>
    </div>
  );
};

export default PopularInstructors;
