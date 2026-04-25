import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — CareerOS" },
      { name: "description", content: "Simple pricing for every career stage. Start free, upgrade for unlimited AI." },
      { property: "og:title", content: "Pricing — CareerOS" },
      { property: "og:description", content: "Free and Pro plans for the AI career assistant." },
    ],
  }),
  component: PricingPage,
});

const tiers = [
  {
    name: "Free",
    price: "$0",
    sub: "Forever",
    desc: "Get started with the basics.",
    cta: "Start free",
    features: ["3 resume scans / month", "Basic ATS analysis", "1 saved resume", "Community support"],
    highlight: false,
  },
  {
    name: "Pro",
    price: "$19",
    sub: "/ month",
    desc: "For serious job seekers.",
    cta: "Go Pro",
    features: [
      "Unlimited resume scans",
      "AI Resume Rewriter",
      "Job tracker (Kanban)",
      "AI Career Coach (chat)",
      "Cover letter generator",
      "Interview prep + feedback",
      "LinkedIn optimizer",
      "Priority support",
    ],
    highlight: true,
  },
];

function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="container relative mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Simple, <span className="text-gradient">honest</span> pricing
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Start free. Upgrade when you&apos;re ready to land the offer.
          </p>

          <div className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-2">
            {tiers.map((t) => (
              <Card
                key={t.name}
                className={
                  t.highlight
                    ? "relative glass border-primary/40 shadow-glow"
                    : "glass border-border/50"
                }
              >
                {t.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-primary px-3 py-1 text-xs font-bold text-primary-foreground shadow-glow">
                    MOST POPULAR
                  </div>
                )}
                <CardContent className="p-8 text-left">
                  <div className="text-sm font-semibold uppercase tracking-wider text-primary">{t.name}</div>
                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="text-5xl font-bold">{t.price}</span>
                    <span className="text-muted-foreground">{t.sub}</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
                  <Button
                    asChild
                    variant={t.highlight ? "hero" : "outline"}
                    className="mt-6 w-full"
                    size="lg"
                  >
                    <Link to="/dashboard">{t.cta}</Link>
                  </Button>
                  <ul className="mt-8 space-y-3">
                    {t.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}