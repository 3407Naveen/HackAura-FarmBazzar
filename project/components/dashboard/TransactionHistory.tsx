'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight, ArrowDownLeft, Calendar } from 'lucide-react';

const transactions = [
  {
    id: 'TXN001',
    type: 'sale',
    crop: 'Wheat',
    amount: 64500,
    quantity: '30 quintal',
    buyer: 'ABC Traders',
    date: new Date('2025-01-15'),
    status: 'completed'
  },
  {
    id: 'TXN002',
    type: 'purchase',
    crop: 'Seeds',
    amount: 12000,
    quantity: '50 kg',
    seller: 'Kisan Seeds Co.',
    date: new Date('2025-01-12'),
    status: 'completed'
  },
  {
    id: 'TXN003',
    type: 'sale',
    crop: 'Cotton',
    amount: 85000,
    quantity: '12.5 quintal',
    buyer: 'Gujarat Ginning Mill',
    date: new Date('2025-01-10'),
    status: 'pending'
  },
  {
    id: 'TXN004',
    type: 'purchase',
    crop: 'Fertilizer',
    amount: 8500,
    quantity: '200 kg',
    seller: 'Agro Solutions',
    date: new Date('2025-01-08'),
    status: 'completed'
  }
];

export function TransactionHistory() {
  return (
    <Card className="card-hover">
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <CardTitle className="text-xl flex items-center">
          <Calendar className="w-5 h-5 mr-2" />
          Recent Transactions
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center space-x-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                transaction.type === 'sale' ? 'bg-green-100' : 'bg-blue-100'
              }`}>
                {transaction.type === 'sale' ? (
                  <ArrowUpRight className="w-6 h-6 text-green-600" />
                ) : (
                  <ArrowDownLeft className="w-6 h-6 text-blue-600" />
                )}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-lg font-semibold text-gray-800">
                    {transaction.type === 'sale' ? 'Sold' : 'Purchased'} {transaction.crop}
                  </h4>
                  <Badge 
                    variant={transaction.status === 'completed' ? 'default' : 'secondary'}
                    className={transaction.status === 'completed' ? 'bg-green-500' : ''}
                  >
                    {transaction.status}
                  </Badge>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm text-gray-600">
                  <div>
                    <span className="font-medium">Amount: </span>
                    <span className={`font-bold ${
                      transaction.type === 'sale' ? 'text-green-600' : 'text-blue-600'
                    }`}>
                      ₹{transaction.amount.toLocaleString()}
                    </span>
                  </div>
                  <div>
                    <span className="font-medium">Quantity: </span>
                    <span>{transaction.quantity}</span>
                  </div>
                  <div>
                    <span className="font-medium">
                      {transaction.type === 'sale' ? 'Buyer' : 'Seller'}: 
                    </span>
                    <span> {transaction.type === 'sale' ? transaction.buyer : transaction.seller}</span>
                  </div>
                </div>
                
                <p className="text-xs text-gray-500 mt-2">
                  {transaction.date.toLocaleDateString()} • ID: {transaction.id}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}