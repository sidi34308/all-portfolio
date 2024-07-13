// pages/index.js
import Navbar from '../components/navbar';
import Card from '../components/Card';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-10 bg-[#121213] text-[#FFFFFF]">
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen py-8">
        <h1 className="text-2xl font-normal text-center mb-3">
          
        </h1>
    
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img src="/sidi-image.png" className="w-full h-auto "/>
            <div></div>
        </div>
      </main>
    </div>
  );
}
