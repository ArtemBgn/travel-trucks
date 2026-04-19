import { postCamperBooking } from '@/lib/api/api';
import { PostCamperBookingRequest } from '@/lib/types/apiTypes';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

export const useCamperBooking = () => {
  return useMutation({
    mutationFn: ({ camperId, name, email }: PostCamperBookingRequest) =>
      postCamperBooking({ camperId, name, email }),
    onSuccess: data => {
      toast.success(data.message);
      console.log(data.message);
    },
    onError: error => {
      toast.error(error.message);
      console.error(error.message);
    },
  });
};
