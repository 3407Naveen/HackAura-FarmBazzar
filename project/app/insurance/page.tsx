'use client';

import React, { useState } from 'react';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { InsuranceOverview } from '@/components/insurance/InsuranceOverview';
import { ClaimForm } from '@/components/insurance/ClaimForm';
import { ClaimHistory } from '@/components/insurance/ClaimHistory';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function InsurancePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Insurance</h1>
          <p className="text-gray-600 mt-1">Manage your crop insurance and claims</p>
        </div>

        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full md:w-auto grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="new-claim">New Claim</TabsTrigger>
            <TabsTrigger value="history">Claim History</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <InsuranceOverview />
          </TabsContent>

          <TabsContent value="new-claim" className="space-y-6">
            <ClaimForm />
          </TabsContent>

          <TabsContent value="history" className="space-y-6">
            <ClaimHistory />
          </TabsContent>
        </Tabs>
      </main>
      
      <Footer />
    </div>
  );
}