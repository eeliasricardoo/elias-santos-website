// Streak atual do Duolingo - atualizar manualmente quando necessário
export const CURRENT_DUOLINGO_STREAK = 605;

/**
 * Retorna o streak atual do Duolingo
 */
export function getCurrentStreak(): string {
  return CURRENT_DUOLINGO_STREAK.toString();
} 