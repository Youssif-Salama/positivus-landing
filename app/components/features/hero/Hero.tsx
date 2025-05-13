import Image from "next/image";
import CommonParagraph from "../../common/CommonParagraph";
import CommonButton from "../../common/CommonButton";

const partnersImgs = [
  "/assets/partners/1.webp",
  "/assets/partners/2.webp",
  "/assets/partners/3.webp",
  "/assets/partners/4.webp",
  "/assets/partners/5.webp",
  "/assets/partners/6.webp",
];

const Hero = () => {
  const allImages = [...partnersImgs, ...partnersImgs, ...partnersImgs];

  return (
    <main className="flex flex-col gap-12 py-8">
      <div
        className="flex items-center justify-between
      max-lg:flex-col-reverse max-lg:items-start"
      >
        <div className="flex flex-col gap-8">
          <CommonParagraph paragraphClasses="lg:max-w-[531px] text-4xl font-semibold">
            <h1>
              Navigating the{" "}
              <br className="max-lg:hidden"/>
              digital landscape{" "}
              <br className="max-lg:hidden"/>
              for success
            </h1>
          </CommonParagraph>
          <CommonParagraph paragraphClasses="lg:max-w-[580px]  text-[18px]">
            <p>
              {" "}
              Our digital marketing agency helps businesses{" "}
              <br className="max-lg:hidden"/>
              grow and succeed online through a range of{" "}
              <br className="max-lg:hidden"/>
              services including SEO, PPC, social media marketing,{" "}
              <br className="max-lg:hidden"/>
              and content creation.
            </p>
          </CommonParagraph>
          <CommonButton
            title="book a consultation"
            variant="default"
            buttonClasses="hover:bg-main-green/50 border-main-dark hover:shadow-sm hover:shadow-main-dark hover:text-main-dark tranition-all duration-300 text-[20px] w-fit h-[68px]"
          />
        </div>
        <div className="max-md:hidden">
          <Image
            src="/assets/hero/hero.png"
            alt={`hero_img`}
            width={600}
            height={515}
          />
        </div>
      </div>
      <div
        className="overflow-hidden w-full bg-white relative
      after:content-[''] after:absolute after:top-0 after:right-0 after:h-full after:w-8 after:bg-gradient-to-l after:from-white after:to-transparent after:pointer-events-none after:z-10
                  before:content-[''] before:absolute before:top-0 before:left-0 before:h-full before:w-8 before:bg-gradient-to-r before:from-white before:to-transparent before:pointer-events-none before:z-10
      "
      >
        <div className="flex infinite-slider whitespace-nowrap">
          {allImages.map((img, index) => (
            <div key={index} className="mx-4 flex-shrink-0">
              <Image
                src={img}
                alt={`partner${index}`}
                width={145}
                height={34}
                className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Hero;
