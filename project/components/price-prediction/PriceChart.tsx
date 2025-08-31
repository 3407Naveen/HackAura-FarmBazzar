'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';

const mockData = [
  { month: 'Jan', actual: 2100, predicted: 2120, seasonal: 2080 },
  { month: 'Feb', actual: 2150, predicted: 2180, seasonal: 2140 },
  { month: 'Mar', actual: 2200, predicted: 2220, seasonal: 2190 },
  { month: 'Apr', actual: 2180, predicted: 2200, seasonal: 2170 },
  { month: 'May', actual: 2250, predicted: 2280, seasonal: 2240 },
  { month: 'Jun', actual: 2300, predicted: 2320, seasonal: 2290 },
  { month: 'Jul', actual: null, predicted: 2380, seasonal: 2350 },
  { month: 'Aug', actual: null, predicted: 2420, seasonal: 2390 },
  { month: 'Sep', actual: null, predicted: 2450, seasonal: 2410 },
];

interface PriceChartProps {
  crop: string;
  seasonal: boolean;
}

export function PriceChart({ crop, seasonal }: PriceChartProps) {
  return (
    <Card className="card-hover">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Price Trends & Predictions</span>
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span>Actual</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span>Predicted</span>
            </div>
            {seasonal && (
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span>Seasonal</span>
              </div>
            )}
          </div>
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={mockData}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip 
                formatter={(value, name) => [
                  `₹${Number(value).toLocaleString()}`,
                  name === 'actual' ? 'Actual Price' : 
                  name === 'predicted' ? 'Predicted Price' : 'Seasonal Average'
                ]}
                labelFormatter={(label) => `Month: ${label}`}
              />
              <Area 
                type="monotone" 
                dataKey="predicted" 
                stroke="#22c55e" 
                fill="#22c55e" 
                fillOpacity={0.1}
                strokeWidth={3}
              />
              <Line 
                type="monotone" 
                dataKey="actual" 
                stroke="#3b82f6" 
                strokeWidth={3}
                dot={{ fill: '#3b82f6', strokeWidth: 2 }}
              />
              {seasonal && (
                <Line 
                  type="monotone" 
                  dataKey="seasonal" 
                  stroke="#8b5cf6" 
                  strokeWidth={2}
                  strokeDasharray="5 5"
                />
              )}
            </AreaChart>
          </ResponsiveContainer>
        </div>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-800">Current Price</h4>
            <p className="text-2xl font-bold text-blue-600">₹2,150</p>
            <p className="text-sm text-blue-600">per quintal</p>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800">30-Day Prediction</h4>
            <p className="text-2xl font-bold text-green-600">₹2,380</p>
            <p className="text-sm text-green-600">+10.7% increase</p>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-800">Confidence Score</h4>
            <p className="text-2xl font-bold text-purple-600">87%</p>
            <p className="text-sm text-purple-600">High accuracy</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}