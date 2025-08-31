'use client';

import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';

const crops = [
  { value: 'wheat', label: 'Wheat' },
  { value: 'rice', label: 'Rice' },
  { value: 'cotton', label: 'Cotton' },
  { value: 'sugarcane', label: 'Sugarcane' },
  { value: 'turmeric', label: 'Turmeric' },
  { value: 'tomato', label: 'Tomato' },
  { value: 'onion', label: 'Onion' },
  { value: 'potato', label: 'Potato' }
];

interface CropSelectorProps {
  selectedCrop: string;
  onCropChange: (crop: string) => void;
}

export function CropSelector({ selectedCrop, onCropChange }: CropSelectorProps) {
  return (
    <div className="space-y-2 flex-1">
      <Label htmlFor="crop-select">Select Crop</Label>
      <Select value={selectedCrop} onValueChange={onCropChange}>
        <SelectTrigger className="h-12">
          <SelectValue placeholder="Choose a crop" />
        </SelectTrigger>
        <SelectContent>
          {crops.map((crop) => (
            <SelectItem key={crop.value} value={crop.value}>
              {crop.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}