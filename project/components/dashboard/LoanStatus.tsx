'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { CreditCard, Calendar, AlertCircle } from 'lucide-react';
import Link from 'next/link';

const loanData = {
  totalAmount: 150000,
  remainingAmount: 85000,
  monthlyEMI: 8500,
  nextDueDate: new Date('2025-02-15'),
  status: 'active',
  interestRate: 8.5,
  tenure: 24,
  completedMonths: 8
};

export function LoanStatus() {
  const progressPercentage = ((loanData.totalAmount - loanData.remainingAmount) / loanData.totalAmount) * 100;
  const daysUntilDue = Math.ceil((loanData.nextDueDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));

  return (
    <Card className="card-hover">
      <CardHeader>
        <CardTitle className="flex items-center">
          <CreditCard className="w-5 h-5 mr-2" />
          Loan Status
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Loan Progress</span>
            <Badge className="bg-green-500">Active</Badge>
          </div>
          
          <Progress value={progressPercentage} className="h-3" />
          
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Paid: ₹{(loanData.totalAmount - loanData.remainingAmount).toLocaleString()}</span>
            <span className="text-gray-600">Remaining: ₹{loanData.remainingAmount.toLocaleString()}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-50 p-3 rounded-lg">
            <p className="text-xs text-blue-600 font-medium">Monthly EMI</p>
            <p className="text-lg font-bold text-blue-800">₹{loanData.monthlyEMI.toLocaleString()}</p>
          </div>
          
          <div className="bg-orange-50 p-3 rounded-lg">
            <p className="text-xs text-orange-600 font-medium">Interest Rate</p>
            <p className="text-lg font-bold text-orange-800">{loanData.interestRate}% p.a.</p>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <AlertCircle className="w-4 h-4 text-yellow-600" />
            <span className="text-sm font-medium text-yellow-800">Next Payment Due</span>
          </div>
          <p className="text-lg font-bold text-yellow-800">
            {loanData.nextDueDate.toLocaleDateString()}
          </p>
          <p className="text-sm text-yellow-600">
            {daysUntilDue} days remaining
          </p>
        </div>

        <div className="space-y-2">
          <Button asChild className="w-full gradient-bg text-white">
            <Link href="/loans/payment">
              Make Payment
            </Link>
          </Button>
          
          <Button asChild variant="outline" className="w-full">
            <Link href="/loans/history">
              View Payment History
            </Link>
          </Button>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-medium text-gray-800 mb-2">Loan Details</h4>
          <div className="space-y-1 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Total Amount:</span>
              <span className="font-medium">₹{loanData.totalAmount.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Tenure:</span>
              <span className="font-medium">{loanData.tenure} months</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Completed:</span>
              <span className="font-medium">{loanData.completedMonths}/{loanData.tenure} months</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}