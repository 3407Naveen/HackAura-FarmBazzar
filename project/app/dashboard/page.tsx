'use client';

import React from 'react';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { DashboardOverview } from '@/components/dashboard/DashboardOverview';
import { CropManagement } from '@/components/dashboard/CropManagement';
import { TransactionHistory } from '@/components/dashboard/TransactionHistory';
import { LoanStatus } from '@/components/dashboard/LoanStatus';
import { useAuth } from '@/contexts/AuthContext';
import { redirect } from 'next/navigation';

export default function DashboardPage() {
  const { user } = useAuth();

  if (!user) {
    redirect('/');
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
          <p className="text-gray-600 mt-1">Welcome back, {user.name}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <DashboardOverview />
            <CropManagement />
            <TransactionHistory />
          </div>
          
          <div className="lg:col-span-1 space-y-8">
            <LoanStatus />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}