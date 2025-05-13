import clsx from "clsx";

interface CommonParagraphTypes {
  children:React.ReactNode;
  paragraphClasses?:string;
}

const CommonParagraph = ({paragraphClasses, children}:CommonParagraphTypes) => {
  return (
    <div className={clsx(paragraphClasses,
    "font-regular text-main-dark break-words overflow-hidden"
    )}>
      {children}
    </div>
  )
}

export default CommonParagraph
