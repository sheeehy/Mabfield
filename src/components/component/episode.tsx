/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/vNlQDgDxrKa
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"

export function Episode() {
  return (
    <div className="w-full bg-muted py-8 md:py-12 lg:py-16">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 md:grid-cols-[1fr_200px] lg:gap-10">
          <div className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
                The Joke Tax Chronicles: Episode 1
              </h2>
              <p className="text-muted-foreground">
                In this episode, we explore the hilarious tale of a lazy king who tries to tax the jokes in his kingdom.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
              <div>
                <span className="font-medium">Duration:</span> 45 min
              </div>
              <div>
                <span className="font-medium">Released:</span> June 15, 2023
              </div>
            </div>
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Watch Episode
            </Link>
          </div>
          <div className="rounded-lg bg-background p-4 shadow-sm">
            <img
              src="/placeholder.svg"
              width="200"
              height="134"
              alt="Episode thumbnail"
              className="mb-4 aspect-video w-full rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
