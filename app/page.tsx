import Image from 'next/image';
import styles from './page.module.css';

export default function Index() {
  return (
    <main>
      <nav />
      <div className="absolute top-20 z-10 w-full text-center">
        <h1 className="mb-3 cursor-pointer text-center text-4xl">LAPLACE</h1>
        <div className="cursor-pointer text-center">奶绿只是想偷偷睡一会</div>
      </div>
      {/* give me bg-container with image full screen for background */}
      <div className="absolute top-0 left-0 right-0 bottom-0">
        <Image
          className="h-full w-full object-cover"
          src="/bg-original.jpeg"
          alt="bg-original"
          layout="fill"
        />
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
