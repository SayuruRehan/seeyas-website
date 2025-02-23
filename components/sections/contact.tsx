"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center mb-12">
          <Mail className="w-12 h-12 mb-4 text-primary" />
          <h2 className="text-3xl font-bold text-center mb-4">Contact</h2>
          <div className="w-20 h-1 bg-primary rounded"></div>
        </div>
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-left">Contact Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Phone className="text-primary" />
                <span className="text-lg">+94 77 557 9255 | +94 11 265 8166</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="text-primary" />
                <span className="text-lg">ariplaksh@gmail.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="text-primary" />
                <span className="text-lg">No. 16, Moses Lane, Koralawella, Moratuwa, Sri Lanka</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
