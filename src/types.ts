export interface Booking {
  id?: string;
  clientName: string;
  email: string;
  phone?: string;
  eventType: string;
  eventDate: string;
  planId: string;
  depositAmount?: number;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  createdAt: string;
  uid?: string;
}

export interface GalleryItem {
  id?: string;
  imageUrl: string;
  title: string;
  description?: string;
  category?: string;
  createdAt: string;
}

export interface ServicePlan {
  id: string;
  name: string;
  price: string;
  deposit: number;
  features: string[];
  description: string;
}
