'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { AlertTriangle, MessageCircle, User, Calendar, FileText, Eye } from 'lucide-react';

const disputes = [
  {
    id: 'DIS001',
    title: 'Quality Issue with Rice Purchase',
    complainant: 'ABC Traders',
    respondent: 'Rajesh Kumar',
    type: 'quality',
    amount: 125000,
    status: 'open',
    priority: 'high',
    submittedDate: new Date('2025-01-14'),
    description: 'Received rice quality does not match the listing description. Moisture content is higher than specified.',
    evidence: ['photo1.jpg', 'quality_report.pdf'],
    lastActivity: new Date('2025-01-15')
  },
  {
    id: 'DIS002',
    title: 'Payment Delay Issue',
    complainant: 'Sunita Devi',
    respondent: 'XYZ Merchants',
    type: 'payment',
    amount: 85000,
    status: 'investigating',
    priority: 'medium',
    submittedDate: new Date('2025-01-12'),
    description: 'Payment not received even after 7 days of delivery confirmation.',
    evidence: ['delivery_receipt.jpg', 'communication_screenshots.pdf'],
    lastActivity: new Date('2025-01-14')
  },
  {
    id: 'DIS003',
    title: 'Delivery Quantity Mismatch',
    complainant: 'Gujarat Mills',
    respondent: 'Kiran Patel',
    type: 'quantity',
    amount: 340000,
    status: 'resolved',
    priority: 'low',
    submittedDate: new Date('2025-01-08'),
    resolvedDate: new Date('2025-01-11'),
    description: 'Delivered cotton quantity was 15% less than ordered amount.',
    evidence: ['weighing_slip.jpg', 'transport_receipt.pdf'],
    resolution: 'Partial refund of ₹51,000 processed',
    lastActivity: new Date('2025-01-11')
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'open': return 'bg-red-500';
    case 'investigating': return 'bg-yellow-500';
    case 'resolved': return 'bg-green-500';
    case 'escalated': return 'bg-purple-500';
    default: return 'bg-gray-500';
  }
};

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'high': return 'text-red-600 border-red-600';
    case 'medium': return 'text-yellow-600 border-yellow-600';
    case 'low': return 'text-green-600 border-green-600';
    default: return 'text-gray-600 border-gray-600';
  }
};

export function DisputeResolution() {
  const [selectedDispute, setSelectedDispute] = React.useState<string | null>(null);

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="card-hover">
          <CardContent className="p-6 text-center">
            <AlertTriangle className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Open Disputes</h3>
            <p className="text-3xl font-bold text-red-600">2</p>
          </CardContent>
        </Card>

        <Card className="card-hover">
          <CardContent className="p-6 text-center">
            <MessageCircle className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Under Review</h3>
            <p className="text-3xl font-bold text-yellow-600">1</p>
          </CardContent>
        </Card>

        <Card className="card-hover">
          <CardContent className="p-6 text-center">
            <User className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Resolved</h3>
            <p className="text-3xl font-bold text-green-600">15</p>
          </CardContent>
        </Card>

        <Card className="card-hover">
          <CardContent className="p-6 text-center">
            <Calendar className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Avg Resolution</h3>
            <p className="text-3xl font-bold text-blue-600">3.2</p>
            <p className="text-sm text-gray-600">days</p>
          </CardContent>
        </Card>
      </div>

      {/* Disputes List */}
      <Card className="card-hover">
        <CardHeader>
          <CardTitle>Active Disputes</CardTitle>
        </CardHeader>
        
        <CardContent>
          <div className="space-y-6">
            {disputes.map((dispute) => (
              <div key={dispute.id} className="border rounded-lg p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">{dispute.title}</h4>
                    <p className="text-sm text-gray-600">Dispute ID: {dispute.id}</p>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline" className={getPriorityColor(dispute.priority)}>
                      {dispute.priority} priority
                    </Badge>
                    <Badge className={`${getStatusColor(dispute.status)} text-white`}>
                      {dispute.status.replace('_', ' ')}
                    </Badge>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-600">Complainant</p>
                    <p className="font-semibold">{dispute.complainant}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Respondent</p>
                    <p className="font-semibold">{dispute.respondent}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Amount Involved</p>
                    <p className="font-semibold">₹{dispute.amount.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Submitted</p>
                    <p className="font-semibold">{dispute.submittedDate.toLocaleDateString()}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">Description:</p>
                  <p className="text-sm text-gray-800 bg-gray-50 p-3 rounded-lg">
                    {dispute.description}
                  </p>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">Evidence Files:</p>
                  <div className="flex flex-wrap gap-2">
                    {dispute.evidence.map((file, index) => (
                      <Badge key={index} variant="outline" className="cursor-pointer hover:bg-gray-100">
                        <FileText className="w-3 h-3 mr-1" />
                        {file}
                      </Badge>
                    ))}
                  </div>
                </div>

                {dispute.status === 'resolved' && dispute.resolution && (
                  <div className="mb-4 bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="text-sm font-medium text-green-800 mb-1">Resolution:</p>
                    <p className="text-sm text-green-700">{dispute.resolution}</p>
                    <p className="text-xs text-green-600 mt-2">
                      Resolved on {dispute.resolvedDate?.toLocaleDateString()}
                    </p>
                  </div>
                )}

                {dispute.status !== 'resolved' && (
                  <div className="space-y-4">
                    <Textarea
                      placeholder="Add your response or resolution notes..."
                      rows={3}
                    />
                    
                    <div className="flex flex-wrap gap-2">
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4 mr-2" />
                        View Full Details
                      </Button>
                      <Button variant="outline" size="sm">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Contact Parties
                      </Button>
                      {dispute.status === 'open' && (
                        <Button size="sm" className="bg-blue-500 hover:bg-blue-600 text-white">
                          Start Investigation
                        </Button>
                      )}
                      {dispute.status === 'investigating' && (
                        <>
                          <Button size="sm" className="bg-green-500 hover:bg-green-600 text-white">
                            Resolve in Favor of Complainant
                          </Button>
                          <Button size="sm" className="bg-purple-500 hover:bg-purple-600 text-white">
                            Resolve in Favor of Respondent
                          </Button>
                          <Button variant="outline" size="sm" className="text-red-600 border-red-600">
                            Escalate
                          </Button>
                        </>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}