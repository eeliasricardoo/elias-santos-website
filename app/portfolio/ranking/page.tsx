"use client"

import React from "react";
import {
  RankingHeader,
  RankingIntroduction,
  RankingProblem,
  RankingObjectives,
  RankingResearch,
  RankingInsights,
  RankingPersonas,
  RankingUserJourney,
  RankingSolution,
  RankingTesting,
  RankingAuthor
} from "@/components/portfolio";

export default function RankingCasePage() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-4 space-y-20 pt-24">
      <RankingHeader />
      <RankingIntroduction />
      <RankingProblem />
      <RankingObjectives />
      <RankingResearch />
      <RankingInsights />
      <RankingPersonas />
      <RankingUserJourney />
      <RankingSolution />
      <RankingTesting />
      <RankingAuthor />
    </main>
  );
}