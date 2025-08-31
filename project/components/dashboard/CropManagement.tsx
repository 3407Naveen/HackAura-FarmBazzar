'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MoreHorizontal, Edit, Trash2, Eye, TrendingUp } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

const myCrops = [
  {
    id: 1,
    name: 'Basmati Rice',
    quantity: 500,
    unit: 'quintal',
    price: 4500,
    status: 'active',
    views: 45,
    inquiries: 8,
    image: 'https://images.pexels.com/photos/33239/wheat-field-wheat-cereals-grain.jpg'
  },
  {
    id: 2,
    name: 'Wheat',
    quantity: 200,
    unit: 'quintal',
    price: 2150,
    status: 'sold',
    views: 32,
    inquiries: 12,
    image: 'https://images.pexels.com/photos/326082/pexels-photo-326082.jpeg'
  },
  {
    id: 3,
    name: 'Cotton',
    quantity: 100,
    unit: 'quintal',
    price: 6800,
    status: 'pending',
    views: 18,
    inquiries: 3,
    image: 'https://images.pexels.com/photos/6129967/pexels-photo-6129967.jpeg'
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'active': return 'bg-green-500';
    case 'sold': return 'bg-blue-500';
    case 'pending': return 'bg-yellow-500';
    default: return 'bg-gray-500';
  }
};

export function CropManagement() {
  return (
    <Card className="card-hover">
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <CardTitle className="text-xl">My Crop Listings</CardTitle>
        <Button className="gradient-bg text-white">
          Add New Listing
        </Button>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-4">
          {myCrops.map((crop) => (
            <div key={crop.id} className="flex items-center space-x-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
              <img
                src={crop.image}
                alt={crop.name}
                className="w-16 h-16 rounded-lg object-cover"
              />
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-lg font-semibold text-gray-800">{crop.name}</h4>
                  <Badge className={`${getStatusColor(crop.status)} text-white`}>
                    {crop.status.charAt(0).toUpperCase() + crop.status.slice(1)}
                  </Badge>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Quantity:</span>
                    <p className="font-medium">{crop.quantity} {crop.unit}</p>
                  </div>
                  <div>
                    <span className="text-gray-600">Price:</span>
                    <p className="font-medium">₹{crop.price.toLocaleString()}</p>
                  </div>
                  <div>
                    <span className="text-gray-600">Views:</span>
                    <p className="font-medium">{crop.views}</p>
                  </div>
                  <div>
                    <span className="text-gray-600">Inquiries:</span>
                    <p className="font-medium">{crop.inquiries}</p>
                  </div>
                </div>
              </div>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <Eye className="w-4 h-4 mr-2" />
                    View Details
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Edit className="w-4 h-4 mr-2" />
                    Edit Listing
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Price Analytics
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-red-600">
                    <Trash2 className="w-4 h-4 mr-2" />
                    Delete Listing
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}