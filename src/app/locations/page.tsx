import Link from 'next/link';
import { locations } from '@/data/mockData';

export default function Locations() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Locations</h1>
          <p className="text-xl text-gray-600">Find workspace solutions in cities around the world</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((location) => (
            <Link
              key={location.id}
              href={`/locations/${location.city.toLowerCase().replace(' ', '-')}`}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">{location.city}</h3>
              <p className="text-gray-600 mb-2">{location.country}</p>
              <p className="text-sm text-red-600 font-semibold">{location.count} locations</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

