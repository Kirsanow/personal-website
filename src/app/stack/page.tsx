import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import jslogo from '@/images/logos/js.svg'
import pythonlogo from '@/images/logos/python.svg'
import nodelogo from '@/images/logos/nodejs.svg'

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
  title: string | React.ReactNode
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
  const showTemporaryContent =
    process.env.NEXT_PUBLIC_SHOW_TEMP_CONTENT === 'true'

  return (
    <SimpleLayout
      title={
        showTemporaryContent
          ? 'The tools that power my no-code creations'
          : 'The tools that power my digital creations'
      }
      intro={
        showTemporaryContent
          ? "Here's an overview of the technologies I use daily for no-code development. These tools enable me to bring ideas to life efficiently without traditional coding."
          : "Here's an overview of the technologies I use daily. It's not about having the most advanced tools, but about what enables efficient and enjoyable work. These are the proven favorites that help me bring ideas to life."
      }
    >
      <div className="space-y-20">
        {showTemporaryContent ? (
          <>
            <ToolsSection title="No-Code Platform">
              <Tool
                title={
                  <div className="flex items-center">
                    <img
                      src="https://cdn.brandfetch.io/id6z4_raly/w/400/h/400/theme/dark/icon.jpeg?k=bfHSJFAPEG"
                      className="mr-2 h-4 w-4 rounded-sm"
                    />
                    <span>Bubble</span>
                  </div>
                }
              >
                Bubble has been my primary no-code development platform since
                2020. It allows me to create complex web applications without
                traditional coding. I leverage its visual programming interface
                to design, develop, and deploy scalable solutions quickly and
                efficiently.
              </Tool>
            </ToolsSection>
            <ToolsSection title="Design">
              <Tool
                title={
                  <div className="flex items-center">
                    <img
                      src="https://cdn.brandfetch.io/idZHcZ_i7F/theme/dark/symbol.svg?k=bfHSJFAPEG"
                      className="mr-2 h-4 w-4"
                    />
                    <span>Figma</span>
                  </div>
                }
              >
                Figma has been my go-to design tool since 2019. I use it for
                creating user interfaces, prototyping, and collaborating with
                clients. Its real-time collaboration features and extensive
                plugin ecosystem make it an indispensable part of my design
                workflow.
              </Tool>
            </ToolsSection>
            <ToolsSection title="Automation">
              <Tool
                title={
                  <div className="flex items-center">
                    <img
                      src="https://cdn.brandfetch.io/idVHU5hl7_/w/400/h/400/theme/dark/icon.jpeg?k=bfHSJFAPEG"
                      className="mr-2 h-4 w-4 rounded-sm"
                    />
                    <span>Make (Integromat)</span>
                  </div>
                }
              >
                I've been using Make (formerly Integromat) since 2021 for
                creating powerful automations and integrations. It allows me to
                connect various apps and services, automate workflows, and
                extend the capabilities of my Bubble applications without
                writing complex code.
              </Tool>
            </ToolsSection>
            <ToolsSection title="Scripting and Backend">
              <Tool
                title={
                  <div className="flex items-center">
                    <img src={jslogo.src} className="mr-2 h-4 w-4 rounded-sm" />
                    <span>JavaScript</span>
                  </div>
                }
              >
                While Bubble allows for no-code development, I often use
                JavaScript to extend its functionality. Since 2018, I've been
                leveraging JavaScript for custom plugins, complex calculations,
                and integrations that require more advanced scripting within the
                Bubble environment.
              </Tool>
              <Tool
                title={
                  <div className="flex items-center">
                    <img
                      src={pythonlogo.src}
                      className="mr-2 h-4 w-4 rounded-sm"
                    />
                    <span>Python</span>
                  </div>
                }
              >
                I use Python when I need to implement more complex backend logic
                that goes beyond Bubble's capabilities. It's particularly useful
                for data processing, machine learning tasks, or creating custom
                APIs to extend my no-code applications.
              </Tool>
              <Tool
                title={
                  <div className="flex items-center">
                    <img
                      src={nodelogo.src}
                      className="mr-2 h-4 w-4 rounded-sm"
                    />
                    <span>Node.js</span>
                  </div>
                }
              >
                When my no-code solutions require custom backend functionality,
                I turn to Node.js. It allows me to create efficient, scalable
                backend services that can seamlessly integrate with my Bubble
                applications, handling tasks like complex data processing or
                third-party API integrations.
              </Tool>
            </ToolsSection>
          </>
        ) : (
          <>
            <ToolsSection title="Framework">
              <Tool title="Next.js and React">
                I've been using Next.js and React since 2018. They've become
                reliable tools in my development process. I always start with
                TypeScript for its early error detection capabilities. For data
                fetching, I utilize modern React patterns, with Server
                Components and React Query being my current preferences.
              </Tool>
            </ToolsSection>
            <ToolsSection title="Styling">
              <Tool title="Tailwind CSS and shadcn/ui">
                Tailwind CSS has been my styling solution since 2020, with
                shadcn/ui joining in 2023. Together, they form an efficient
                design toolkit. They allow me to create responsive, visually
                appealing interfaces quickly and effectively.
              </Tool>
            </ToolsSection>
            <ToolsSection title="Database">
              <Tool title="PostgreSQL and Supabase">
                I've been using PostgreSQL for database management since 2018,
                with Supabase added in 2023. This combination provides a robust
                data management solution. PostgreSQL offers the power and
                flexibility I require, while Supabase enhances the development
                experience with its user-friendly features.
              </Tool>
            </ToolsSection>
            <ToolsSection title="AI Assistants">
              <Tool title="V0 and Cursor AI">
                V0 and Cursor AI are recent additions to my toolkit, introduced
                in 2023. They serve as intelligent assistants in my development
                process. These tools aid in brainstorming, debugging, and
                occasionally provide innovative solutions I might not have
                considered otherwise.
              </Tool>
            </ToolsSection>
          </>
        )}
      </div>
    </SimpleLayout>
  )
}
