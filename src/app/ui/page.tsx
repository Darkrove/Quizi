'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
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
          'url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Designer-maps-1-FsbrLNi7KfcUId20OeWWC3iKP2n9KY.jpeg")',
      }}
    >
      <div className="min-h-screen w-full backdrop-blur-sm bg-slate-900/70">
        <div className="w-full max-w-5xl mx-auto p-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-green-100 to-blue-400 rounded-lg p-4 mb-6 shadow-lg backdrop-blur-sm border border-[#97c3c0]/20"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2 text-[#e07a52]">
                  <Flame className="h-5 w-5" />
                  <span className="font-semibold">12 day streak</span>
                </div>
                <div className="flex items-center space-x-2 text-yellow-600">
                  <Trophy className="h-5 w-5" />
                  <span className="font-semibold">450 points</span>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-sm text-zinc-900">
                <span>Progress</span>
                <Progress value={progress} className="w-24 bg-[#97c3c0]/20 border border-zinc-800" />
                <span>4/10</span>
              </div>
            </div>

            <div className="flex items-start justify-between">
              <div className='w-full'>
                <div className='flex flex-row justify-between w-full'>
                  <div className='flex'>
                    <h1 className="text-2xl font-bold text-zinc-900">
                      Papa B's Chicken & Fish
                    </h1>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <AlertCircle className="ml-2 h-4 w-4 text-blue-600" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Name of the Place</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <div className='flex'>
                    <h1 className="text-2xl font-bold text-zinc-900">
                      Restaurant
                    </h1>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <AlertCircle className="ml-2 h-4 w-4 text-blue-600" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Category of the Place</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>

                </div>


                <span className="text-sm text-green-600 font-medium">
                  +50 points
                </span>
                <div className="flex items-center space-x-2 text-zinc-900 mt-1">
                  <MapPin className="h-4 w-4" />
                  <div className='flex'> 
                  <span>133 W Oak St, Louisville, KY 40203, United States</span>
                  <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <AlertCircle className="ml-2 h-4 w-4 text-blue-600" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Address of the Place</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Card className="bg-gradient-to-r from-green-100 to-blue-400 border-[#97c3c0]/20 shadow-lg backdrop-blur-sm">
              <CardHeader className="p-4">
                <CardTitle className="text-sm font-medium flex items-center text-zinc-900">
                  <Map className="h-4 w-4 mr-2" />
                  Google Maps
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-blue-100 rounded-lg p-1 text-center text-zinc-900"
                >
                  <Link target='blank' href='https://maps.app.goo.gl/xTxBpNqvqP33WTYW8'>
                  <Image src="/assets/google-map.png" alt='google map image' width={1000} height={1000} className='h-full w-full rounded-md object-cover' />
                  </Link>
                  
                </motion.div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-green-100 to-blue-400 border-[#97c3c0]/20 shadow-lg backdrop-blur-sm">
              <CardHeader className="p-4">
                <CardTitle className="text-sm font-medium flex items-center text-zinc-900">
                  <Database className="h-4 w-4 mr-2" />
                  MapCreator
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-blue-100 rounded-lg p-1 text-center text-zinc-900"
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
                className="bg-gradient-to-r from-green-100 to-blue-400 rounded-lg p-4 shadow-lg backdrop-blur-sm border border-[#97c3c0]/20"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-zinc-900">{question}</span>
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
                        : 'bg-white text-zinc-900 hover:bg-blue-300 border border-blue-900'
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
                        : 'bg-white text-zinc-900 hover:bg-blue-300 border border-blue-900'
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
                        : 'bg-white text-zinc-900 hover:bg-blue-300 border border-blue-900'
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
              <div className="bg-gradient-to-r from-green-100 to-blue-400 p-2 rounded-full backdrop-blur-sm">
                <LinkIcon className="h-6 w-6 text-zinc-900" />
              </div>
              <Input
                type="url"
                placeholder="Enter URL for additional information"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="flex-grow bg-gradient-to-r from-green-100 to-blue-400 border-[#97c3c0]/20 text-zinc-900 placeholder-[#97c3c0] backdrop-blur-sm"
              />
            </div>
            <div className="flex justify-end">
              <Button className="bg-green-600 text-green-100 hover:bg-[#4a9d94] px-6 shadow-lg">
                Submit Verification
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
