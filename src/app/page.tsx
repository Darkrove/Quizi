"use client"

import Image from 'next/image';
import Link from 'next/link';
import { motion } from "framer-motion"
import { Coins, MapPin, Trophy, Book, ArrowRight, HelpCircle, PlayCircle, Star, Menu, PanelsTopLeft, ShieldQuestion, CircleHelp, ChartBarIncreasing } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useRouter } from 'next/navigation';

const Home = () => {
  const router = useRouter()
  return (
    <div className="min-h-screen bg-gray-900  w-full bg-cover bg-center bg-fixed" style={{
      backgroundImage:
        'url("/assets/205b79ac4dc42a146713813581ab3f86.gif")',
    }}>
      <div className="min-h-screen w-full bg-slate-900/60 flex flex-col justify-center items-center">
        <div className="max-w-2xl mx-auto p-8 bg-[#383c45] flex flex-col justify-center gap-6 rounded-3xl shadow-2xl">
          <Image src='/assets/here-logo.png' alt='logo' height={1000} width={1000} className='h-32 w-32 object-contain' />
          <motion.div initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}>
          <h1 className="text-4xl md:text-5xl font-bold text-[#46d3d3]">POI Quiz Challenge</h1>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }} className='flex flex-row gap-2 w-full'>
            <Badge size={'lg'} variant={'info'}>
              <CircleHelp className='w-5 h-5' />
              3 Questions</Badge>
            <Badge size={'lg'} variant={'destructive'}>
              <Coins className='w-5 h-5' />
              +10 Coins</Badge>
            <Badge size={'lg'} variant={'default'}>
              <ChartBarIncreasing className='w-5 h-5' />
              Leaderborad
            </Badge>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}>
            <h2 className='text-white text-lg font-bold'>Description</h2>
            <p className='text-gray-300'>
              Answer questions about local businesses and verify the information using provided resources. Complete all questions to submit and score coins for a chance to win exciting surprises!            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4}} className="flex w-full justify-center gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='w-full'
            >
              <Button variant={'outline'} className='w-full' onClick={() => router.push('/question')}>
                <PlayCircle className="w-6 h-6" />
                Start Quiz
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='w-full'
            >
              <Button className="bg-[#48d8ce] text-white hover:bg-[#48d8ce]/10 w-full" onClick={() => router.push('/result')}>
                <PanelsTopLeft className="w-6 h-6" />
                Leaderboard
              </Button>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}

export default Home;