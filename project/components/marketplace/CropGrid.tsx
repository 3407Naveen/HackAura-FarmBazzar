'use client';

import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, ShoppingCart, Heart, Search } from 'lucide-react';
import Link from 'next/link';

const mockCrops = [
  {
    id: 1,
    name: 'Premium Basmati Rice',
    farmer: 'Rajesh Kumar',
    price: 4500,
    unit: 'quintal',
    quantity: 500,
    location: 'Punjab',
    image: 'https://images.pexels.com/photos/33239/wheat-field-wheat-cereals-grain.jpg',
    rating: 4.8,
    reviews: 24,
    category: 'cereals',
    organic: true,
    description: 'Premium quality basmati rice, aged for 2 years'
  },
  {
    id: 2,
    name: 'Fresh Tomatoes',
    farmer: 'Sunita Devi',
    price: 25,
    unit: 'kg',
    quantity: 2000,
    location: 'Karnataka',
    image: 'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg',
    rating: 4.6,
    reviews: 18,
    category: 'vegetables',
    organic: false,
    description: 'Fresh farm tomatoes, perfect for retail'
  },
  {
    id: 3,
    name: 'Turmeric Powder',
    farmer: 'Murugan S',
    price: 15200,
    unit: 'quintal',
    quantity: 50,
    location: 'Tamil Nadu',
    image: 'https://images.pexels.com/photos/4198024/pexels-photo-4198024.jpeg',
    rating: 4.9,
    reviews: 32,
    category: 'spices',
    organic: true,
    description: 'High-quality turmeric with high curcumin content'
  },
  {
    id: 4,
    name: 'Cotton Bales',
    farmer: 'Kiran Patel',
    price: 6800,
    unit: 'quintal',
    quantity: 100,
    location: 'Gujarat',
    image: 'https://images.pexels.com/photos/6129967/pexels-photo-6129967.jpeg',
    rating: 4.5,
    reviews: 15,
    category: 'cash crops',
    organic: false,
    description: 'Premium cotton bales, grade A quality'
  },
  {
    id: 5,
    name: 'Alphonso Mangoes',
    farmer: 'Prakash Jadhav',
    price: 120,
    unit: 'kg',
    quantity: 5000,
    location: 'Maharashtra',
    image: 'https://images.pexels.com/photos/2294471/pexels-photo-2294471.jpeg',
    rating: 4.7,
    reviews: 28,
    category: 'fruits',
    organic: true,
    description: 'Sweet and juicy Alphonso mangoes, export quality'
  },
  {
    id: 6,
    name: 'Green Chili',
    farmer: 'Lakshmi Reddy',
    price: 45,
    unit: 'kg',
    quantity: 1500,
    location: 'Andhra Pradesh',
    image: 'https://images.pexels.com/photos/1328894/pexels-photo-1328894.jpeg',
    rating: 4.4,
    reviews: 12,
    category: 'vegetables',
    organic: false,
    description: 'Fresh green chili, perfect heat level'
  }
];

interface CropGridProps {
  searchQuery: string;
  filters: any;
}

export function CropGrid({ searchQuery, filters }: CropGridProps) {
  const filteredCrops = mockCrops.filter(crop => {
    const matchesSearch = crop.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         crop.farmer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         crop.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = !filters.category || crop.category === filters.category;
    const matchesLocation = !filters.location || crop.location.toLowerCase() === filters.location;
    const matchesPrice = crop.price >= filters.priceRange[0] && crop.price <= filters.priceRange[1];
    
    return matchesSearch && matchesCategory && matchesLocation && matchesPrice;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-gray-600">
          {filteredCrops.length} crops found
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredCrops.map((crop) => (
          <Card key={crop.id} className="card-hover group overflow-hidden">
            <div className="relative">
              <img
                src={crop.image}
                alt={crop.name}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-3 right-3 flex space-x-2">
                {crop.organic && (
                  <Badge className="bg-green-500 text-white">Organic</Badge>
                )}
                <Button variant="ghost" size="icon" className="bg-white/80 hover:bg-white">
                  <Heart className="w-4 h-4" />
                </Button>
              </div>
            </div>
            
            <CardContent className="p-4">
              <div className="space-y-3">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-green-600 transition-colors">
                    {crop.name}
                  </h3>
                  <p className="text-sm text-gray-600">by {crop.farmer}</p>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{crop.rating}</span>
                    <span className="text-sm text-gray-500">({crop.reviews})</span>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-500">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{crop.location}</span>
                  </div>
                </div>
                
                <p className="text-sm text-gray-600 line-clamp-2">
                  {crop.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-gray-800">
                      ₹{crop.price.toLocaleString()}
                    </span>
                    <span className="text-sm text-gray-500">/{crop.unit}</span>
                  </div>
                  <Badge variant="outline">
                    {crop.quantity} {crop.unit} available
                  </Badge>
                </div>
              </div>
            </CardContent>
            
            <CardFooter className="p-4 pt-0 flex space-x-2">
              <Button 
                asChild
                variant="outline" 
                className="flex-1"
              >
                <Link href={`/marketplace/crop/${crop.id}`}>
                  View Details
                </Link>
              </Button>
              <Button className="flex-1 gradient-bg text-white">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Buy Now
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {filteredCrops.length === 0 && (
        <div className="text-center py-16">
          <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
            <Search className="w-12 h-12 text-gray-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">No crops found</h3>
          <p className="text-gray-600 mb-6">Try adjusting your filters or search terms</p>
          <Button variant="outline">Clear All Filters</Button>
        </div>
      )}
    </div>
  );
}
