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
      {cards.map((card, i) => (
        <div
          key={card.title}
          className={`[grid-area:stack] rounded-xl border border-navy-700/60 bg-navy-800/50 backdrop-blur-sm p-5 transition-all duration-700 ease-out cursor-pointer group ${card.className}`}
        >
          <div className="flex items-start gap-4">
            <div className="mt-0.5 shrink-0">{card.icon}</div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2 mb-1">
                <h4 className="text-sm font-semibold text-navy-100 group-hover:text-amber-400 transition-colors truncate">
                  {card.title}
                </h4>
                {card.tag && (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 shrink-0">
                    {card.tag}
                  </span>
                )}
              </div>
              <p className="text-xs text-navy-400 leading-relaxed">{card.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
