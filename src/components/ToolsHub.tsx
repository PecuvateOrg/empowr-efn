const comingSoon = [
  {
    title: "Timesheet Portal",
    description: "Submit and track your timesheets",
  },
  {
    title: "My Schedule",
    description: "See your upcoming tasks in the freelancer portal",
  },
  {
    title: "Resource Hub",
    description: "Guides, policies, and programme information",
  },
];

export default function ToolsHub() {
  return (
    <section className="bg-card py-20 px-6">
      <div className="mx-auto max-w-[880px]">
        <div className="flex items-center justify-center gap-3 mb-4">
          <h2 className="text-3xl font-black text-black">EFN Tools</h2>
          <span className="rounded-full border border-border px-3 py-1 text-xs font-semibold text-muted-foreground">
            Coming soon
          </span>
        </div>
        <p className="text-center text-muted-foreground mb-12">
          Tools to support you on your Empowr Freelancer journey.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {comingSoon.map((tool) => (
            <div
              key={tool.title}
              className="bg-muted rounded-[14px] border border-border p-8 flex flex-col gap-2 opacity-60"
            >
              <h3 className="text-base font-extrabold text-black">{tool.title}</h3>
              <p className="text-sm text-muted-foreground">{tool.description}</p>
              <span className="text-xs text-muted-foreground mt-1">Coming soon</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
