'use client';

import '../styles/globals.css';
import Image from 'next/image';
import { useEffect } from 'react';
import NavBar from '@/components/NavBar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const container = document.querySelector('.container');
    const target = document.querySelector('.bg-pic');

    const mouse = {
      x: 0,
      y: 0,
    };

    let requestId;

    function rotateTarget() {
      const x = mouse.x / window.innerWidth;
      const y = mouse.y / window.innerHeight;
      const translateX = (x - 0.5) * 20;
      const translateY = (y - 0.5) * 20;

      target.style.transform = `translate3d(${translateX}px, ${translateY}px, 0)`;

      requestId = requestAnimationFrame(rotateTarget);
    }

    container.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      if (!requestId) {
        requestId = requestAnimationFrame(rotateTarget);
      }
    });
  }, []);

  return (
    <html lang="en">
      <head />
      <body className="container h-full text-[#b0baab]">
        <NavBar />
        <div className="container">
          <div
            className="bg-pic absolute top-0 left-0 right-0 bottom-0 -z-10"
            style={{
              background: 'linear-gradient(0deg,#08120e66,#08120e)',
            }}
          >
            <Image
              className="h-full w-full object-cover"
              src="/bg-original.jpeg"
              alt="bg-original"
              layout="fill"
            />
          </div>
          <div
            className="absolute top-0 left-0 right-0 bottom-0 -z-10"
            style={{ background: 'linear-gradient(0deg,#08120e66,#08120e)' }}
          />
        </div>
        {children}
      </body>
    </html>
  );
}
