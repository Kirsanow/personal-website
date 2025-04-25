import React from 'react'

interface QuoteProps {
  text?: string
  authorName?: string
  authorTitle?: string
  authorImageUrl?: string
}

const Quote: React.FC<QuoteProps> = ({
  text = 'SkyAgent has transformed our daily operations. Tasks that once consumed hours now complete in moments, freeing our team to focus on creativity and strategic growth.',
  authorName = 'Alex Johnson',
  authorTitle = 'CTO, Innovatech',
  authorImageUrl = 'https://randomuser.me/api/portraits/men/91.jpg',
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
              className="size-full rounded-full object-contain"
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
