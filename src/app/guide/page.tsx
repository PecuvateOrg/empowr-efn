import type { Metadata } from "next";
import GuideHeader from "@/components/guide/GuideHeader";
import AnchorNav from "@/components/guide/AnchorNav";
import GuideSection from "@/components/guide/GuideSection";
import RolesTable from "@/components/guide/RolesTable";
import StepList from "@/components/guide/StepList";
import Callout from "@/components/guide/Callout";
import FAQAccordion from "@/components/guide/FAQAccordion";
import CTAStrip from "@/components/guide/CTAStrip";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Freelancer Guide — Empowr Freelancer Network",
  description:
    "Everything you need to know about the EFN — from joining the network to getting paid.",
};

const joiningSteps = [
  {
    title: "Complete the onboarding form",
    body: "Fill in your personal details, address, tax information, and bank details. This takes around 5 minutes.",
  },
  {
    title: "Sign your Freelance Services Agreement",
    body: "You will receive an email with your personalised agreement. Read it carefully and sign it electronically — this usually takes less than 2 minutes. The agreement covers your terms of engagement, consent to the self-billing arrangement, and confirmation that you are self-employed or agree that you will register with HMRC once you start earning.",
  },
  {
    title: "Your profile is set up",
    body: "Once your agreement is signed, you will receive a welcome email asking for your tax and bank details. When you have completed them, your profile is set up and a contact record is created for you in our billing system.",
  },
  {
    title: "You're ready to work",
    body: "Once your profile is active, we will email you when a task is assigned. You can see all your tasks in the freelancer portal at efn-dashboard.empowrcic.org/portal.",
  },
];

const paymentSteps = [
  {
    title: "Log your hours",
    body: "After completing an assignment, sign in to the freelancer portal and log your hours against the task as soon as possible.",
  },
  {
    title: "Timesheet approval",
    body: "The admin team reviews and approves your hours in the dashboard. Once approved, you will receive a confirmation email showing the task and the hours approved. Payment is at your agreed rate.",
    callout: {
      variant: "warning" as const,
      text: "This is your chance to flag any discrepancies. Reply immediately if anything looks incorrect — once the invoice is raised it is harder to amend.",
    },
  },
  {
    title: "Invoice generated",
    body: "We generate a self-billed invoice on your behalf. You will receive a copy by email — keep this for your tax records. It is your record of income for HMRC self-assessment.",
    callout: {
      variant: "info" as const,
      text: "We will not re-issue invoice copies on request after 30 days.",
    },
  },
  {
    title: "Payment sent",
    body: "On the last Friday of the month, your payment is processed via bank transfer. Funds typically arrive within 1–2 working days.",
  },
];

export default function GuidePage() {
  return (
    <main>
      <GuideHeader />
      <AnchorNav />

      {/* About the EFN */}
      <GuideSection id="about" bg="card">
        <h2 className="text-2xl font-black text-black mb-6">
          What is the Empowr Freelancer Network?
        </h2>
        <p className="text-mid leading-relaxed mb-8">
          The Empowr Freelancer Network (EFN) is a community of self-employed professionals working with Empowr CIC on a flexible, freelance basis. Members take on assignments across a range of roles — from coaching and facilitation to production and operations — depending on their skills and availability.
        </p>

        <h3 className="text-lg font-bold text-black mb-4">Roles Available</h3>
        <RolesTable />
        <p className="text-sm text-mid italic mt-4 mb-10">
          Rates are reviewed periodically. Your agreed rate will be confirmed in writing as part
          of your onboarding.
        </p>

        <h3 className="text-lg font-bold text-black mb-4">Who Can Join?</h3>
        <ul className="list-disc list-inside text-mid leading-relaxed space-y-2">
          <li>Self-employed (or willing to register as self-employed)</li>
          <li>Eligible to work in the UK</li>
          <li>Available for shift-based assignments</li>
        </ul>
      </GuideSection>

      {/* Joining the Network */}
      <GuideSection id="joining" bg="blue-pale">
        <h2 className="text-2xl font-black text-black mb-8">How It Works</h2>
        <StepList steps={joiningSteps} />

        <h2 className="text-2xl font-black text-black mt-12 mb-6">
          What Is the Self-Billing Arrangement?
        </h2>
        <p className="text-mid leading-relaxed mb-4">
          Under a self-billing arrangement, Empowr CIC generates invoices on your behalf once
          your timesheet is approved. You do not need to send us an invoice — we handle it for
          you.
        </p>
        <p className="text-mid leading-relaxed mb-6">
          This is agreed in your Freelance Services Agreement and is fully compliant with HMRC
          guidelines (VAT Notice 700/62).
        </p>
        <Callout variant="warning">
          You must not submit your own invoice for work covered by this agreement. Doing so
          creates a duplicate and will delay your payment.
        </Callout>

        <h2 className="text-2xl font-black text-black mt-12 mb-6">What You Will Need</h2>
        <ul className="list-disc list-inside text-mid leading-relaxed space-y-2 mb-6">
          <li>National Insurance number</li>
          <li>Unique Taxpayer Reference (UTR) — if you have one</li>
          <li>UK bank account details (sort code and account number)</li>
          <li>UK address</li>
        </ul>
        <Callout variant="info">
          Don&apos;t have a UTR yet? You can still join — UTR is optional at the onboarding stage.
          You will need to register for Self Assessment with HMRC once you begin earning as a
          freelancer.
        </Callout>
      </GuideSection>

      {/* Getting Paid */}
      <GuideSection id="getting-paid" bg="card">
        <h2 className="text-2xl font-black text-black mb-6">How Payment Works</h2>
        <p className="text-mid leading-relaxed mb-4">
          Once your timesheet is approved by the admin team, we generate your invoice and process
          your payment. You do not need to do anything.
        </p>
        <p className="text-mid leading-relaxed mb-10">
          Payments are made on the <strong className="text-foreground">last Friday of each calendar month</strong>.
        </p>

        <h2 className="text-2xl font-black text-black mb-8">
          The Payment Journey — Step by Step
        </h2>
        <StepList steps={paymentSteps} />

        <h2 className="text-2xl font-black text-black mt-12 mb-6">Payment Cut-off Dates</h2>
        <p className="text-mid leading-relaxed mb-6">
          To be included in a given month&apos;s payment run, your timesheet must be approved by
          the admin team before the monthly cut-off date. Timesheets approved after cut-off roll
          into the following month.
        </p>
        <Callout variant="info">
          The cut-off is based on the approval date, not the submission date. Submit your
          timesheet with enough time for the admin team to review it before cut-off.
        </Callout>
        <p className="text-mid leading-relaxed mt-6">
          Empowr CIC will communicate cut-off dates at the start of each month.
        </p>
      </GuideSection>

      {/* FAQs */}
      <GuideSection id="faqs" bg="blue-pale">
        <h2 className="text-2xl font-black text-black mb-8">FAQs</h2>
        <FAQAccordion />
      </GuideSection>

      <CTAStrip />
      <Footer />
    </main>
  );
}
