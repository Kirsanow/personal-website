import React from 'react'

interface QuoteProps {
  text?: string
  authorName?: string
  authorTitle?: string
  authorImageUrl?: string
}

const Quote: React.FC<QuoteProps> = ({
  text = `Working with Artem on our Homeezy MVP was an exceptional experience. 
    His 'yes to everything' attitude coupled with his relentless work ethic made 
    obstacles vanish. He's not just fast and efficient—he's reliably excellent, 
    delivering high-quality work within tight deadlines. What sets Artem apart is 
    his willingness to take on any challenge, making him not just a developer, but 
    a crucial asset to our team. I couldn't recommend him more highly for any 
    tech-centric project.`,
  authorName = 'Gabriel Francoeur',
  authorTitle = 'CEO, Homeezy',
  authorImageUrl = 'https://firebasestorage.googleapis.com/v0/b/testimonialto.appspot.com/o/testimonials%2F8b721a83-cf61-4642-907e-c240a910bdd1%2Favatar?alt=media&token=31cd2c26-a9e2-4bb3-af61-7b84725d68f2',
}) => {
  return (
    <section
      id="quote"
      className="border-border dark:bg-background z-20 flex w-full flex-col items-center justify-center gap-8 border-t border-b bg-white p-14"
    >
      <blockquote className="max-w-3xl px-4 text-left">
        <p className="text-foreground mb-6 text-xl leading-relaxed font-medium tracking-tighter md:text-2xl">
          {text}
        </p>
        <div className="flex gap-4">
          <div className="bg-primary border-border size-10 rounded-full border">
            <img
              src={authorImageUrl}
              alt={authorName}
              className="size-full rounded-full object-cover"
            />
          </div>
          <div className="text-left">
            <cite className="text-foreground text-lg font-medium not-italic">
              {authorName}
            </cite>
            <p className="text-muted-foreground text-sm">{authorTitle}</p>
          </div>
        </div>
      </blockquote>
    </section>
  )
}

export default Quote
