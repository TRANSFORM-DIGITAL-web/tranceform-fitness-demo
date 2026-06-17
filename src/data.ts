import { BenefitItem, Plan, TrainerItem, TransformationItem, TestimonialItem, GalleryItem } from "./types";

export const BENEFITS: BenefitItem[] = [
  {
    id: "b1",
    title: "Modern Equipment",
    description: "Train with imported high-end biomechanically precise strength machines and high-performance cardio equipment.",
    iconName: "Dumbbell"
  },
  {
    id: "b2",
    title: "Certified Trainers",
    description: "Get coached by fully certified fitness experts holding international credentials in posture, strength, and rehab.",
    iconName: "Award"
  },
  {
    id: "b3",
    title: "Transformation Programs",
    description: "Highly structured regimes crafted to produce tangible results, custom tailored to your body genetics & lifestyle.",
    iconName: "TrendingUp"
  },
  {
    id: "b4",
    title: "Weight Loss Support",
    description: "Dedicated science-backed fat loss strategies combining customized cardio, high-intensity intervals, and dietary guides.",
    iconName: "Flame"
  },
  {
    id: "b5",
    title: "Personal Training",
    description: "1-on-1 private guidance prioritizing safety, accurate forms, high motivation, and faster, targeted transformations.",
    iconName: "Target"
  },
  {
    id: "b6",
    title: "Flexible Timings",
    description: "Open from early morning to late night, allowing you to fit health workouts flawlessly into your heavy workday schedule.",
    iconName: "Clock"
  },
  {
    id: "b7",
    title: "Professional Environment",
    description: "A motivating, safe, highly hygienic, and hyper-focused luxury space with custom gold acoustics and high energy.",
    iconName: "Shield"
  },
  {
    id: "b8",
    title: "Friendly Community",
    description: "Connect and grow with Dhankawadi's most encouraging, positive, and passionate fitness-loving circle.",
    iconName: "Users"
  }
];

export const PLANS: Plan[] = [
  {
    id: "p1",
    name: "Monthly Membership",
    price: "₹1,800",
    period: "Month",
    description: "Perfect for taking the first step to test our premium facility, certified guidance, and motivating environment.",
    benefits: [
      "Access to premium gym & workout area",
      "Free initial physical posture assessment",
      "General trainer guidance on the floor",
      "Locker room & high speed Wi-Fi access",
      "Flexible workout slot bookings"
    ]
  },
  {
    id: "p2",
    name: "Quarterly Transformation",
    price: "₹4,500",
    period: "3 Months",
    description: "Our ideal beginner-friendly plan to kickstart visible weight loss or muscle building metrics.",
    benefits: [
      "Full gym and strength equipment access",
      "1 physical transformation consultation",
      "Customized baseline workout routine draft",
      "Monthly progress metrics & fat analysis",
      "Free trial slot for group conditioning classes"
    ]
  },
  {
    id: "p3",
    name: "Half-Yearly Elite Plan",
    price: "₹8,000",
    period: "6 Months",
    description: "The sweetest balance of deep lifestyle transformation and absolute compound strength progression.",
    isPopular: true,
    benefits: [
      "Unrestricted ultra-premium facility access",
      "Bi-weekly personalized workout program updates",
      "Comprehensive body fat & muscle density analysis",
      "Dedicated diet outline & macros guidance",
      "Priority trainer floor assistance & safety checks",
      "2-week membership freeze option (hold duration)"
    ]
  },
  {
    id: "p4",
    name: "Annual Legacy Membership",
    price: "₹13,500",
    period: "12 Months",
    description: "The ultimate luxury commitment. Unleash the best physical shape of your life at our most cost-efficient daily rate.",
    benefits: [
      "Unlimited 365-day luxury gym access",
      "Full personalized nutrition & diet plans curated monthly",
      "Unlimited posture, body fat & muscle analysis reviews",
      "Dedicated goal tracking tracker & 1-on-1 counselor chat",
      "4-week membership pause freeze option",
      "Complimentary invitation to all premium lifestyle workshops",
      "Exclusive Tranceform Gym athlete workout tee"
    ]
  }
];

export const TRAINERS: TrainerItem[] = [
  {
    id: "t1",
    name: "Rahul Mane",
    role: "Head Fitness Coach & Transformation Specialist",
    specialization: ["Body recomposition", "Hypertrophy training", "Kettlebell certified", "Postural rehabilitation"],
    experience: "8+ Years",
    certifications: ["K11 Coach Academy Certification", "REPs Level 3 Personal Training", "Sports Nutrition Specialist"],
    imageUrl: "/src/assets/images/trainer_male_pro_1781692341911.jpg"
  },
  {
    id: "t2",
    name: "Sneha Kulkarni",
    role: "Senior Strength Trainer & Nutritionist",
    specialization: ["Women's weight loss", "Functional strength", "Clinical nutrition expert", "HIIT & mobility"],
    experience: "6+ Years",
    certifications: ["ACE Certified Personal Trainer", "GGS Women's Coaching Specialist", "Certified Sports Dietician"],
    imageUrl: "/src/assets/images/trainer_female_pro_1781692359157.jpg"
  },
  {
    id: "t3",
    name: "Amit Patil",
    role: "Powerlifting Coach & Kinetic Movement Trainer",
    specialization: ["Maximum strength building", "Olympic lifting mechanics", "Injury prevention conditioning"],
    experience: "7+ Years",
    certifications: ["Gold's Gym Fitness Institute (GGFI)", "IPF Level 1 Certified Strength Coach"],
    imageUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=600&h=800"
  }
];

export const TRANSFORMATIONS: TransformationItem[] = [
  {
    id: "tr1",
    title: "18kg Weight Loss Journey",
    category: "Weight Loss",
    beforeValue: "92 kg",
    afterValue: "74 kg",
    duration: "16 Weeks",
    achievement: "Vastly enhanced cardiovascular stamina, dropped visceral body fat by 14%, complete custom lifestyle reboot.",
    imageUrl: "/src/assets/images/transformation_athlete_1781692379297.jpg",
    memberInitials: "AS"
  },
  {
    id: "tr2",
    title: "Extreme Lean Muscle Gain",
    category: "Muscle Gain",
    beforeValue: "61 kg",
    afterValue: "71 kg",
    duration: "24 Weeks",
    achievement: "Added 10kg of pure skeletal muscle bulk, gained incredible compound lifting strength on deadlifts & squats.",
    imageUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800&h=600",
    memberInitials: "KP"
  },
  {
    id: "tr3",
    title: "Overall Fitness & Aesthetic Definition",
    category: "General Fitness",
    beforeValue: "24% Body Fat",
    afterValue: "13% Body Fat",
    duration: "12 Weeks",
    achievement: "Sculpted extreme washboard abdominal core visibility, improved structural posture bio-mechanics completely.",
    imageUrl: "/src/assets/images/gym_equipment_gold_1781692325251.jpg",
    memberInitials: "RD"
  }
];

export const REVIEWS: TestimonialItem[] = [
  {
    id: "r1",
    name: "Pratik Shinde",
    rating: 5,
    date: "1 week ago",
    review: "Best Gym in Dhankawadi, Pune hands down! The atmosphere is highly motivating. Cleanliness is top notch. The black and gold theme is very premium. Rahul sir and other trainers are always present on the floor to guide on correct lifting poster. I joined their 6 month package and already seeing great fat loss improvement.",
    isVerified: true
  },
  {
    id: "r2",
    name: "Ashwini Deshmukh",
    rating: 5,
    date: "3 weeks ago",
    review: "Perfect workout spot near Bharati Vidyapeeth. As a girl, safety and comfort are important. This gym is highly professional and welcoming. Sneha ma'am designed a detailed personalized diet and workout routine which actually works. Love the premium biomechanics machines that don't stress the knees like normal local gym equipment.",
    isVerified: true
  },
  {
    id: "r3",
    name: "Vikram Jadhav",
    rating: 5,
    date: "1 month ago",
    review: "Tranceform Fitness has the highest quality standard in South Pune. I was search for gym near me with good rating and reviews and found this amazing gym with over 400 reviews. Joined their annual plan, super value for money. The equipment is state of the art, high energy music, and the community is like a family.",
    isVerified: true
  },
  {
    id: "r4",
    name: "Saurabh Joshi",
    rating: 4,
    date: "1 month ago",
    review: "Very clean gym in Dhankawadi. Instructors are friendly. The transformation results of other members inspired me. They help with weight loss tracking meticulously. Strongly recommended for anyone living in Pune or studying around Bharati Vidyapeeth hostel area.",
    isVerified: true
  }
];

export const GALLERY: GalleryItem[] = [
  {
    id: "g1",
    category: "gym",
    caption: "Our Main Luxury Workout Floor",
    imageUrl: "/src/assets/images/gym_hero_banner_1781692305937.jpg"
  },
  {
    id: "g2",
    category: "equipment",
    caption: "Premium Gold & Metallic Strength Racks",
    imageUrl: "/src/assets/images/gym_equipment_gold_1781692325251.jpg"
  },
  {
    id: "g3",
    category: "members",
    caption: "Focused High Intensity Conditioning",
    imageUrl: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=800&h=600"
  },
  {
    id: "g4",
    category: "classes",
    caption: "Functional Boxing & Stamina Drills",
    imageUrl: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&q=80&w=800&h=600"
  },
  {
    id: "g5",
    category: "equipment",
    caption: "Biomechanically Optimal Cardio Rowers",
    imageUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800&h=600"
  },
  {
    id: "g6",
    category: "gym",
    caption: "Professional Stretching and Rehabilitation Area",
    imageUrl: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=800&h=600"
  }
];

export const LANDING_METRICS = {
  averageRating: "4.4",
  totalReviews: "403+ Google Reviews",
  yearsOfSuccess: "5+",
  certifiedCoaches: "Fully Certified",
  address: "Plot No 11,12 Pushkaraj Society, Behind Bharati Vidyapeeth, Opp RamaKrishna Hostel, Dhankawadi, Pune, Maharashtra 411043",
  phone: "07219261729",
  whatsapp: "+917219261729",
  googleMapsLink: "https://www.google.com/maps/place/Tranceform+Fitness+Best+Gym+in+Dhankawadi/",
  instagramLink: "https://www.instagram.com/tranceformfitness/"
};
export const WORKING_HOURS = [
  { days: "Monday - Saturday", hours: "06:00 AM - 10:00 PM" },
  { days: "Sunday", hours: "07:00 AM - 12:00 PM" }
];
