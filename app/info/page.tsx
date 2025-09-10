import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Users, Search, Shield, Phone, Mail } from "lucide-react"

export default function InfoPage() {
  return (
    <div className="container py-8">
      <div className="space-y-8">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tight">About Lost Kitty</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Learn more about our mission, how we work, and how you can help reunite lost cats with their families.
          </p>
        </div>

        {/* Mission Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-pink-500" />
              Our Mission
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Lost Kitty is dedicated to reuniting lost cats with their loving families. We believe that every cat
              deserves to be safe at home, and every family deserves the chance to find their missing companion.
            </p>
            <p>
              Our platform serves as a central hub where cat owners, good Samaritans, and animal welfare organizations
              can collaborate to bring lost cats home safely.
            </p>
          </CardContent>
        </Card>

        {/* How It Works */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5 text-blue-500" />
                Report & Search
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Easily report a lost cat or search through our database of missing felines. Our smart search helps match
                descriptions and locations.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-green-500" />
                Community Support
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Join a network of caring individuals, local shelters, and volunteers working together to help lost cats
                find their way home.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-purple-500" />
                Safe & Secure
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                We prioritize the safety and privacy of both cats and their families. All information is handled with
                care and discretion.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Statistics */}
        <Card>
          <CardHeader>
            <CardTitle>Platform Statistics</CardTitle>
            <CardDescription>Our impact in numbers</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-500">247</div>
                <div className="text-sm text-muted-foreground">Cats Reunited</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-500">89</div>
                <div className="text-sm text-muted-foreground">Active Cases</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-500">1,234</div>
                <div className="text-sm text-muted-foreground">Community Members</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-500">45</div>
                <div className="text-sm text-muted-foreground">Partner Shelters</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tips Section */}
        <Card>
          <CardHeader>
            <CardTitle>Tips for Finding Lost Cats</CardTitle>
            <CardDescription>Helpful advice from our community</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h4 className="font-semibold mb-2">If Your Cat is Missing:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Search your immediate area thoroughly</li>
                  <li>• Contact local shelters and veterinarians</li>
                  <li>• Post on social media and community boards</li>
                  <li>• Leave familiar scents outside your home</li>
                  <li>• Search during quiet hours (dawn/dusk)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">If You Find a Cat:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Check for identification tags or microchip</li>
                  <li>• Take photos and note the location</li>
                  <li>• Contact local shelters and post online</li>
                  <li>• Provide temporary care if safe to do so</li>
                  <li>• Be patient - owners may be searching</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Section */}
        <Card>
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
            <CardDescription>Get in touch with our team</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <div>
                  <div className="font-medium">Email Support</div>
                  <div className="text-sm text-muted-foreground">help@lostkitty.com</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <div>
                  <div className="font-medium">Emergency Hotline</div>
                  <div className="text-sm text-muted-foreground">1-800-LOST-CAT</div>
                </div>
              </div>
            </div>
            <div className="pt-4 border-t">
              <p className="text-sm text-muted-foreground">
                Lost Kitty is a volunteer-run platform. We're here to help 24/7 because we know that every moment counts
                when a beloved pet is missing.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
