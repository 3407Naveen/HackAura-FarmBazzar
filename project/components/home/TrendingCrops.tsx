'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { TrendingUp, TrendingDown, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const trendingCrops = [
  {
    id: 1,
    name: 'Basmati Rice',
    currentPrice: 4500,
    previousPrice: 4200,
    trend: 'up',
    change: 7.1,
    volume: '2.3k tonnes',
    image: 'https://images.pexels.com/photos/33239/wheat-field-wheat-cereals-grain.jpg',
    region: 'Punjab'
  },
  {
    id: 2,
    name: 'Wheat',
    currentPrice: 2150,
    previousPrice: 2300,
    trend: 'down',
    change: -6.5,
    volume: '5.7k tonnes',
    image: 'https://images.pexels.com/photos/326082/pexels-photo-326082.jpeg',
    region: 'Haryana'
  },
  {
    id: 3,
    name: 'Cotton',
    currentPrice: 6800,
    previousPrice: 6500,
    trend: 'up',
    change: 4.6,
    volume: '1.8k tonnes',
    image: 'https://images.pexels.com/photos/6129967/pexels-photo-6129967.jpeg',
    region: 'Gujarat'
  },
  {
    id: 4,
    name: 'Sugarcane',
    currentPrice: 350,
    previousPrice: 340,
    trend: 'up',
    change: 2.9,
    volume: '12.5k tonnes',
    image: 'https://images.pexels.com/photos/2518861/pexels-photo-2518861.jpeg',
    region: 'Maharashtra'
  },
  {
    id: 5,
    name: 'Turmeric',
    currentPrice: 15200,
    previousPrice: 14800,
    trend: 'up',
    change: 2.7,
    volume: '890 tonnes',
    image: 'https://images.pexels.com/photos/4198024/pexels-photo-4198024.jpeg',
    region: 'Tamil Nadu'
  }
];

export function TrendingCrops() {
  return (
    <Card className="card-hover">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="text-2xl font-semibold flex items-center">
          <TrendingUp className="w-6 h-6 mr-2 text-green-600" />
          Trending Crops
        </CardTitle>
        <Button variant="ghost" asChild>
          <Link href="/marketplace" className="flex items-center">
            View All <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </Button>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-4">
          {trendingCrops.map((crop) => (
            <div
              key={crop.id}
              className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <img
                src={crop.image}
                alt={crop.name}
                className="w-16 h-16 rounded-lg object-cover"
              />
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-lg font-semibold text-gray-800 truncate">
                    {crop.name}
                  </h3>
                  <div className="flex items-center space-x-2">
                    {crop.trend === 'up' ? (
                      <TrendingUp className="w-4 h-4 text-green-500" />
                    ) : (
                      <TrendingDown className="w-4 h-4 text-red-500" />
                    )}
                    <span className={`text-sm font-medium ${
                      crop.trend === 'up' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {crop.trend === 'up' ? '+' : ''}{crop.change}%
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="text-xl font-bold text-gray-900">
                      ₹{crop.currentPrice.toLocaleString()}
                    </span>
                    <Badge variant="outline" className="text-xs">
                      {crop.region}
                    </Badge>
                  </div>
                  <span className="text-sm text-gray-500">
                    Vol: {crop.volume}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold text-gray-800">Market Insights</h4>
              <p className="text-sm text-gray-600">Get AI-powered price predictions</p>
            </div>
            <Button asChild className="gradient-bg text-white">
              <Link href="/price-prediction">
                View Predictions
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}