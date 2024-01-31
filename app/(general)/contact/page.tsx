import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO Title',
  description: 'SEO Title',
  keywords: ['Contact Page', 'Andres', 'Información', '....']
 };

export default function ContactPage() {
  return (
    <>
       <span className='text-7xl'>ContactPage</span>
    </>
  );
}