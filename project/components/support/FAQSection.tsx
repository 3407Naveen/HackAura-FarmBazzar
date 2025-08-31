'use client';

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Search, HelpCircle } from 'lucide-react';

const faqData = [
  {
    id: 'marketplace',
    category: 'Marketplace',
    questions: [
      {
        q: 'How do I list my crops for sale?',
        a: 'Go to Marketplace > Sell Crop, upload photos of your crop, enter details like type, quantity, price, and location. Once submitted, your listing will be live within 24 hours after verification.'
      },
      {
        q: 'What commission does FarmBazzarAI charge?',
        a: 'We charge a minimal 2% commission on successful transactions to maintain the platform and provide AI-powered services. This is significantly lower than traditional middlemen charges.'
      },
      {
        q: 'How do I ensure payment security?',
        a: 'All payments are processed through our secure escrow system. Payment is released to sellers only after buyer confirmation of delivery. We support UPI, Razorpay, and bank transfers.'
      }
    ]
  },
  {
    id: 'price-prediction',
    category: 'Price Prediction',
    questions: [
      {
        q: 'How accurate are the AI price predictions?',
        a: 'Our AI models have an average accuracy of 87-92% for short-term predictions (1-3 months). We use historical data, weather patterns, market demand, and global trends for predictions.'
      },
      {
        q: 'Can I get price alerts for my crops?',
        a: 'Yes! You can set up price alerts in your dashboard. You\'ll receive notifications via app, SMS, and email when prices reach your target levels.'
      }
    ]
  },
  {
    id: 'insurance',
    category: 'Insurance',
    questions: [
      {
        q: 'How does AI verification work for insurance claims?',
        a: 'Our AI analyzes uploaded photos/videos to verify damage authenticity, assess extent of loss, and cross-reference with weather data. This speeds up processing from weeks to hours.'
      },
      {
        q: 'What types of crop damage are covered?',
        a: 'Coverage includes drought, flood, pest attacks, diseases, hailstorm, cyclone, and fire. Specific coverage depends on your policy type and location.'
      }
    ]
  },
  {
    id: 'loans',
    category: 'Loans',
    questions: [
      {
        q: 'How is my loan eligibility calculated?',
        a: 'Our AI considers factors like credit score, income stability, land ownership, crop history, repayment capacity, and market trends to calculate your eligibility score.'
      },
      {
        q: 'What documents are required for loan application?',
        a: 'Required documents include Aadhar Card, PAN Card, land records, income proof, bank statements (6 months), and crop insurance details if applicable.'
      }
    ]
  }
];

export function FAQSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredFAQs = faqData
    .map(category => ({
      ...category,
      questions: category.questions.filter(
        qa => 
          qa.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
          qa.a.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }))
    .filter(category => 
      selectedCategory ? category.id === selectedCategory : category.questions.length > 0
    );

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Search and Filters */}
      <Card className="card-hover">
        <CardContent className="p-6">
          <div className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search frequently asked questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              <Badge
                variant={selectedCategory === null ? 'default' : 'outline'}
                className="cursor-pointer"
                onClick={() => setSelectedCategory(null)}
              >
                All Categories
              </Badge>
              {faqData.map((category) => (
                <Badge
                  key={category.id}
                  variant={selectedCategory === category.id ? 'default' : 'outline'}
                  className="cursor-pointer"
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.category}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* FAQ Content */}
      {filteredFAQs.map((category) => (
        <Card key={category.id} className="card-hover">
          <CardHeader>
            <CardTitle className="flex items-center">
              <HelpCircle className="w-5 h-5 mr-2" />
              {category.category}
            </CardTitle>
          </CardHeader>
          
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {category.questions.map((qa, index) => (
                <AccordionItem key={index} value={`${category.id}-${index}`}>
                  <AccordionTrigger className="text-left">{qa.q}</AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed">
                    {qa.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      ))}

      {filteredFAQs.length === 0 && (
        <Card className="card-hover">
          <CardContent className="p-12 text-center">
            <HelpCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No results found</h3>
            <p className="text-gray-600">Try adjusting your search terms or browse all categories</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}