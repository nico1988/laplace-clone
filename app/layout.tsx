import '../styles/globals.css';
import Image from 'next/image';
import NavBar from '@/components/NavBar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="text-[#b0baab]">
        <NavBar />
        <div
          className="absolute top-0 left-0 right-0 bottom-0 -z-10"
          style={{ background: 'linear-gradient(0deg,#08120e66,#08120e)' }}
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
        {children}
      </body>
    </html>
  );
}
