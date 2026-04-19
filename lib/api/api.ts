import axios from 'axios';
import {
  GetAllCampersProps,
  GetAllCampersResponse,
  GetCamperResponse,
  GetCamperReviewsResponse,
  GetFiltersResponse,
  PostCamperBookingRequest,
  PostCamperBookingResponse,
} from '../types/apiTypes';

const baseURL = process.env.NEXT_PUBLIC_API_URL;

export const api = axios.create({ baseURL });

export const getAllCampers = async ({
  page = 1,
  perPage = 5,
  location = '',
  form = '',
  transmission = '',
  engine = '',
}: GetAllCampersProps = {}): Promise<GetAllCampersResponse> => {
  console.log(
    `пришло в функцию: location=${location}|->form=${form}|->transmission=${transmission}|->engine=${engine}`,
  );
  const objParams = {
    page,
    perPage,
    ...(location && { location }),
    ...(form && { form }),
    ...(transmission && { transmission }),
    ...(engine && { engine }),
  };
  const { data } = await api.get<GetAllCampersResponse>('/campers', {
    params: objParams,
  });
  return data;
};
export const getFilters = async (): Promise<GetFiltersResponse> => {
  const { data } = await api.get<GetFiltersResponse>('/campers/filters');
  return data;
};
export const getCamper = async (
  camperId: string,
): Promise<GetCamperResponse> => {
  const { data } = await api.get<GetCamperResponse>(`/campers/${camperId}`);
  return data;
};
export const getCamperReviews = async (
  camperId: string,
): Promise<GetCamperReviewsResponse> => {
  const { data } = await api.get<GetCamperReviewsResponse>(
    `/campers/${camperId}/reviews`,
  );
  return data;
};
export const postCamperBooking = async ({
  camperId,
  name,
  email,
}: PostCamperBookingRequest): Promise<PostCamperBookingResponse> => {
  const { data } = await api.post<PostCamperBookingResponse>(
    `/campers/${camperId}/booking-requests`,
    {
      name,
      email,
    },
  );
  return data;
};
