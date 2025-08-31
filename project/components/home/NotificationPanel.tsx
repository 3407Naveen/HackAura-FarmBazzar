'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useNotifications } from '@/contexts/NotificationContext';
import { Bell, TrendingUp, Cloud, AlertTriangle } from 'lucide-react';
import Link from 'next/link';

const iconMap = {
  price: TrendingUp,
  weather: Cloud,
  system: Bell,
  loan: AlertTriangle,
  insurance: AlertTriangle
};

const typeColors = {
  price: 'bg-green-100 text-green-800',
  weather: 'bg-blue-100 text-blue-800',
  system: 'bg-gray-100 text-gray-800',
  loan: 'bg-purple-100 text-purple-800',
  insurance: 'bg-orange-100 text-orange-800'
};

export function NotificationPanel() {
  const { notifications, markAsRead, unreadCount } = useNotifications();
  const recentNotifications = notifications.slice(0, 5);
  const [clientSide, setClientSide] = useState(false);

  useEffect(() => {
    setClientSide(true);
  }, []);

  return (
    <Card className="card-hover">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-xl font-semibold flex items-center">
          <Bell className="w-5 h-5 mr-2" />
          Notifications
          {unreadCount > 0 && (
            <Badge className="ml-2 bg-red-500">{unreadCount}</Badge>
          )}
        </CardTitle>
        <Button variant="ghost" size="sm" asChild>
          <Link href="/notifications">View All</Link>
        </Button>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {recentNotifications.length > 0 ? (
          <>
            {recentNotifications.map((notification) => {
              const Icon = iconMap[notification.type];
              return (
                <div
                  key={notification.id}
                  className={`p-4 rounded-lg border-l-4 ${
                    notification.read 
                      ? 'bg-gray-50 border-gray-300' 
                      : 'bg-blue-50 border-blue-500'
                  } cursor-pointer hover:bg-gray-100 transition-colors`}
                  onClick={() => markAsRead(notification.id)}
                >
                  <div className="flex items-start space-x-3">
                    <Icon className="w-5 h-5 text-gray-600 mt-0.5" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="text-sm font-medium text-gray-900 truncate">
                          {notification.title}
                        </h4>
                        <Badge 
                          variant="outline" 
                          className={`text-xs ${typeColors[notification.type]}`}
                        >
                          {notification.type}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {notification.message}
                      </p>
                      <p className="text-xs text-gray-500 mt-2">
                        {clientSide ? notification.timestamp.toLocaleString() : ''}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <div className="text-center py-8">
            <Bell className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">No notifications yet</p>
          </div>
        )}

        {/* Quick Weather & Price Updates */}
        <div className="mt-6 space-y-3">
          <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium">Today's Wheat Price</span>
            </div>
            <span className="text-green-600 font-semibold">₹2,150/quintal</span>
          </div>
          
          <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
            <div className="flex items-center space-x-2">
              <Cloud className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium">Weather Today</span>
            </div>
            <span className="text-blue-600 font-semibold">26°C, Sunny</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
