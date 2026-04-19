'use client';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import css from './BookingForm.module.css';
import Button from '@/components/Button/Button';
import { useCamperBooking } from '@/hooks/useCamperBooking';
import * as Yup from 'yup';

interface InitialValuesProps {
  name: string;
  email: string;
}
interface BookingFormProps {
  camperId: string;
}

const bookingSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
});

function BookingForm({ camperId }: BookingFormProps) {
  const { mutate, isPending } = useCamperBooking();

  const initialValuesF: InitialValuesProps = {
    name: '',
    email: '',
  };
  const handleSubmit = (
    data: InitialValuesProps,
    { resetForm }: FormikHelpers<InitialValuesProps>,
  ) => {
    mutate(
      { camperId, ...data },
      {
        onSuccess: () => {
          resetForm();
        },
      },
    );
    console.log(data);
  };
  return (
    <div className={css['block-camper-reservation']}>
      <h2 className="visually-hidden">Camper reservation</h2>
      <Formik
        initialValues={initialValuesF}
        enableReinitialize
        validationSchema={bookingSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className={css['form-block']}>
            <div className={css['title-block']}>
              <h3 className={css['title-block-header']}>
                Book your campervan now
              </h3>
              <p className={css['title-block-text']}>
                Stay connected! We are always ready to help you.
              </p>
            </div>
            <div className={css['contact-block-info']}>
              <div className={css['input-wrapper']}>
                <Field
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name*"
                  className={`${css['input']} ${errors.name && touched.name ? css['input-error'] : ''}`}
                />
                {errors.name && touched.name && (
                  <span className={css['error-message']}>{errors.name}</span>
                )}
              </div>
              <div className={css['input-wrapper']}>
                <Field
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email*"
                  className={`${css['input']} ${errors.email && touched.email ? css['input-error'] : ''}`}
                />
                {errors.email && touched.email && (
                  <span className={css['error-message']}>{errors.email}</span>
                )}
              </div>
            </div>
            <Button
              text={isPending ? 'Sending...' : 'Send'}
              type="submit"
              className={css['button-booking']}
              disabled={isPending}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default BookingForm;
