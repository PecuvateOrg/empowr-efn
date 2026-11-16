const steps = [
  {
    number: 1,
    title: "Complete the onboarding form",
    body: "Fill in your details online — takes around 5 minutes.",
  },
  {
    number: 2,
    title: "Sign your agreement",
    body: "You'll receive a personalised Freelance Services Agreement by email. Sign it electronically.",
  },
  {
    number: 3,
    title: "Complete your details",
    body: "Once signed, you'll get an email asking for your tax and bank details so we can pay you.",
  },
  {
    number: 4,
    title: "Start working",
    body: "Your tasks appear in the freelancer portal, and we email you when a new one is assigned.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-cream py-14 md:py-20 px-5 md:px-6">
      <div className="mx-auto max-w-[880px]">
        <h2 className="text-2xl md:text-3xl font-black text-black text-center mb-10 md:mb-12">How It Works</h2>
        <ol className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {steps.map((step) => (
            <li key={step.number} className="flex flex-col gap-3">
              <span className="text-4xl font-black text-blue leading-none">{step.number}</span>
              <h3 className="text-base font-extrabold text-black">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
