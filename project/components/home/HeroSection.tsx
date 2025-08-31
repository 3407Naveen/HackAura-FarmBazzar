'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, Shield, Banknote } from 'lucide-react';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-50 to-blue-50 py-20">
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gradient">Smart Farming</span>
            <br />
            <span className="text-gray-800">Made Simple</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            Harness the power of AI for crop price prediction, seamless marketplace trading, 
            insurance claims, and loan assistance - all in one platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              asChild
              size="lg" 
              className="gradient-bg text-white px-8 py-4 text-lg font-semibold hover:opacity-90 transition-opacity"
            >
              <Link href="/marketplace">
                Start Trading Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            
            <Button 
              asChild
              variant="outline" 
              size="lg"
              className="px-8 py-4 text-lg border-2 hover:bg-gray-50"
            >
              <Link href="/price-prediction">
                View Price Predictions
              </Link>
            </Button>
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white rounded-2xl p-6 shadow-lg card-hover">
              <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mb-4 mx-auto">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Price Prediction</h3>
              <p className="text-gray-600">
                Get accurate crop price forecasts powered by machine learning and market analysis.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg card-hover">
              <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Insurance</h3>
              <p className="text-gray-600">
                Streamlined insurance claims with AI verification and fast processing.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg card-hover">
              <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Banknote className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Loans</h3>
              <p className="text-gray-600">
                Access agricultural loans with AI-powered eligibility assessment and quick approval.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}