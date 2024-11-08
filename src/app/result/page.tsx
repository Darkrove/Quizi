"use client"

import React from 'react';
import Image from 'next/image';
import { Earth, Star, WholeWord } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

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
      <div className="min-h-screen w-full bg-slate-900/70">
        <div className="max-w-7xl mx-auto p-6">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4 max-w-7xl mx-auto p-6 bg-[#383c45] rounded-xl flex flex-col"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image src='/assets/here-logo.png' alt='logo' height={1000} width={1000} className='h-32 w-32' />
            </motion.div>
            <div className='w-full flex flex-col justify-center items-center gap-3'>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <Image src='https://gamification-kpi-prod-images.s3.us-east-1.amazonaws.com/42a191ee04df45d' alt='logo' height={1000} width={1000} className='h-32 w-32 rounded-full' />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className='flex flex-col justify-center items-center'
              >
                <p className='text-lg font-bold'>Ankit Gupta</p>
                <p className='text-md text-gray-300'>Sr Spatial Data Specialist</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className='w-full p-4 bg-gradient-to-r from-[#006d5b] to-[#20b2aa] rounded-3xl grid grid-cols-1 sm:grid-cols-3'
              >
                <StatsItem icon={<Star className='w-5 h-5' />} label="COINS" value="590" className="border-r-4"/>
                <StatsItem icon={<Earth className='w-5 h-5' />} label="GLOBAL RANK" value="#123" className="border-r-4" />
                <StatsItem icon={<Star className='w-5 h-5' />} label="TEAM RANK" value="#1" />
              </motion.div>
            </div>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className='text-lg font-bold'
            >
              Leaderboard
            </motion.p>
            {leaderboardData.map((entry, index) => (
              <motion.div
                key={entry.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

interface StatsItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  className?: string;
}

const StatsItem = ({ icon, label, value, className }: StatsItemProps) => (
  <motion.div 
  className={cn('w-full flex flex-col justify-center items-center', className)}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    {icon}
    <p className='text-md text-gray-300'>{label}</p>
    <p className='text-xl text-white font-bold'>{value}</p>
  </motion.div>
);

export default LeaderboardPage;