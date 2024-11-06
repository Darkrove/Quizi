import { Coins, HelpCircle, PlayCircle, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white w-full bg-cover bg-center bg-fixed" style={{
      backgroundImage:
        'url("/assets/205b79ac4dc42a146713813581ab3f86.gif")',
    }}>
      <div className="min-h-screen w-full backdrop-blur-sm bg-slate-900/60 flex flex-col justify-center items-center">
        <div className="max-w-4xl mx-auto p-8 bg-[#383c45] flex flex-col justify-center items-center gap-6 rounded-xl shadow-2xl">
          
          <Image src='/assets/here-logo.png' alt='logo' height={1000} width={1000} className='h-32 w-32 object-contain' />
          
          <h1 className="text-4xl font-extrabold text-center text-white mb-4">
            Welcome to the Quiz Challenge!
          </h1>

          <p className="text-lg text-center text-white mb-8">
            Ready to test your knowledge? Click below to start the quiz and challenge yourself!
          </p>

          <div className="text-center mb-6">
            <p className="text-2xl font-semibold text-white mb-4">Rules & Instructions</p>
            <ul className="text-white text-lg space-y-2">
              <li className="flex items-center">
                <Coins className="mr-2 text-yellow-400" /> Earn Points
              </li>
              <li className="flex items-center">
                <Coins className="mr-2 text-yellow-400" /> Find the Place/Shop
              </li>
              <li className="flex items-center">
                <Coins className="mr-2 text-yellow-400" /> Win the Quiz
              </li>
            </ul>
          </div>

          <Link href='/question'>
            <button className="flex items-center px-8 py-4 bg-[#48d8ce] text-white rounded-lg text-xl font-semibold hover:bg-[#48d8ce]/20 transition duration-200 shadow-lg transform hover:scale-105">
              <PlayCircle className="mr-3 text-2xl" />
              Start Quiz
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;