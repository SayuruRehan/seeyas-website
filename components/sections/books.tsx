import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

const books = [
  {
    title: "Lay of the Sinhale",
    cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400",
    description: "A thrilling journey through time and space.",
  },
  {
    title: "Ayesha Reborn",
    cover: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=400",
    description: "An emotional tale of love and loss.",
  },
  {
    title: "The Final Chapter",
    cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=400",
    description: "The epic conclusion to the trilogy.",
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