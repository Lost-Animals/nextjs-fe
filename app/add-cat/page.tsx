"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AnimalStatusEnum } from "@/types/animal"
import { Plus } from "lucide-react"

export default function AddCatPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    microchip: "",
    passport_id: "",
    status: AnimalStatusEnum.LOST,
    description: "",
    location: "",
    date_lost: "",
    contact_info: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch("/api/cats", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        router.push("/lost")
      } else {
        console.error("Failed to add cat")
      }
    } catch (error) {
      console.error("Error adding cat:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="container py-8 max-w-2xl">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Add Lost Cat</h1>
          <p className="text-muted-foreground">
            Help us reunite this cat with their family by providing as much detail as possible.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Plus className="h-5 w-5" />
              Cat Information
            </CardTitle>
            <CardDescription>Fill out the form below to add a lost or found cat to our database.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Cat Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    placeholder="Enter cat's name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="status">Status *</Label>
                  <Select value={formData.status} onValueChange={(value) => handleChange("status", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value={AnimalStatusEnum.LOST}>Lost</SelectItem>
                      <SelectItem value={AnimalStatusEnum.FOUND}>Found</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="microchip">Microchip ID</Label>
                  <Input
                    id="microchip"
                    value={formData.microchip}
                    onChange={(e) => handleChange("microchip", e.target.value)}
                    placeholder="Enter microchip number"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="passport_id">Passport ID</Label>
                  <Input
                    id="passport_id"
                    value={formData.passport_id}
                    onChange={(e) => handleChange("passport_id", e.target.value)}
                    placeholder="Enter passport ID"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  value={formData.location}
                  onChange={(e) => handleChange("location", e.target.value)}
                  placeholder="Where was the cat last seen?"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="date_lost">Date Lost/Found</Label>
                <Input
                  id="date_lost"
                  type="date"
                  value={formData.date_lost}
                  onChange={(e) => handleChange("date_lost", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => handleChange("description", e.target.value)}
                  placeholder="Describe the cat's appearance, behavior, and any other relevant details..."
                  rows={4}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact_info">Contact Information</Label>
                <Input
                  id="contact_info"
                  value={formData.contact_info}
                  onChange={(e) => handleChange("contact_info", e.target.value)}
                  placeholder="Phone number or email for contact"
                />
              </div>

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Adding Cat..." : "Add Cat"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
