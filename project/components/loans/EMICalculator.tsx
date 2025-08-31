'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { Calculator, PieChart } from 'lucide-react';

export function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState([500000]);
  const [interestRate, setInterestRate] = useState([8.5]);
  const [tenure, setTenure] = useState([36]);
  
  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const P = loanAmount[0];
    const R = interestRate[0] / 12 / 100;
    const N = tenure[0];
    
    const emiCalculated = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    const totalAmountCalculated = emiCalculated * N;
    const totalInterestCalculated = totalAmountCalculated - P;
    
    setEmi(emiCalculated);
    setTotalAmount(totalAmountCalculated);
    setTotalInterest(totalInterestCalculated);
  }, [loanAmount, interestRate, tenure]);

  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Calculator */}
      <Card className="card-hover">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Calculator className="w-6 h-6 mr-2" />
            EMI Calculator
          </CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-8">
          <div className="space-y-6">
            <div className="space-y-3">
              <Label>Loan Amount (₹)</Label>
              <Slider
                value={loanAmount}
                onValueChange={setLoanAmount}
                max={2000000}
                min={50000}
                step={10000}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-600">
                <span>₹50,000</span>
                <span className="font-medium">₹{loanAmount[0].toLocaleString()}</span>
                <span>₹20,00,000</span>
              </div>
            </div>

            <div className="space-y-3">
              <Label>Interest Rate (% per annum)</Label>
              <Slider
                value={interestRate}
                onValueChange={setInterestRate}
                max={15}
                min={5}
                step={0.1}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-600">
                <span>5%</span>
                <span className="font-medium">{interestRate[0]}%</span>
                <span>15%</span>
              </div>
            </div>

            <div className="space-y-3">
              <Label>Loan Tenure (months)</Label>
              <Slider
                value={tenure}
                onValueChange={setTenure}
                max={84}
                min={12}
                step={6}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-600">
                <span>12 months</span>
                <span className="font-medium">{tenure[0]} months</span>
                <span>84 months</span>
              </div>
            </div>
          </div>

          {/* Direct Input Fields */}
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="amount-input">Amount</Label>
              <Input
                id="amount-input"
                type="number"
                value={loanAmount[0]}
                onChange={(e) => setLoanAmount([Number(e.target.value)])}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="rate-input">Rate (%)</Label>
              <Input
                id="rate-input"
                type="number"
                step="0.1"
                value={interestRate[0]}
                onChange={(e) => setInterestRate([Number(e.target.value)])}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="tenure-input">Tenure</Label>
              <Input
                id="tenure-input"
                type="number"
                value={tenure[0]}
                onChange={(e) => setTenure([Number(e.target.value)])}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      <Card className="card-hover">
        <CardHeader>
          <CardTitle className="flex items-center">
            <PieChart className="w-6 h-6 mr-2" />
            Calculation Results
          </CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-green-50 p-6 rounded-xl text-center">
              <h3 className="text-sm font-medium text-green-600 mb-2">Monthly EMI</h3>
              <p className="text-4xl font-bold text-green-800">
                ₹{Math.round(emi).toLocaleString()}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <h4 className="text-sm font-medium text-blue-600 mb-1">Principal Amount</h4>
                <p className="text-xl font-bold text-blue-800">
                  ₹{loanAmount[0].toLocaleString()}
                </p>
              </div>
              
              <div className="bg-orange-50 p-4 rounded-lg text-center">
                <h4 className="text-sm font-medium text-orange-600 mb-1">Total Interest</h4>
                <p className="text-xl font-bold text-orange-800">
                  ₹{Math.round(totalInterest).toLocaleString()}
                </p>
              </div>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg text-center">
              <h4 className="text-sm font-medium text-purple-600 mb-1">Total Amount Payable</h4>
              <p className="text-2xl font-bold text-purple-800">
                ₹{Math.round(totalAmount).toLocaleString()}
              </p>
            </div>
          </div>

          {/* Amortization Preview */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-800">Payment Breakdown</h4>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Principal Amount</span>
                <span>{((loanAmount[0] / totalAmount) * 100).toFixed(1)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: `${(loanAmount[0] / totalAmount) * 100}%` }}
                />
              </div>
              
              <div className="flex justify-between text-sm">
                <span>Interest Amount</span>
                <span>{((totalInterest / totalAmount) * 100).toFixed(1)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-orange-500 h-2 rounded-full"
                  style={{ width: `${(totalInterest / totalAmount) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}