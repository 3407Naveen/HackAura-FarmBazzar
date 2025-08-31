'use client';

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { FileText, Upload, CheckCircle, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';

export function LoanApplication() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Information
    fullName: '',
    fatherName: '',
    dateOfBirth: '',
    aadharNumber: '',
    panNumber: '',
    phone: '',
    email: '',
    
    // Farm Information
    farmLocation: '',
    landArea: '',
    landType: '',
    cropType: '',
    annualIncome: '',
    
    // Loan Details
    loanType: '',
    loanAmount: '',
    tenure: '',
    purpose: '',
    
    // Documents
    documents: {
      aadhar: false,
      pan: false,
      landRecords: false,
      incomeProof: false,
      bankStatements: false
    }
  });

  const steps = [
    { id: 1, title: 'Personal Info', icon: '👤' },
    { id: 2, title: 'Farm Details', icon: '🚜' },
    { id: 3, title: 'Loan Details', icon: '💰' },
    { id: 4, title: 'Documents', icon: '📄' },
    { id: 5, title: 'Review', icon: '✅' }
  ];

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    toast.success('Loan application submitted successfully! Application ID: APP' + Date.now().toString().slice(-6));
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name *</Label>
              <Input
                id="fullName"
                value={formData.fullName}
                onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                placeholder="Enter your full name"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="fatherName">Father's Name *</Label>
              <Input
                id="fatherName"
                value={formData.fatherName}
                onChange={(e) => setFormData({...formData, fatherName: e.target.value})}
                placeholder="Enter father's name"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="dateOfBirth">Date of Birth *</Label>
              <Input
                id="dateOfBirth"
                type="date"
                value={formData.dateOfBirth}
                onChange={(e) => setFormData({...formData, dateOfBirth: e.target.value})}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="aadharNumber">Aadhar Number *</Label>
              <Input
                id="aadharNumber"
                value={formData.aadharNumber}
                onChange={(e) => setFormData({...formData, aadharNumber: e.target.value})}
                placeholder="XXXX XXXX XXXX"
                maxLength={12}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="panNumber">PAN Number *</Label>
              <Input
                id="panNumber"
                value={formData.panNumber}
                onChange={(e) => setFormData({...formData, panNumber: e.target.value})}
                placeholder="ABCDE1234F"
                maxLength={10}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                placeholder="+91 9876543210"
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="farmLocation">Farm Location *</Label>
              <Input
                id="farmLocation"
                value={formData.farmLocation}
                onChange={(e) => setFormData({...formData, farmLocation: e.target.value})}
                placeholder="Village, District, State"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="landArea">Land Area (in acres) *</Label>
              <Input
                id="landArea"
                type="number"
                value={formData.landArea}
                onChange={(e) => setFormData({...formData, landArea: e.target.value})}
                placeholder="e.g., 5.5"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="landType">Land Type *</Label>
              <Select value={formData.landType} onValueChange={(value) => setFormData({...formData, landType: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select land type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="irrigated">Irrigated</SelectItem>
                  <SelectItem value="rain-fed">Rain-fed</SelectItem>
                  <SelectItem value="mixed">Mixed</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="cropType">Primary Crop *</Label>
              <Select value={formData.cropType} onValueChange={(value) => setFormData({...formData, cropType: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select primary crop" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="wheat">Wheat</SelectItem>
                  <SelectItem value="rice">Rice</SelectItem>
                  <SelectItem value="cotton">Cotton</SelectItem>
                  <SelectItem value="sugarcane">Sugarcane</SelectItem>
                  <SelectItem value="pulses">Pulses</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="annualIncome">Annual Agricultural Income (₹) *</Label>
              <Input
                id="annualIncome"
                type="number"
                value={formData.annualIncome}
                onChange={(e) => setFormData({...formData, annualIncome: e.target.value})}
                placeholder="e.g., 200000"
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="loanType">Loan Type *</Label>
                <Select value={formData.loanType} onValueChange={(value) => setFormData({...formData, loanType: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select loan type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="crop">Crop Loan</SelectItem>
                    <SelectItem value="equipment">Equipment Loan</SelectItem>
                    <SelectItem value="land">Land Purchase Loan</SelectItem>
                    <SelectItem value="working-capital">Working Capital</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="loanAmount">Loan Amount (₹) *</Label>
                <Input
                  id="loanAmount"
                  type="number"
                  value={formData.loanAmount}
                  onChange={(e) => setFormData({...formData, loanAmount: e.target.value})}
                  placeholder="e.g., 100000"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="tenure">Loan Tenure *</Label>
                <Select value={formData.tenure} onValueChange={(value) => setFormData({...formData, tenure: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select tenure" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="12">12 months</SelectItem>
                    <SelectItem value="24">24 months</SelectItem>
                    <SelectItem value="36">36 months</SelectItem>
                    <SelectItem value="48">48 months</SelectItem>
                    <SelectItem value="60">60 months</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="purpose">Purpose of Loan *</Label>
              <Textarea
                id="purpose"
                value={formData.purpose}
                onChange={(e) => setFormData({...formData, purpose: e.target.value})}
                placeholder="Describe how you plan to use the loan amount..."
                rows={4}
              />
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                <div>
                  <h4 className="font-medium text-blue-800">Document Requirements</h4>
                  <p className="text-sm text-blue-700 mt-1">
                    Please upload clear, high-quality scans or photos of the required documents.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {[
                { key: 'aadhar', label: 'Aadhar Card', required: true },
                { key: 'pan', label: 'PAN Card', required: true },
                { key: 'landRecords', label: 'Land Records', required: true },
                { key: 'incomeProof', label: 'Income Proof', required: false },
                { key: 'bankStatements', label: 'Bank Statements (6 months)', required: true }
              ].map((doc) => (
                <div key={doc.key} className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <Checkbox
                        checked={formData.documents[doc.key as keyof typeof formData.documents]}
                        onCheckedChange={(checked) => 
                          setFormData({
                            ...formData, 
                            documents: { ...formData.documents, [doc.key]: checked }
                          })
                        }
                      />
                      <div>
                        <span className="font-medium">{doc.label}</span>
                        {doc.required && <span className="text-red-500 ml-1">*</span>}
                      </div>
                    </div>
                    
                    {formData.documents[doc.key as keyof typeof formData.documents] ? (
                      <Badge className="bg-green-500">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Uploaded
                      </Badge>
                    ) : (
                      <Button variant="outline" size="sm">
                        <Upload className="w-4 h-4 mr-2" />
                        Upload
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-800 mb-4">Application Summary</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div>
                    <span className="text-sm text-gray-600">Applicant Name:</span>
                    <p className="font-medium">{formData.fullName || 'Not provided'}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">Loan Type:</span>
                    <p className="font-medium">{formData.loanType || 'Not selected'}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">Loan Amount:</span>
                    <p className="font-medium">₹{formData.loanAmount ? Number(formData.loanAmount).toLocaleString() : '0'}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <span className="text-sm text-gray-600">Farm Location:</span>
                    <p className="font-medium">{formData.farmLocation || 'Not provided'}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">Tenure:</span>
                    <p className="font-medium">{formData.tenure ? formData.tenure + ' months' : 'Not selected'}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">Primary Crop:</span>
                    <p className="font-medium">{formData.cropType || 'Not selected'}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <span className="text-sm text-gray-600">Documents Status:</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {Object.entries(formData.documents).map(([key, uploaded]) => (
                    <Badge key={key} variant={uploaded ? 'default' : 'outline'} className={uploaded ? 'bg-green-500' : ''}>
                      {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                      {uploaded && <CheckCircle className="w-3 h-3 ml-1" />}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-medium text-blue-800 mb-2">Terms and Conditions</h4>
              <div className="flex items-start space-x-2">
                <Checkbox id="terms" />
                <label htmlFor="terms" className="text-sm text-blue-700 leading-relaxed">
                  I agree to the terms and conditions, privacy policy, and authorize FarmBazzarAI 
                  to process my application and verify the provided information.
                </label>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Card className="card-hover max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center">
          <FileText className="w-6 h-6 mr-2" />
          Loan Application
        </CardTitle>
        
        {/* Progress Steps */}
        <div className="flex items-center justify-between mt-6">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                currentStep >= step.id 
                  ? 'bg-green-500 text-white' 
                  : 'bg-gray-200 text-gray-600'
              }`}>
                {currentStep > step.id ? '✓' : step.id}
              </div>
              <span className="text-sm font-medium text-gray-700 ml-2 hidden sm:block">
                {step.title}
              </span>
              {index < steps.length - 1 && (
                <div className={`hidden sm:block w-12 h-1 mx-4 ${
                  currentStep > step.id ? 'bg-green-500' : 'bg-gray-200'
                }`} />
              )}
            </div>
          ))}
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Step {currentStep}: {steps[currentStep - 1].title}
            </h3>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
              <div 
                className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / steps.length) * 100}%` }}
              />
            </div>
          </div>

          {renderStepContent()}

          <div className="flex justify-between">
            <Button 
              variant="outline" 
              onClick={handlePrevious}
              disabled={currentStep === 1}
            >
              Previous
            </Button>
            
            {currentStep === 5 ? (
              <Button onClick={handleSubmit} className="gradient-bg text-white">
                Submit Application
              </Button>
            ) : (
              <Button onClick={handleNext} className="gradient-bg text-white">
                Next Step
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}