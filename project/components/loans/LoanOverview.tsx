'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { CreditCard, TrendingUp, CheckCircle, Clock, AlertTriangle } from 'lucide-react';

export function LoanOverview() {
  const eligibilityScore = 85;
  
  return (
    <div className="space-y-8">
      {/* AI Eligibility Score */}
      <Card className="card-hover">
        <CardHeader>
          <CardTitle className="flex items-center">
            <TrendingUp className="w-6 h-6 mr-2" />
            AI Eligibility Assessment
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto relative">
                <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" stroke="#e5e7eb" strokeWidth="8" fill="none" />
                  <circle 
                    cx="50" 
                    cy="50" 
                    r="40" 
                    stroke="#22c55e" 
                    strokeWidth="8" 
                    fill="none"
                    strokeDasharray={`${eligibilityScore * 2.51} 251`}
                    className="transition-all duration-1000"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl font-bold text-gray-800">{eligibilityScore}%</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mt-4">Excellent Eligibility</h3>
              <p className="text-gray-600">You qualify for premium loan rates</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-green-800">Credit Score</p>
                <p className="text-lg font-bold text-green-600">750+</p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-blue-800">Income Stability</p>
                <p className="text-lg font-bold text-blue-600">High</p>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg text-center">
                <CreditCard className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-purple-800">Loan History</p>
                <p className="text-lg font-bold text-purple-600">Good</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Available Loan Products */}
      <Card className="card-hover">
        <CardHeader>
          <CardTitle>Available Loan Products</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800">Crop Loan</h3>
                <Badge className="bg-green-500">Recommended</Badge>
              </div>
              
              <div className="space-y-3 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Interest Rate:</span>
                  <span className="font-semibold text-green-600">7.5% p.a.</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Max Amount:</span>
                  <span className="font-semibold">₹5,00,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tenure:</span>
                  <span className="font-semibold">Up to 5 years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Processing:</span>
                  <span className="font-semibold">24-48 hours</span>
                </div>
              </div>
              
              <Button className="w-full gradient-bg text-white">
                Apply Now
              </Button>
            </div>

            <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800">Equipment Loan</h3>
                <Badge variant="outline">Available</Badge>
              </div>
              
              <div className="space-y-3 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Interest Rate:</span>
                  <span className="font-semibold text-blue-600">9.5% p.a.</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Max Amount:</span>
                  <span className="font-semibold">₹15,00,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tenure:</span>
                  <span className="font-semibold">Up to 7 years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Processing:</span>
                  <span className="font-semibold">3-5 days</span>
                </div>
              </div>
              
              <Button variant="outline" className="w-full">
                Learn More
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Current Loans Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="card-hover">
          <CardContent className="p-6 text-center">
            <CreditCard className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Active Loans</h3>
            <p className="text-3xl font-bold text-blue-600">1</p>
            <p className="text-sm text-gray-600">₹1,50,000 outstanding</p>
          </CardContent>
        </Card>

        <Card className="card-hover">
          <CardContent className="p-6 text-center">
            <Clock className="w-12 h-12 text-orange-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Processing</h3>
            <p className="text-3xl font-bold text-orange-600">0</p>
            <p className="text-sm text-gray-600">No pending applications</p>
          </CardContent>
        </Card>

        <Card className="card-hover">
          <CardContent className="p-6 text-center">
            <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Completed</h3>
            <p className="text-3xl font-bold text-green-600">3</p>
            <p className="text-sm text-gray-600">₹2,75,000 repaid</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}