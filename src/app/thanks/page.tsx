'use client';

import React from 'react'
import { motion, AnimatePresence } from "framer-motion"
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Check, Clock, Search, Map } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const page = () => {
    const router = useRouter()
    return (
        <div className="min-h-screen bg-gray-900 text-white w-full bg-cover bg-center bg-fixed" style={{
            backgroundImage:
                'url("/assets/205b79ac4dc42a146713813581ab3f86.gif")',
        }}>
            <div className="min-h-screen w-full bg-slate-900/60 flex flex-col justify-center items-center">
                <div className="max-w-4xl mx-auto p-8 bg-[#383c45] flex flex-col justify-center items-center gap-6 rounded-xl shadow-2xl">
                    <Image src='/assets/here-logo.png' alt='logo' height={1000} width={1000} className='h-32 w-32 object-contain' />
                    <div className="text-center mb-8">
                        <div className="inline-block p-4 bg-green-100 rounded-full mb-6">
                            <Check className="w-12 h-12 text-green-600" />
                        </div>
                        <h1 className="text-3xl font-bold mb-4">Quiz Submitted!</h1>
                        <p className="text-white text-lg">Thank you for contributing to our community</p>
                    </div>
                    <div className='flex flex-row justify-between w-full gap-4'>
                        <Button variant={'secondary'} className='w-full' onClick={()=> router.push('/')}>Home</Button>
                        <Button className='w-full'  onClick={()=> router.push('/result')}>Leaderboard</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page