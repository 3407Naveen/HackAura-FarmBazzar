'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Filter, X } from 'lucide-react';

interface Filters {
  category: string;
  priceRange: number[];
  location: string;
  sortBy: string;
}

interface FilterSidebarProps {
  filters: Filters;
  onFiltersChange: (filters: Filters) => void;
}

const categories = [
  'Cereals',
  'Pulses',
  'Vegetables',
  'Fruits',
  'Spices',
  'Cash Crops',
  'Fodder'
];

const locations = [
  'Punjab',
  'Haryana',
  'Maharashtra',
  'Karnataka',
  'Gujarat',
  'Tamil Nadu',
  'Uttar Pradesh',
  'Rajasthan'
];

export function FilterSidebar({ filters, onFiltersChange }: FilterSidebarProps) {
  const clearFilters = () => {
    onFiltersChange({
      category: 'all-categories',
      priceRange: [0, 10000],
      location: 'all-locations',
      sortBy: 'newest'
    });
  };

  const hasActiveFilters = filters.category !== 'all-categories' || filters.location !== 'all-locations' || filters.priceRange[1] < 10000;

  return (
    <Card className="sticky top-4">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="flex items-center text-lg">
          <Filter className="w-5 h-5 mr-2" />
          Filters
        </CardTitle>
        {hasActiveFilters && (
          <Button variant="ghost" size="sm" onClick={clearFilters} className="text-red-600">
            <X className="w-4 h-4 mr-1" />
            Clear
          </Button>
        )}
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Category Filter */}
        <div className="space-y-3">
          <Label className="text-sm font-medium">Category</Label>
          <Select 
            value={filters.category} 
            onValueChange={(value) => onFiltersChange({ ...filters, category: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-categories">All Categories</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category} value={category.toLowerCase()}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Price Range */}
        <div className="space-y-3">
          <Label className="text-sm font-medium">
            Price Range (₹/quintal)
          </Label>
          <div className="px-2">
            <Slider
              value={filters.priceRange}
              onValueChange={(value) => onFiltersChange({ ...filters, priceRange: value })}
              max={10000}
              min={0}
              step={100}
              className="w-full"
            />
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>₹{filters.priceRange[0]}</span>
            <span>₹{filters.priceRange[1]}</span>
          </div>
        </div>

        {/* Location Filter */}
        <div className="space-y-3">
          <Label className="text-sm font-medium">Location</Label>
          <Select 
            value={filters.location} 
            onValueChange={(value) => onFiltersChange({ ...filters, location: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="All Locations" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-locations">All Locations</SelectItem>
              {locations.map((location) => (
                <SelectItem key={location} value={location.toLowerCase()}>
                  {location}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Sort By */}
        <div className="space-y-3">
          <Label className="text-sm font-medium">Sort By</Label>
          <Select 
            value={filters.sortBy} 
            onValueChange={(value) => onFiltersChange({ ...filters, sortBy: value })}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
              <SelectItem value="location">Nearest First</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Active Filters */}
        {hasActiveFilters && (
          <div className="space-y-2">
            <Label className="text-sm font-medium">Active Filters</Label>
            <div className="flex flex-wrap gap-2">
              {filters.category !== 'all-categories' && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  {filters.category}
                  <X 
                    className="w-3 h-3 cursor-pointer" 
                    onClick={() => onFiltersChange({ ...filters, category: 'all-categories' })}
                  />
                </Badge>
              )}
              {filters.location !== 'all-locations' && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  {filters.location}
                  <X 
                    className="w-3 h-3 cursor-pointer" 
                    onClick={() => onFiltersChange({ ...filters, location: 'all-locations' })}
                  />
                </Badge>
              )}
              {filters.priceRange[1] < 10000 && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  ₹{filters.priceRange[0]}-{filters.priceRange[1]}
                  <X 
                    className="w-3 h-3 cursor-pointer" 
                    onClick={() => onFiltersChange({ ...filters, priceRange: [0, 10000] })}
                  />
                </Badge>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}