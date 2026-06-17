export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Plan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  benefits: string[];
  isPopular?: boolean;
}

export interface TrainerItem {
  id: string;
  name: string;
  role: string;
  specialization: string[];
  experience: string;
  certifications: string[];
  imageUrl: string;
}

export interface TransformationItem {
  id: string;
  title: string;
  category: "Weight Loss" | "Muscle Gain" | "General Fitness";
  beforeValue: string;
  afterValue: string;
  duration: string;
  achievement: string;
  imageUrl: string;
  memberInitials: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  rating: number;
  date: string;
  review: string;
  isVerified: boolean;
}

export interface GalleryItem {
  id: string;
  category: "gym" | "equipment" | "classes" | "members";
  caption: string;
  imageUrl: string;
}
