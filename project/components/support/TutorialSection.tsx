'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, Clock, BookOpen, Video } from 'lucide-react';

const tutorials = [
  {
    id: 1,
    title: 'Getting Started with FarmBazzarAI',
    description: 'Complete guide to setting up your account and understanding platform features',
    duration: '8 min',
    difficulty: 'Beginner',
    category: 'Getting Started',
    thumbnail: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg',
    views: 1250
  },
  {
    id: 2,
    title: 'How to List and Sell Your Crops',
    description: 'Step-by-step tutorial on creating compelling crop listings that attract buyers',
    duration: '12 min',
    difficulty: 'Beginner',
    category: 'Marketplace',
    thumbnail: 'https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg',
    views: 980
  },
  {
    id: 3,
    title: 'Understanding AI Price Predictions',
    description: 'Learn how to interpret price forecasts and make informed selling decisions',
    duration: '15 min',
    difficulty: 'Intermediate',
    category: 'Price Prediction',
    thumbnail: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpg',
    views: 756
  },
  {
    id: 4,
    title: 'Filing Insurance Claims Effectively',
    description: 'Best practices for documenting crop damage and filing successful claims',
    duration: '10 min',
    difficulty: 'Intermediate',
    category: 'Insurance',
    thumbnail: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg',
    views: 654
  },
  {
    id: 5,
    title: 'Loan Application Process',
    description: 'Complete guide to applying for agricultural loans and improving eligibility',
    duration: '18 min',
    difficulty: 'Intermediate',
    category: 'Loans',
    thumbnail: 'https://images.pexels.com/photos/259804/pexels-photo-259804.jpeg',
    views: 892
  },
  {
    id: 6,
    title: 'Advanced Dashboard Features',
    description: 'Maximize your earnings with advanced analytics and dashboard tools',
    duration: '20 min',
    difficulty: 'Advanced',
    category: 'Dashboard',
    thumbnail: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpg',
    views: 423
  }
];

const categories = ['All', 'Getting Started', 'Marketplace', 'Price Prediction', 'Insurance', 'Loans', 'Dashboard'];
const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];

export function TutorialSection() {
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = React.useState('All');

  const filteredTutorials = tutorials.filter(tutorial => {
    const matchesCategory = selectedCategory === 'All' || tutorial.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'All' || tutorial.difficulty === selectedDifficulty;
    return matchesCategory && matchesDifficulty;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Filters */}
      <Card className="card-hover">
        <CardContent className="p-6">
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">Categories</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Badge
                    key={category}
                    variant={selectedCategory === category ? 'default' : 'outline'}
                    className="cursor-pointer"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">Difficulty Level</h3>
              <div className="flex flex-wrap gap-2">
                {difficulties.map((difficulty) => (
                  <Badge
                    key={difficulty}
                    variant={selectedDifficulty === difficulty ? 'default' : 'outline'}
                    className="cursor-pointer"
                    onClick={() => setSelectedDifficulty(difficulty)}
                  >
                    {difficulty}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tutorial Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTutorials.map((tutorial) => (
          <Card key={tutorial.id} className="card-hover group overflow-hidden">
            <div className="relative">
              <img
                src={tutorial.thumbnail}
                alt={tutorial.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Button 
                  size="icon" 
                  className="w-16 h-16 rounded-full bg-white/90 hover:bg-white text-green-600 hover:text-green-700"
                >
                  <Play className="w-8 h-8" />
                </Button>
              </div>
              <div className="absolute top-3 right-3">
                <Badge className="bg-black/50 text-white">
                  <Video className="w-3 h-3 mr-1" />
                  {tutorial.duration}
                </Badge>
              </div>
            </div>
            
            <CardContent className="p-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Badge variant="outline">{tutorial.category}</Badge>
                  <Badge className={getDifficultyColor(tutorial.difficulty)}>
                    {tutorial.difficulty}
                  </Badge>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-green-600 transition-colors line-clamp-2">
                  {tutorial.title}
                </h3>
                
                <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                  {tutorial.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{tutorial.duration}</span>
                  </div>
                  <span>{tutorial.views.toLocaleString()} views</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredTutorials.length === 0 && (
        <Card className="card-hover">
          <CardContent className="p-12 text-center">
            <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No tutorials found</h3>
            <p className="text-gray-600">Try selecting different categories or difficulty levels</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}