import React, { useState } from 'react';
import Calendar from './Calendar';

const CalendarModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <button
                onClick={() => setIsOpen(true)}
                className="cursor-pointer text py-2 bg-[#fff] px-10 md:border-none border border-[#5353531c] rounded-full shadow-lg w-fit md:mx-auto"
            >
                Let’s talk
            </button>

            {isOpen && (
                <div className="fixed z-10 top-0 left-0 w-full h-full flex items-center justify-center bg-black/80">
                    <div className="relative p-4 w-full max-w-6xl max-h-full bg-white rounded-lg shadow-sm">
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                            <h5 className="text-2xl font-bold uppercase leading-snug">
                                READY TO FIND OUT IF <span className="text-[#FF0066]"> <br className="inline" /> WE’RE THE ONES FOR YOU?</span>
                            </h5>
                            <button
                                type="button"
                                onClick={() => setIsOpen(false)}
                                className="cursor-pointer text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <Calendar />
                    </div>
                </div>
            )}
        </div>
    );
};

export default CalendarModal;
