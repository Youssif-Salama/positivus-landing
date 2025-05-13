import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Image from "next/image";
import CommonButton from "../../common/CommonButton";
import CommonSectionTag from "../../common/CommonSectionTag";
import CommonParagraph from "../../common/CommonParagraph";

const ContactUs = () => {
  return (
    <section className="py-8 lg:mt-18">
      <div className="max-md:flex-col flex gap-6 mb-18">
        <CommonSectionTag title="Contact us" />
        <CommonParagraph paragraphClasses="max-w-[580px] text-[18px]">
          <p>
            Connect with Us: Let's Discuss Your
            <br /> Digital Marketing Needs
          </p>
        </CommonParagraph>
      </div>
      <div
        className="lg:mt-18 rounded-[45px] bg-main-light flex justify-between border py-16 max-md:py-8"
        id="contact-us"
      >
        <div className="px-24  max-md:px-12  flex flex-col gap-10 flex-1 max-md:w-full">
          <div>
            <RadioGroup defaultValue="say-hi">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="say-hi" id="r1" />
                <Label htmlFor="r1">Say Hi</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="get-a-quote" id="r2" />
                <Label htmlFor="r2">Get a Quote</Label>
              </div>
            </RadioGroup>
          </div>
          <form className="flex flex-col gap-10">
            <div>
              <Label htmlFor="name">Name</Label>
              <input
                type="text"
                name="name"
                id="name"
                className="border border-main-dark rounded-md px-4 py-2 bg-white w-full h-14 mt-2"
                placeholder="Name"
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <input
                type="email"
                name="email"
                id="email"
                className="border border-main-dark rounded-md px-4 py-2 bg-white w-full h-14 mt-2"
                placeholder="Email"
              />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <textarea
                name="message"
                id="message"
                className="border border-main-dark rounded-md px-4 py-2 bg-white w-full h-14 mt-2 min-h-[190px]"
                placeholder="Message"
              />
            </div>
            <CommonButton
              title="Send Message"
              variant="default"
              buttonClasses="hover:bg-main-green/50 border-main-dark hover:shadow-sm hover:shadow-main-dark hover:text-main-dark tranition-all duration-300 text-[20px] w-full h-[68px]"
            />
          </form>
        </div>
        <div className="relative flex-1 max-md:hidden aspect-[4/3] overflow-hidden">
          <Image
            src="/assets/contact_us.webp"
            alt="Contact us illustration"
            fill
            priority
            className="object-contain object-center transition-transform duration-500 w-full z-20 rounded-md 2xl:translate-x-78
    xl:translate-x-68
    lg:translate-x-48
    max-lg:object-fill
    max-lg:translate-x-32
    "
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
