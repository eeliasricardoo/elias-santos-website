import React from "react";

const metrics = [
  { label: "Usuários Ativos", value: "+12.000" },
  { label: "Instituições", value: "18" },
  { label: "Engajamento", value: "+40%" },
  { label: "Tempo de Configuração", value: "-60%" },
  { label: "Analytics", value: "Real-time" },
];

const partners = [
  { name: "Duolingo", logo: "/images/0_30Q1h7enGUIb_zha.webp" },
  { name: "Khan Academy", logo: "/images/0_qMjDhi5-9niX47Oq.webp" },
  { name: "Coursera", logo: "/images/0_kFjeH7TxKlRoneaa.webp" },
];

const testimonials = [
  {
    name: "UX Lead",
    image: "/placeholder-user.jpg"
  },
  {
    name: "Product Manager", 
    image: "/placeholder-user.jpg"
  },
  {
    name: "CEO",
    image: "/placeholder-user.jpg"
  }
];

const rankingFeatures = [
  { icon: "⭐", title: "Gamified platform" },
  { icon: "📊", title: "Real-time analytics" },
  { icon: "🎯", title: "Personalized feedback" },
  { icon: "🏆", title: "Achievement system" },
  { icon: "💡", title: "Smart insights" },
  { icon: "💬", title: "Social features" }
];

const institutionFeatures = [
  { icon: "🏢", title: "Manage platform" },
  { icon: "🔒", title: "Secure data" },
  { icon: "⚙️", title: "Develop new features" },
  { icon: "👨‍🎓", title: "Student support" }
];

export default function RankingCasePage() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-4 space-y-20">
      {/* HEADER */}
      <header className="mb-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <h1 className="text-4xl font-bold leading-tight">UX Case Study: Ranking System for Gamification</h1>
          <span className="text-muted-foreground text-sm">Elias Santos • 5 min read • Mar 9, 2025</span>
        </div>
        <div className="flex flex-wrap gap-4 mb-8">
          <div className="bg-primary text-white rounded-lg px-6 py-4 text-center min-w-[120px] shadow-md">
            <div className="text-2xl font-bold">+40%</div>
            <div className="text-xs uppercase tracking-wide">Engajamento</div>
          </div>
          <div className="bg-primary text-white rounded-lg px-6 py-4 text-center min-w-[120px] shadow-md">
            <div className="text-2xl font-bold">+12.000</div>
            <div className="text-xs uppercase tracking-wide">Usuários</div>
          </div>
          <div className="bg-primary text-white rounded-lg px-6 py-4 text-center min-w-[120px] shadow-md">
            <div className="text-2xl font-bold">18</div>
            <div className="text-xs uppercase tracking-wide">Instituições</div>
          </div>
          <div className="bg-primary text-white rounded-lg px-6 py-4 text-center min-w-[120px] shadow-md">
            <div className="text-2xl font-bold">-60%</div>
            <div className="text-xs uppercase tracking-wide">Tempo de Configuração</div>
          </div>
          <div className="bg-primary text-white rounded-lg px-6 py-4 text-center min-w-[120px] shadow-md">
            <div className="text-2xl font-bold">Real-time</div>
            <div className="text-xs uppercase tracking-wide">Analytics</div>
          </div>
        </div>
      </header>

      {/* INTRODUÇÃO */}
      <section className="space-y-4 max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
        <p className="text-muted-foreground text-lg">
          In digital education platforms, gamification has been an effective tool for engaging students. One of the main gamified mechanisms is the ranking system, which allows students to track their progress and compare their performance with peers.
        </p>
        <p className="text-muted-foreground text-lg">
          This case study documents the UX design process for implementing a ranking system based on XP (experience points) within a learning platform.
        </p>
      </section>

      {/* RESEARCH & BENCHMARKING */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold mb-2">Research & Benchmarking</h2>
        <p className="text-muted-foreground max-w-2xl">
          To support the design, we conducted user research and analyzed similar systems, such as:
        </p>
        <div className="flex flex-col items-center">
          <div className="flex flex-row gap-8 mb-4">
            <div className="bg-[#232323] rounded-xl flex flex-col items-center justify-center w-44 h-32 transition-all duration-200 hover:scale-105 hover:shadow-lg">
              <img src="/images/0_30Q1h7enGUIb_zha.webp" alt="Duolingo" className="h-12 w-auto mb-2" />
            </div>
            <div className="bg-[#232323] rounded-xl flex flex-col items-center justify-center w-44 h-32 transition-all duration-200 hover:scale-105 hover:shadow-lg">
              <img src="/images/0_kFjeH7TxKlRoneaa.webp" alt="Coursera" className="h-10 w-auto mb-2" />
            </div>
            <div className="bg-[#232323] rounded-xl flex flex-col items-center justify-center w-44 h-32 transition-all duration-200 hover:scale-105 hover:shadow-lg">
              <img src="/images/0_qMjDhi5-9niX47Oq.webp" alt="Khan Academy" className="h-10 w-auto mb-2 opacity-70" />
            </div>
          </div>
          <div className="flex flex-row gap-8 mb-8">
            <div className="w-44 text-center">
              <span className="font-bold text-base">Duolingo</span>
            </div>
            <div className="w-44 text-center">
              <span className="font-bold text-base">Coursera</span>
            </div>
            <div className="w-44 text-center">
              <span className="font-bold text-base">Khan Academy</span>
            </div>
          </div>
          <div className="text-left max-w-2xl mx-auto space-y-1 text-muted-foreground">
            <p><span className="font-bold">Duolingo:</span> Weekly ranking with opt-in and reward incentives.</p>
            <p><span className="font-bold">Khan Academy:</span> Points system and leaderboard per class.</p>
            <p><span className="font-bold">Coursera:</span> Use of badges and points to encourage engagement.</p>
          </div>
        </div>
      </section>

      {/* PERSONAS */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold mb-2">Personas</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-muted rounded-xl p-6 flex flex-col items-center shadow">
            <img src="/placeholder-user.jpg" alt="Alice" className="w-16 h-16 rounded-full mb-3" />
            <div className="font-semibold mb-1">Alice — Engaged Student</div>
            <div className="text-xs text-muted-foreground mb-2">Age: 22 years old</div>
            <ul className="text-sm text-muted-foreground space-y-1 text-left">
              <li><span className="font-bold">Goal:</span> Track her academic progress and improve her ranking position.</li>
              <li><span className="font-bold">Needs:</span> A ranking that is easy to understand, with clear visual feedback about her position.</li>
              <li><span className="font-bold">Pain Points:</span> Lack of clarity in scoring and difficulties comparing her progress with others.</li>
            </ul>
          </div>
          <div className="bg-muted rounded-xl p-6 flex flex-col items-center shadow">
            <img src="/placeholder-user.jpg" alt="Bob" className="w-16 h-16 rounded-full mb-3" />
            <div className="font-semibold mb-1">Bob — Private Student</div>
            <div className="text-xs text-muted-foreground mb-2">Age: 24 years old</div>
            <ul className="text-sm text-muted-foreground space-y-1 text-left">
              <li><span className="font-bold">Goal:</span> Focus on learning without worrying about comparisons.</li>
              <li><span className="font-bold">Needs:</span> An easy option to opt out of the ranking and avoid public exposure of his performance.</li>
              <li><span className="font-bold">Pain Points:</span> Concern about having his performance publicly compared without consent.</li>
            </ul>
          </div>
          <div className="bg-muted rounded-xl p-6 flex flex-col items-center shadow">
            <img src="/placeholder-user.jpg" alt="Carla" className="w-16 h-16 rounded-full mb-3" />
            <div className="font-semibold mb-1">Carla — Institution Administrator</div>
            <div className="text-xs text-muted-foreground mb-2">Age: 35 years old</div>
            <ul className="text-sm text-muted-foreground space-y-1 text-left">
              <li><span className="font-bold">Goal:</span> Monitor student performance and encourage engagement in the platform.</li>
              <li><span className="font-bold">Needs:</span> Access to detailed reports and the ability to enable/disable the ranking as needed.</li>
              <li><span className="font-bold">Pain Points:</span> Lack of granular control over which students participate in the ranking.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PROBLEMA, OBJETIVOS, INSIGHTS */}
      <section className="space-y-10 max-w-2xl mx-auto">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Identified Problem</h2>
          <p className="text-muted-foreground mb-2">Platform administrators want to identify the most engaged students and incentivize them through rewards. However, the current system lacks a structured mechanism to classify and display the best-performing students.</p>
          <ul className="text-muted-foreground list-disc ml-6 space-y-1">
            <li>Lack of a visible ranking for students to track their progress.</li>
            <li>Absence of an opt-in system for students who want to participate in the ranking.</li>
            <li>Uncertainty about the use of historical data, affecting ranking accuracy.</li>
            <li>Low interface clarity for administrators and students.</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">Project Objectives</h2>
          <ul className="text-muted-foreground list-disc ml-6 space-y-1">
            <li>Create a dynamic ranking based on XP, updated in real-time.</li>
            <li>Allow students to opt-in or opt-out of the ranking.</li>
            <li>Ensure an intuitive and responsive interface for admins and students.</li>
            <li>Implement view filters (by unit, by period: week, month, year).</li>
            <li>Guarantee security and privacy, respecting students' decisions.</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">Key insights from research</h2>
          <ul className="text-muted-foreground list-disc ml-6 space-y-1">
            <li>Transparency in participation: Users should be able to easily opt-in or opt-out of the ranking.</li>
            <li>Immediate visual feedback: Highlighting the user's position on the leaderboard improves engagement.</li>
            <li>Intuitive filters: Allowing different time filters increases the ranking's usability.</li>
          </ul>
        </div>
      </section>

      {/* SOLUÇÃO, TESTES, CONCLUSÃO */}
      <section className="space-y-10 max-w-2xl mx-auto">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Solution Definition</h2>
          <ul className="text-muted-foreground list-disc ml-6 space-y-1">
            <li>XP-Based: The ranking orders students by total accumulated XP.</li>
            <li>Tie-breaking criteria: If XP is the same, the last XP earned determines the position.</li>
            <li>Filtering: Students can view the ranking by total XP, XP accumulated in the week/month/year, or custom period.</li>
            <li>Opt-in/Opt-out: By default, all students are excluded from the ranking. Modal on first access, can change decision in panel (24h delay).</li>
            <li>Admin Access: Enable/disable ranking, use historical data, activate for specific schools.</li>
            <li>User Interface: Student panel (top 10, highlight user), admin panel (controls, reports), date filters.</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">Testing & Iterations</h2>
          <div className="mb-2">
            <span className="font-semibold">Tests Conducted:</span>
            <ul className="text-muted-foreground list-disc ml-6 space-y-1">
              <li>Usability tests with students and admins.</li>
              <li>Accessibility validation (keyboard navigation and screen readers).</li>
              <li>Performance tests, ensuring fast loading times.</li>
            </ul>
          </div>
          <div>
            <span className="font-semibold">Key Adjustments:</span>
            <ul className="text-muted-foreground list-disc ml-6 space-y-1">
              <li>Improved opt-in clarity: Added explanation about privacy.</li>
              <li>Reorganized filters: More intuitive order.</li>
              <li>Highlighting the student's ranking: Improved visibility of the current position.</li>
            </ul>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">Conclusion</h2>
          <p className="text-muted-foreground">
            The ranking system provides gamified engagement, allowing students to track their progress while admins encourage active participation.
          </p>
          <p className="text-muted-foreground mt-2">
            This case study demonstrates the importance of user-centered design, with decisions based on research and testing, ensuring a functional and accessible solution.
          </p>
        </div>
      </section>

      {/* SCREENSHOTS */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold mb-4">System Screenshots</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-muted rounded-lg p-4 shadow">
            <div className="text-center text-muted-foreground mb-2">Student Panel</div>
            <div className="bg-background rounded h-64 flex items-center justify-center">
              <span className="text-muted-foreground">Top 10 ranked students</span>
            </div>
          </div>
          <div className="bg-muted rounded-lg p-4 shadow">
            <div className="text-center text-muted-foreground mb-2">Admin Panel</div>
            <div className="bg-background rounded h-64 flex items-center justify-center">
              <span className="text-muted-foreground">Ranking controls and reports</span>
            </div>
          </div>
        </div>
      </section>

      {/* TABELA */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold mb-4">Ranking Data</h2>
        <div className="bg-muted rounded-lg overflow-hidden shadow">
          <table className="w-full text-sm">
            <thead className="bg-background">
              <tr>
                <th className="px-4 py-3 text-left">Rank</th>
                <th className="px-4 py-3 text-left">User</th>
                <th className="px-4 py-3 text-left">Score</th>
                <th className="px-4 py-3 text-left">Level</th>
                <th className="px-4 py-3 text-left">Achievements</th>
                <th className="px-4 py-3 text-left">Progress</th>
              </tr>
            </thead>
            <tbody>
              {/* Dados da tabela */}
            </tbody>
          </table>
        </div>
      </section>

      {/* AUTHOR */}
      <section className="border-t pt-8 flex items-center gap-4">
        <img src="/placeholder-user.jpg" alt="Author" className="w-16 h-16 rounded-full" />
        <div>
          <div className="font-semibold text-lg">Elias Santos</div>
          <div className="text-muted-foreground">UX Designer & Product Manager</div>
        </div>
      </section>
    </main>
  );
} 