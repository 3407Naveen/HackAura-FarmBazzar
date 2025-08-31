'use client';

import React from 'react';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { LoanOverview } from '@/components/loans/LoanOverview';
import { LoanApplication } from '@/components/loans/LoanApplication';
import { EMICalculator } from '@/components/loans/EMICalculator';
import { LoanHistory } from '@/components/loans/LoanHistory';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function LoansPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Loan Services</h1>
          <p className="text-gray-600 mt-1">Agricultural loan assistance with AI-powered eligibility assessment</p>
        </div>

        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full md:w-auto grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="apply">Apply</TabsTrigger>
            <TabsTrigger value="calculator">EMI Calculator</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <LoanOverview />
          </TabsContent>

          <TabsContent value="apply" className="space-y-6">
            <LoanApplication />
          </TabsContent>

          <TabsContent value="calculator" className="space-y-6">
            <EMICalculator />
          </TabsContent>

          <TabsContent value="history" className="space-y-6">
            <LoanHistory />
          </TabsContent>
        </Tabs>
      </main>
      
      <Footer />
    </div>
  );
}