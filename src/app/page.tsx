// pages/index.tsx
import Head from 'next/head'
import Image from 'next/image'
import BinaryBackground from './components/BinaryBackground'

const AlienLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100" className="w-12 h-12">
    <g>
      <path stroke="currentColor" strokeWidth="3" strokeLinejoin="round" strokeMiterlimit="10" d="M43.721,61.985c0,0-2.734-15.485-20.227-15.485   c-6.197,0-6.197,0-6.197,0S16.205,61.985,43.721,61.985z"/>
      <path stroke="currentColor" strokeWidth="3" strokeLinejoin="round" strokeMiterlimit="10" d="M54.533,61.985c0,0,2.733-15.485,20.229-15.485   c6.195,0,6.195,0,6.195,0S82.048,61.985,54.533,61.985z"/>
      <path fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" strokeMiterlimit="10" d="M89.079,32.141   C83.037,10.764,61.535,6,49.958,6s-32.996,4.764-39.038,26.141s6.506,37.469,14.403,44.672   c7.897,7.203,19.532,17.921,24.402,17.921c5.154,0,17.053-10.66,24.95-17.863C82.573,69.668,95.121,53.519,89.079,32.141z"/>
    </g>
  </svg>
)

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <BinaryBackground />
      <div className="relative z-10">
        <Head>
          <title>Ethical Hacking</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <header className="p-4">
          <nav className="flex justify-center items-center space-x-8">
            <ul className="flex space-x-6">
              <li>ABOUT US</li>
              <li>EVENTS</li>
              <li>TEAM</li>
            </ul>
            <div className="text-green-500">
              <AlienLogo />
            </div>
            <ul className="flex space-x-6">
              <li>PHILOSOPHY</li>
              <li>RULES</li>
              <li>CONTACTS</li>
            </ul>
          </nav>
        </header>

        <main className="container mx-auto px-4 py-12">
          <div className="flex items-center justify-between">
            <div className="w-1/2">
              <h1 className="text-6xl font-bold mb-4">
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
            <div className="w-1/2 relative">
              <Image src="/hacker.png" alt="Hacker" width={500} height={500} className="absolute top-0 left-0" />
              <Image src="/tech-circle.png" alt="Tech Circle" width={400} height={400} className="absolute top-0 right-0" />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}