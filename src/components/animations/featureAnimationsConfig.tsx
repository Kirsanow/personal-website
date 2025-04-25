import React from 'react'
import {
  AnimationConfig,
  ChatMessage,
  ChartDataPoint,
  TaskItem,
  CodeMetric,
  FeedbackItem,
} from './AnimatedFeatures'

// Sample Chat Messages for Discovery & Planning feature
export const discoveryMessages: ChatMessage[] = [
  {
    id: 'user-1',
    content:
      'Hey, I need help scheduling a team meeting that works well for everyone. Any suggestions for finding an optimal time slot?',
    sender: 'user',
    avatar: 'https://randomuser.me/api/portraits/women/79.jpg',
  },
  {
    id: 'assistant-1',
    content:
      'Based on your calendar patterns and preferences, I recommend scheduling the team meeting for Tuesday at 2pm. This time slot has historically had the highest attendance rate, and it avoids conflicts with other recurring meetings.',
    sender: 'assistant',
  },
]

// Sample Tasks for Sprint Development feature
export const sprintTasks: TaskItem[] = [
  {
    id: 'task-1',
    title: 'User Authentication',
    color: 'bg-gradient-to-r from-primary to-primary/90',
  },
  {
    id: 'task-2',
    title: 'Interactive Dashboard',
    color: 'bg-gradient-to-r from-primary/80 to-primary/70',
  },
  {
    id: 'task-3',
    title: 'API Integration',
    color: 'bg-gradient-to-r from-primary/60 to-primary/50',
  },
  {
    id: 'task-4',
    title: 'Deployment Setup',
    color: 'border-primary border border-dashed bg-primary/60 text-primary',
  },
]

// Code Quality Metrics for Craftsmanship feature
export const codeQualityMetrics: CodeMetric[] = [
  {
    id: 'metric-1',
    name: 'Code Coverage',
    value: 96,
    target: 95,
    color: 'from-emerald-500 to-emerald-400',
  },
  {
    id: 'metric-2',
    name: 'Performance Score',
    value: 94,
    target: 90,
    color: 'from-sky-500 to-sky-400',
  },
  {
    id: 'metric-3',
    name: 'Accessibility',
    value: 98,
    target: 95,
    color: 'from-indigo-500 to-indigo-400',
  },
  {
    id: 'metric-4',
    name: 'Best Practices',
    value: 92,
    target: 90,
    color: 'from-violet-500 to-violet-400',
  },
]

// Feedback Items for Collaboration feature
export const feedbackItems: FeedbackItem[] = [
  {
    id: 'feedback-1',
    text: 'Added interactive filters to the dashboard - great idea!',
    author: 'Sarah',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    timestamp: '10:24 AM',
    positive: true,
  },
  {
    id: 'feedback-2',
    text: 'The authentication flow is much smoother now',
    author: 'Michael',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    timestamp: '11:15 AM',
    positive: true,
  },
  {
    id: 'feedback-3',
    text: 'Could we simplify the API response handling?',
    author: 'Alex',
    avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
    timestamp: '2:45 PM',
    positive: false,
  },
]

// Sample Chart Data for old chart feature (keeping for reference)
export const performanceChartData: ChartDataPoint[] = [
  { x: 0, y: 40 },
  { x: 1, y: 45 },
  { x: 2, y: 55 },
  { x: 3, y: 70 },
  { x: 4, y: 65 },
  { x: 5, y: 85 },
  { x: 6, y: 90 },
]

// Tasks for old Collaboration feature (keeping for reference)
export const collaborationTasks: TaskItem[] = [
  {
    id: 'collab-1',
    title: 'Weekly Review',
    color: 'bg-secondary',
  },
  {
    id: 'collab-2',
    title: 'Feature Demo',
    color: 'bg-secondary/40',
  },
  {
    id: 'collab-3',
    title: 'Feedback Session',
    color:
      'bg-secondary/20 border-secondary border border-dashed text-secondary',
  },
]

// Configuration for all features
export const featureAnimations: Record<string, AnimationConfig> = {
  discovery: {
    type: 'chat',
    data: discoveryMessages,
  },
  development: {
    type: 'tasks',
    data: sprintTasks,
  },
  craftsmanship: {
    type: 'code-quality',
    data: codeQualityMetrics,
  },
  collaboration: {
    type: 'feedback',
    data: feedbackItems,
  },
}

// Get animation config by feature key
export const getAnimationConfig = (key: string): AnimationConfig => {
  return featureAnimations[key] || featureAnimations.discovery
}
