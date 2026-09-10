export type Language = 'ar' | 'en';

export interface ScrapMaterial {
  id: string;
  nameAr: string;
  nameEn: string;
  category: 'metal' | 'appliances' | 'demolition' | 'batteries';
  unitAr: string;
  unitEn: string;
  imageUrl: string;
  popular?: boolean;
  descriptionAr: string;
  descriptionEn: string;
  iconName: string;
  featuresAr: string[];
  featuresEn: string[];
}

export interface JeddahDistrict {
  id: string;
  nameAr: string;
  nameEn: string;
  zoneAr: string;
  zoneEn: string;
  deliveryTimeMins: number;
}

export interface ScrapQuoteItem {
  materialId: string;
  quantity: number;
}

export interface PickupBooking {
  id: string;
  fullName: string;
  phone: string;
  district: string;
  materialCategory: string[];
  details: string;
  preferredTime: string;
  photoCount?: number;
  createdAt: string;
  status: 'pending' | 'contacted' | 'completed';
}

export interface Testimonial {
  id: string;
  authorAr: string;
  authorEn: string;
  roleAr: string;
  roleEn: string;
  districtAr: string;
  districtEn: string;
  rating: number;
  commentAr: string;
  commentEn: string;
  materialAr: string;
  materialEn: string;
  avatarUrl: string;
  date: string;
}

export interface FAQItem {
  id: string;
  questionAr: string;
  questionEn: string;
  answerAr: string;
  answerEn: string;
}

export interface FieldOperation {
  id: string;
  titleAr: string;
  titleEn: string;
  districtAr: string;
  districtEn: string;
  actionAr: string;
  actionEn: string;
  imageUrl: string;
  badgeAr: string;
  badgeEn: string;
}
