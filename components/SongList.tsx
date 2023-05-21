import Image from 'next/image';
import { ReactElement } from 'react';
import generateMockData from '@/app/music-list/mock';

export default function SongList(): ReactElement {
  const list = generateMockData(50);

  return (
    <div>
      {list.map((song) => (
        <div
          className="flex justify-between py-1 px-3 hover:bg-[#b0baab1a]"
          key={song.title}
        >
          <div>
            <div className="flex">
              <Image
                src="/icon-play.svg"
                width={10}
                height={10}
                alt="play song"
              />
              <div className="ml-1 text-white">{song.title}</div>
            </div>
            <div>{song.singer}</div>
          </div>
          <div className="text-right">
            {/* TODO icon */}
            <div className="">icon</div>
            <div>{song.date}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
