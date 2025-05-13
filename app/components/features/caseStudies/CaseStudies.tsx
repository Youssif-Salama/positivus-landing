import React from "react";
import CaseStudiesCards from "./CaseStudiesCards";
import CommonSectionTag from "../../common/CommonSectionTag";
import CommonParagraph from "../../common/CommonParagraph";

const CaseStudies = () => {
  return (
    <section className="py-8 lg:mt-18" id="case-studies">
      <div className="max-md:flex-col flex gap-6 mb-18">
        <CommonSectionTag title="Case Studies" />
        <CommonParagraph paragraphClasses="max-w-[580px] text-[18px]">
          <p>
            Explore Real-Life Examples of Our Proven Digital Marketing
            <br /> Success through Our Case Studies
          </p>
        </CommonParagraph>
      </div>
      <CaseStudiesCards />
    </section>
  );
};

export default CaseStudies;
