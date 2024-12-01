"use client";

import { Card } from "@/components/ui/card";
import { User2 } from "lucide-react";
import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center mb-12">
          <User2 className="w-12 h-12 mb-4 text-primary" />
          <h2 className="text-3xl font-bold text-center mb-4">About the Author</h2>
          <div className="w-20 h-1 bg-primary rounded"></div>
        </div>
        <Card className="max-w-6xl mx-auto overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 p-8">
            <div className="md:col-span-5 relative aspect-[3/4] md:aspect-auto">
              <img
                src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&q=80&w=800"
                alt="Author portrait"
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
            <div className="md:col-span-7 space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Jane Doe</h3>
                <p className="text-muted-foreground">Award-winning author of contemporary fiction</p>
                <div className="space-y-2">
                  <p className="text-lg leading-relaxed">
                    With over a decade of storytelling experience, Jane has captivated readers worldwide with her unique blend of emotional depth and narrative innovation. Her work has been translated into 25 languages and adapted for both stage and screen.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Born and raised in the Pacific Northwest, Jane draws inspiration from its misty landscapes and rich literary tradition. She holds an MFA in Creative Writing from the University of Washington and has taught creative writing at various institutions.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="flex-1 min-w-[150px] p-4 bg-muted rounded-lg text-center">
                  <div className="text-3xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">Books Published</div>
                </div>
                <div className="flex-1 min-w-[150px] p-4 bg-muted rounded-lg text-center">
                  <div className="text-3xl font-bold text-primary">3M+</div>
                  <div className="text-sm text-muted-foreground">Copies Sold</div>
                </div>
                <div className="flex-1 min-w-[150px] p-4 bg-muted rounded-lg text-center">
                  <div className="text-3xl font-bold text-primary">25</div>
                  <div className="text-sm text-muted-foreground">Languages</div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}