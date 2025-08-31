'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, ShoppingCart, CreditCard, AlertTriangle, TrendingUp, DollarSign } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const platformStats = [
  {
    title: 'Total Users',
    value: '12,547',
    change: '+8.2%',
    icon: Users,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100'
  },
  {
    title: 'Active Listings',
    value: '3,429',
    change: '+15.3%',
    icon: ShoppingCart,
    color: 'text-green-600',
    bgColor: 'bg-green-100'
  },
  {
    title: 'Loan Applications',
    value: '856',
    change: '+12.7%',
    icon: CreditCard,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100'
  },
  {
    title: 'Pending Reviews',
    value: '47',
    change: '-23.1%',
    icon: AlertTriangle,
    color: 'text-orange-600',
    bgColor: 'bg-orange-100'
  },
  {
    title: 'Monthly Revenue',
    value: '₹2.4L',
    change: '+18.9%',
    icon: DollarSign,
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-100'
  },
  {
    title: 'Platform Growth',
    value: '24.5%',
    change: '+5.2%',
    icon: TrendingUp,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-100'
  }
];

const monthlyData = [
  { month: 'Jan', users: 8500, transactions: 1200, revenue: 180000 },
  { month: 'Feb', users: 9200, transactions: 1350, revenue: 195000 },
  { month: 'Mar', users: 9800, transactions: 1480, revenue: 210000 },
  { month: 'Apr', users: 10500, transactions: 1620, revenue: 225000 },
  { month: 'May', users: 11200, transactions: 1750, revenue: 240000 },
  { month: 'Jun', users: 12547, transactions: 1890, revenue: 265000 }
];

const categoryData = [
  { category: 'Cereals', listings: 1250, sales: 890 },
  { category: 'Vegetables', listings: 980, sales: 750 },
  { category: 'Fruits', listings: 650, sales: 520 },
  { category: 'Spices', listings: 420, sales: 380 },
  { category: 'Cash Crops', listings: 320, sales: 280 }
];

export function AdminOverview() {
  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {platformStats.map((stat, index) => (
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
                    {stat.change} from last month
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

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="card-hover">
          <CardHeader>
            <CardTitle>Platform Growth</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="users" stroke="#3b82f6" strokeWidth={3} />
                  <Line type="monotone" dataKey="transactions" stroke="#22c55e" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="card-hover">
          <CardHeader>
            <CardTitle>Category Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={categoryData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="category" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="listings" fill="#3b82f6" />
                  <Bar dataKey="sales" fill="#22c55e" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activities */}
      <Card className="card-hover">
        <CardHeader>
          <CardTitle>Recent Platform Activities</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { action: 'New user registration', user: 'Ramesh Kumar (Farmer)', time: '2 minutes ago', type: 'user' },
              { action: 'Crop listing approved', user: 'Wheat - 500 quintals', time: '5 minutes ago', type: 'listing' },
              { action: 'Loan application submitted', user: 'Suresh Patel - ₹2,00,000', time: '12 minutes ago', type: 'loan' },
              { action: 'Insurance claim processed', user: 'CLM001 - ₹45,000 approved', time: '25 minutes ago', type: 'insurance' },
              { action: 'Payment completed', user: 'TXN001 - ₹1,25,000', time: '1 hour ago', type: 'payment' }
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-center space-x-3">
                  <div className={`w-2 h-2 rounded-full ${
                    activity.type === 'user' ? 'bg-blue-500' :
                    activity.type === 'listing' ? 'bg-green-500' :
                    activity.type === 'loan' ? 'bg-purple-500' :
                    activity.type === 'insurance' ? 'bg-orange-500' :
                    'bg-gray-500'
                  }`} />
                  <div>
                    <p className="font-medium text-gray-800">{activity.action}</p>
                    <p className="text-sm text-gray-600">{activity.user}</p>
                  </div>
                </div>
                <span className="text-sm text-gray-500">{activity.time}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}