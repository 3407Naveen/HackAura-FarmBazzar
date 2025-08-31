'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  ShoppingCart, 
  CreditCard, 
  Shield, 
  TrendingUp, 
  Plus, 
  Search 
} from 'lucide-react';

const quickActions = [
  {
    title: 'Sell Your Crop',
    description: 'List your harvest and connect with buyers',
    icon: Plus,
    href: '/marketplace',
    color: 'bg-green-500 hover:bg-green-600',
    iconColor: 'text-white'
  },
  {
    title: 'Buy Crops',
    description: 'Find quality crops at best prices',
    icon: Search,
    href: '/marketplace',
    color: 'bg-blue-500 hover:bg-blue-600',
    iconColor: 'text-white'
  },
  {
    title: 'Get Loan',
    description: 'Quick agricultural loan assistance',
    icon: CreditCard,
    href: '/loans',
    color: 'bg-purple-500 hover:bg-purple-600',
    iconColor: 'text-white'
  },
  {
    title: 'Claim Insurance',
    description: 'File insurance claims easily',
    icon: Shield,
    href: '/insurance',
    color: 'bg-orange-500 hover:bg-orange-600',
    iconColor: 'text-white'
  },
  {
    title: 'Price Trends',
    description: 'AI-powered market insights',
    icon: TrendingUp,
    href: '/price-prediction',
    color: 'bg-emerald-500 hover:bg-emerald-600',
    iconColor: 'text-white'
  },
  {
    title: 'Marketplace',
    description: 'Browse all available crops',
    icon: ShoppingCart,
    href: '/marketplace',
    color: 'bg-indigo-500 hover:bg-indigo-600',
    iconColor: 'text-white'
  }
];

export function QuickActions() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What would you like to do today?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Quick access to all your farming needs - from selling crops to getting loans and insurance support.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {quickActions.map((action, index) => (
            <Card key={action.title} className="card-hover group cursor-pointer">
              <Link href={action.href}>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className={`w-16 h-16 ${action.color} rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110`}>
                      <action.icon className={`w-8 h-8 ${action.iconColor}`} />
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-gray-800 group-hover:text-green-600 transition-colors">
                        {action.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {action.description}
                      </p>
                    </div>
                    
                    <Button 
                      variant="ghost" 
                      className="text-green-600 hover:text-green-700 hover:bg-green-50 transition-all duration-200"
                    >
                      Get Started →
                    </Button>
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}