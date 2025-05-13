import CommonButton from "../../common/CommonButton";
import CommonParagraph from "../../common/CommonParagraph";
import CommonSectionTag from "../../common/CommonSectionTag";
import CommonTeamCard from "../../common/CommonTeamCard";
const teamMembers = [
  {
    imgSrc: "/assets/team/1.webp",
    name: "John Smith",
    slogan: "CEO and Founder",
    description: (
      <>
        10+ years of experience in digital
        <br />
        marketing. Expertise in SEO, PPC,
        <br />
        and content strategy.
      </>
    ),
  },
  {
    imgSrc: "/assets/team/2.webp",
    name: "Jane Doe",
    slogan: "Director of Operations",
    description: (
      <>
        7+ years of experience in project <br />
        management and team leadership.
        <br />
        Strong organizational and
        <br />
        communication skills.
      </>
    ),
  },
  {
    imgSrc: "/assets/team/3.webp",
    name: "Michael Brown",
    slogan: "Senior SEO Specialist",
    description: (
      <>
        5+ years of experience in SEO and <br />
        content creation. Proficient in <br />
        keyword research and on-page
        <br />
        optimization.
      </>
    ),
  },
  {
    imgSrc: "/assets/team/4.webp",
    name: "Emily Johnson",
    slogan: "PPC Manager",
    description: (
      <>
        3+ years of experience in paid
        <br />
        search advertising. Skilled in
        <br />
        campaign management and
        <br />
        performance analysis.
      </>
    ),
  },
  {
    imgSrc: "/assets/team/5.webp",
    name: "Brian Williams",
    slogan: "Social Media Specialist",
    description: (
      <>
        4+ years of experience in social <br />
        media marketing. Proficient in <br />
        creating and scheduling content,
        <br />
        analyzing metrics, and building
        <br />
        engagement.
      </>
    ),
  },
  {
    imgSrc: "/assets/team/6.webp",
    name: "Sarah Kim",
    slogan: "Content Creator",
    description: (
      <>
        2+ years of experience in writing
        <br />
        and editing <br />
        Skilled in creating compelling, SEO-
        <br />
        optimized content for various <br />
        industries.
      </>
    ),
  },
];
const Team = () => {
  return (
    <section className="py-8 lg:mt-18" id="team">
      <div className="max-md:flex-col flex gap-6 mb-18">
        <CommonSectionTag title="Team" />
        <CommonParagraph paragraphClasses="max-w-[580px] text-[18px]">
          <p>
            Meet the skilled and experienced team behind our
            <br /> successful digital marketing strategies
          </p>
        </CommonParagraph>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {teamMembers.map((item, index) => {
          return <CommonTeamCard key={index} employee={item} />;
        })}
      </div>
      <div className="flex items-end justify-end mt-6">
        <CommonButton
            title="See all team"
            variant="default"
            buttonClasses="hover:bg-main-green/50 border-main-dark hover:shadow-sm hover:shadow-main-dark hover:text-main-dark tranition-all duration-300 text-[20px] w-fit"
          />
      </div>
    </section>
  );
};

export default Team;
