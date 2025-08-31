import { HeroSection } from '@/components/home/HeroSection';
import { QuickActions } from '@/components/home/QuickActions';
import { NotificationPanel } from '@/components/home/NotificationPanel';
import { TrendingCrops } from '@/components/home/TrendingCrops';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main>
        <HeroSection />
        <QuickActions />
        <div className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <TrendingCrops />
          </div>
          <div className="lg:col-span-1">
            <NotificationPanel />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}