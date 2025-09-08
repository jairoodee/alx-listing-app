// Interfaces for the application

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export interface CardProps {
  title: string;
  description: string;
  imageUrl?: string;
  tags?: string[];
  className?: string;
  onClick?: () => void;
}

export interface FilterOption {
  id: string;
  label: string;
  count?: number;
}

export interface ListingItem {
  id: string;
  title: string;
  description: string;
  category: string;
  location: string;
  price?: number;
  imageUrl?: string;
  createdAt: string;
  updatedAt: string;
}