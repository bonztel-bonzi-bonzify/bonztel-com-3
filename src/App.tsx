import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Ecosystem from '@/components/Ecosystem';
import PathSection from '@/components/PathSection';
import Benchmarks from '@/components/Benchmarks';
import PCBuilder from '@/components/PCBuilder';
import Laptops from '@/components/Laptops';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Support from '@/components/Support';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-ink-950">
      <Navbar />
      <main>
        <Hero />
        <Ecosystem />
        <PathSection />
        <Benchmarks />
        <PCBuilder />
        <Laptops />
        <About />
        <Testimonials />
        <Support />
      </main>
      <Footer />
    </div>
  );
}

export default App;
