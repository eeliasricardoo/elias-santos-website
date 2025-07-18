"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-mono">
      {/* HEADER */}
      <header className="flex items-center justify-between px-6 py-4">
        <span className="text-2xl font-bold tracking-widest text-white">{"＊"} HOVR</span>

        <Button
          size="sm"
          className="rounded-full border border-white/30 bg-transparent text-white hover:bg-white hover:text-black transition-colors"
        >
          REMIX
        </Button>
      </header>

      {/* HERO SECTION */}
      <section className="grid lg:grid-cols-2 gap-10 px-6 lg:px-0 relative">
        {/* Left – Hero Image */}
        <div className="relative h-[70vh] lg:h-[90vh]">
          {/* Background "almofadado" */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-purple-800/20 rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(120,0,255,0.15),transparent_70%)]"></div>
          </div>

          {/* Perfil futurista */}
          <Image
            src="/images/profile-illustration.png"
            alt="Perfil futurista"
            width={550}
            height={750}
            className="absolute left-1/2 -translate-x-1/2 bottom-0 lg:static object-contain"
            priority
          />
        </div>

        {/* Right – Copy / CTA */}
        <div className="flex flex-col justify-center pb-20 lg:pb-0">
          <h1 className="text-5xl lg:text-6xl font-medium leading-[1.05] mb-10 text-white">
            Experience
            <br />
            suspended sound
            <br />
            with no limites
          </h1>

          <div className="mt-4 space-y-4">
            <p className="font-sans text-base text-gray-400">
              Drop your e-mail to be the first to know when the pre-sale goes live
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                placeholder="Your e-mail"
                className="w-full rounded-md border border-white/20 bg-white/5 text-white px-4 py-2 outline-none focus:border-purple-500 placeholder:text-gray-500"
              />
              <Button
                type="submit"
                className="px-6 py-2 rounded-md bg-white text-black hover:bg-white/90 transition-colors"
              >
                GET NOTIFIED
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom ticker */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden bg-black border-t border-white/10 py-4">
          <div className="flex gap-4 whitespace-nowrap animate-scroll">
            {Array.from({ length: 10 }).map((_, idx) => (
              <span key={idx} className="mx-4 text-gray-500">
                NO TOP BAND • COMPLETELY WIRELESS
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
