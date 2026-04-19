'use client';
import { Field, Form, Formik } from 'formik';
import css from './BookingForm.module.css';
import Button from '@/components/Button/Button';

interface InitialValuesProps {
  name: string;
  email: string;
}

function BookingForm() {
  const initialValuesF: InitialValuesProps = {
    name: '',
    email: '',
  };
  const handleSubmit = (data: InitialValuesProps) => {
    console.log(data);
  };
  return (
    <div className={css['block-camper-reservation']}>
      <h2 className="visually-hidden">Camper reservation</h2>
      <Formik
        initialValues={initialValuesF}
        enableReinitialize
        // validationSchema={transactionSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css['form-block']}>
          <div className={css['title-block']}>
            <h3 className={css['title-block-header']}>
              Book your campervan now
            </h3>
            <p className={css['title-block-text']}>
              Stay connected! We are always ready to help you.
            </p>
          </div>
          <div className={css['сontact-block-info']}>
            <Field
              type="text"
              name="name"
              id="name"
              placeholder="Name*"
              className={css['input']}
            />
            <Field
              type="text"
              name="email"
              id="email"
              placeholder="Email*"
              className={css['input']}
            />
          </div>
          <Button text="Send" type="submit" className={css['button-booking']} />
        </Form>
      </Formik>
    </div>
  );
}

export default BookingForm;
