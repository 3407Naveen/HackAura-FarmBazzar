'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Eye, Download, MessageCircle } from 'lucide-react';

const claimHistory = [
  {
    id: 'CLM001',
    type: 'Drought Damage',
    crop: 'Wheat',
    amount: 45000,
    claimedAmount: 45000,
    status: 'approved',
    submittedDate: new Date('2025-01-10'),
    processedDate: new Date('2025-01-14'),
    policyId: 'POL001',
    aiVerification: 'passed',
    documents: 5
  },
  {
    id: 'CLM002',
    type: 'Pest Attack',
    crop: 'Cotton',
    amount: 18000,
    claimedAmount: 0,
    status: 'processing',
    submittedDate: new Date('2025-01-12'),
    processedDate: null,
    policyId: 'POL002',
    aiVerification: 'pending',
    documents: 3
  },
  {
    id: 'CLM003',
    type: 'Hailstorm',
    crop: 'Tomato',
    amount: 25000,
    claimedAmount: 22000,
    status: 'partially_approved',
    submittedDate: new Date('2024-12-20'),
    processedDate: new Date('2024-12-28'),
    policyId: 'POL003',
    aiVerification: 'passed',
    documents: 7
  },
  {
    id: 'CLM004',
    type: 'Flood',
    crop: 'Rice',
    amount: 80000,
    claimedAmount: 0,
    status: 'rejected',
    submittedDate: new Date('2024-11-15'),
    processedDate: new Date('2024-11-22'),
    policyId: 'POL004',
    aiVerification: 'failed',
    documents: 2
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'approved': return 'bg-green-500';
    case 'processing': return 'bg-yellow-500';
    case 'partially_approved': return 'bg-blue-500';
    case 'rejected': return 'bg-red-500';
    default: return 'bg-gray-500';
  }
};

const getStatusText = (status: string) => {
  switch (status) {
    case 'approved': return 'Approved';
    case 'processing': return 'Processing';
    case 'partially_approved': return 'Partially Approved';
    case 'rejected': return 'Rejected';
    default: return 'Unknown';
  }
};

export function ClaimHistory() {
  return (
    <Card className="card-hover">
      <CardHeader>
        <CardTitle>Claim History</CardTitle>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-6">
          {claimHistory.map((claim) => (
            <div key={claim.id} className="border rounded-lg p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">{claim.type}</h4>
                  <p className="text-sm text-gray-600">Claim ID: {claim.id} • Policy: {claim.policyId}</p>
                </div>
                <Badge className={`${getStatusColor(claim.status)} text-white`}>
                  {getStatusText(claim.status)}
                </Badge>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-600">Crop Affected</p>
                  <p className="font-semibold">{claim.crop}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Claimed Amount</p>
                  <p className="font-semibold">₹{claim.amount.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Settled Amount</p>
                  <p className="font-semibold text-green-600">
                    {claim.claimedAmount > 0 ? `₹${claim.claimedAmount.toLocaleString()}` : '-'}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">AI Verification</p>
                  <Badge 
                    variant="outline" 
                    className={`text-xs ${
                      claim.aiVerification === 'passed' ? 'text-green-600 border-green-600' :
                      claim.aiVerification === 'failed' ? 'text-red-600 border-red-600' :
                      'text-yellow-600 border-yellow-600'
                    }`}
                  >
                    {claim.aiVerification}
                  </Badge>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                <span>Submitted: {claim.submittedDate.toLocaleDateString()}</span>
                {claim.processedDate && (
                  <span>Processed: {claim.processedDate.toLocaleDateString()}</span>
                )}
                <span>{claim.documents} documents uploaded</span>
              </div>

              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm">
                  <Eye className="w-4 h-4 mr-2" />
                  View Details
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Download Report
                </Button>
                {claim.status === 'processing' && (
                  <Button variant="outline" size="sm">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Contact Support
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}