import Link from 'next/link';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { SubSolution } from '@/types';

interface SolutionCardProps {
  solution: SubSolution;
  showBookButton?: boolean;
}

const SolutionCard = ({ solution, showBookButton = false }: SolutionCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
      <div className="relative h-64 overflow-hidden">
        <img
          src={solution.image}
          alt={solution.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{solution.name}</h3>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">{solution.description}</p>
        {solution.features && solution.features.length > 0 && (
          <ul className="space-y-2 mb-6">
            {solution.features.map((feature, index) => (
              <li key={index} className="flex items-center text-sm text-gray-700">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></span>
                {feature}
              </li>
            ))}
          </ul>
        )}
        <div className="flex flex-col sm:flex-row gap-3">
          {showBookButton ? (
            <Button className="flex-1 bg-red-600 hover:bg-red-700 text-white rounded-full">
              Book now
            </Button>
          ) : (
            <Button className="flex-1 bg-red-600 hover:bg-red-700 text-white rounded-full">
              Get a quote
            </Button>
          )}
          <Button variant="outline" className="flex-1 rounded-full border-gray-300 hover:border-red-600 hover:text-red-600">
            Learn more
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SolutionCard;

