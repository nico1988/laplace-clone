import Image from 'next/image';
import styles from './page.module.css';

export default function Index() {
  return (
    <main>
      <div className="absolute top-20 z-10 w-full text-center text-[#b0baba]">
        <h1 className="mb-3 cursor-pointer text-center text-[64px]">LAPLACE</h1>
        <div className="cursor-pointer text-center text-[24px]">
          奶绿只是想偷偷睡一会
        </div>
      </div>

      <div className="absolute bottom-0 flex w-full justify-center">
        <Image
          className="left-0 right-0 m-auto"
          src="/milky-green-v1.avif"
          alt="milky-green"
          width={800}
          height={800}
        />
      </div>
    </main>
  );
}
