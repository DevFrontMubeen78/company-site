import React from 'react'
import { Helmet } from "react-helmet-async";

const PageNotFound = () => {
    return (
        <div>
            <Helmet>
                <title>DTK - Page Not Found</title>
            </Helmet>
            <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
                <h1 className="text-6xl font-bold text-gray-800">404</h1>
                <p className="text-xl text-gray-600 mt-2">Oops! Page not found.</p>
                <p className="text-md text-gray-500 mt-1">The page you're looking for doesn't exist.</p>
                <a
                    href="/"
                    className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
                >
                    Go Back Home
                </a>
            </div>
        </div>
    )
}

export default PageNotFound
