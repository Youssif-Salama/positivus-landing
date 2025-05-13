import React from 'react'
import CommonSectionTag from '../../common/CommonSectionTag'
import CommonParagraph from '../../common/CommonParagraph'
import { TestmonialsContent } from './TestmonialsContent'

const Testmonials = () => {
  return (
    <section className="py-8 lg:mt-18" id="testimonials">
      <div className="max-md:flex-col flex gap-6 mb-18">
        <CommonSectionTag title="Testimonials" />
        <CommonParagraph paragraphClasses="max-w-[580px] text-[18px]">
          <p>
            Hear from Our Satisfied Clients: Read Our Testimonials
            <br /> to Learn More about Our Digital Marketing Services
          </p>
        </CommonParagraph>
      </div>
      <TestmonialsContent/>
    </section>
  )
}

export default Testmonials
