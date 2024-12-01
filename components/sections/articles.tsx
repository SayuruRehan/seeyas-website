import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollText } from "lucide-react";

const articles = [
  {
    title: "The Art of Writing",
    date: "March 15, 2024",
    excerpt: "Exploring the creative process behind storytelling.",
  },
  {
    title: "Finding Inspiration",
    date: "March 10, 2024",
    excerpt: "Where do ideas come from? A writer's perspective.",
  },
  {
    title: "Character Development",
    date: "March 5, 2024",
    excerpt: "Creating memorable characters that readers love.",
  },
];

export function ArticlesSection() {
  return (
    <section id="articles" className="py-20 bg-muted/50">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center mb-12">
          <ScrollText className="w-12 h-12 mb-4 text-primary" />
          <h2 className="text-3xl font-bold text-center mb-4">Latest Articles</h2>
          <div className="w-20 h-1 bg-primary rounded"></div>
        </div>
        <div className="max-w-4xl mx-auto space-y-6">
          {articles.map((article) => (
            <Card key={article.title} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <span>{article.title}</span>
                  <span className="text-sm text-muted-foreground">{article.date}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{article.excerpt}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}