'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface Notification {
  id: string;
  type: 'price' | 'weather' | 'system' | 'loan' | 'insurance';
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
  priority: 'low' | 'medium' | 'high';
}

interface NotificationContextType {
  notifications: Notification[];
  unreadCount: number;
  markAsRead: (id: string) => void;
  markAllAsRead: () => void;
  addNotification: (notification: Omit<Notification, 'id' | 'timestamp' | 'read'>) => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export function NotificationProvider({ children }: { children: React.ReactNode }) {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      type: 'price',
      title: 'Price Alert',
      message: 'Wheat prices increased by 12% in your region',
      timestamp: new Date(Date.now() - 1000 * 60 * 30),
      read: false,
      priority: 'high'
    },
    {
      id: '2',
      type: 'weather',
      title: 'Weather Update',
      message: 'Heavy rainfall expected in the next 48 hours',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2),
      read: false,
      priority: 'medium'
    },
    {
      id: '3',
      type: 'system',
      title: 'New Feature',
      message: 'AI crop recommendation system is now available',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24),
      read: true,
      priority: 'low'
    }
  ]);

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAsRead = (id: string) => {
    setNotifications(prev => 
      prev.map(n => n.id === id ? { ...n, read: true } : n)
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(n => ({ ...n, read: true }))
    );
  };

  const addNotification = (notificationData: Omit<Notification, 'id' | 'timestamp' | 'read'>) => {
    const newNotification: Notification = {
      ...notificationData,
      id: Date.now().toString(),
      timestamp: new Date(),
      read: false
    };
    setNotifications(prev => [newNotification, ...prev]);
  };

  return (
    <NotificationContext.Provider value={{
      notifications,
      unreadCount,
      markAsRead,
      markAllAsRead,
      addNotification
    }}>
      {children}
    </NotificationContext.Provider>
  );
}

export function useNotifications() {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error('useNotifications must be used within a NotificationProvider');
  }
  return context;
}