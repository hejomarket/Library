import type { Metadata } from "next";
import { PlaceholderBookCover } from "@/components/content/placeholder-book-cover";
import { SectionHeading } from "@/components/content/section-heading";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = { title: "Design system", robots: { index: false, follow: false } };

const variants = ["primary", "secondary", "outline", "ghost", "destructive", "text"] as const;
const badges = ["neutral", "accent", "outline", "success", "warning", "destructive"] as const;

export default function DesignSystemPage() {
  return <main style={{ paddingBlock: "3rem" }}>
    <Container size="wide">
      <SectionHeading eyebrow="Development only" title="Library design system foundation" description="Temporary showcase for Task 1 tokens, typography, primitives, and light/dark compatibility. Remove this route when a permanent documentation surface exists." action={<Button href="/" variant="text">Home</Button>} />
      <div className="showcase-grid">
        <section className="showcase-card"><h2 className="typography-section-heading">Typography</h2><p className="typography-display">Editorial display</p><p className="typography-page-title">Page title</p><p className="typography-body-large">Large body text for calm introductory reading.</p><p className="typography-article">Long-form article text is prepared with generous line-height, readable serif forms, and comfortable contrast for extended nonfiction summaries.</p><blockquote className="typography-blockquote">Readable thinking deserves quiet presentation.</blockquote><p>Inline <code>code</code> and code blocks are styled.</p><pre><code>{`const readingTime = 15;`}</code></pre></section>
        <section className="showcase-card"><h2 className="typography-section-heading">Buttons</h2><div className="showcase-row">{variants.map((variant) => <Button key={variant} variant={variant}>{variant}</Button>)}<Button isLoading loadingLabel="Saving">Loading</Button><Button disabled>Disabled</Button><Button size="icon" aria-label="Icon button">↗</Button></div></section>
        <section className="showcase-card"><h2 className="typography-section-heading">Badges</h2><div className="showcase-row">{badges.map((variant) => <Badge key={variant} variant={variant}>{variant}</Badge>)}</div></section>
        <section className="showcase-card"><h2 className="typography-section-heading">Surfaces</h2><div className="surface-strip"><span>Page</span><span>Surface</span><span>Muted</span><span>Accent</span></div></section>
        <section className="showcase-card"><h2 className="typography-section-heading">Placeholder covers</h2><div className="showcase-row"><PlaceholderBookCover title="The Art of Clear Thinking" author="Library Editors" category="Decisions" /><PlaceholderBookCover title="A Very Long Book Title That Still Needs Graceful Truncation in a Development Cover" category="Work" /><PlaceholderBookCover title="Quiet Strategy" author="A. Writer" category="Leadership" /></div></section>
      </div>
    </Container>
  </main>;
}
