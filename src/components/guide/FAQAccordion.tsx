import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs: { question: string; answer: React.ReactNode }[] = [
  {
    question: "Do I need to send an invoice?",
    answer:
      "No. Under the self-billing arrangement in your Freelance Services Agreement, we generate invoices on your behalf. You must not submit your own invoice.",
  },
  {
    question: "Where do I log my hours?",
    answer:
      "In the freelancer portal at efn-dashboard.empowrcic.org/portal. Sign in with your email and log the hours against the task.",
  },
  {
    question: "When will I be paid?",
    answer:
      "On the last Friday of each calendar month, provided your timesheet was approved before the cut-off date.",
  },
  {
    question: "What if my hours look wrong on the approval email?",
    answer:
      "Reply immediately. Once the invoice is raised it is harder to amend. Do not wait.",
  },
  {
    question: "I haven't received my payment — what do I do?",
    answer:
      "Wait at least 2 working days from the payment date. If it still hasn't arrived, reply to the payment confirmation email and we will investigate.",
  },
  {
    question: "Do I need the invoice for my tax return?",
    answer:
      "Yes. The invoice emailed to you after your timesheet is approved is your record of income for HMRC self-assessment. Keep it — we will not re-issue copies after 30 days.",
  },
  {
    question: "Do I need to register as self-employed?",
    answer: (
      <>
        Yes. If you are not already registered, you will need to register for Self Assessment
        with HMRC once you begin earning as a freelancer. You can register at{" "}
        <a
          href="https://www.gov.uk/register-for-self-assessment"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue underline hover:text-blue-dark"
        >
          gov.uk/register-for-self-assessment
        </a>
        .
      </>
    ),
  },
  {
    question: "What if I don't have a UTR?",
    answer: (
      <>
        You can still complete onboarding without one. Your UTR is issued when you register
        for Self Assessment — see{" "}
        <a
          href="https://www.gov.uk/register-for-self-assessment"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue underline hover:text-blue-dark"
        >
          gov.uk/register-for-self-assessment
        </a>
        .
      </>
    ),
  },
];

export default function FAQAccordion() {
  return (
    <Accordion multiple={false} className="w-full">
      {faqs.map((faq, index) => (
        <AccordionItem key={index} value={`faq-${index}`}>
          <AccordionTrigger className="text-left font-semibold text-foreground">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-mid leading-relaxed">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
