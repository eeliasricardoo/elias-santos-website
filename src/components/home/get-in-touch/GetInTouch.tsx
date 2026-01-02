

import { ContactForm } from './ContactForm';

export function GetInTouch() {
  return (
    <section id='get-in-touch' className='relative py-16 overflow-hidden'>
      <div className='relative z-10 container mx-auto px-4'>
        <ContactForm className='max-w-4xl mx-auto' showTitle={true} />
      </div>
    </section>
  );
}
