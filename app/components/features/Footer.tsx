import Image from "next/image";
import CommonButton from "../common/CommonButton";
import Link from "next/link";

const navArgs = [
  { hash: "#about-us", title: "About Us" },
  { hash: "#services", title: "Services" },
  { hash: "#case-studies", title: "Case Studies" },
  { hash: "#process", title: "Process" },
  { hash: "#contact-us", title: "Contact Us" },
];

const Footer = () => {
  return (
    <footer className="rounded-t-[45px] bg-main-dark px-14 py-12 mt-18 text-white">
      <div className="flex justify-between">
        <Link href="/">
          <Image
            src="/assets/brand/logo-light.webp"
            alt="logo"
            width={180}
            height={29}
          />
        </Link>
        <div className="flex items-center  gap-8 max-lg:hidden">
          <ul className="flex items-center justify-between gap-6">
            {navArgs.map((arg) => (
              <li
                key={arg.title}
                className="
            responsiveListFontSize font-normal text-[18px]"
              >
                <a href={arg.hash} className="underline">
                  {arg.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-end gap-8 text-main-dark flex-wrap">
          {[
            "/assets/icon/1.webp",
            "/assets/icon/2.webp",
            "/assets/icon/3.webp",
          ].map((icon) => (
            <Image src={icon} alt="icon" width={30} height={30} key={icon} />
          ))}
        </div>
      </div>
      <div className="mt-16 flex items-center justify-between flex-wrap gap-4">
        <div className="flex flex-col gap-5">
          <p className="bg-main-green capitalize px-2 py-1 font-semibold rounded-md w-fit leading-7 text-main-dark text-2xl">
            Contact Us:
          </p>
          <p>
            Email: <a href="mailto:info@positivus.com">info@positivus.com</a>
          </p>
          <p>
            Phone: <a href="tel:555-567-8901">555-567-8901</a>
          </p>
          <p>
            Address: 1234 Main St
            <br />
            Moonstone City, Stardust State 12345
          </p>
        </div>
       <div className="bg-[#292A32] p-5 rounded-[14px] flex flex-col gap-4 w-full max-w-[900px] mx-auto">
  <input
    type="email"
    name="emailForNews"
    id="emailForNews"
    className="border border-main-white rounded-md p-4 h-[60px] text-base w-full"
    placeholder="Email"
  />
  <CommonButton
    title="Subscribe to news"
    variant="default"
    buttonClasses="hover:bg-main-dark/50 bg-main-green text-main-dark border-main-dark hover:shadow-sm hover:shadow-main-dark hover:text-main-light transition-all duration-300 text-[18px] sm:text-[16px] w-full h-[60px]"
  />
</div>

      </div>
      <hr className="mt-14"/>
      <p className="text-center mt-14">© {new Date().getFullYear()} Positivus. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
