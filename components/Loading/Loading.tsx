// components/Loading.js
// 'use client';

export default function Loading() {


  return (
    <div className="fixed top-0 left-0 w-full h-full  -z-50">
      <div className="absolute inset-0 flex items-center justify-center flex-col">
      
        <div className="flex space-x-3">
          {['S ', 'U ', 'B ', 'O ', 'D ', 'H '].map((letter, index) => (
            <span
              key={index}
              className={` text-sm font-bold dark:text-white text-gray-700`}
              style={{
                animation: `
              blur-text 1.5s ${index * 0.3}s infinite linear alternate,
              color-change 2s ${index * 0.4}s infinite linear alternate,
              scale-bounce 1.2s ${index * 0.2}s infinite ease-in-out`,
                fontFamily: "'Quattrocento Sans', sans-serif",
              }}
            >
              {letter}
            </span>
          ))}
        </div>
      {/* <img src="/loader.svg" alt="" className="dark:invert w-12 relative -top-2" /> */}
      </div>
      <style jsx>{`
        @keyframes blur-text {
          0% {
            filter: blur(0px);
          }
          100% {
            filter: blur(4px);
          }
        }

        @keyframes color-change {
          0% {
            color: #ffffff; /* White */
          }
          50% {
            color: #ff5733; /* Orange */
          }
          100% {
            color: #33c3ff; /* Light Blue */
          }
        }

        @keyframes scale-bounce {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
        }
      `}</style>
    </div>
  );
}
