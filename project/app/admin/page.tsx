'use client';

import React from 'react';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { AdminOverview } from '@/components/admin/AdminOverview';
import { UserManagement } from '@/components/admin/UserManagement';
import { CropManagement } from '@/components/admin/CropManagement';
import { LoanApprovals } from '@/components/admin/LoanApprovals';
import { DisputeResolution } from '@/components/admin/DisputeResolution';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/contexts/AuthContext';
import { redirect } from 'next/navigation';

export default function AdminPage() {
  const { user } = useAuth();

  if (!user || user.role !== 'admin') {
    redirect('/');
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Admin Panel</h1>
          <p className="text-gray-600 mt-1">Manage platform operations and user activities</p>
        </div>

        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full md:w-auto grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="crops">Crops</TabsTrigger>
            <TabsTrigger value="loans">Loans</TabsTrigger>
            <TabsTrigger value="disputes">Disputes</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <AdminOverview />
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            <UserManagement />
          </TabsContent>

          <TabsContent value="crops" className="space-y-6">
            <CropManagement />
          </TabsContent>

          <TabsContent value="loans" className="space-y-6">
            <LoanApprovals />
          </TabsContent>

          <TabsContent value="disputes" className="space-y-6">
            <DisputeResolution />
          </TabsContent>
        </Tabs>
      </main>
      
      <Footer />
    </div>
  );
}