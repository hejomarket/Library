import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export default function Home() {
  return <main>
    <Container as="section" size="compact" style={{ paddingBlock: "clamp(4rem, 12vw, 8rem)", textAlign: "center" }}>
      <p className="typography-label" style={{ color: "var(--color-accent)" }}>Foundation preview</p>
      <h1 className="typography-page-title">{siteConfig.name}</h1>
      <p className="typography-body-large">{siteConfig.tagline}</p>
      <Button href="/dev/design-system" variant="outline">View design system</Button>
    </Container>
  </main>;
}
