'use client';

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Upload, Camera, FileText, AlertCircle, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

export function ClaimForm() {
  const [formData, setFormData] = useState({
    policyId: '',
    damageType: '',
    estimatedLoss: '',
    incidentDate: '',
    description: '',
    location: '',
    witnessContact: ''
  });
  
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast.success('Insurance claim submitted successfully! Claim ID: CLM' + Date.now().toString().slice(-6));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const fileNames = files.map(file => file.name);
    setUploadedFiles(prev => [...prev, ...fileNames]);
    toast.success(`${files.length} file(s) uploaded successfully`);
  };

  return (
    <Card className="card-hover max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center">
          <FileText className="w-6 h-6 mr-2" />
          File Insurance Claim
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="policyId">Policy ID</Label>
              <Select value={formData.policyId} onValueChange={(value) => setFormData({...formData, policyId: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your policy" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="POL001">POL001 - Wheat Insurance</SelectItem>
                  <SelectItem value="POL002">POL002 - Cotton Insurance</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="damageType">Type of Damage</Label>
              <Select value={formData.damageType} onValueChange={(value) => setFormData({...formData, damageType: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select damage type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="drought">Drought</SelectItem>
                  <SelectItem value="flood">Flood</SelectItem>
                  <SelectItem value="pest">Pest Attack</SelectItem>
                  <SelectItem value="disease">Plant Disease</SelectItem>
                  <SelectItem value="hailstorm">Hailstorm</SelectItem>
                  <SelectItem value="cyclone">Cyclone</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="estimatedLoss">Estimated Loss Amount (₹)</Label>
              <Input
                id="estimatedLoss"
                type="number"
                placeholder="Enter estimated loss"
                value={formData.estimatedLoss}
                onChange={(e) => setFormData({...formData, estimatedLoss: e.target.value})}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="incidentDate">Incident Date</Label>
              <Input
                id="incidentDate"
                type="date"
                value={formData.incidentDate}
                onChange={(e) => setFormData({...formData, incidentDate: e.target.value})}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Farm Location</Label>
              <Input
                id="location"
                type="text"
                placeholder="Village, District, State"
                value={formData.location}
                onChange={(e) => setFormData({...formData, location: e.target.value})}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="witnessContact">Witness Contact (Optional)</Label>
              <Input
                id="witnessContact"
                type="tel"
                placeholder="+91 9876543210"
                value={formData.witnessContact}
                onChange={(e) => setFormData({...formData, witnessContact: e.target.value})}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Describe the Incident</Label>
            <Textarea
              id="description"
              placeholder="Provide detailed description of the damage and circumstances..."
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              rows={4}
              required
            />
          </div>

          {/* File Upload Section */}
          <div className="space-y-4">
            <Label>Upload Evidence</Label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-green-500 transition-colors">
              <div className="space-y-4">
                <div className="flex justify-center space-x-4">
                  <Upload className="w-12 h-12 text-gray-400" />
                  <Camera className="w-12 h-12 text-gray-400" />
                </div>
                <div>
                  <p className="text-lg font-medium text-gray-700">Upload Photos and Videos</p>
                  <p className="text-sm text-gray-500">
                    Upload clear images/videos of the damaged crops (Max 10 files, 5MB each)
                  </p>
                </div>
                <input
                  type="file"
                  multiple
                  accept="image/*,video/*"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="file-upload"
                />
                <Button asChild variant="outline" className="mt-4">
                  <label htmlFor="file-upload" className="cursor-pointer">
                    Choose Files
                  </label>
                </Button>
              </div>
            </div>

            {uploadedFiles.length > 0 && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-medium text-green-800 mb-2">Uploaded Files:</h4>
                <ul className="space-y-1">
                  {uploadedFiles.map((file, index) => (
                    <li key={index} className="text-sm text-green-700 flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      {file}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* AI Verification Notice */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
              <div>
                <h4 className="font-medium text-blue-800">AI Verification Process</h4>
                <p className="text-sm text-blue-700 mt-1">
                  Your uploaded evidence will be analyzed by our AI system to verify authenticity 
                  and assess damage extent. This typically takes 2-4 hours and helps expedite your claim processing.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-4">
            <Button variant="outline">Save as Draft</Button>
            <Button type="submit" className="gradient-bg text-white">
              Submit Claim
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}