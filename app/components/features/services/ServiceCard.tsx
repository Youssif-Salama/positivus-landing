import clsx from "clsx";
import Image from "next/image";
import CommonButton from "../../common/CommonButton";
import CommonParagraph from "../../common/CommonParagraph";


const ServiceCard = ({}) => {
  return (
    <div
      className={clsx(
        "rounded-[45px] bg-main-light w-full h-[347px] flex justify-between items-center"
      )}
    >
      <div className="flex flex-col gap-4 p-12">
        <h3 className="font-semibold text-2xl text-main-dark">Let’s make things happen</h3>
        <CommonParagraph paragraphClasses="max-w-[500px] text-[18px] font-normal">
          <p>
            {" "}
            Contact us today to learn more about how our digital
            <br />
            marketing services can help your business grow and <br />
            services including SEO, PPC, social media marketing,
            <br />
            succeed online.{" "}
          </p>
        </CommonParagraph>
        <CommonButton
        title="Get your free proposal"
        variant="default"
        buttonClasses="hover:bg-main-green/50 border-main-dark hover:shadow-sm hover:shadow-main-dark hover:text-main-dark tranition-all duration-300 text-[20px] max-w-[288px] h-[68px]"
      />
      </div>
      <div className="max-md:hidden">
        <Image src="/assets/services/7.png" alt="" width={494} height={394} />
      </div>
    </div>
  );
};

export default ServiceCard;
