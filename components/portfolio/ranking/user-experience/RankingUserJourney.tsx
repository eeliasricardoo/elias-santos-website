"use client"

import React from "react";

export default function RankingUserJourney() {
  const participatingSteps = [
    {
      icon: "M13 7l5 5m0 0l-5 5m5-5H6",
      title: "Access the platform",
      description: "Alice logs into the educational platform.",
      context: "Login Screen"
    },
    {
      icon: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      title: "Opt-in Modal",
      description: "The system presents a modal asking if she wants to participate in the ranking.",
      context: "Participation Question",
      action: "Yes"
    },
    {
      icon: "M5 13l4 4L19 7",
      title: "Participation Confirmation",
      description: "Alice opts in and sees her initial ranking position.",
      context: "Current Position: #15",
      status: "success"
    },
    {
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
      title: "Tracking Progress",
      description: "She can view her position in real-time and filter by different periods.",
      context: "Weekly: #12, Monthly: #8, Total: #15"
    },
    {
      icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
      title: "Improving Position",
      description: "Alice is motivated to earn more XP to climb the ranking.",
      context: "XP Earned: +150",
      improvement: "↑ #10"
    },
    {
      icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
      title: "Rewards",
      description: "If she reaches the top, she receives an incentive from the institution.",
      context: "Top 3 Prize: $500",
      status: "reward"
    }
  ];

  const optingOutSteps = [
    {
      icon: "M13 7l5 5m0 0l-5 5m5-5H6",
      title: "Access the platform",
      description: "Bob logs into the system.",
      context: "Login Screen"
    },
    {
      icon: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      title: "Opt-in Modal",
      description: "He decides not to participate in the ranking.",
      context: "Participation Question",
      action: "No"
    },
    {
      icon: "M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L18.364 5.636M5.636 18.364l12.728-12.728",
      title: "Exclusion from the Ranking",
      description: "The system hides the ranking interface for him.",
      context: "Ranking Hidden",
      status: "excluded"
    },
    {
      icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
      title: "Reactivation Option",
      description: "Bob can access settings and change his decision later.",
      context: "Settings Panel",
      delay: "24h delay"
    }
  ];

  const adminSteps = [
    {
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
      title: "Access the admin panel",
      description: "Carla navigates to the ranking section.",
      context: "Admin Dashboard"
    },
    {
      icon: "M5 13l4 4L19 7",
      title: "Enable the ranking",
      description: "She decides to activate the ranking system for the institution.",
      context: "System Activation",
      status: "success"
    },
    {
      icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
      title: "Configure the ranking",
      description: "Chooses whether to use historical data and sets tie-breaking rules.",
      context: "Historical Data: Enabled, Tie-breaking: Last XP"
    },
    {
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
      title: "Monitor the ranking",
      description: "Analyzes reports and checks student performance.",
      context: "Active Students: 247, Avg. XP: 1,250, Top Performer: Maria S."
    },
    {
      icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z",
      title: "Manage students",
      description: "Can see which students participate and manually add or remove them if necessary.",
      context: "Student Management",
      actions: ["add", "remove"]
    }
  ];

  const renderStep = (step: any, index: number) => (
    <div key={index} className="relative bg-white/10 dark:bg-zinc-900/20 backdrop-blur-xl border border-white/20 dark:border-zinc-700/50 rounded-xl p-6 shadow-lg w-full max-w-sm">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 bg-gray-100/80 dark:bg-gray-800/30 rounded-xl flex items-center justify-center flex-shrink-0">
          <svg className="w-6 h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={step.icon} />
          </svg>
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-gray-800 dark:text-gray-100 text-base mb-1">{step.title}</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">{step.description}</p>
        </div>
      </div>
      <div className="bg-gray-50 dark:bg-gray-800/30 rounded-lg p-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
            <span>{step.context}</span>
          </div>
          {step.action && (
            <div className="flex gap-1">
              <div className={`w-8 h-6 rounded text-xs flex items-center justify-center font-medium ${
                step.action === 'Yes' 
                  ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
                  : 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400'
              }`}>
                {step.action}
              </div>
            </div>
          )}
          {step.status && (
            <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
              step.status === 'success' 
                ? 'bg-green-100 dark:bg-green-900/30' 
                : step.status === 'excluded'
                ? 'bg-red-100 dark:bg-red-900/30'
                : 'bg-yellow-100 dark:bg-yellow-900/30'
            }`}>
              <svg className={`w-3 h-3 ${
                step.status === 'success' 
                  ? 'text-green-600 dark:text-green-400' 
                  : step.status === 'excluded'
                  ? 'text-red-600 dark:text-red-400'
                  : 'text-yellow-600 dark:text-yellow-400'
              }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={
                  step.status === 'success' 
                    ? "M5 13l4 4L19 7" 
                    : step.status === 'excluded'
                    ? "M6 18L18 6M6 6l12 12"
                    : "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                } />
              </svg>
            </div>
          )}
          {step.improvement && (
            <div className="text-xs text-green-600 dark:text-green-400 font-medium">{step.improvement}</div>
          )}
          {step.delay && (
            <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">{step.delay}</div>
          )}
          {step.actions && (
            <div className="flex gap-1">
              <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded flex items-center justify-center">
                <svg className="w-3 h-3 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <div className="w-6 h-6 bg-red-100 dark:bg-red-900/30 rounded flex items-center justify-center">
                <svg className="w-3 h-3 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                </svg>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const renderTimeline = (steps: any[], _title: string, subtitle: string) => (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold mb-2">User Journey Map</h2>
      <p className="text-muted-foreground text-lg mb-8">{subtitle}</p>
      
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-500/5 via-gray-500/5 to-gray-500/5 rounded-2xl blur-3xl"></div>
        
        <div className="relative bg-gray-100 dark:bg-zinc-800/50 backdrop-blur-xl border border-gray-200 dark:border-zinc-700/50 rounded-2xl p-6">
          <div className="flex flex-col items-center gap-6">
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                {renderStep(step, index)}
                {index < steps.length - 1 && (
                  <div className="text-gray-400 dark:text-gray-500 text-2xl font-bold">
                    ↓
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <div className="space-y-20">
      {renderTimeline(participatingSteps, "User Journey Map", "Student Participating in the Ranking")}
      {renderTimeline(optingOutSteps, "User Journey Map", "Student Opting Out of the Ranking")}
      {renderTimeline(adminSteps, "User Journey Map", "Administrator Managing the Ranking")}
    </div>
  );
} 