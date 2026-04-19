export interface GetAllCampersProps {
  page?: number;
  perPage?: number;
  location?: string;
  form?: string;
  transmission?: string;
  engine?: string;
}
export interface Camper {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  description: string;
  form: string;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  transmission: string;
  engine: string;
  amenities: string[];
  createdAt: string;
  updatedAt: string;
  coverImage: string;
  totalReviews: number;
}
export interface GetAllCampersResponse {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
  campers: Camper[];
}
export interface GetFiltersResponse {
  forms: string[];
  transmissions: string[];
  engines: string[];
}
/*type Form = 'alcove' | 'panel_van' | 'integrated' | 'semi_integrated';
type Transmission = 'automatic' | 'manual';
type Engine = 'diesel' | 'petrol' | 'hybrid' | 'electric';
type Amenities =
  | 'ac'
  | 'bathroom'
  | 'kitchen'
  | 'tv'
  | 'radio'
  | 'refrigerator'
  | 'microwave'
  | 'water';/**/
export interface GalleryItem {
  id: string;
  camperId: string;
  thumb: string;
  original: string;
  order: number;
}
export interface GetCamperResponse {
  id: string;
  name: string;
  price: number;
  rating: number;
  totalReviews: number;
  location: string;
  description: string;
  form: string; // возможно заменить типизацию
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  transmission: string; // возможно заменить типизацию
  engine: string; // возможно заменить типизацию
  amenities: string[];
  gallery: GalleryItem[];
  createdAt: string;
  updatedAt: string;
}
export interface CamperReview {
  id: string;
  camperId: string;
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
  createdAt: string;
}
export type GetCamperReviewsResponse = CamperReview[];

export interface PostCamperBookingRequest {
  camperId: string;
  name: string;
  email: string;
}
export interface PostCamperBookingResponse {
  message: string;
}
