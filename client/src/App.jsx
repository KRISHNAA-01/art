// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


import React from "react";
import { motion } from "framer-motion";

const artClasses = [
  {
    title: "Beginner Art Class",
    description: "Perfect for kids and adults starting their creative journey.",
    image: "https://source.unsplash.com/400x300/?painting,beginner",
  },
  {
    title: "Intermediate Sketching",
    description: "Sharpen your skills with perspective, shading, and forms.",
    image: "https://source.unsplash.com/400x300/?sketch,art",
  },
  {
    title: "Advanced Oil Painting",
    description: "Master the art of color, texture, and detail on canvas.",
    image: "https://source.unsplash.com/400x300/?oilpainting,canvas",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-pink-50 p-6">
      <header className="text-center py-8">
        <h1 className="text-4xl font-bold text-pink-700">Mom's Art Classes</h1>
        <p className="text-gray-600 mt-2">
          Learn to express your creativity through colors and shapes!
        </p>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {artClasses.map((art, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
              <img
                src={art.image}
                alt={art.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-pink-800">
                  {art.title}
                </h2>
                <p className="text-gray-600 mt-2">{art.description}</p>
                <button className="mt-4 w-full bg-pink-600 hover:bg-pink-700 text-white py-2 px-4 rounded">
                  Join Now
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </main>

      <footer className="text-center mt-10 text-gray-500">
        © {new Date().getFullYear()} Mom's Art Classes. All rights reserved.
      </footer>
    </div>
  );
}
