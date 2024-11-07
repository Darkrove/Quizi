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
      <div className="min-h-screen w-full backdrop-blur-sm bg-slate-900/60 flex flex-col justify-center items-center">
        <div className="max-w-2xl mx-auto p-8 bg-[#383c45] flex flex-col justify-center gap-6 rounded-3xl shadow-2xl">

          <Image src='/assets/here-logo.png' alt='logo' height={1000} width={1000} className='h-32 w-32 object-contain' />
          <h1 className="text-4xl md:text-5xl font-bold text-[#46d3d3]">POI Quiz Challenge</h1>
          {/* <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-white/80 border-[#97c3c0]/20 shadow-lg backdrop-blur-sm">
              <CardHeader className="p-4">
                <CardTitle className="text-lg font-medium flex items-center text-[#2d5e5e]">
                  <Book className="h-6 w-6 mr-2 text-[#e07a52]" />
                  Rules & Instructions
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0 text-sm">
                <ul className="list-disc list-inside space-y-2">
                  <li>Answer questions about local businesses</li>
                  <li>Verify information using provided resources</li>
                  <li>Complete all questions to submit</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/80 border-[#97c3c0]/20 shadow-lg backdrop-blur-sm">
              <CardHeader className="p-4">
                <CardTitle className="text-lg font-medium flex items-center text-[#2d5e5e]">
                  <Coins className="h-6 w-6 mr-2 text-[#e07a52]" />
                  Earn Points
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0 text-sm">
                <ul className="list-disc list-inside space-y-2">
                  <li>Gain points for correct answers</li>
                  <li>Bonus points for quick responses</li>
                  <li>Climb the leaderboard rankings</li>
                </ul>
              </CardContent>
            </Card>
          </div> */}

          <div className='flex flex-row gap-2 w-full'>
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
          </div>
          <div>
            <h2 className='text-white text-lg font-bold'>Description</h2>
            <p className='text-gray-300'>
              Answer questions about local businesses and verify the information using provided resources. Complete all questions to submit and score coins for a chance to win exciting surprises!            </p>
          </div>

          <div className="flex w-full justify-center gap-4">
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
          </div>

        </div>
      </div>
    </div>
  );
}

export default Home;