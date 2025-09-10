import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Search, Plus, Users } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-pink-50 to-white dark:from-pink-950/20 dark:to-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Reuniting Lost Cats with Their Families
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                A compassionate platform dedicated to helping lost cats find their way home. Together, we can make a
                difference in the lives of our feline friends.
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild size="lg">
                <Link href="/lost">
                  <Search className="mr-2 h-4 w-4" />
                  Find Lost Cats
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/add-cat">
                  <Plus className="mr-2 h-4 w-4" />
                  Report Lost Cat
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
            {/* Feature 1 - Using provided image */}
            <Card className="flex flex-col">
              <CardHeader>
                <div className="aspect-video relative overflow-hidden rounded-lg">
                  <Image src="/images/white-cat-city.png" alt="Lost cat in the city" fill className="object-cover" />
                </div>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-pink-500" />
                  Every Cat Matters
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <CardDescription className="text-base">
                  Every lost cat has a story and a family waiting for them. Our platform ensures no cat is forgotten,
                  providing a centralized place where hope meets action.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="flex flex-col">
              <CardHeader>
                <div className="aspect-video relative overflow-hidden rounded-lg bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 flex items-center justify-center">
                  <Search className="h-16 w-16 text-blue-500" />
                </div>
                <CardTitle className="flex items-center gap-2">
                  <Search className="h-5 w-5 text-blue-500" />
                  Smart Search System
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <CardDescription className="text-base">
                  Advanced filtering and search capabilities help you find lost cats by location, appearance, and other
                  key details. Our intelligent matching system connects the dots.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="flex flex-col">
              <CardHeader>
                <div className="aspect-video relative overflow-hidden rounded-lg bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 flex items-center justify-center">
                  <Users className="h-16 w-16 text-green-500" />
                </div>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-green-500" />
                  Community Driven
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <CardDescription className="text-base">
                  Join a caring community of cat lovers, volunteers, and local shelters working together. Share
                  information, coordinate searches, and celebrate reunions.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Help?</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Whether you've lost a cat or found one, every action counts. Join our mission to reunite families.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" asChild>
                <Link href="/add-cat">Report a Lost Cat</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/lost">Browse Lost Cats</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
