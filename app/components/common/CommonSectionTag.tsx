import clsx from "clsx"

const CommonSectionTag = ({title, restClasses}: {title: string, restClasses?: string}) => {
  return (
    <h2 className={clsx(restClasses, "bg-main-green capitalize font-semibold px-2 py-1 rounded-md text-5xl w-fit")}>
      {title}
    </h2>
  )
}

export default CommonSectionTag
