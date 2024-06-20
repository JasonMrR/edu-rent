import About from '@/components/about-components/About';
import Footer from '@/components/common-components/Footer';
import Hero from '@/components/common-components/Hero';
import Navbar from '@/components/common-components/Navbar';
import FeaturedProperties from '@/components/properties-components/FeaturedProperties';
import RecentProperties from '@/components/properties-components/RecentProperties';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <RecentProperties/>
      <FeaturedProperties/>
      <About/>
      <Footer/>
    </main>
  );
}
