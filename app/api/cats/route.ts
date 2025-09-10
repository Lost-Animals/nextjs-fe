import { type NextRequest, NextResponse } from "next/server"
import { type Animal, AnimalStatusEnum } from "@/types/animal"

// Dummy data for demonstration
const dummyCats: Animal[] = [
  {
    id: "1",
    name: "Whiskers",
    microchip: "MC123456789",
    passport_id: "PP001",
    status: AnimalStatusEnum.LOST,
    description: "Orange tabby cat with white chest. Very friendly and responds to name.",
    location: "Downtown Park, Main Street",
    date_lost: "2024-01-15",
    contact_info: "john.doe@email.com",
    image: "/orange-tabby-cat.png",
  },
  {
    id: "2",
    name: "Luna",
    microchip: "MC987654321",
    status: AnimalStatusEnum.LOST,
    description: "Black cat with green eyes. Shy but loves treats. Has a small white patch on chest.",
    location: "Riverside District",
    date_lost: "2024-01-20",
    contact_info: "jane.smith@email.com",
    image: "/black-cat-green-eyes.png",
  },
  {
    id: "3",
    name: "Mittens",
    passport_id: "PP002",
    status: AnimalStatusEnum.FOUND,
    description: "Gray and white cat with distinctive white paws. Very vocal and affectionate.",
    location: "Oak Street near the library",
    date_lost: "2024-01-18",
    contact_info: "finder123@email.com",
    image: "/gray-white-cat-mittens-paws.png",
  },
  {
    id: "4",
    name: "Shadow",
    microchip: "MC456789123",
    status: AnimalStatusEnum.LOST,
    description: "All black cat, medium size. Indoor cat, may be hiding. Answers to Shadow.",
    location: "Elm Street neighborhood",
    date_lost: "2024-01-22",
    contact_info: "shadow.owner@email.com",
    image: "/all-black-cat.png",
  },
  {
    id: "5",
    name: "Ginger",
    status: AnimalStatusEnum.LOST,
    description: "Long-haired orange cat. Very fluffy with bright amber eyes. Loves to climb.",
    location: "Pine Hill area",
    date_lost: "2024-01-25",
    contact_info: "ginger.family@email.com",
    image: "/fluffy-orange-cat.png",
  },
]

export async function GET() {
  return NextResponse.json(dummyCats)
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Generate a new ID
    const newId = (dummyCats.length + 1).toString()

    const newCat: Animal = {
      id: newId,
      name: body.name,
      microchip: body.microchip || undefined,
      passport_id: body.passport_id || undefined,
      status: body.status,
      description: body.description || undefined,
      location: body.location || undefined,
      date_lost: body.date_lost || undefined,
      contact_info: body.contact_info || undefined,
      image: "/tabby-cat-sunbeam.png",
    }

    // In a real app, you would save to a database
    dummyCats.push(newCat)

    return NextResponse.json(newCat, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: "Failed to create cat entry" }, { status: 500 })
  }
}
