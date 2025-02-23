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
          <h2 className="text-3xl font-bold text-center mb-4">About</h2>
          <div className="w-20 h-1 bg-primary rounded"></div>
        </div>
        <Card className="max-w-full mx-auto overflow-hidden p-8">
          <div className="flex flex-col items-center text-center">
            <div className="w-72 h-96 relative mb-6">
              <img
                src="/assets/author.jpg"
                alt="Author portrait"
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Prof. P. A. de Silva</h3>
              <p className="text-muted-foreground">The Legacy of PA</p> 
              <p className="text-lg leading-relaxed">
                Born in 1935 February 24th as the eldest son of P. Chandradasa de Silva and Regina
                Amarasooriya at Narigama Hikkaduwa-the best beach in down south of Sri Lanka. He began
                his education at Patuwatha Seelakkanda, Managed by Henry Woodward Amarasooriya Minister
                of state Galle in 1940 where he went with his grandmother "GalMangodaGuruge Podi Hamine".
                Later from 1943 to 1949, he joined a Government English School in Hikkaduwa, a fee-levying
                school at Rs 3.50 per month for the first year.
              </p>
              <p className="text-lg leading-relaxed">
                In 1949 September, he joined Sri Sumangala College, Panadura up to Grade 8 and studied till 1951.
                At the SSC exam, he received the best results in the school, recording a Physics Distinction after
                six years. He then joined Ananda College, Colombo in 1952, gaining university entrance in
                engineering in 1953. He attended the University of Ceylon, Colombo Engineering Faculty in 1953
                and graduated in 1958. The graduation ceremony was held at the University of Peradeniya, and
                the certificate was awarded by Sir Oliver Gunathilaka, the Governor-General of Ceylon.
              </p>
              <p className="text-lg leading-relaxed">
                His 1st appointment was CTB Depot Engineer Rathnapura. He bacame the yongest depot Engineer solving the Mercedes Benz Bus problem in 1958 October.
                After his performace, his 2nd Job was as the Depot Engineer at Kurunegale and being appointed as the Engineer Vehicle overall at Verahera Depot. 
                During this period he started German Technical Training Institute in the Verehara depot and Sir Oliver Gunathilake was the Chief Guest of that opening ceromony.
              </p>
              <p className="text-lg leading-relaxed">
                In 1960 May 2nd He joined IPT (Institute of Practical Technology), Katubedda-Later known as University of Moratuwa. Prof. P. A. de Silva and Prof. Patuwathawithane started classes for IMECH. E (Lond) in 1961. 
                Stated a Diploma in Engineering equivalant to an Engineering degree. In 1972 by the act of Parliment, it was confirmed the status of University with 2 faculties : Faculty of Engineering and Faculty of Architecture.
                In 1965 The whole family: Wife, Lakshmi and Eldest daughter Kumudini and Eldest son Gishan went to Heathrow, England and in the next year of September he joined King’s College, University of London.
                Joined for Master of Science in Mechanical Engineering at the University of London, King’s College, The oral examination for the Doctor of Philosophy degree was fixed for early 1970 and obtained the status of Dr. P. A. de Silva.
              </p>
              <p className="text-lg leading-relaxed">
                In 1977, He was apointed as the Chairman at the Ceylon Steel Corporation by HE Late President J. R. Jayawardene. This was a significant place for PA, as he completed stage II of the plant, and developed lathe, drilling, and grinding machines in-house.
                After his stint at the steel corporation, he was sent to the State Hardware Corporation where he introduced the people to the “Lan-Lo” (ලංලෝ) mamotty. 
              </p>
              <p className="text-lg leading-relaxed">
                In one of his notable and greatest inventions, he developed a fully electric battery-operated car at the University. The project was started in 1970s. 
                The car exceeded 35 mph, yet over 95% of the car’s components were developed in-house. He drove it around, and even displayed it in exhibitions. It is believed that this was the first car in the world to use regenerative braking technology. 
                Had this been done in large scale, Sri Lanka would be exporting electric cars to the world. He was also a key player in developing windmills, gem cutting machines, and equipment for boiling and drying rice in Sri Lanka.
              </p>
              <p className="text-lg leading-relaxed">
                He retired from the Department in 2001. However, he did some visiting lectures for some time while serving as the chairman of the Ceylon German Technical Training Institute till 2016. Currently he acts as the Technical Advisor for the CGTTI who still signs thousands of certificates every month.
                PA spends his time focusing his attention to literature and Buddhism. He has written over 10 books in both Sinhala and English languages.
              </p>
              <p className="text-lg leading-relaxed italic">
                "I feel that Sri Lanka is not a country that cannot be developed but is rather a country that “is not being” developed, and we need to escape from that state. We need to build things within Sri Lanka if we are to develop. We should try to develop scientific equipment for our local use. In the early days, we used to develop many things in Sri Lanka including wheelbarrows, bicycles, and scales. All that was stopped, and now we do not produce any of those things. Even though there is a belief that imported things are “cheaper”, what exactly does cheap mean? We should not look at the short-term costs but should rather focus on developing goods locally in order to gain true long-term benefits."
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
