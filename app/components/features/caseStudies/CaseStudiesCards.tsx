import { ArrowUp } from "lucide-react";
import clsx from "clsx";
import CommonParagraph from "../../common/CommonParagraph";

interface CaseStudyItemProps {
  isMiddle?: boolean;
  className?: string;
  showLearnMore?: boolean;
  children: React.ReactNode;
}

const CaseStudyItem = ({
  isMiddle = false,
  className = "",
  showLearnMore = true,
  children,
}: CaseStudyItemProps) => {
  return (
    <div
      className={clsx(
        "flex flex-col items-start justify-between max-w-[500px] w-full",
        isMiddle
          ? "border border-main-light border-x-0 md:border-x md:border-y-0 max-md:border-y px-0 md:px-12 max-md:py-12"
          : "px-4 mx-4 max-md:m-0 max-md:p-0",
        className
      )}
    >
      <CommonParagraph paragraphClasses="font-normal text-main-light">
        {children}
      </CommonParagraph>

      {showLearnMore && (
        <div className="flex items-center gap-4 mt-4">
          <span className="leading-7 capitalize font-normal text-main-green">
            learn more
          </span>
          <ArrowUp className="w-7 h-7 rotate-45 font-bold rounded-full text-main-green" />
        </div>
      )}
    </div>
  );
};



const CaseStudiesCards = () => {
  const content1 = (
    <>
      For a local restaurant, we
      <br className="max-lg:hidden"/>
      implemented a targeted PPC
      <br className="max-lg:hidden"/>
      campaign that resulted in a 50%
      <br className="max-lg:hidden"/>
      increase in website traffic and a
      <br className="max-lg:hidden"/>
      25% increase in sales.
    </>
  );

  const content2 = (
    <>
      For a B2B software company, we
      <br className="max-lg:hidden"/>
      developed an SEO strategy that
      <br className="max-lg:hidden"/>
      resulted in a first page ranking
      <br className="max-lg:hidden"/>
      for key keywords and a 200%
      <br className="max-lg:hidden"/>
      increase in organic traffic.
    </>
  );

  const content3 = (
    <>
      For a national retail chain, we
      created a social media
      <br className="max-lg:hidden"/>
      marketing campaign that
      <br className="max-lg:hidden"/>
      increased followers by 25% and
      <br className="max-lg:hidden"/>
      generated a 20% increase in
      <br className="max-lg:hidden"/>
      online sales.
    </>
  );

  return (
    <div className="bg-main-dark p-12 rounded-[45px] flex items-start justify-between gap-4 max-md:flex-col">
      <CaseStudyItem>{content1}</CaseStudyItem>
      <CaseStudyItem isMiddle>{content2}</CaseStudyItem>
      <CaseStudyItem>{content3}</CaseStudyItem>
    </div>
  );
};

export default CaseStudiesCards;