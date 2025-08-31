'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, AlertTriangle, Target } from 'lucide-react';

interface PredictionDashboardProps {
  crop: string;
}

export function PredictionDashboard({ crop }: PredictionDashboardProps) {
  const predictionData = {
    wheat: {
      current: 2150,
      predicted: 2380,
      confidence: 87,
      trend: 'up',
      change: 10.7,
      factors: ['Monsoon deficit', 'Export demand', 'Storage shortage'],
      recommendation: 'Strong Buy',
      accuracy: 92
    },
    rice: {
      current: 4500,
      predicted: 4200,
      confidence: 83,
      trend: 'down',
      change: -6.7,
      factors: ['Good harvest', 'MSP increase', 'Export restrictions'],
      recommendation: 'Hold',
      accuracy: 88
    }
  };

  const data = predictionData[crop as keyof typeof predictionData] || predictionData.wheat;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card className="card-hover">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <Target className="w-6 h-6 text-blue-600" />
            </div>
            <Badge variant={data.trend === 'up' ? 'default' : 'destructive'}>
              {data.trend === 'up' ? 'Bullish' : 'Bearish'}
            </Badge>
          </div>
          <h3 className="text-sm font-medium text-gray-600 mb-1">Current Price</h3>
          <p className="text-2xl font-bold text-gray-800">
            ₹{data.current.toLocaleString()}
          </p>
          <p className="text-sm text-gray-500">per quintal</p>
        </CardContent>
      </Card>

      <Card className="card-hover">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className={`w-12 h-12 ${data.trend === 'up' ? 'bg-green-100' : 'bg-red-100'} rounded-xl flex items-center justify-center`}>
              {data.trend === 'up' ? (
                <TrendingUp className="w-6 h-6 text-green-600" />
              ) : (
                <TrendingDown className="w-6 h-6 text-red-600" />
              )}
            </div>
            <Badge variant="outline" className="text-xs">
              {data.confidence}% confidence
            </Badge>
          </div>
          <h3 className="text-sm font-medium text-gray-600 mb-1">Predicted Price</h3>
          <p className="text-2xl font-bold text-gray-800">
            ₹{data.predicted.toLocaleString()}
          </p>
          <p className={`text-sm font-medium ${data.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
            {data.trend === 'up' ? '+' : ''}{data.change}% change
          </p>
        </CardContent>
      </Card>

      <Card className="card-hover">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-purple-600" />
            </div>
            <Badge 
              variant={data.recommendation === 'Strong Buy' ? 'default' : 'secondary'}
              className={data.recommendation === 'Strong Buy' ? 'bg-green-500' : ''}
            >
              {data.recommendation}
            </Badge>
          </div>
          <h3 className="text-sm font-medium text-gray-600 mb-1">AI Recommendation</h3>
          <p className="text-lg font-bold text-gray-800 mb-2">
            {data.recommendation}
          </p>
          <p className="text-sm text-gray-500">
            {data.accuracy}% historical accuracy
          </p>
        </CardContent>
      </Card>

      <Card className="card-hover">
        <CardContent className="p-6">
          <div className="mb-4">
            <h3 className="text-sm font-medium text-gray-600 mb-3">Key Factors</h3>
            <div className="space-y-2">
              {data.factors.map((factor, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">{factor}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}