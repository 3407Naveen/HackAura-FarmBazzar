'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

const recommendations = [
  {
    crop: 'Wheat',
    recommendation: 'Strong Buy',
    confidence: 92,
    trend: 'up',
    expectedReturn: 15.2,
    timeframe: '3 months',
    risk: 'low'
  },
  {
    crop: 'Cotton',
    recommendation: 'Buy',
    confidence: 85,
    trend: 'up',
    expectedReturn: 8.7,
    timeframe: '2 months',
    risk: 'medium'
  },
  {
    crop: 'Rice',
    recommendation: 'Hold',
    confidence: 78,
    trend: 'neutral',
    expectedReturn: 2.1,
    timeframe: '4 months',
    risk: 'low'
  },
  {
    crop: 'Sugarcane',
    recommendation: 'Sell',
    confidence: 81,
    trend: 'down',
    expectedReturn: -4.3,
    timeframe: '1 month',
    risk: 'high'
  }
];

const getRecommendationColor = (rec: string) => {
  switch (rec) {
    case 'Strong Buy': return 'bg-green-500';
    case 'Buy': return 'bg-green-400';
    case 'Hold': return 'bg-yellow-500';
    case 'Sell': return 'bg-red-500';
    default: return 'bg-gray-500';
  }
};

const getTrendIcon = (trend: string) => {
  switch (trend) {
    case 'up': return <TrendingUp className="w-4 h-4 text-green-600" />;
    case 'down': return <TrendingDown className="w-4 h-4 text-red-600" />;
    default: return <Minus className="w-4 h-4 text-gray-600" />;
  }
};

export function CropRecommendations() {
  return (
    <Card className="card-hover">
      <CardHeader>
        <CardTitle className="text-xl">AI Recommendations</CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {recommendations.map((rec, index) => (
          <div key={index} className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold text-gray-800">{rec.crop}</h4>
              {getTrendIcon(rec.trend)}
            </div>
            
            <div className="space-y-2">
              <Badge 
                className={`${getRecommendationColor(rec.recommendation)} text-white text-xs`}
              >
                {rec.recommendation}
              </Badge>
              
              <div className="text-sm space-y-1">
                <div className="flex justify-between">
                  <span className="text-gray-600">Expected Return:</span>
                  <span className={`font-medium ${
                    rec.expectedReturn > 0 ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {rec.expectedReturn > 0 ? '+' : ''}{rec.expectedReturn}%
                  </span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Timeframe:</span>
                  <span className="font-medium">{rec.timeframe}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Risk Level:</span>
                  <Badge 
                    variant="outline" 
                    className={`text-xs ${
                      rec.risk === 'low' ? 'text-green-600 border-green-600' :
                      rec.risk === 'medium' ? 'text-yellow-600 border-yellow-600' :
                      'text-red-600 border-red-600'
                    }`}
                  >
                    {rec.risk}
                  </Badge>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Confidence:</span>
                  <span className="font-medium">{rec.confidence}%</span>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        <Button className="w-full gradient-bg text-white">
          Get Detailed Analysis
        </Button>
      </CardContent>
    </Card>
  );
}