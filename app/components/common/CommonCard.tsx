import React from "react";
import { ArrowUp } from "lucide-react";
import Image from "next/image";
import clsx from "clsx";

const CommonCard = ({
  titiles,
  imgSrc,
  restClasses,
  iconClasses,
  linkClasses,
  titileClasses
}: {
  titiles: string[];
  imgSrc: string;
  restClasses?: string;
  iconClasses?: string;
  linkClasses?: string;
  titileClasses?:string
}) => {
  return (
    <div
      className={clsx(
        "border-2 border-main-dark border-b-6 rounded-[45px] p-12 flex justify-between  max-md:flex-col max-md:h-auto max-md:w-auto gap-4",
        restClasses
      )}
    >
      <div className="flex-1 flex flex-col justify-between max-md:flex-row">
        <div className="flex flex-col">
          <h3 className={clsx("capitalize font-semibold px-2 rounded-md w-fit text-2xl",titileClasses)}>
            {titiles[0]}
          </h3>
          <h3 className={clsx("capitalize font-semibold px-2 rounded-md w-fit text-2xl",titileClasses)}>
            {titiles[1]}
          </h3>
        </div>
        <div className="flex items-center gap-4" >
          <ArrowUp className={clsx("w-7 h-7 transform rotate-45 font-bold rounded-full bg-main-dark", iconClasses)} />
          <span className={clsx("leading-7 capitalize font-normal text-[20px] max-md:hidden",linkClasses)}>learn more</span>
        </div>
      </div>
      <div className="flex-1 flex justify-center">
        <Image
          src={imgSrc}
          alt="random_image"
          width={300}
          height={300}
          className="rounded-md"
        />
      </div>
    </div>
  );
};

export default CommonCard;
