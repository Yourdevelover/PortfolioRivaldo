import { type ReactNode } from 'react';
import TiltCard from './TiltCard';

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
    <div className="grid sm:grid-cols-1 gap-4 w-full">
      {cards.map((card) => (
        <TiltCard
          key={card.title}
          className="p-5 flex items-start gap-4 transition-all duration-200"
        >
          <div className="p-2.5 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 shrink-0">
            {card.icon}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2 mb-1.5">
              <h4 className="text-sm font-bold text-white truncate">
                {card.title}
              </h4>
              {card.tag && (
                <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-sky-500/15 text-sky-300 border border-sky-400/30 shrink-0">
                  {card.tag}
                </span>
              )}
            </div>
            <p className="text-xs text-slate-300 leading-relaxed font-normal">{card.description}</p>
          </div>
        </TiltCard>
      ))}
    </div>
  );
}
