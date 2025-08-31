'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Shield, FileText, Calendar, AlertTriangle, CheckCircle } from 'lucide-react';

const insurancePolicies = [
  {
    id: 'POL001',
    crop: 'Wheat',
    area: 10,
    sumInsured: 250000,
    premium: 12500,
    status: 'active',
    startDate: new Date('2024-11-01'),
    endDate: new Date('2025-10-31'),
    coverage: ['Drought', 'Flood', 'Pest Attack', 'Hailstorm']
  },
  {
    id: 'POL002',
    crop: 'Cotton',
    area: 5,
    sumInsured: 150000,
    premium: 7500,
    status: 'active',
    startDate: new Date('2024-12-01'),
    endDate: new Date('2025-11-30'),
    coverage: ['Drought', 'Flood', 'Disease']
  }
];

const recentClaims = [
  {
    id: 'CLM001',
    type: 'Drought Damage',
    amount: 45000,
    status: 'approved',
    date: new Date('2025-01-10'),
    policy: 'POL001'
  },
  {
    id: 'CLM002',
    type: 'Pest Attack',
    amount: 18000,
    status: 'processing',
    date: new Date('2025-01-12'),
    policy: 'POL002'
  }
];

export function InsuranceOverview() {
  return (
    <div className="space-y-8">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="card-hover">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <h3 className="text-sm font-medium text-gray-600 mb-1">Total Coverage</h3>
            <p className="text-2xl font-bold text-gray-800">₹4,00,000</p>
          </CardContent>
        </Card>

        <Card className="card-hover">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <h3 className="text-sm font-medium text-gray-600 mb-1">Active Policies</h3>
            <p className="text-2xl font-bold text-gray-800">2</p>
          </CardContent>
        </Card>

        <Card className="card-hover">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-orange-600" />
              </div>
            </div>
            <h3 className="text-sm font-medium text-gray-600 mb-1">Pending Claims</h3>
            <p className="text-2xl font-bold text-gray-800">1</p>
          </CardContent>
        </Card>

        <Card className="card-hover">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-purple-600" />
              </div>
            </div>
            <h3 className="text-sm font-medium text-gray-600 mb-1">Claims Settled</h3>
            <p className="text-2xl font-bold text-gray-800">₹45,000</p>
          </CardContent>
        </Card>
      </div>

      {/* Active Policies */}
      <Card className="card-hover">
        <CardHeader>
          <CardTitle>Active Insurance Policies</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {insurancePolicies.map((policy) => (
              <div key={policy.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">{policy.crop} Insurance</h4>
                    <p className="text-sm text-gray-600">Policy ID: {policy.id}</p>
                  </div>
                  <Badge className="bg-green-500">Active</Badge>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-600">Coverage Area</p>
                    <p className="font-semibold">{policy.area} acres</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Sum Insured</p>
                    <p className="font-semibold">₹{policy.sumInsured.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Premium Paid</p>
                    <p className="font-semibold">₹{policy.premium.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Valid Until</p>
                    <p className="font-semibold">{policy.endDate.toLocaleDateString()}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">Coverage Includes:</p>
                  <div className="flex flex-wrap gap-2">
                    {policy.coverage.map((cover, index) => (
                      <Badge key={index} variant="outline">{cover}</Badge>
                    ))}
                  </div>
                </div>
                
                <Button variant="outline" size="sm">
                  View Policy Details
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Claims */}
      <Card className="card-hover">
        <CardHeader>
          <CardTitle>Recent Claims</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentClaims.map((claim) => (
              <div key={claim.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    claim.status === 'approved' ? 'bg-green-100' : 'bg-yellow-100'
                  }`}>
                    {claim.status === 'approved' ? (
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    ) : (
                      <AlertTriangle className="w-5 h-5 text-yellow-600" />
                    )}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{claim.type}</h4>
                    <p className="text-sm text-gray-600">
                      ₹{claim.amount.toLocaleString()} • {claim.date.toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <Badge 
                  variant={claim.status === 'approved' ? 'default' : 'secondary'}
                  className={claim.status === 'approved' ? 'bg-green-500' : ''}
                >
                  {claim.status}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}