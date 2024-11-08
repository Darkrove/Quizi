'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion"
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
  Car,
  CircleCheckBig,
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Component() {
  const [progress, setProgress] = useState(33);
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<number, string>
  >({});
  const [url, setUrl] = useState('');
  const [isFormValid, setIsFormValid] = useState(false)
  const [showCompletionModal, setShowCompletionModal] = useState(false)
  const router = useRouter()
  const questions = [
    "Can you find the location of place ?",
    "Is this place currently open ?",
    'Can you find any recent reviews (last 6 months) ?',
    'Does this place have vehicle parking ?',
    "Do they accept cash and card payments ?",
  ];

  useEffect(() => {
    const allQuestionsAnswered = questions.every((_, index) => selectedAnswers[index] !== undefined)
    setIsFormValid(allQuestionsAnswered)
  }, [selectedAnswers])

  const handleSubmit = () => {
    if (isFormValid) {
      setShowCompletionModal(true)
    }
  }

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          'url("/assets/205b79ac4dc42a146713813581ab3f86.gif")',
      }}
    >
      <div className="min-h-screen w-full bg-slate-900/70">
        <div className="w-full max-w-5xl mx-auto p-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-[#006d5b] to-[#20b2aa] rounded-lg px-4 py-2 mb-6 shadow-lg backdrop-blur-sm border sm:px-6"
          >
            <div className="flex flex-col sm:flex-row items-start justify-between">
              <div className="w-full">
                <div className="flex flex-col sm:flex-row justify-between w-full">
                  <div className="flex items-center">
                    <h1 className="text-xl sm:text-2xl font-bold text-white">
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

                  <div className="flex items-center mt-2 sm:mt-0">
                    <h1 className="text-xl sm:text-2xl font-bold text-white">
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

                <span className="text-sm text-yellow-500 font-medium mt-2 sm:mt-0">
                  +10 Coins
                </span>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-2 sm:space-y-0 space-x-0 sm:space-x-2 text-white mt-2 sm:mt-1">
                  <div className="flex justify-center items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm sm:text-base">133 W Oak St, Louisville, KY 40203, United States</span>
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

                  <div className="flex items-center space-x-3 text-sm text-white mt-2 sm:mt-0">
                    <span>Progress</span>
                    <Progress value={progress} className="w-20 sm:w-24 bg-[#97c3c0]/20 border border-zinc-800" />
                    <span>1/3</span>
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
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + 0.5 }}
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
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + 0.5 }}
                  className="bg-blue-100 rounded-lg text-center text-white"
                >
                  <Link target='blank' href='https://community.in.here.com/?l=38.234840,-85.756722,19,satellite'>
                    <Image src="/assets/mapcreator-map.png" alt='google map image' width={1000} height={1000} className='h-full w-full rounded-md object-cover' />
                  </Link>
                </motion.div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-[#006d5b] to-[#20b2aa] shadow-lg backdrop-blur-sm">
              <CardHeader className="p-4">
                <CardTitle className="text-sm font-medium flex items-center text-white">
                  <Car className="h-4 w-4 mr-2" />
                  Google Drive
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + 0.5 }}
                  className="bg-blue-100 rounded-lg text-center text-[#2d5e5e]"
                >
                 <Link target='blank' href="https://www.google.com/maps/place/Papa+B's+Chicken+%26+Fish/@38.2346907,-85.7569114,3a,75y,46.77h,84.02t/data=!3m7!1e1!3m5!1sdaWq59YXzxdJotPA4fcCYA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D5.975811649035819%26panoid%3DdaWq59YXzxdJotPA4fcCYA%26yaw%3D46.76867782266157!7i16384!8i8192!4m6!3m5!1s0x88690d51f8861e5b:0xd3d19675115c1f53!8m2!3d38.23479!4d-85.7568755!16s%2Fg%2F11qg2yndwg?coh=205410&entry=ttu&g_ep=EgoyMDI0MTEwNS4wIKXMDSoASAFQAw%3D%3D">
                    <Image src="/assets/driveg.png" alt='google map image' width={1000} height={1000} className='h-full w-full rounded-md object-cover' />
                  </Link>
                </motion.div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-[#006d5b] to-[#20b2aa] shadow-lg backdrop-blur-sm">
              <CardHeader className="p-4">
                <CardTitle className="text-sm font-medium flex items-center text-white">
                  <Car className="h-4 w-4 mr-2" />
                  Map Creator Drive
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + 0.5 }}
                  className="bg-blue-100 rounded-lg text-center text-[#2d5e5e]"
                ><Link target='blank' href='https://community.in.here.com/?l=38.234840,-85.756722,19,satellite'>
                  <Image src="/assets/drivemc.png" alt='google map image' width={1000} height={1000} className='h-full w-full rounded-md object-cover' />
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
                className="bg-gradient-to-r from-[#006d5b] to-[#20b2aa] rounded-lg px-4 py-2 shadow-lg backdrop-blur-sm border"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-white">{question}</span>
                  </div>
                  <div className="flex space-x-3">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
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
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Yes</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>

                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
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
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>No</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>

                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
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
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Not Sure</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>

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
            <div className="flex items-center space-x-4">
              <div className="bg-blue-700 p-2 rounded-full backdrop-blur-sm">
                <LinkIcon className="h-6 w-6 text-white" />
              </div>
              <Input
                type="url"
                placeholder="Enter URL for Reference"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="flex-grow text-green-900 placeholder-green-900 backdrop-blur-sm"
              />
              <div className="flex justify-end">
              <Button className={`flex items-center px-6 py-3 bg-green-500 text-sm font-medium text-white rounded-lg  hover:bg-green-700 transition duration-200 ${isFormValid ? 'hover:bg-[#4a9d94]' : 'opacity-50 cursor-not-allowed'
                }`}
                disabled={!isFormValid}
                onClick={handleSubmit}>
                  <CircleCheckBig className='w-4 h-4'/>
                Submit
              </Button>
            </div>
            </div>   
          </motion.div>
        </div>
      </div>
      <AnimatePresence>
        {showCompletionModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-blue-200 rounded-lg p-6 max-w-md w-full"
            >
              <h2 className="text-2xl font-bold text-[#2d5e5e] mb-4">Quiz Completed!</h2>
              <p className="text-[#2d5e5e] mb-4">Congratulations! You've successfully completed the POI verification quiz.</p>
              <p className="text-[#4a9d94] font-semibold mb-6">Points earned: +10</p>
              <div className="flex justify-end space-x-4">
                <Button
                  className="bg-[#2d5e5e] text-white hover:bg-[#4a9d94]"
                  onClick={() => router.push('/thanks')}
                >
                  Exit
                </Button>
                <Button
                  className="bg-[#e07a52] text-white hover:bg-[#d86f45]"
                  onClick={() => {
                    router.push('/result')
                    // Add logic here to start a new quiz
                  }}
                >
                  Leaderboard
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
