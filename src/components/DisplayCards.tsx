import { type ReactNode } from 'react';

interface CardData {
  icon: ReactNode;
  title: string;
  description: string;
  tag?: string;
  className?: string;
}

interface DisplayCardsProps {
  cards: CardData[];
}

export default function DisplayCards({ cards }: DisplayCardsProps) {
  return (
    <div className="grid [grid-template-areas:'stack'] w-full max-w-sm">
      {cards.map((card) => (
        <div
          key={card.title}
          className={`[grid-area:stack] rounded-apple border border-white/[0.08] bg-surface-1/80 backdrop-blur-sm p-5 transition-all duration-700 ease-out cursor-pointer group ${card.className}`}
        >
          <div className="flex items-start gap-4">
            <div className="mt-0.5 shrink-0">{card.icon}</div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2 mb-1">
                <h4 className="text-sm font-semibold text-white/90 group-hover:text-apple-blue transition-colors truncate">
                  {card.title}
                </h4>
                {card.tag && (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-apple-blue/10 text-apple-blue border border-apple-blue/15 shrink-0">
                    {card.tag}
                  </span>
                )}
              </div>
              <p className="text-xs text-white/40 leading-relaxed">{card.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
