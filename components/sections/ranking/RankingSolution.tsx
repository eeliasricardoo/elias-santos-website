"use client"

import React from "react";

export default function RankingSolution() {
  return (
    <section className="space-y-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Solution Definition</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          A comprehensive ranking system that balances student engagement with privacy protection, 
          providing administrators with full control over the platform&apos;s competitive features.
        </p>
      </div>

      {/* System Screenshots */}
      <div className="space-y-8">
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">System Interface</h3>
          <p className="text-muted-foreground mb-6">Visual representation of the ranking system in action</p>
        </div>
        
        {/* First Image - Empty State */}
        <div className="space-y-4">
          <h4 className="text-lg font-medium text-center">Empty State - No Results Found</h4>
          <div className="bg-white/10 dark:bg-zinc-900/20 backdrop-blur-xl border border-white/20 dark:border-zinc-700/50 rounded-xl p-6">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gray-50 border-b border-gray-200 p-4">
                <div className="flex items-center justify-between">
                  <h5 className="font-semibold text-gray-800">• Ranking</h5>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm px-3 py-1 bg-blue-100 text-blue-800 rounded">Sistema de ranking</span>
                    <span className="text-sm text-gray-500">Sistema de pontos de experiência</span>
                    <span className="text-sm text-gray-500">Sistema de nível</span>
                    <span className="text-sm text-gray-500">Sistema de medalhas</span>
                    <span className="text-sm text-gray-500">Sistemas de moedas</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-6">
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h6 className="font-medium text-gray-800">Sistema de ranking</h6>
                        <p className="text-sm text-gray-600">Confira agora o progresso dos seus alunos na Unidade</p>
                      </div>
                      <div className="w-12 h-6 bg-blue-500 rounded-full relative">
                        <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <h6 className="font-medium text-gray-800 mb-2">Tabela de classificação</h6>
                    <p className="text-sm text-gray-600 mb-4">O sistema de ranking medirá o desempenho dos alunos com base na interação e consumo de conteúdos.</p>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex space-x-1">
                        <button className="px-3 py-1 bg-blue-500 text-white text-sm rounded">Total</button>
                        <button className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded">Semana</button>
                        <button className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded">Mês</button>
                        <button className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded">Ano</button>
                      </div>
                      <div className="flex-1 max-w-xs">
                        <div className="relative">
                          <input type="text" placeholder="Alun" className="w-full pl-8 pr-3 py-1 border border-gray-300 rounded text-sm" />
                          <svg className="w-4 h-4 absolute left-2 top-1.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                        </div>
                      </div>
                      <select className="px-3 py-1 border border-gray-300 rounded text-sm">
                        <option>Top 10</option>
                      </select>
                      <select className="px-3 py-1 border border-gray-300 rounded text-sm">
                        <option>Filtrar por unidade</option>
                      </select>
                      <div className="px-3 py-1 border border-gray-300 rounded text-sm flex items-center">
                        <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        13 Junho 2023 - 14 Julho 2023
                      </div>
                    </div>
                    <div className="text-center py-12">
                      <div className="text-gray-400 mb-2">
                        <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33" />
                        </svg>
                      </div>
                      <h6 className="font-semibold text-gray-800 mb-1">Nenhum resultado encontrado</h6>
                      <p className="text-sm text-gray-600">Verifique o termo buscado ou os filtros selecionados.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Image - With Data */}
        <div className="space-y-4">
          <h4 className="text-lg font-medium text-center">Active Ranking with Student Data</h4>
          <div className="bg-white/10 dark:bg-zinc-900/20 backdrop-blur-xl border border-white/20 dark:border-zinc-700/50 rounded-xl p-6">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gray-50 border-b border-gray-200 p-4">
                <div className="flex items-center justify-between">
                  <h5 className="font-semibold text-gray-800">• Ranking</h5>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm px-3 py-1 bg-blue-100 text-blue-800 rounded">Sistema de ranking</span>
                    <span className="text-sm text-gray-500">Sistema de pontos de experiência</span>
                    <span className="text-sm text-gray-500">Sistema de nível</span>
                    <span className="text-sm text-gray-500">Sistema de medalhas</span>
                    <span className="text-sm text-gray-500">Sistemas de moedas</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-6">
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h6 className="font-medium text-gray-800">Sistema de ranking</h6>
                        <p className="text-sm text-gray-600">Confira agora o progresso dos seus alunos na Unidade</p>
                      </div>
                      <div className="w-12 h-6 bg-blue-500 rounded-full relative">
                        <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <h6 className="font-medium text-gray-800 mb-2">Tabela de classificação</h6>
                    <p className="text-sm text-gray-600 mb-4">O sistema de ranking medirá o desempenho dos alunos com base na interação e consumo de conteúdos.</p>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex space-x-1">
                        <button className="px-3 py-1 bg-blue-500 text-white text-sm rounded">Total</button>
                        <button className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded">Semana</button>
                        <button className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded">Mês</button>
                        <button className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded">Ano</button>
                      </div>
                      <div className="flex-1 max-w-xs">
                        <div className="relative">
                          <input type="text" placeholder="Buscar aluno" className="w-full pl-8 pr-3 py-1 border border-gray-300 rounded text-sm" />
                          <svg className="w-4 h-4 absolute left-2 top-1.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                        </div>
                      </div>
                      <select className="px-3 py-1 border border-gray-300 rounded text-sm">
                        <option>Top 10</option>
                      </select>
                      <select className="px-3 py-1 border border-gray-300 rounded text-sm">
                        <option>Filtrar por unidade</option>
                      </select>
                      <div className="px-3 py-1 border border-gray-300 rounded text-sm flex items-center">
                        <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        13 Junho 2023 - 14 Julho 2023
                      </div>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-gray-200">
                            <th className="text-left py-3 px-4 font-medium text-gray-700">Posição</th>
                            <th className="text-left py-3 px-4 font-medium text-gray-700">Usuário</th>
                            <th className="text-left py-3 px-4 font-medium text-gray-700">E-mail</th>
                            <th className="text-left py-3 px-4 font-medium text-gray-700">Pontuação</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((position) => (
                            <tr key={position} className="border-b border-gray-100">
                              <td className="py-3 px-4">
                                {position <= 3 ? (
                                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold ${
                                    position === 1 ? 'bg-yellow-500' : 
                                    position === 2 ? 'bg-gray-400' : 'bg-orange-500'
                                  }`}>
                                    {position}
                                  </div>
                                ) : (
                                  <span className="text-gray-600 font-medium">{position}</span>
                                )}
                              </td>
                              <td className="py-3 px-4">
                                <div className="flex items-center">
                                  <div className="w-8 h-8 bg-gray-300 rounded-full mr-3"></div>
                                  <span className="text-gray-800">Jorge augusto</span>
                                </div>
                              </td>
                              <td className="py-3 px-4 text-gray-600">aluno.exemplo@gmail.com</td>
                              <td className="py-3 px-4 text-gray-800 font-medium">2.770 XP</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Solution Details */}
      <div className="space-y-8">
        {/* 1. Ranking Rules */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold border-b border-gray-200 dark:border-gray-700 pb-2">1. Ranking Rules</h3>
          <div className="space-y-4 text-lg">
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">XP-Based Ranking</h4>
              <p className="text-gray-600 dark:text-gray-300">Students are ranked by their total accumulated experience points (XP). The more XP you earn, the higher your position in the ranking.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Tie-Breaking System</h4>
              <p className="text-gray-600 dark:text-gray-300">When two students have the same XP, the one who earned their last XP most recently gets the higher position.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Flexible Filtering</h4>
              <p className="text-gray-600 dark:text-gray-300">Students can view rankings by different time periods: total XP, weekly, monthly, yearly, or custom date ranges.</p>
            </div>
          </div>
        </div>

        {/* 2. Student Participation */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold border-b border-gray-200 dark:border-gray-700 pb-2">2. Student Participation</h3>
          <div className="space-y-4 text-lg">
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Privacy-First Approach</h4>
              <p className="text-gray-600 dark:text-gray-300">All students start excluded from the ranking by default for privacy protection. They must actively choose to participate.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Opt-in Process</h4>
              <p className="text-gray-600 dark:text-gray-300">On first access, students see a friendly modal asking if they want to participate. If they accept, their profile picture and name appear in the ranking.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Flexible Control</h4>
              <p className="text-gray-600 dark:text-gray-300">Students can change their participation status anytime through their settings panel, with a 24-hour delay to prevent abuse.</p>
            </div>
          </div>
        </div>

        {/* 3. Admin Access */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold border-b border-gray-200 dark:border-gray-700 pb-2">3. Admin Access</h3>
          <div className="space-y-4 text-lg">
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Complete Control</h4>
              <p className="text-gray-600 dark:text-gray-300">Administrators can enable or disable the entire ranking system for their institution with one click.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Historical Data Management</h4>
              <p className="text-gray-600 dark:text-gray-300">When activating the ranking, administrators can choose whether to include past XP data or start fresh.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Granular Activation</h4>
              <p className="text-gray-600 dark:text-gray-300">The ranking can be activated for specific schools or departments within the institution, allowing for targeted implementation.</p>
            </div>
          </div>
        </div>

        {/* 4. User Interface */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold border-b border-gray-200 dark:border-gray-700 pb-2">4. User Interface</h3>
          <div className="space-y-4 text-lg">
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Student Panel</h4>
              <p className="text-gray-600 dark:text-gray-300">Students see the top 10 ranked students with their own position highlighted. The interface is designed to be motivating and easy to understand.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Admin Dashboard</h4>
              <p className="text-gray-600 dark:text-gray-300">Administrators have access to a comprehensive dashboard with ranking management, student oversight, and detailed performance reports.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Intuitive Navigation</h4>
              <p className="text-gray-600 dark:text-gray-300">Simple date filters allow users to view rankings by different time periods, making navigation and visualization straightforward.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 