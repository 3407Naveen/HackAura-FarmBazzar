'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, Send, Bot, User, Globe, Mic, MicOff } from 'lucide-react';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  language: string;
}

const quickReplies = {
  en: [
    'How to sell crops?',
    'Check crop prices',
    'Apply for loan',
    'File insurance claim',
    'Payment issues'
  ],
  hi: [
    'फसल कैसे बेचें?',
    'फसल की कीमत जांचें',
    'लोन के लिए आवेदन',
    'बीमा दावा दाखिल करें',
    'भुगतान की समस्या'
  ],
  ta: [
    'பயிர் எப்படி விற்பது?',
    'பயிர் விலைகளை சரிபார்க்கவும்',
    'கடனுக்கு விண்ணப்பிக்கவும்',
    'காப்பீட்டு கோரிக்கை',
    'பணம் செலுத்தும் பிரச்சினைகள்'
  ]
};

export function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Hello! I\'m your FarmBazzarAI assistant. How can I help you today?',
      sender: 'bot',
      timestamp: new Date(),
      language: 'en'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = (content: string) => {
    if (!content.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      sender: 'user',
      timestamp: new Date(),
      language: selectedLanguage
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse = generateBotResponse(content, selectedLanguage);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: botResponse,
        sender: 'bot',
        timestamp: new Date(),
        language: selectedLanguage
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const generateBotResponse = (userMessage: string, language: string): string => {
    const responses = {
      en: {
        price: 'Current wheat price in your region is ₹2,150 per quintal. It has increased by 5% this week. Would you like to see detailed price trends?',
        sell: 'To sell your crops: 1) Go to Marketplace > Sell Crop 2) Upload crop photos 3) Set your price 4) Add crop details 5) Publish listing. Need help with any specific step?',
        loan: 'For loan application: 1) Check your eligibility score 2) Choose loan type 3) Fill application form 4) Upload documents 5) Submit for review. Your current eligibility score is 85%.',
        insurance: 'To file insurance claim: 1) Select your policy 2) Choose damage type 3) Upload evidence photos/videos 4) Fill incident details 5) Submit for AI verification.',
        default: 'I can help you with crop selling, price checking, loan applications, insurance claims, and more. What specific assistance do you need?'
      },
      hi: {
        price: 'आपके क्षेत्र में गेहूं की वर्तमान कीमत ₹2,150 प्रति क्विंटल है। इस सप्ताह यह 5% बढ़ी है। क्या आप विस्तृत मूल्य रुझान देखना चाहते हैं?',
        sell: 'अपनी फसल बेचने के लिए: 1) मार्केटप्लेस > फसल बेचें 2) फसल की तस्वीरें अपलोड करें 3) अपनी कीमत निर्धारित करें 4) फसल विवरण जोड़ें 5) सूची प्रकाशित करें।',
        loan: 'लोन आवेदन के लिए: 1) अपना पात्रता स्कोर जांचें 2) लोन प्रकार चुनें 3) आवेदन फॉर्म भरें 4) दस्तावेज अपलोड करें 5) समीक्षा के लिए जमा करें।',
        insurance: 'बीमा दावा दाखिल करने के लिए: 1) अपनी पॉलिसी चुनें 2) नुकसान का प्रकार चुनें 3) सबूत की तस्वीरें/वीडियो अपलोड करें।',
        default: 'मैं फसल बेचने, कीमत जांचने, लोन आवेदन, बीमा दावों आदि में आपकी मदद कर सकता हूं। आपको किस विशिष्ट सहायता की आवश्यकता है?'
      },
      ta: {
        price: 'உங்கள் பகுதியில் கோதுமையின் தற்போதைய விலை ₹2,150 ஒரு குவிண்டால். இந்த வாரம் இது 5% அதிகரித்துள்ளது. விரிவான விலை போக்குகளைப் பார்க்க விரும்புகிறீர்களா?',
        sell: 'உங்கள் பயிர்களை விற்க: 1) சந்தை > பயிர் விற்க 2) பயிர் புகைப்படங்களை பதிவேற்றவும் 3) உங்கள் விலையை நிர்ணயிக்கவும் 4) பயிர் விவரங்களைச் சேர்க்கவும் 5) பட்டியலை வெளியிடவும்.',
        loan: 'கடன் விண்ணப்பத்திற்கு: 1) உங்கள் தகுதி மதிப்பெண்ணைச் சரிபார்க்கவும் 2) கடன் வகையைத் தேர்ந்தெடுக்கவும் 3) விண்ணப்ப படிவத்தை நிரப்பவும் 4) ஆவணங்களைப் பதிவேற்றவும்.',
        insurance: 'காப்பீட்டு கோரிக்கையைத் தாக்கல் செய்ய: 1) உங்கள் கொள்கையைத் தேர்ந்தெடுக்கவும் 2) சேத வகையைத் தேர்ந்தெடுக்கவும் 3) ஆதார புகைப்படங்கள்/வீடியோக்களைப் பதிவேற்றவும்.',
        default: 'பயிர் விற்பனை, விலை சரிபார்ப்பு, கடன் விண்ணப்பங்கள், காப்பீட்டு கோரிக்கைகள் மற்றும் பலவற்றில் நான் உங்களுக்கு உதவ முடியும். உங்களுக்கு என்ன குறிப்பிட்ட உதவி தேவை?'
      }
    };

    const langResponses = responses[selectedLanguage as keyof typeof responses] || responses.en;
    
    if (userMessage.toLowerCase().includes('price') || userMessage.toLowerCase().includes('कीमत') || userMessage.toLowerCase().includes('விலை')) {
      return langResponses.price;
    } else if (userMessage.toLowerCase().includes('sell') || userMessage.toLowerCase().includes('बेच') || userMessage.toLowerCase().includes('விற்')) {
      return langResponses.sell;
    } else if (userMessage.toLowerCase().includes('loan') || userMessage.toLowerCase().includes('लोन') || userMessage.toLowerCase().includes('கடன்')) {
      return langResponses.loan;
    } else if (userMessage.toLowerCase().includes('insurance') || userMessage.toLowerCase().includes('बीमा') || userMessage.toLowerCase().includes('காப்பீடு')) {
      return langResponses.insurance;
    } else {
      return langResponses.default;
    }
  };

  const toggleVoiceInput = () => {
    setIsListening(!isListening);
    // Simulate voice input
    if (!isListening) {
      setTimeout(() => {
        setIsListening(false);
        setInputMessage('How to check crop prices?');
      }, 2000);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="card-hover h-[600px] flex flex-col">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <CardTitle className="flex items-center">
            <MessageCircle className="w-6 h-6 mr-2" />
            AI Assistant
          </CardTitle>
          
          <div className="flex items-center space-x-2">
            <Globe className="w-4 h-4 text-gray-600" />
            <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="hi">हिंदी</SelectItem>
                <SelectItem value="ta">தமிழ்</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        
        <CardContent className="flex-1 flex flex-col space-y-4">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto space-y-4 p-4 bg-gray-50 rounded-lg">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start space-x-3 ${
                  message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  message.sender === 'user' ? 'bg-green-500' : 'bg-blue-500'
                }`}>
                  {message.sender === 'user' ? (
                    <User className="w-4 h-4 text-white" />
                  ) : (
                    <Bot className="w-4 h-4 text-white" />
                  )}
                </div>
                
                <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                  message.sender === 'user' 
                    ? 'bg-green-500 text-white' 
                    : 'bg-white text-gray-800 border'
                }`}>
                  <p className="text-sm leading-relaxed">{message.content}</p>
                  <p className={`text-xs mt-1 ${
                    message.sender === 'user' ? 'text-green-100' : 'text-gray-500'
                  }`}>
                    {message.timestamp.toLocaleTimeString()}
                  </p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies */}
          <div className="space-y-2">
            <p className="text-sm text-gray-600">Quick questions:</p>
            <div className="flex flex-wrap gap-2">
              {quickReplies[selectedLanguage as keyof typeof quickReplies]?.map((reply, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={() => sendMessage(reply)}
                  className="text-xs"
                >
                  {reply}
                </Button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="flex items-center space-x-2">
            <div className="flex-1 relative">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message..."
                onKeyPress={(e) => e.key === 'Enter' && sendMessage(inputMessage)}
                className="pr-12"
              />
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleVoiceInput}
                className={`absolute right-1 top-1/2 transform -translate-y-1/2 ${
                  isListening ? 'text-red-600' : 'text-gray-400'
                }`}
              >
                {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
              </Button>
            </div>
            <Button 
              onClick={() => sendMessage(inputMessage)}
              className="gradient-bg text-white"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>

          {isListening && (
            <div className="flex items-center justify-center p-2 bg-red-50 rounded-lg">
              <div className="flex items-center space-x-2 text-red-600">
                <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
                <span className="text-sm">Listening...</span>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}