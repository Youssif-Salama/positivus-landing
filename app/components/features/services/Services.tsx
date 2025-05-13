import CommonCard from "../../common/CommonCard";
import CommonParagraph from "../../common/CommonParagraph";
import CommonSectionTag from "../../common/CommonSectionTag";
import ServiceCard from "./ServiceCard";

const servicesImages = [
  {
    img: "/assets/services/1.webp",
    titiles: {
      0: "Search engine",
      1: "optimization",
    },
  },
  {
    img: "/assets/services/2.webp",
    titiles: {
      0: "Pay-per-click",
      1: "advertising",
    },
  },
  {
    img: "/assets/services/3.webp",
    titiles: {
      0: "Social Media",
      1: "Marketing",
    },
  },
  {
    img: "/assets/services/4.webp",
    titiles: {
      0: "Email",
      1: "Marketing",
    },
  },
  {
    img: "/assets/services/5.webp",
    titiles: {
      0: "Content",
      1: "Creation",
    },
  },
  {
    img: "/assets/services/6.webp",
    titiles: {
      0: "Analytics and",
      1: "Tracking",
    },
  },
];

const Services = () => {
  return (
    <section className="py-8 lg:mt-18" id="services">
      <div className="max-md:flex-col flex gap-6 mb-18">
        <CommonSectionTag title="services" />
        <CommonParagraph paragraphClasses="max-w-[580px] text-[18px]">
          <p>
            At our digital marketing agency, we offer a range of services to
            <br /> help businesses grow and succeed online. These services
            include:
          </p>
        </CommonParagraph>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full mb-18">
        {servicesImages.map((item, index) => {
          const colors = [
            "bg-main-light",
            "bg-main-green",
            "bg-main-dark",
            "bg-main-light",
            "bg-main-green",
            "bg-main-dark",
          ];
          return (
            <CommonCard
              key={index}
              titiles={[item.titiles[0], item.titiles[1]]}
              imgSrc={item.img}
              restClasses={colors[index]}
              iconClasses={
                index == 2 || index == 5
                  ? "bg-main-light text-bg-dark"
                  : "text-main-green"
              }
              linkClasses={
                index == 2 || index == 5 ? "text-main-light" : "text-main-dark"
              }
              titileClasses={
                index == 1 || index == 4 ? "bg-main-light" : "bg-main-green"
              }
            />
          );
        })}
      </div>
      <ServiceCard/>
    </section>
  );
};

export default Services;
