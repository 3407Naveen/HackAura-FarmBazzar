'use client';

import React, { useState } from 'react';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { MarketplaceHeader } from '@/components/marketplace/MarketplaceHeader';
import { FilterSidebar } from '@/components/marketplace/FilterSidebar';
import { CropGrid } from '@/components/marketplace/CropGrid';
import { CropList } from '@/components/marketplace/CropList';

export default function MarketplacePage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    category: '',
    priceRange: [0, 10000],
    location: '',
    sortBy: 'newest'
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <MarketplaceHeader 
          viewMode={viewMode}
          onViewModeChange={setViewMode}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />
        
        <div className="flex flex-col lg:flex-row gap-8 mt-8">
          <div className="lg:w-1/4">
            <FilterSidebar filters={filters} onFiltersChange={setFilters} />
          </div>
          
          <div className="lg:w-3/4">
            {viewMode === 'grid' ? (
              <CropGrid searchQuery={searchQuery} filters={filters} />
            ) : (
              <CropList searchQuery={searchQuery} filters={filters} />
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}