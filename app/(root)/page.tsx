import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <section className="bg-gradient-to-b from-primary-50 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="wrapper relative z-10 flex flex-col items-center gap-12 py-16 md:flex-row md:py-24 lg:py-32">
        <div className="flex flex-col items-center text-center md:items-start md:text-left lg:w-1/2">
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-primary sm:text-5xl md:text-6xl">
            Elevate Your Events,<br />
            <span className="text-secondary">Amplify Connections</span>
          </h1>
          <p className="mb-8 max-w-2xl text-lg text-muted-foreground sm:text-xl md:text-2xl">
            Discover, create, and join extraordinary events that spark inspiration, foster learning, and build lasting relationships.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button size="lg" asChild className="w-full sm:w-auto">
              <Link href="/events">Explore Events</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
              <Link href="/create">Host an Event</Link>
            </Button>
          </div>
        </div>
        <div className="relative lg:w-1/2">
          <div className="absolute -left-4 -top-4 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-4 -right-4 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />
          <Image 
            src="/assets/images/hero.jpeg"
            alt="People connecting at an event"
            width={600}
            height={600}
            className="relative z-10 rounded-lg object-cover shadow-2xl"
          />
        </div>
      </div>
    </section>
  )
}