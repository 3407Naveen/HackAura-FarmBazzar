'use client';

import React, { useState } from 'react';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { ChatBot } from '@/components/support/ChatBot';
import { FAQSection } from '@/components/support/FAQSection';
import { ContactForm } from '@/components/support/ContactForm';
import { TutorialSection } from '@/components/support/TutorialSection';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Help & Support</h1>
          <p className="text-gray-600 mt-1">Get assistance with multilingual support and comprehensive resources</p>
        </div>

        <Tabs defaultValue="chat" className="space-y-8">
          <TabsList className="grid w-full md:w-auto grid-cols-4">
            <TabsTrigger value="chat">Live Chat</TabsTrigger>
            <TabsTrigger value="faq">FAQs</TabsTrigger>
            <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
            <TabsTrigger value="contact">Contact Us</TabsTrigger>
          </TabsList>

          <TabsContent value="chat" className="space-y-6">
            <ChatBot />
          </TabsContent>

          <TabsContent value="faq" className="space-y-6">
            <FAQSection />
          </TabsContent>

          <TabsContent value="tutorials" className="space-y-6">
            <TutorialSection />
          </TabsContent>

          <TabsContent value="contact" className="space-y-6">
            <ContactForm />
          </TabsContent>
        </Tabs>
      </main>
      
      <Footer />
    </div>
  );
}