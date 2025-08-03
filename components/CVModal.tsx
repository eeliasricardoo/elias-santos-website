'use client';

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CVModal({ isOpen, onClose }: CVModalProps) {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume_eeliasricardoo.pdf';
    link.download = 'Elias_Ricardo_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Curriculum Vitae - Elias Ricardo</DialogTitle>
          <DialogDescription>
            Visualize e baixe o currículo completo de Elias Ricardo Araujo Santos
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Download Button */}
          <div className="flex justify-start">
            <Button
              onClick={handleDownload}
              variant="outline"
              size="icon"
              className="bg-black text-white hover:bg-gray-800"
            >
              <Download className="w-4 h-4" />
            </Button>
          </div>

          {/* CV Content */}
          <div className="space-y-6">
            {/* Header */}
            <div className="text-center border-b pb-4">
              <h1 className="text-3xl font-bold mb-2">
                Elias Ricardo Araujo Santos
              </h1>
              <div className="text-sm text-muted-foreground space-x-4">
                <span>Colombia</span>
                <span>|</span>
                <span>+57 320 5212191</span>
                <span>|</span>
                <span>eeliasricardoo@gmail.com</span>
                <span>|</span>
                <span>linkedin.com/in/eliasricardo</span>
                <span>|</span>
                <span>eeliasricardoo.com</span>
              </div>
            </div>

            {/* Professional Summary */}
            <section>
              <h2 className="text-xl font-bold mb-3 border-b pb-2">
                PROFESSIONAL SUMMARY
              </h2>
              <p className="leading-relaxed">
                UX/UI Designer with 4+ years of experience in designing user-centered digital 
                products for enterprise and international clients across Brazil, Bolivia, 
                Ecuador, and Colombia. Specialized in leading end-to-end design processes 
                from research and wireframing to prototyping and front-end implementation. 
                Strong background in product strategy, AI-integrated UX, accessibility 
                (ADA best practices), and KPI-driven design. Proven success in collaborating 
                cross-functionally in agile teams to build high-impact, scalable, and 
                inclusive digital solutions.
              </p>
            </section>

            {/* Professional Experience */}
            <section>
              <h2 className="text-xl font-bold mb-3 border-b pb-2">
                PROFESSIONAL EXPERIENCE
              </h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold">TOOLZZ</h3>
                  <p className="text-sm text-muted-foreground mb-2">Mar 2022 - Jul 2025</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Led the design team on a corporate LMS platform project</li>
                    <li>Developed an AI platform integrating text-to-image, text completion, image-to-video, and speech-to-text technologies</li>
                    <li>Created a mobile app with over 500 active users, optimizing user experience and interface</li>
                    <li>Conducted UX research with stakeholders from large enterprises</li>
                    <li>Implemented responsive front-end interfaces using Next.js, Tailwind CSS, and Shadcn UI</li>
                    <li>Worked in an agile environment with Scrum methodology</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold">OLIVER AGENCY</h3>
                  <p className="text-sm text-muted-foreground mb-2">Dec 2024 - Feb 2025</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Migrated the OLIVER Spain website to the Latin America version</li>
                    <li>Adapted content and structure for Portuguese and Spanish-speaking markets</li>
                    <li>Resolved complex WordPress technical challenges</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold">ZURICH INSURANCE GROUP</h3>
                  <p className="text-sm text-muted-foreground mb-2">May 2024 - Nov 2024</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Mapped full website HTML for Google Tag Manager implementation</li>
                    <li>Configured Google Analytics 4 (GA4) integration</li>
                    <li>Implemented advanced data tracking for digital performance analysis</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold">ZURICH INSURANCE GROUP</h3>
                  <p className="text-sm text-muted-foreground mb-2">Sep - Oct 2024</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Led website redesign proposal for Zurich Brazil</li>
                    <li>Conducted user research to inform design decisions</li>
                    <li>Created wireframes and interactive prototypes using Figma</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-xl font-bold mb-3 border-b pb-2">
                EDUCATION
              </h2>
              <div>
                <h3 className="text-lg font-semibold">UNG University</h3>
                <p>Bachelor in Service Design (In progress)</p>
                <p className="text-sm text-muted-foreground">Expected Graduation: December 2025</p>
              </div>
            </section>

            {/* Certifications */}
            <section>
              <h2 className="text-xl font-bold mb-3 border-b pb-2">
                CERTIFICATIONS
              </h2>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>UX Research: Metodologias e Imersão em Pesquisa - May 2022</li>
                <li>UX/UI & Prototype: Estação hack from Facebook - Mar 2021</li>
                <li>JavaScript para Web: Crie páginas dinâmicas - Nov 2022</li>
                <li>UX Design Patterns with Checklist Design - Aug 2024</li>
                <li>(More than 40 courses in Web Design, Front-end Development, and UX Research)</li>
              </ul>
            </section>

            {/* Technical Skills */}
            <section>
              <h2 className="text-xl font-bold mb-3 border-b pb-2">
                TECHNICAL SKILLS
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Design & UX</h4>
                  <p className="text-sm">
                    Figma, Wireframing, Prototyping, UX Research, Design Systems, 
                    Accessibility (WCAG), Heuristic Evaluation
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Front-end & Tools</h4>
                  <p className="text-sm">
                    React, Next.js, Tailwind CSS, Shadcn UI, TypeScript, HTML/CSS, 
                    Framer, WordPress, FlutterFlow, Notion, Draw.io
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Analytics</h4>
                  <p className="text-sm">
                    Google Analytics 4 (GA4), Google Tag Manager, Hotjar, 
                    UserTesting, Maze
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Methodologies</h4>
                  <p className="text-sm">
                    Design Thinking, Double Diamond, Lean UX, Agile, Scrum, 
                    Service Design
                  </p>
                </div>
                <div className="md:col-span-2">
                  <h4 className="font-semibold mb-2">AI & Automation</h4>
                  <p className="text-sm">
                    Text-to-Image, Text Completion, Image-to-Video, Speech-to-Text 
                    (OpenAI, Replicate, etc.)
                  </p>
                </div>
              </div>
            </section>

            {/* Languages */}
            <section>
              <h2 className="text-xl font-bold mb-3 border-b pb-2">
                LANGUAGES
              </h2>
              <div className="flex space-x-6">
                <div>
                  <span className="font-semibold">Portuguese:</span> Native
                </div>
                <div>
                  <span className="font-semibold">Spanish:</span> Fluent
                </div>
                <div>
                  <span className="font-semibold">English:</span> Upper-intermediate
                </div>
              </div>
            </section>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
} 