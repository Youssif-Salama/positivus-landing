import CommonParagraph from "../../common/CommonParagraph"
import CommonSectionTag from "../../common/CommonSectionTag"
import { WorkingProcess } from "./WorkingProcess"

const WorkProcess = () => {
  return (
    <section className="py-8 lg:mt-18" id="process">
      <div className="max-md:flex-col flex gap-6 mb-18">
        <CommonSectionTag title="Our Working Process" />
        <CommonParagraph paragraphClasses="max-w-[580px] text-[18px]">
          <p>
           Step-by-Step Guide to Achieving
            <br /> Your Business Goals
          </p>
        </CommonParagraph>
      </div>
      <WorkingProcess/>
    </section>
  )
}

export default WorkProcess
