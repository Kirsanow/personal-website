import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'My Stack',
  description: 'The tools and technologies I use to build awesome stuff.',
}

export default function Stack() {
  return (
    <SimpleLayout
      title="The tools that power my digital creations"
      intro="Here's an overview of the technologies I use daily. It's not about having the most advanced tools, but about what enables efficient and enjoyable work. These are the proven favorites that help me bring ideas to life."
    >
      <div className="space-y-20">
        <ToolsSection title="Framework">
          <Tool title="Next.js and React">
            I've been using Next.js and React since 2018. They've become
            reliable tools in my development process. I always start with
            TypeScript for its early error detection capabilities. For data
            fetching, I utilize modern React patterns, with Server Components
            and React Query being my current preferences.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Styling">
          <Tool title="Tailwind CSS and shadcn/ui">
            Tailwind CSS has been my styling solution since 2020, with shadcn/ui
            joining in 2023. Together, they form an efficient design toolkit.
            They allow me to create responsive, visually appealing interfaces
            quickly and effectively.
          </Tool>
        </ToolsSection>

        <ToolsSection title="Database">
          <Tool title="PostgreSQL and Supabase">
            I've been using PostgreSQL for database management since 2018, with
            Supabase added in 2023. This combination provides a robust data
            management solution. PostgreSQL offers the power and flexibility I
            require, while Supabase enhances the development experience with its
            user-friendly features.
          </Tool>
        </ToolsSection>
        <ToolsSection title="AI Assistants">
          <Tool title="V0 and Cursor AI">
            V0 and Cursor AI are recent additions to my toolkit, introduced in
            2023. They serve as intelligent assistants in my development
            process. These tools aid in brainstorming, debugging, and
            occasionally provide innovative solutions I might not have
            considered otherwise.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
