'use client';

import React, { useState } from 'react';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { PredictionDashboard } from '@/components/price-prediction/PredictionDashboard';
import { CropSelector } from '@/components/price-prediction/CropSelector';
import { SeasonalToggle } from '@/components/price-prediction/SeasonalToggle';
import { PriceChart } from '@/components/price-prediction/PriceChart';
import { CropRecommendations } from '@/components/price-prediction/CropRecommendations';

export default function PricePredictionPage() {
  const [selectedCrop, setSelectedCrop] = useState('wheat');
  const [seasonalView, setSeasonalView] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Price Prediction</h1>
          <p className="text-gray-600">AI-powered crop price forecasting and market insights</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3 space-y-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <CropSelector 
                selectedCrop={selectedCrop}
                onCropChange={setSelectedCrop}
              />
              <SeasonalToggle 
                enabled={seasonalView}
                onToggle={setSeasonalView}
              />
            </div>
            
            <PriceChart 
              crop={selectedCrop}
              seasonal={seasonalView}
            />
            
            <PredictionDashboard crop={selectedCrop} />
          </div>
          
          <div className="lg:col-span-1">
            <CropRecommendations />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}