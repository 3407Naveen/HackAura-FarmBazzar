'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { TrendingUp, ShoppingCart, CreditCard, Shield, Wallet, Users } from 'lucide-react';

const stats = [
  {
    title: 'Total Earnings',
    value: '₹2,45,000',
    change: '+12.5%',
    icon: Wallet,
    color: 'text-green-600',
    bgColor: 'bg-green-100'
  },
  {
    title: 'Active Listings',
    value: '8',
    change: '+2',
    icon: ShoppingCart,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100'
  },
  {
    title: 'Pending Loans',
    value: '₹1,50,000',
    change: '-₹20k',
    icon: CreditCard,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100'
  },
  {
    title: 'Insurance Claims',
    value: '2',
    change: 'Processing',
    icon: Shield,
    color: 'text-orange-600',
    bgColor: 'bg-orange-100'
  },
  {
    title: 'Market Reach',
    value: '1,250',
    change: '+85',
    icon: Users,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-100'
  },
  {
    title: 'Price Alerts',
    value: '5',
    change: 'Active',
    icon: TrendingUp,
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-100'
  }
];

export function DashboardOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <Card key={index} className="card-hover">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">
                  {stat.title}
                </p>
                <p className="text-2xl font-bold text-gray-800">
                  {stat.value}
                </p>
                <p className={`text-sm font-medium mt-1 ${stat.color}`}>
                  {stat.change}
                </p>
              </div>
              <div className={`w-12 h-12 ${stat.bgColor} rounded-xl flex items-center justify-center`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}