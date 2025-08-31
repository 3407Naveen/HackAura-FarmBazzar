'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, ShoppingCart, Heart, User } from 'lucide-react';
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
    description: 'Premium quality basmati rice, aged for 2 years. Excellent aroma and long grains perfect for export quality. Grown using traditional farming methods.'
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
    description: 'Fresh farm tomatoes, perfect for retail. Rich in lycopene and vitamins. Harvested this morning for maximum freshness.'
  }
];

interface CropListProps {
  searchQuery: string;
  filters: any;
}

export function CropList({ searchQuery, filters }: CropListProps) {
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
    <div className="space-y-4">
      {filteredCrops.map((crop) => (
        <Card key={crop.id} className="card-hover group">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Image */}
              <div className="md:w-48 md:h-32 w-full h-48 flex-shrink-0">
                <img
                  src={crop.image}
                  alt={crop.name}
                  className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Content */}
              <div className="flex-1 space-y-4">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <h3 className="text-xl font-semibold text-gray-800 group-hover:text-green-600 transition-colors">
                        {crop.name}
                      </h3>
                      {crop.organic && (
                        <Badge className="bg-green-500 text-white">Organic</Badge>
                      )}
                    </div>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{crop.farmer}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{crop.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span>{crop.rating} ({crop.reviews} reviews)</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {crop.description}
                    </p>
                  </div>
                  
                  {/* Price and Actions */}
                  <div className="lg:text-right space-y-4">
                    <div>
                      <div className="text-3xl font-bold text-gray-800">
                        ₹{crop.price.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-500">per {crop.unit}</div>
                      <Badge variant="outline" className="mt-1">
                        {crop.quantity} {crop.unit} available
                      </Badge>
                    </div>
                    
                    <div className="flex lg:flex-col gap-2">
                      <Button 
                        asChild
                        variant="outline" 
                        className="flex-1 lg:w-full"
                      >
                        <Link href={`/marketplace/crop/${crop.id}`}>
                          View Details
                        </Link>
                      </Button>
                      <Button className="flex-1 lg:w-full gradient-bg text-white">
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Buy Now
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Heart className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}