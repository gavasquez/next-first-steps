import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO Title',
  description: 'SEO Title',
  keywords: ['Pricing Page', 'Andres', 'Información', '....']
 };


export default function PricingPage() {
  return (
    <>
      <span className='text-7xl'>PricingPage</span>
    </>
  );
}