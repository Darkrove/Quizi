"use client"

import Image from 'next/image';
import Link from 'next/link';
import { motion } from "framer-motion"
import { Coins, MapPin, Trophy, Book, ArrowRight, HelpCircle, PlayCircle, Star } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white w-full bg-cover bg-center bg-fixed" style={{
      backgroundImage:
        'url("/assets/205b79ac4dc42a146713813581ab3f86.gif")',
    }}>
      <div className="min-h-screen w-full backdrop-blur-sm bg-slate-900/60 flex flex-col justify-center items-center">
        <div className="max-w-4xl mx-auto p-8 bg-[#383c45] flex flex-col justify-center items-center gap-6 rounded-xl shadow-2xl">
          
          <Image src='/assets/here-logo.png' alt='logo' height={1000} width={1000} className='h-32 w-32 object-contain' />
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-[#46d3d3]">POI Quiz Challenge</h1>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
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
          </div>

          <div className="text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href='/question'>
            <button className="flex items-center px-8 py-4 bg-[#48d8ce] text-white rounded-lg text-xl font-semibold hover:bg-[#48d8ce]/20 transition duration-200 shadow-lg transform hover:scale-105">
              <PlayCircle className="mr-3 text-2xl" />
              Start Quiz
            </button>
          </Link>
            </motion.div>
          </div>

          <motion.div 
            className="mt-8 text-center text-sm text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p>Ready to test your local knowledge?</p>
            <p className="mt-2 flex items-center justify-center">
              <Trophy className="h-5 w-5 mr-2 text-[#e07a52]" />
              Win prizes and help improve our database!
            </p>
          </motion.div>

          
        </div>
      </div>
    </div>
  );
}

export default Home;