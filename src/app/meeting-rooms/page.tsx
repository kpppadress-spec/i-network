import SolutionCard from '@/components/SolutionCard';
import { solutions } from '@/data/mockData';

export default function MeetingRooms() {
  const meetingRoomsSolution = solutions.find(s => s.id === 'meeting-rooms');

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Meeting Rooms</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {meetingRoomsSolution?.description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {meetingRoomsSolution?.subSolutions.map((subSolution, index) => (
            <SolutionCard key={index} solution={subSolution} />
          ))}
        </div>
      </div>
    </div>
  );
}

