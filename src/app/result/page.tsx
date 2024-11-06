import React from 'react';
import Image from 'next/image';

interface LeaderboardEntry {
  id: number;
  position: number;
  name: string;
  role: string;
  team: string;
  department: string;
  score: number;
  avatar: string;
}

const LeaderboardPage = () => {
  const leaderboardData: LeaderboardEntry[] = [
    {
      id: 1,
      position: 1,
      name: "Ankit Gupta",
      role: "RS",
      team: "Team Sreenivas Pai",
      department: "PGP",
      score: 500,
      avatar: 'https://gamification-kpi-prod-images.s3.us-east-1.amazonaws.com/42a191ee04df45d'
    },
    {
      id: 2,
      position: 2,
      name: "Hariharan Mudaliyar",
      role: "PS",
      team: "Team Sreenivas Pai",
      department: "PGP",
      score: 300,
      avatar: 'https://gamification-kpi-prod-images.s3.us-east-1.amazonaws.com/cb170da646dc39a'
    },
    {
      id: 3,
      position: 3,
      name: "Sajjad Shaikh",
      role: "TB",
      team: "Team Sreenivas Pai",
      department: "PGP",
      score: 200,
      avatar: 'https://gamification-kpi-prod-images.s3.us-east-1.amazonaws.com/d125ddce1f8ae56'
    },
    {
      id: 4,
      position: 4,
      name: "SunnyKumar Gupta",
      role: "RM",
      team: "Team Sreenivas Pai",
      department: "PGP",
      score: 200,
      avatar: 'https://gamification-kpi-prod-images.s3.us-east-1.amazonaws.com/c177ec5a5bdfed3'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white w-full bg-cover bg-center bg-fixed" style={{
        backgroundImage:
          'url("/assets/205b79ac4dc42a146713813581ab3f86.gif")',
      }}>
        <div className="min-h-screen w-full backdrop-blur-sm bg-slate-900/70">
      <div className="max-w-7xl mx-auto p-6">

        <div className="space-y-4 max-w-7xl mx-auto p-6 bg-[#383c45] rounded-xl flex flex-col justify-center items-center">
        <Image src='/assets/here-logo.png' alt='logo' height={1000} width={1000} className='h-32 w-32' />
        <nav className="mb-8 w-full">
          <ul className="flex space-x-6 text-white text-lg">
            <li className="text-green-500">Team</li>
            <li>All</li>
            <li>Department</li>
            <li>Location</li>
            <li>Manager Standings</li>
          </ul>
        </nav>
          {leaderboardData.map((entry) => (
            <div 
              key={entry.id}
              className="w-full flex items-center bg-gradient-to-r from-[#006d5b] to-[#20b2aa] rounded-lg overflow-hidden border border-white"
            >
              <div className="flex items-center flex-1 px-4 py-2">
                <div className="w-12 text-2xl font-bold">{entry.position}</div>
                
                <div className="w-12 h-12">
                <Image src={entry.avatar} width={1000} height={1000} alt={entry.name} className="w-full h-full rounded-full mr-4 object-cover" />
                  
                </div>
                      
                <div className="flex-1 pl-4">
                  <h3 className="text-xl font-bold">{entry.name}</h3>
                </div>
                
                <div className="text-right px-6">
                  <div className="text-white text-sm">{entry.team}</div>
                  <div className="text-white text-sm">{entry.department}</div>
                </div>
                
                <div className="w-32 text-right">
                  <div className="text-2xl font-bold">{entry.score}</div>
                  <div className="text-sm text-white">Coins</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
};

export default LeaderboardPage;