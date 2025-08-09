"use client";
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '@/enums';

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-24 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-6 space-y-16">
       <div className="space-y-4 max-w-2xl">
          <span className="text-indigo-600 dark:text-indigo-500 font-semibold pl-6 relative before:absolute before:top-1/2 before:left-0 before:w-5 before:h-px before:bg-indigo-600 dark:before:bg-indigo-500 before:rounded-full">
            Trusted Worldwide
          </span>
          <h1 className="font-bold text-gray-800 dark:text-white text-3xl md:text-6xl">
            What Our <span className="text-indigo-600">Clients Say</span>
          </h1>
        </div>

        <div className="relative">
          <div className="flex flex-col md:flex-row md:items-center gap-12 lg:gap-16">
            {/* Image Column */}
            <div className="hidden md:block md:w-5/12 lg:w-1/3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={testimonials[currentIndex].id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="w-full aspect-[3/4] rounded-xl overflow-hidden relative bg-gray-50 dark:bg-gray-900"
                >
                  <Image 
                    src={testimonials[currentIndex].image} 
                    fill
                    alt={testimonials[currentIndex].name} 
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={currentIndex === 0}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Content Column */}
            <div className="flex-1 flex flex-col space-y-8 md:space-y-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={testimonials[currentIndex].id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="relative">
                    <svg 
                      className="w-8 h-8 text-indigo-400/30 dark:text-indigo-500/20 mb-4" 
                      viewBox="0 0 24 24" 
                      fill="currentColor"
                    >
                      <path d="M3.691 6.292C5.094 4.771 7.217 4 10 4h1v2.819l-.804.161c-1.37.274-2.323.813-2.833 1.604C6.854 9.387 6.786 10.373 6.8 11.5H10c2.57 0 3.898-.921 4.627-2.874.729-1.953.216-4.492-1.519-5.714C12.162 2.399 11.203 2 10 2 6.353 2 3.785 3.402 1.923 5.346.06 7.29-.1 9.513.062 11.024.223 12.536.7 14 1.5 14c.828 0 1.5-1.343 1.5-3 0-.871-.232-1.708-.691-2.708zM14.5 21.5c0 .828-.672 1.5-1.5 1.5-.8 0-1.277-1.464-1.438-2.976-.162-1.511-.002-3.734 1.86-5.678C14.215 12.402 16.783 11 20.43 11h.57v2.819l-.804.161c-1.37.274-2.323.813-2.833 1.604-.509.792-.577 1.778-.563 2.905H20c2.57 0 3.898-.921 4.627-2.874.729-1.953.216-4.492-1.519-5.714C22.162 8.399 21.203 8 20 8c-3.647 0-6.215 1.402-8.077 3.346-.06.07-.119.141-.176.214.654.908 1.047 1.939 1.137 3.031.155 1.89-.438 3.627-1.553 4.641-.992.901-2.302 1.268-3.831 1.268H4.5c0 2.485 2.015 4.5 4.5 4.5 2.485 0 4.5-2.015 4.5-4.5h1.5z" />
                    </svg>
                    <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                      {testimonials[currentIndex].quote}
                    </p>
                  </div>
                </motion.div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={testimonials[currentIndex].id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="flex items-center gap-4 pt-4 border-t border-gray-100 dark:border-gray-800"
                  >
                    <Image 
                      src={testimonials[currentIndex].image} 
                      width={48}
                      height={48}
                      alt={testimonials[currentIndex].name} 
                      className="w-12 h-12 rounded-full flex md:hidden object-cover"
                    />
                    <div className="space-y-0.5">
                      <h2 className="text-lg font-normal text-gray-900 dark:text-gray-100">
                        {testimonials[currentIndex].name}
                      </h2>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">
                        {testimonials[currentIndex].role}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex items-center justify-between pt-4">
                <div className="text-sm text-gray-400 dark:text-gray-500">
                  <span className="text-indigo-500 dark:text-indigo-400">
                    {currentIndex + 1}
                  </span>
                  <span> / {testimonials.length}</span>
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={prevTestimonial}
                    aria-label="Previous testimonial"
                    className="p-2 rounded-full text-gray-500 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={nextTestimonial}
                    aria-label="Next testimonial"
                    className="p-2 rounded-full text-gray-500 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;