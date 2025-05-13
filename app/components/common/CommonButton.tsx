import { Button } from "@/components/ui/button";
import clsx from "clsx";

interface CommonButtonTypes {
  title: string;
  restClasses?: string;
  buttonClasses?: string;
  variant?:
    | "outline"
    | "link"
    | "default"
    | "destructive"
    | "secondary"
    | "ghost"
    | null
    | undefined;
}
const CommonButton = ({ title, variant, restClasses,  buttonClasses }: CommonButtonTypes) => {
  const titleArr = title.trim().split(" ");

  return (
    <Button variant={variant} className={clsx(buttonClasses,"px-9 py-6 leading-7 font-normal")}>
      {titleArr.map((item, index) => (
        <span
          key={index}
          className={clsx(
            index === 0 && "capitalize",
            restClasses
          )}
        >
          {item}
        </span>
      ))}
    </Button>
  );
};

export default CommonButton;
