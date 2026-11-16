import { links } from "@/lib/links";

const comingSoon = [
  {
    title: "Resource Hub",
    description: "Guides, policies, and programme information",
  },
];

export default function ToolsHub() {
  return (
    <section className="bg-card py-20 px-6">
      <div className="mx-auto max-w-[880px]">
        <h2 className="text-3xl font-black text-black text-center mb-4">EFN Tools</h2>
        <p className="text-center text-muted-foreground mb-12">
          Tools to support you on your Empowr Freelancer journey.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <a
            href={links.portal}
            className="group bg-white rounded-[14px] border-2 border-blue p-8 flex flex-col gap-2 transition-all duration-200 hover:shadow-blue"
          >
            <h3 className="text-base font-extrabold text-black">Freelancer Portal</h3>
            <p className="text-sm text-muted-foreground">
              See your tasks and log your hours. Sign in with the email you joined with.
            </p>
            <span className="text-sm font-extrabold text-blue mt-1 group-hover:underline">
              Open the portal →
            </span>
          </a>
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
