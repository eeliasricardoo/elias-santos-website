'use client';

import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Download, MapPin, Phone, Mail, Linkedin, Globe, Github, Briefcase, GraduationCap, Award, Code, Languages, Calendar, Building2, Users, Palette, Database, Brain, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CVModal({ isOpen, onClose }: CVModalProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleDownload = () => {
    if (typeof window !== 'undefined') {
      const link = document.createElement('a');
      link.href = '/resume_eeliasricardoo.pdf';
      link.download = 'Elias_Ricardo_CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  if (!isClient) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto sm:max-h-[85vh] p-0 sm:p-6">

        <div className="space-y-4 sm:space-y-6 p-4 sm:p-0">
          {/* Download Button */}
          <div className="flex justify-center sm:justify-start">
            <Button
              onClick={handleDownload}
              variant="outline"
              size="sm"
              className="bg-black text-white hover:bg-gray-800 px-6 py-2 rounded-lg shadow-lg"
            >
              <Download className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Download CV</span>
              <span className="sm:hidden">Download</span>
            </Button>
          </div>

          {/* CV Content */}
          <div className="space-y-4 sm:space-y-6">
            {/* Header */}
            <div className="text-center border-b pb-6">
              <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-primary">
                Elias Ricardo Araujo Santos
              </h1>
              
              {/* Contact Information - Enhanced Layout */}
              <div className="bg-gradient-to-r from-muted/10 to-muted/5 rounded-xl p-4 sm:p-6 border border-border/20 max-w-4xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                  <div className="flex items-center gap-3 p-3 bg-background/50 rounded-lg border border-border/20 hover:bg-background/70 transition-colors">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="font-medium text-sm">Colombia</span>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-background/50 rounded-lg border border-border/20 hover:bg-background/70 transition-colors">
                    <Phone className="w-4 h-4 text-primary" />
                    <span className="font-medium text-sm">+57 320 5212191</span>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-background/50 rounded-lg border border-border/20 hover:bg-background/70 transition-colors">
                    <Mail className="w-4 h-4 text-primary" />
                    <span className="font-medium text-sm">eeliasricardoo@gmail.com</span>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-background/50 rounded-lg border border-border/20 hover:bg-background/70 transition-colors">
                    <Linkedin className="w-4 h-4 text-primary" />
                    <span className="font-medium text-sm">linkedin.com/in/eliasricardo</span>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-background/50 rounded-lg border border-border/20 hover:bg-background/70 transition-colors">
                    <Github className="w-4 h-4 text-primary" />
                    <span className="font-medium text-sm">github.com/eeliasricardooajus</span>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-background/50 rounded-lg border border-border/20 hover:bg-background/70 transition-colors">
                    <Globe className="w-4 h-4 text-primary" />
                    <span className="font-medium text-sm">eeliasricardoo.com</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Unified Content Sections */}
            <div className="bg-muted/5 rounded-xl p-4 sm:p-6 border border-border/10">

            {/* Professional Summary */}
               <div className="mb-6">
                 <div className="flex items-center gap-3 mb-4">
                   <Users className="w-5 h-5 text-primary" />
                   <h2 className="text-lg sm:text-xl font-bold text-primary border-b border-primary/20 pb-2">
                PROFESSIONAL SUMMARY
              </h2>
                 </div>
                <p className="leading-relaxed text-sm sm:text-base">
                UX/UI Designer with 4+ years of experience in designing user-centered digital 
                products for enterprise and international clients across Brazil, Bolivia, 
                Ecuador, and Colombia. Specialized in leading end-to-end design processes 
                from research and wireframing to prototyping and front-end implementation. 
                Strong background in product strategy, AI-integrated UX, accessibility 
                (ADA best practices), and KPI-driven design. Proven success in collaborating 
                cross-functionally in agile teams to build high-impact, scalable, and 
                inclusive digital solutions.
              </p>
              </div>

            {/* Professional Experience */}
               <div className="mb-6">
                 <div className="flex items-center gap-3 mb-4">
                   <Briefcase className="w-5 h-5 text-primary" />
                   <h2 className="text-lg sm:text-xl font-bold text-primary border-b border-primary/20 pb-2">
                PROFESSIONAL EXPERIENCE
              </h2>
                 </div>
              
              <div className="space-y-4">
                   <div className="bg-gradient-to-r from-muted/10 to-muted/5 rounded-lg p-4 sm:p-5 border border-border/20 hover:border-primary/20 transition-colors">
                     <div className="flex items-start gap-3 mb-3">
                       <Building2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                       <div className="flex-1">
                         <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                           <h3 className="text-lg font-semibold text-primary">TOOLZZ</h3>
                           <div className="flex items-center gap-2">
                             <Calendar className="w-4 h-4 text-muted-foreground" />
                             <span className="text-sm text-muted-foreground">Mar 2022 - Jul 2025</span>
                           </div>
                         </div>
                         <ul className="space-y-2 text-sm">
                           <li className="flex items-start gap-2">
                             <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                             <span>Led the design team on a corporate LMS platform project</span>
                           </li>
                           <li className="flex items-start gap-2">
                             <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                             <span>Developed an AI platform integrating text-to-image, text completion, image-to-video, and speech-to-text technologies</span>
                           </li>
                           <li className="flex items-start gap-2">
                             <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                             <span>Created a mobile app with over 500 active users, optimizing user experience and interface</span>
                           </li>
                           <li className="flex items-start gap-2">
                             <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                             <span>Conducted UX research with stakeholders from large enterprises</span>
                           </li>
                           <li className="flex items-start gap-2">
                             <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                             <span>Implemented responsive front-end interfaces using Next.js, Tailwind CSS, and Shadcn UI</span>
                           </li>
                           <li className="flex items-start gap-2">
                             <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                             <span>Worked in an agile environment with Scrum methodology</span>
                           </li>
                  </ul>
                       </div>
                     </div>
                </div>

                   <div className="bg-gradient-to-r from-muted/10 to-muted/5 rounded-lg p-4 sm:p-5 border border-border/20 hover:border-primary/20 transition-colors">
                     <div className="flex items-start gap-3 mb-3">
                       <Building2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                       <div className="flex-1">
                         <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                           <h3 className="text-lg font-semibold text-primary">OLIVER AGENCY</h3>
                           <div className="flex items-center gap-2">
                             <Calendar className="w-4 h-4 text-muted-foreground" />
                             <span className="text-sm text-muted-foreground">Dec 2024 - Feb 2025</span>
                           </div>
                         </div>
                         <ul className="space-y-2 text-sm">
                           <li className="flex items-start gap-2">
                             <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                             <span>Migrated the OLIVER Spain website to the Latin America version</span>
                           </li>
                           <li className="flex items-start gap-2">
                             <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                             <span>Adapted content and structure for Portuguese and Spanish-speaking markets</span>
                           </li>
                           <li className="flex items-start gap-2">
                             <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                             <span>Resolved complex WordPress technical challenges</span>
                           </li>
                  </ul>
                       </div>
                     </div>
                </div>

                   <div className="bg-gradient-to-r from-muted/10 to-muted/5 rounded-lg p-4 sm:p-5 border border-border/20 hover:border-primary/20 transition-colors">
                     <div className="flex items-start gap-3 mb-3">
                       <Building2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                       <div className="flex-1">
                         <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                           <h3 className="text-lg font-semibold text-primary">ZURICH INSURANCE GROUP</h3>
                           <div className="flex items-center gap-2">
                             <Calendar className="w-4 h-4 text-muted-foreground" />
                             <span className="text-sm text-muted-foreground">May 2024 - Nov 2024</span>
                           </div>
                         </div>
                         <ul className="space-y-2 text-sm">
                           <li className="flex items-start gap-2">
                             <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                             <span>Mapped full website HTML for Google Tag Manager implementation</span>
                           </li>
                           <li className="flex items-start gap-2">
                             <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                             <span>Configured Google Analytics 4 (GA4) integration</span>
                           </li>
                           <li className="flex items-start gap-2">
                             <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                             <span>Implemented advanced data tracking for digital performance analysis</span>
                           </li>
                  </ul>
                       </div>
                     </div>
                </div>

                   <div className="bg-gradient-to-r from-muted/10 to-muted/5 rounded-lg p-4 sm:p-5 border border-border/20 hover:border-primary/20 transition-colors">
                     <div className="flex items-start gap-3 mb-3">
                       <Building2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                       <div className="flex-1">
                         <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                           <h3 className="text-lg font-semibold text-primary">ZURICH INSURANCE GROUP</h3>
                           <div className="flex items-center gap-2">
                             <Calendar className="w-4 h-4 text-muted-foreground" />
                             <span className="text-sm text-muted-foreground">Sep - Oct 2024</span>
                           </div>
                         </div>
                         <ul className="space-y-2 text-sm">
                           <li className="flex items-start gap-2">
                             <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                             <span>Led website redesign proposal for Zurich Brazil</span>
                           </li>
                           <li className="flex items-start gap-2">
                             <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                             <span>Conducted user research to inform design decisions</span>
                           </li>
                           <li className="flex items-start gap-2">
                             <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                             <span>Created wireframes and interactive prototypes using Figma</span>
                           </li>
                  </ul>
                </div>
              </div>
                   </div>
                 </div>
               </div>

                             {/* Education & Certifications */}
               <div className="mb-6">
                 <div className="flex items-center gap-3 mb-4">
                   <GraduationCap className="w-5 h-5 text-primary" />
                   <h2 className="text-lg sm:text-xl font-bold text-primary border-b border-primary/20 pb-2">
                     EDUCATION & CERTIFICATIONS
              </h2>
                 </div>
                 
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                   <div className="bg-gradient-to-r from-muted/10 to-muted/5 rounded-lg p-4 sm:p-5 border border-border/20 hover:border-primary/20 transition-colors">
                     <div className="flex items-start gap-3">
                       <GraduationCap className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                       <div className="flex-1">
                         <h3 className="text-lg font-semibold text-primary mb-2">UNG University</h3>
                         <p className="text-sm mb-1">Bachelor in Service Design (In progress)</p>
                         <div className="flex items-center gap-2 mt-2">
                           <Calendar className="w-4 h-4 text-muted-foreground" />
                           <span className="text-xs text-muted-foreground">Expected Graduation: December 2025</span>
                         </div>
                       </div>
                     </div>
              </div>
                   
                   <div className="bg-gradient-to-r from-muted/10 to-muted/5 rounded-lg p-4 sm:p-5 border border-border/20 hover:border-primary/20 transition-colors">
                     <div className="flex items-start gap-3">
                       <Award className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                       <div className="flex-1">
                         <h3 className="text-lg font-semibold text-primary mb-3">Certifications</h3>
                         <div className="space-y-2">
                           <div className="flex items-start gap-2">
                             <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                             <span className="text-sm">UX Research: Metodologias e Imersão em Pesquisa - May 2022</span>
                           </div>
                           <div className="flex items-start gap-2">
                             <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                             <span className="text-sm">UX/UI & Prototype: Estação hack from Facebook - Mar 2021</span>
                           </div>
                           <div className="flex items-start gap-2">
                             <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                             <span className="text-sm">JavaScript para Web: Crie páginas dinâmicas - Nov 2022</span>
                           </div>
                           <div className="flex items-start gap-2">
                             <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                             <span className="text-sm">UX Design Patterns with Checklist Design - Aug 2024</span>
                           </div>
                           <div className="flex items-start gap-2">
                             <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                             <span className="text-sm">(More than 40 courses in Web Design, Front-end Development, and UX Research)</span>
                           </div>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>

                             {/* Technical Skills & Languages */}
               <div>
                 <div className="flex items-center gap-3 mb-4">
                   <Code className="w-5 h-5 text-primary" />
                   <h2 className="text-lg sm:text-xl font-bold text-primary border-b border-primary/20 pb-2">
                     SKILLS & LANGUAGES
              </h2>
                 </div>
                 
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                   <div className="bg-gradient-to-r from-muted/10 to-muted/5 rounded-lg p-4 sm:p-5 border border-border/20 hover:border-primary/20 transition-colors">
                     <div className="flex items-start gap-3 mb-4">
                       <Code className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                       <h3 className="text-lg font-semibold text-primary">Technical Skills</h3>
                     </div>
                     <div className="space-y-4">
                       <div className="flex items-start gap-3">
                         <Palette className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                         <div className="flex-1">
                           <h4 className="font-semibold text-sm mb-1">Design & UX</h4>
                           <p className="text-xs text-muted-foreground">
                    Figma, Wireframing, Prototyping, UX Research, Design Systems, 
                    Accessibility (WCAG), Heuristic Evaluation
                  </p>
                </div>
                       </div>
                       <div className="flex items-start gap-3">
                         <Code className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                         <div className="flex-1">
                           <h4 className="font-semibold text-sm mb-1">Front-end & Tools</h4>
                           <p className="text-xs text-muted-foreground">
                    React, Next.js, Tailwind CSS, Shadcn UI, TypeScript, HTML/CSS, 
                    Framer, WordPress, FlutterFlow, Notion, Draw.io
                  </p>
                </div>
                       </div>
                       <div className="flex items-start gap-3">
                         <Database className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                         <div className="flex-1">
                           <h4 className="font-semibold text-sm mb-1">Analytics</h4>
                           <p className="text-xs text-muted-foreground">
                    Google Analytics 4 (GA4), Google Tag Manager, Hotjar, 
                    UserTesting, Maze
                  </p>
                </div>
                       </div>
                       <div className="flex items-start gap-3">
                         <Users className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                         <div className="flex-1">
                           <h4 className="font-semibold text-sm mb-1">Methodologies</h4>
                           <p className="text-xs text-muted-foreground">
                    Design Thinking, Double Diamond, Lean UX, Agile, Scrum, 
                    Service Design
                  </p>
                </div>
                       </div>
                       <div className="flex items-start gap-3">
                         <Brain className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                         <div className="flex-1">
                           <h4 className="font-semibold text-sm mb-1">AI & Automation</h4>
                           <p className="text-xs text-muted-foreground">
                    Text-to-Image, Text Completion, Image-to-Video, Speech-to-Text 
                    (OpenAI, Replicate, etc.)
                  </p>
                </div>
              </div>
                     </div>
                   </div>
                   
                   <div className="bg-gradient-to-r from-muted/10 to-muted/5 rounded-lg p-4 sm:p-5 border border-border/20 hover:border-primary/20 transition-colors">
                     <div className="flex items-start gap-3 mb-4">
                       <Languages className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                       <h3 className="text-lg font-semibold text-primary">Languages</h3>
                     </div>
                     <div className="space-y-3">
                       <div className="flex items-center justify-between p-2 bg-background/30 rounded-lg">
                         <div className="flex items-center gap-2">
                           <Zap className="w-4 h-4 text-primary" />
                           <span className="font-semibold text-sm">Portuguese</span>
                         </div>
                         <span className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full font-medium">Native</span>
                       </div>
                       <div className="flex items-center justify-between p-2 bg-background/30 rounded-lg">
                         <div className="flex items-center gap-2">
                           <Zap className="w-4 h-4 text-primary" />
                           <span className="font-semibold text-sm">Spanish</span>
                         </div>
                         <span className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full font-medium">Fluent</span>
                       </div>
                       <div className="flex items-center justify-between p-2 bg-background/30 rounded-lg">
                         <div className="flex items-center gap-2">
                           <Zap className="w-4 h-4 text-primary" />
                           <span className="font-semibold text-sm">English</span>
                         </div>
                         <span className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full font-medium">Upper-intermediate</span>
                       </div>
                     </div>
                </div>
                </div>
                </div>
              </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
} 