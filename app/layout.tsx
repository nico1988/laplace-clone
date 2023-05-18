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
      <body>
        <NavBar />
        <div className="absolute top-0 left-0 right-0 bottom-0 opacity-50">
          <Image
            className="h-full w-full object-cover"
            src="/bg-original.jpeg"
            alt="bg-original"
            layout="fill"
          />
        </div>
        {children}
      </body>
    </html>
  );
}
