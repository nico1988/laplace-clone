'use client';

import { CSSProperties } from 'react';

export default function Light() {
  const lightStyle: CSSProperties = {
    background:
      'linear-gradient(343deg,rgba(255,255,193,.2),rgba(255,255,193,0))',
    width: '2500px',
    position: 'absolute',
  };
  return (
    <div
      className=" absolute top-0 left-0 right-0 bottom-0
  z-30
  "
    >
      <div
        className="light top-[160px] right-[-30%] h-[20px] rotate-[20deg] blur-[3px]"
        style={lightStyle}
      />
      <div
        style={lightStyle}
        className="light top-[230px] right-[-30%] h-[30px] rotate-[24deg] blur-[5px]"
      />
      <div
        className="light top-[330px] right-[-30%] h-[50px] rotate-[30deg] blur-[5px]"
        style={lightStyle}
      />
    </div>
  );
}
