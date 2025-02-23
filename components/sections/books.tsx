import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

const books = [
  {
    title: "Lay of the Sinhale",
    cover: "/assets/2.jpeg",
    description: "The ist book written by Prof. P. A. de Silva. It is a poetry collection (anthology) rich in Sri Lankan history and culture.",
  },
  {
    title: "Ayesha Reborn",
    cover: "/assets/6.jpeg",
    description: "A continuation of Sir Henry Rider Haggard's 'She' series. PA picks up where Sir Haggard left off and brings the reader into his world giving life back to Ayesha. This books was featured multiple times in the Rider Haggard Society, UK.",
  },
  {
    title: "අයේශාගේ සසර ගමන",
    cover: "/assets/5.jpeg",
    description: "The Sinhala translation of 'Ayesha Reborn'.",
  },
  {
    title: "හේමමාලි",
    cover: "/assets/1.jpeg",
    description: "A true story brought to you by the life experiences of the author himself.",
  },
  {
    title: "The Last Apple",
    cover: "/assets/7.jpeg",
    description: "A thrilling and enticing Science Fiction Novel encouraged to the author by Sir Arthur C. Clarke.",
  },
  {
    title: "Ayesha at the Himalayan Foothills",
    cover: "/assets/8.jpeg",
    description: "An epic sequel for PA's Ayesha Reborn and the final of the series. This time the reader finds Ayesha in journey of the Himalayas.",
  },
  {
    title: "සිරිසගබෝ වත",
    cover: "/assets/4.jpeg",
    description: "",
  },
  {
    title: "කුඩා සිත්තරා",
    cover: "/assets/3.jpeg",
    description: "",
  },
  {
    title: "පසුම්බිය සහ විශ්‍රාමිකයා",
    cover: "/assets/9.jpeg",
    description: "",
  },
];

export function BooksSection() {
  return (
    <section id="books" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center mb-12">
          <BookOpen className="w-12 h-12 mb-4 text-primary" />
          <h2 className="text-3xl font-bold text-center mb-4">Books</h2>
          <div className="w-20 h-1 bg-primary rounded"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book) => (
            <Card key={book.title} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-[3/4] relative">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardHeader>
                <CardTitle>{book.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{book.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}