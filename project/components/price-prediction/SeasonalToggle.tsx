'use client';

import React from 'react';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Calendar } from 'lucide-react';

interface SeasonalToggleProps {
  enabled: boolean;
  onToggle: (enabled: boolean) => void;
}

export function SeasonalToggle({ enabled, onToggle }: SeasonalToggleProps) {
  return (
    <div className="flex items-center space-x-3 p-4 bg-white rounded-lg border">
      <Calendar className="w-5 h-5 text-gray-600" />
      <div className="flex-1">
        <Label htmlFor="seasonal-toggle" className="text-sm font-medium">
          Seasonal Analysis
        </Label>
        <p className="text-xs text-gray-500">Include seasonal patterns in predictions</p>
      </div>
      <Switch
        id="seasonal-toggle"
        checked={enabled}
        onCheckedChange={onToggle}
      />
    </div>
  );
}