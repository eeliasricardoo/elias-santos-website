'use client';

import { TestCard, AdjustmentCard } from '../../ui';

export default function RankingTesting() {
  const tests = [
    {
      icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
      title: 'Usability Tests',
      description:
        'Comprehensive testing with students and administrators to validate user experience and workflow efficiency.',
    },
    {
      icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z',
      title: 'Accessibility Validation',
      description:
        'Thorough testing of keyboard navigation and screen reader compatibility to ensure inclusive design.',
    },
    {
      icon: 'M13 10V3L4 14h7v7l9-11h-7z',
      title: 'Performance Tests',
      description:
        'Optimization testing to ensure fast loading times and smooth user interactions across all devices.',
    },
  ];

  const adjustments = [
    {
      icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
      title: 'Improved Opt-in Clarity',
      description:
        'Added clear explanations about privacy protection and what information will be displayed in the ranking.',
    },
    {
      icon: 'M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z',
      title: 'Reorganized Filters',
      description:
        'Restructured filter options in a more intuitive order, making it easier for users to find and apply their desired filters.',
    },
    {
      icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z',
      title: "Highlighting Student's Ranking",
      description:
        "Enhanced visibility of the student's current position in the ranking to provide better context and motivation.",
    },
  ];

  return (
    <section className='space-y-8'>
      <div className='text-center'>
        <h3 className='text-2xl font-bold mb-4'>Testing & Iterations</h3>
        <p className='text-lg text-muted-foreground max-w-3xl mx-auto'>
          Comprehensive testing and iterative improvements based on user
          feedback and accessibility requirements.
        </p>
      </div>

      {/* Tests Conducted */}
      <div className='space-y-4'>
        <h4 className='text-xl font-semibold border-b border-border pb-2'>
          Tests Conducted
        </h4>
        <div className='space-y-4 text-lg'>
          <div className='bg-muted/20 backdrop-blur-xl border border-border rounded-xl p-6'>
            <div className='grid gap-6 md:grid-cols-3'>
              {tests.map(test => (
                <TestCard
                  key={test.title}
                  icon={test.icon}
                  title={test.title}
                  description={test.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Key Adjustments */}
      <div className='space-y-4'>
        <h4 className='text-xl font-semibold border-b border-gray-200 dark:border-gray-700 pb-2'>
          Key Adjustments
        </h4>
        <div className='space-y-4 text-lg'>
          <div className='bg-muted/20 rounded-xl p-6'>
            <div className='space-y-4'>
              {adjustments.map(adjustment => (
                <AdjustmentCard
                  key={adjustment.title}
                  icon={adjustment.icon}
                  title={adjustment.title}
                  description={adjustment.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div className='space-y-4'>
        <h4 className='text-xl font-semibold border-b border-gray-200 dark:border-gray-700 pb-2'>
          Conclusion
        </h4>
        <div className='space-y-4 text-lg'>
          <div className='bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 backdrop-blur-xl border border-blue-200 dark:border-blue-700/50 rounded-xl p-6'>
            <div className='space-y-4'>
              <p className='text-foreground leading-relaxed'>
                The ranking system provides gamified engagement, allowing
                students to track their progress while admins encourage active
                participation.
              </p>
              <p className='text-muted-foreground leading-relaxed'>
                This case study demonstrates the importance of user-centered
                design, with decisions based on research and testing, ensuring a
                functional and accessible solution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
