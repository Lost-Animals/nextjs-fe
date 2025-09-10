"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, MapPin, Calendar, Phone } from "lucide-react"
import { type Animal, AnimalStatusEnum } from "@/types/animal"

export default function LostCatsPage() {
  const [cats, setCats] = useState<Animal[]>([])
  const [filteredCats, setFilteredCats] = useState<Animal[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchCats()
  }, [])

  useEffect(() => {
    filterCats()
  }, [cats, searchTerm, statusFilter])

  const fetchCats = async () => {
    try {
      const response = await fetch("/api/cats")
      const data = await response.json()
      setCats(data)
    } catch (error) {
      console.error("Error fetching cats:", error)
    } finally {
      setLoading(false)
    }
  }

  const filterCats = () => {
    let filtered = cats

    if (searchTerm) {
      filtered = filtered.filter(
        (cat) =>
          cat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          cat.location?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          cat.description?.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    if (statusFilter !== "all") {
      filtered = filtered.filter((cat) => cat.status === statusFilter)
    }

    setFilteredCats(filtered)
  }

  if (loading) {
    return (
      <div className="container py-8">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
            <p>Loading lost cats...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container py-8">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Lost Cats</h1>
          <p className="text-muted-foreground">
            Help these cats find their way home. If you recognize any of them, please contact the owner.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by name, location, or description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value={AnimalStatusEnum.LOST}>Lost</SelectItem>
              <SelectItem value={AnimalStatusEnum.FOUND}>Found</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Results */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredCats.map((cat) => (
            <Card key={cat.id} className="overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src={cat.image || "/placeholder.svg?height=200&width=300&query=cat"}
                  alt={cat.name}
                  fill
                  className="object-cover"
                />
                <Badge
                  className="absolute top-2 right-2"
                  variant={cat.status === AnimalStatusEnum.LOST ? "destructive" : "secondary"}
                >
                  {cat.status.toUpperCase()}
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">{cat.name}</CardTitle>
                <CardDescription>{cat.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                {cat.location && (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {cat.location}
                  </div>
                )}
                {cat.date_lost && (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    Lost on {cat.date_lost}
                  </div>
                )}
                {cat.microchip && (
                  <div className="text-sm">
                    <strong>Microchip:</strong> {cat.microchip}
                  </div>
                )}
                {cat.passport_id && (
                  <div className="text-sm">
                    <strong>Passport ID:</strong> {cat.passport_id}
                  </div>
                )}
                {cat.contact_info && (
                  <Button className="w-full mt-4 bg-transparent" variant="outline">
                    <Phone className="mr-2 h-4 w-4" />
                    Contact Owner
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredCats.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No cats found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  )
}
