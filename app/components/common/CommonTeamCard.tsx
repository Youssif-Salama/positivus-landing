import Image from "next/image";
import CommonParagraph from "./CommonParagraph";

interface employeeTypes{
  employee:{name:string,slogan:string,description:React.ReactNode,imgSrc:string},
}
const CommonTeamCard = ({employee}:employeeTypes) => {
  return (
    <div className="rounded-[40px] flex flex-col gap-6 border border-b-5 border-main-dark p-12 relative">
      <div className="absolute top-12 right-12">
      <Image src="/assets/icon/linkedin.webp" alt="linkedin" width={34} height={34} />
      </div>
      <div className="flex gap-4 items-end">
        <Image src={employee.imgSrc} alt={employee.name} width={105} height={105} />
        <div>
          <p className="text-xl font-semibold capitalize">{employee.name}</p>
          <CommonParagraph>
            <p>{employee.slogan}</p>
          </CommonParagraph>
        </div>
      </div>
      <div className="bg-main-dark h-[2px]"/>
      <div>
        <CommonParagraph paragraphClasses="max-w-[580px] text-[18px]">
          <p>
            {" "}
            {employee.description}
          </p>
        </CommonParagraph>
      </div>
    </div>
  );
};

export default CommonTeamCard;
