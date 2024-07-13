// pages/index.tsx
import Head from 'next/head'
import Image from 'next/image'
import BinaryBackground from './components/BinaryBackground'
import Marquee from './components/Marquee'
import ResponsiveMenu from './components/ResponsiveMenu'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <BinaryBackground />
      <div className="relative z-10">
        <Head>
          <title>Ethical Hacking</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Marquee />

        <ResponsiveMenu />

        <main className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
              <h1 className="text-4xl lg:text-6xl font-bold mb-4">
                ETHICAL <br /> HACKING
              </h1>
              <p className="mb-6">
                Also referred to as a "white hat" hacker, an ethical hacker is a security professional who applies their hacking skills for defensive purposes on behalf of the owners of systems. ... By definition, "ethical" hacking involves
                using the same methods as malicious hackers, but with the permission of the authorized system owner for the purpose of identifying potential threats.
              </p>
              <button className="bg-green-500 text-black px-6 py-2 rounded">
                BECOME ONE OF US
              </button>
            </div>
            <div className="w-full lg:w-1/2 relative">
              <Image src="/hacker.webp" alt="Hacker" width={500} height={500} className="mx-auto lg:absolute lg:top-0 lg:left-0" />
              {/* Asegúrate de tener una imagen válida para Tech Circle o elimina esta línea */}
              {/* <Image src="/tech-circle.png" alt="Tech Circle" width={400} height={400} className="hidden lg:block absolute top-0 right-0" /> */}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}