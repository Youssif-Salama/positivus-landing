import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function WorkingProcess() {
  return (
    <Accordion type="single" collapsible className="w-full text-main-dark flex flex-col gap-4">
      <AccordionItem value="item-1">
        <AccordionTrigger className="font-medium text-3xl">
          <div className="flex items-end gap-4">
          01 <span className="text-xl">Consultation</span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="border-t-2 py-8 border-main-dark">
        During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="font-medium text-3xl">
          02 <span className="text-xl">Research and Strategy Development</span>
        </AccordionTrigger>
        <AccordionContent className="border-t-2 py-8 border-main-dark">
        During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="font-medium text-3xl">
          03 <span className="text-xl">Implementation</span>
        </AccordionTrigger>
        <AccordionContent className="border-t-2 py-8 border-main-dark">
        During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
