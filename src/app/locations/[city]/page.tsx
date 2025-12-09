import { notFound } from 'next/navigation';
import { locations } from '@/data/mockData';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface PageProps {
  params: {
    city: string;
  };
}

export default function LocationCity({ params }: PageProps) {
  const cityName = params.city.replace('-', ' ').split(' ').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
  
  const location = locations.find(
    loc => loc.city.toLowerCase() === cityName.toLowerCase()
  );

  if (!location) {
    notFound();
  }

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link href="/locations" className="text-red-600 hover:text-red-700">
            ← Back to Locations
          </Link>
        </div>
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {location.city}
          </h1>
          <p className="text-xl text-gray-600">{location.country}</p>
          <p className="text-lg text-gray-700 mt-4">
            {location.count} locations available
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Workspace Solutions in {location.city}
            </h2>
            <p className="text-gray-700 mb-6">
              Discover our range of office spaces, coworking areas, meeting rooms, and virtual office solutions in {location.city}.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/office-space">
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white rounded-full">
                  Office Space
                </Button>
              </Link>
              <Link href="/coworking">
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white rounded-full">
                  Coworking
                </Button>
              </Link>
              <Link href="/meeting-rooms">
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white rounded-full">
                  Meeting Rooms
                </Button>
              </Link>
              <Link href="/virtual-offices">
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white rounded-full">
                  Virtual Offices
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

