'use client';

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, XCircle, Clock, Eye, FileText, User, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';

const loanApplications = [
  {
    id: 'APP001',
    applicant: 'Ramesh Kumar',
    email: 'ramesh.kumar@email.com',
    loanType: 'Crop Loan',
    amount: 200000,
    tenure: 24,
    purpose: 'Wheat cultivation and equipment purchase',
    eligibilityScore: 85,
    status: 'pending',
    submittedDate: new Date('2025-01-15'),
    documents: {
      aadhar: true,
      pan: true,
      landRecords: true,
      incomeProof: true,
      bankStatements: false
    },
    aiRecommendation: 'approve',
    riskScore: 'low'
  },
  {
    id: 'APP002',
    applicant: 'Suresh Patel',
    email: 'suresh.patel@email.com',
    loanType: 'Equipment Loan',
    amount: 500000,
    tenure: 36,
    purpose: 'Purchase of tractor and farming equipment',
    eligibilityScore: 72,
    status: 'under_review',
    submittedDate: new Date('2025-01-12'),
    documents: {
      aadhar: true,
      pan: true,
      landRecords: true,
      incomeProof: false,
      bankStatements: true
    },
    aiRecommendation: 'conditional',
    riskScore: 'medium'
  },
  {
    id: 'APP003',
    applicant: 'Lakshmi Reddy',
    email: 'lakshmi.reddy@email.com',
    loanType: 'Working Capital',
    amount: 75000,
    tenure: 12,
    purpose: 'Seeds and fertilizer purchase for next season',
    eligibilityScore: 91,
    status: 'approved',
    submittedDate: new Date('2025-01-08'),
    approvedDate: new Date('2025-01-10'),
    documents: {
      aadhar: true,
      pan: true,
      landRecords: true,
      incomeProof: true,
      bankStatements: true
    },
    aiRecommendation: 'approve',
    riskScore: 'low'
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'pending': return 'bg-yellow-500';
    case 'under_review': return 'bg-blue-500';
    case 'approved': return 'bg-green-500';
    case 'rejected': return 'bg-red-500';
    default: return 'bg-gray-500';
  }
};

const getRiskColor = (risk: string) => {
  switch (risk) {
    case 'low': return 'text-green-600 border-green-600';
    case 'medium': return 'text-yellow-600 border-yellow-600';
    case 'high': return 'text-red-600 border-red-600';
    default: return 'text-gray-600 border-gray-600';
  }
};

const getRecommendationColor = (recommendation: string) => {
  switch (recommendation) {
    case 'approve': return 'bg-green-100 text-green-800';
    case 'conditional': return 'bg-yellow-100 text-yellow-800';
    case 'reject': return 'bg-red-100 text-red-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

export function LoanApprovals() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const filteredApplications = loanApplications.filter(app => {
    const matchesSearch = app.applicant.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         app.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || app.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleApprove = (appId: string) => {
    console.log('Approving application:', appId);
  };

  const handleReject = (appId: string) => {
    console.log('Rejecting application:', appId);
  };

  return (
    <Card className="card-hover">
      <CardHeader>
        <CardTitle className="flex items-center">
          <FileText className="w-6 h-6 mr-2" />
          Loan Applications
        </CardTitle>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search applications..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Applications</SelectItem>
              <SelectItem value="pending">Pending Review</SelectItem>
              <SelectItem value="under_review">Under Review</SelectItem>
              <SelectItem value="approved">Approved</SelectItem>
              <SelectItem value="rejected">Rejected</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-6">
          {filteredApplications.map((application) => (
            <div key={application.id} className="border rounded-lg p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">{application.applicant}</h4>
                  <p className="text-sm text-gray-600">Application ID: {application.id}</p>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Badge className={`${getStatusColor(application.status)} text-white`}>
                    {application.status.replace('_', ' ')}
                  </Badge>
                  <Badge variant="outline" className={getRecommendationColor(application.aiRecommendation)}>
                    AI: {application.aiRecommendation}
                  </Badge>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-600">Loan Type</p>
                  <p className="font-semibold">{application.loanType}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Amount</p>
                  <p className="font-semibold">₹{application.amount.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Tenure</p>
                  <p className="font-semibold">{application.tenure} months</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Submitted</p>
                  <p className="font-semibold">{application.submittedDate.toLocaleDateString()}</p>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-2">Purpose:</p>
                <p className="text-sm text-gray-800">{application.purpose}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-xs text-blue-600 font-medium">Eligibility Score</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <Progress value={application.eligibilityScore} className="flex-1 h-2" />
                    <span className="text-sm font-bold text-blue-800">{application.eligibilityScore}%</span>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-xs text-gray-600 font-medium">Risk Assessment</p>
                  <Badge variant="outline" className={`mt-1 ${getRiskColor(application.riskScore)}`}>
                    {application.riskScore} risk
                  </Badge>
                </div>
                
                <div className="bg-purple-50 p-3 rounded-lg">
                  <p className="text-xs text-purple-600 font-medium">Document Status</p>
                  <p className="text-sm font-bold text-purple-800">
                    {Object.values(application.documents).filter(Boolean).length}/5 uploaded
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-sm text-gray-600">Documents:</span>
                {Object.entries(application.documents).map(([doc, uploaded]) => (
                  <Badge 
                    key={doc} 
                    variant={uploaded ? 'default' : 'outline'}
                    className={uploaded ? 'bg-green-500' : 'text-red-600 border-red-600'}
                  >
                    {doc.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                  </Badge>
                ))}
              </div>

              {application.status === 'pending' && (
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm">
                    <Eye className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                  <Button 
                    size="sm" 
                    className="bg-green-500 hover:bg-green-600 text-white"
                    onClick={() => handleApprove(application.id)}
                  >
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Approve
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="text-red-600 border-red-600 hover:bg-red-50"
                    onClick={() => handleReject(application.id)}
                  >
                    <XCircle className="w-4 h-4 mr-2" />
                    Reject
                  </Button>
                  <Button variant="outline" size="sm">
                    Request More Info
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}