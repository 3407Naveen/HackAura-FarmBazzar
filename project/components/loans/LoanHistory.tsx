'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Eye, Download, Calendar } from 'lucide-react';

const loanHistory = [
  {
    id: 'LOAN001',
    type: 'Crop Loan',
    amount: 150000,
    disbursedAmount: 150000,
    outstandingAmount: 85000,
    tenure: 24,
    completedMonths: 8,
    interestRate: 8.5,
    emi: 8500,
    status: 'active',
    disbursedDate: new Date('2024-06-15'),
    nextDueDate: new Date('2025-02-15')
  },
  {
    id: 'LOAN002',
    type: 'Equipment Loan',
    amount: 300000,
    disbursedAmount: 300000,
    outstandingAmount: 0,
    tenure: 36,
    completedMonths: 36,
    interestRate: 9.5,
    emi: 12500,
    status: 'completed',
    disbursedDate: new Date('2021-01-10'),
    completedDate: new Date('2024-01-10')
  },
  {
    id: 'LOAN003',
    type: 'Working Capital',
    amount: 75000,
    disbursedAmount: 0,
    outstandingAmount: 0,
    tenure: 12,
    completedMonths: 0,
    interestRate: 7.5,
    emi: 0,
    status: 'rejected',
    appliedDate: new Date('2024-12-01'),
    rejectedDate: new Date('2024-12-05')
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'active': return 'bg-green-500';
    case 'completed': return 'bg-blue-500';
    case 'rejected': return 'bg-red-500';
    case 'processing': return 'bg-yellow-500';
    default: return 'bg-gray-500';
  }
};

export function LoanHistory() {
  return (
    <Card className="card-hover">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Calendar className="w-6 h-6 mr-2" />
          Loan History
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-6">
          {loanHistory.map((loan) => (
            <div key={loan.id} className="border rounded-lg p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">{loan.type}</h4>
                  <p className="text-sm text-gray-600">Loan ID: {loan.id}</p>
                </div>
                <Badge className={`${getStatusColor(loan.status)} text-white`}>
                  {loan.status.charAt(0).toUpperCase() + loan.status.slice(1)}
                </Badge>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-600">Loan Amount</p>
                  <p className="text-lg font-semibold">₹{loan.amount.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Interest Rate</p>
                  <p className="text-lg font-semibold">{loan.interestRate}% p.a.</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">EMI</p>
                  <p className="text-lg font-semibold">
                    {loan.emi > 0 ? `₹${loan.emi.toLocaleString()}` : '-'}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Tenure</p>
                  <p className="text-lg font-semibold">{loan.tenure} months</p>
                </div>
              </div>

              {loan.status === 'active' && (
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span>Repayment Progress</span>
                    <span>{loan.completedMonths}/{loan.tenure} months</span>
                  </div>
                  <Progress value={(loan.completedMonths / loan.tenure) * 100} className="h-2" />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Outstanding: ₹{loan.outstandingAmount.toLocaleString()}</span>
                    <span>Next Due: {loan.nextDueDate?.toLocaleDateString()}</span>
                  </div>
                </div>
              )}

              <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                <span>
                  {loan.status === 'completed' && loan.completedDate ? 
                    `Completed: ${loan.completedDate.toLocaleDateString()}` :
                    loan.status === 'rejected' && loan.rejectedDate ?
                    `Rejected: ${loan.rejectedDate.toLocaleDateString()}` :
                    `Disbursed: ${loan.disbursedDate.toLocaleDateString()}`
                  }
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm">
                  <Eye className="w-4 h-4 mr-2" />
                  View Details
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Download Statement
                </Button>
                {loan.status === 'active' && (
                  <Button variant="outline" size="sm" className="text-green-600 border-green-600 hover:bg-green-50">
                    Make Payment
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}