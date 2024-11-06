'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const [name, setName] = useState('');
  const [employeeId, setEmployeeId] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !employeeId.trim()) {
      setError('Please enter both name and employee ID');
      return;
    }
    router.push(
      `/quiz?name=${encodeURIComponent(name)}&employeeId=${encodeURIComponent(
        employeeId
      )}`
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white/90 backdrop-blur-sm rounded-lg shadow-2xl p-8 max-w-md w-full relative overflow-hidden border border-white/20"
      >
        <h1 className="text-3xl font-bold text-center mb-6 text-primary">
          Welcome to the Gaming Quiz
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="employeeId"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Employee ID
            </label>
            <input
              type="text"
              id="employeeId"
              value={employeeId}
              onChange={(e) => setEmployeeId(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
              placeholder="Enter your employee ID"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-md font-semibold text-lg shadow-md hover:bg-primary/90 transition-colors duration-300"
          >
            Start Quiz
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
