'use client';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

interface StatItemProps {
  end: number;
  suffix?: string;
  title: string;
}

const StatItem = ({ end, suffix = '', title }: StatItemProps) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
      <div className="text-4xl font-bold text-primary-600 mb-2">
        {inView ? (
          <CountUp
            end={end}
            duration={2.5}
            suffix={suffix}
            separator="."
          />
        ) : '0'}
      </div>
      <div className="text-secondary-600">{title}</div>
    </div>
  );
};

export default function AnimatedStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
      <StatItem end={500} title="Clientes Atendidos" suffix="+" />
      <StatItem end={98} title="Satisfação" suffix="%" />
      <StatItem end={15} title="Anos no Mercado" suffix="+" />
      <StatItem end={24} title="Suporte Técnico" suffix="/7" />
    </div>
  );
}
