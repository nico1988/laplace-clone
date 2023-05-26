'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import styles from './page.module.css';
import Light from '@/components/Light';

export default function Index() {
  useEffect(() => {
    const container = document.querySelector('body') as HTMLElement;
    const target = document.querySelector('.bg-pic') as HTMLElement;

    const mouse = {
      x: 0,
      y: 0,
    };

    let requestId;
    let requestId2;

    function rotateTarget() {
      const x = mouse.x / window.innerWidth;
      const y = mouse.y / window.innerHeight;
      const translateX = (x - 0.5) * 20;
      const translateY = (y - 0.5) * 20;

      target.style.translate = `${translateX}px ${translateY}px 0`;

      requestId = requestAnimationFrame(rotateTarget);
    }
    function rotateLight() {
      const x = mouse.x / window.innerWidth;
      const y = mouse.y / window.innerHeight;
      const translateX = (0.5 - x) * 70;
      const translateY = (0.5 - y) * 70;

      const light = document.getElementsByClassName(
        'light'
      ) as unknown as HTMLElement[];
      for (let i = 0; i < light.length; i++) {
        light[i].style.translate = `${translateX + (i + 1) * 5}px ${
          translateY + (i + 1) * 20
        }px ${translateY * 100}px`;
      }

      requestId2 = requestAnimationFrame(rotateLight);
    }

    container.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      if (!requestId) {
        requestId = requestAnimationFrame(rotateTarget);
      }
      if (!requestId2) {
        requestId2 = requestAnimationFrame(rotateLight);
      }
    });
  }, []);
  return (
    <main>
      <Light />
      <div className="absolute top-20 z-10 w-full text-center text-[#b0baba]">
        <h1 className="Barlow_Condensed mb-2 cursor-pointer text-center text-[64px]">
          LAPLACE
        </h1>
        <div className="cursor-pointer text-center text-[24px]">
          奶绿只是想偷偷睡一会
        </div>
      </div>

      <div className="absolute bottom-0 flex w-full justify-center">
        <Image
          className="left-0 right-0 m-auto"
          src="/milky-green-v1.avif"
          alt="milky-green"
          width={550}
          height={550}
        />
      </div>
    </main>
  );
}
