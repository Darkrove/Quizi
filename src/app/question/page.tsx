'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { buttonVariants } from "@/components/ui/button"
import {
  Flame,
  Trophy,
  HelpCircle,
  MapPin,
  Search,
  Database,
  Map,
  Check,
  X,
  AlertCircle,
  Link as LinkIcon,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from '@/components/ui/tooltip';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { cn } from '@/lib/utils';
export default function Component() {
  const [progress, setProgress] = useState(40);
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<number, string>
  >({});
  const [url, setUrl] = useState('');

  const questions = [
    "Can you find the location of place?",
    "Is this place currently open or closed?",
    'Can you find any recent reviews (last 6 months)?',
    'Does this place have vehicle parking?',
    "Do they accept cash and card payments?",
  ];

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          'url("/assets/205b79ac4dc42a146713813581ab3f86.gif")',
      }}
    >
      <div className="min-h-screen w-full backdrop-blur-sm bg-slate-900/70">
        <div className="w-full max-w-5xl mx-auto p-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-[#006d5b] to-[#20b2aa] rounded-lg p-4 mb-6 shadow-lg backdrop-blur-sm border"
          >
            <div className="flex items-start justify-between">
              <div className='w-full'>
                <div className='flex flex-row justify-between w-full'>
                  <div className='flex'>
                    <h1 className="text-2xl font-bold text-white">
                      Papa B's Chicken & Fish
                    </h1>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <AlertCircle className="ml-2 h-4 w-4 text-red-500" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Name of the Place</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <div className='flex'>
                    <h1 className="text-2xl font-bold text-white">
                      Restaurant
                    </h1>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <AlertCircle className="ml-2 h-4 w-4 text-red-500" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Category of the Place</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>

                </div>


                <span className="text-sm text-yellow-500 font-medium">
                  +10 Coins
                </span>
                <div className="flex items-center justify-between space-x-2 text-white mt-1">
                  
                  <div className='flex justify-center items-center gap-2'> 
                  <MapPin className="h-4 w-4" />
                  <span>133 W Oak St, Louisville, KY 40203, United States</span>
                  <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <AlertCircle className="ml-2 h-4 w-4 text-red-500" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Address of the Place</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-white">
                <span>Progress</span>
                <Progress value={progress} className="w-24 bg-[#97c3c0]/20 border border-zinc-800" />
                <span>4/10</span>
              </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Card className="bg-gradient-to-r from-[#006d5b] to-[#20b2aa] shadow-lg backdrop-blur-sm">
              <CardHeader className="p-4">
                <CardTitle className="text-sm font-medium flex items-center text-white">
                  <Map className="h-4 w-4 mr-2" />
                  Google Maps
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-blue-100 rounded-lg text-center text-white"
                >
                  <Link target='blank' href='https://maps.app.goo.gl/xTxBpNqvqP33WTYW8'>
                  <Image src="/assets/google-map.png" alt='google map image' width={1000} height={1000} className='h-full w-full rounded-md object-cover' />
                  </Link>
                  
                </motion.div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-[#006d5b] to-[#20b2aa] shadow-lg backdrop-blur-sm">
              <CardHeader className="p-4">
                <CardTitle className="text-sm font-medium flex items-center text-white">
                  <Database className="h-4 w-4 mr-2" />
                  MapCreator
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-blue-100 rounded-lg text-center text-white"
                >
                  <Link target='blank' href='https://community.in.here.com/?l=38.234840,-85.756722,19,satellite'>
                  <Image src="/assets/mapcreator-map.png" alt='google map image' width={1000} height={1000} className='h-full w-full rounded-md object-cover' />
                  </Link>
                </motion.div>
              </CardContent>
            </Card>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            {questions.map((question, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
                className="bg-gradient-to-r from-[#006d5b] to-[#20b2aa] rounded-lg p-4 shadow-lg backdrop-blur-sm border"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-white">{question}</span>
                  </div>
                  <div className="flex space-x-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() =>
                        setSelectedAnswers({
                          ...selectedAnswers,
                          [index]: 'yes',
                        })
                      }
                      className={`p-2 rounded-full transition-colors border ${selectedAnswers[index] === 'yes'
                        ? 'bg-green-200 text-green-600 border border-green-900'
                        : 'bg-white text-black hover:bg-blue-300 border border-blue-900'
                        }`}
                    >
                      <Check className="h-5 w-5" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() =>
                        setSelectedAnswers({
                          ...selectedAnswers,
                          [index]: 'no',
                        })
                      }
                      className={`p-2 rounded-full transition-colors ${selectedAnswers[index] === 'no'
                        ? 'bg-red-200 text-red-600 border border-red-900'
                        : 'bg-white text-black hover:bg-blue-300 border border-blue-900'
                        }`}
                    >
                      <X className="h-5 w-5" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() =>
                        setSelectedAnswers({
                          ...selectedAnswers,
                          [index]: 'unsure',
                        })
                      }
                      className={`p-2 rounded-full transition-colors ${selectedAnswers[index] === 'unsure'
                        ? 'bg-yellow-200 text-yellow-600 border border-blue-900'
                        : 'bg-white text-black hover:bg-blue-300 border border-blue-900'
                        }`}
                    >
                      <HelpCircle className="h-5 w-5" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-6 space-y-4"
          >
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-[#006d5b] to-[#20b2aa] p-2 rounded-full backdrop-blur-sm">
                <LinkIcon className="h-6 w-6 text-white" />
              </div>
              <Input
                type="url"
                placeholder="Enter URL for Reference"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="flex-grow text-green-900 placeholder-green-900 backdrop-blur-sm"
              />
            </div>
            <div className="flex justify-end">
            <button className="flex items-center px-6 py-3 bg-green-500 text-sm font-medium text-white rounded-lg  hover:bg-green-700 transition duration-200">
          <Link href='/result' className="flex justify-center items-center"> 

          Submit
          </Link>
          
        </button>
              
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
