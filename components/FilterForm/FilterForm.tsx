'use client'; //возможно убрать
import { Field, Form, Formik } from 'formik';
import css from './FilterForm.module.css';
import { getFilters } from '@/lib/api/api';
import { useEffect, useState } from 'react';

interface InitialValuesProps {
  location: string;
  forms: string;
  transmissions: string;
  engines: string;
}

function FilterForm() {
  const [forms, setFormss] = useState<string[]>([]);
  const [transmissions, setTransmissionss] = useState<string[]>([]);
  const [engines, setEnginess] = useState<string[]>([]);
  //   const { forms, transmissions, engines } = await getFilters();
  useEffect(() => {
    const fetchCampers = async () => {
      try {
        const { forms, transmissions, engines } = await getFilters();
        setFormss(forms);
        setTransmissionss(transmissions);
        setEnginess(engines);
      } catch (error) {
        console.error('Ошибка при загрузке:', error);
      }
    };

    fetchCampers();
  }, []);
  const handleSubmit = (data: InitialValuesProps) => {
    console.log(data);
  };
  const initialValuesF: InitialValuesProps = {
    location: '',
    forms: '',
    transmissions: '',
    engines: '',
  };
  return (
    <div>
      <Formik
        initialValues={initialValuesF}
        enableReinitialize
        // validationSchema={transactionSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Field
            type="text"
            name="location"
            id="location"
            value=""
            placeholder="Enter country and city"
          ></Field>
          {forms.map(item => {
            return (
              <>
                <label key={item}>
                  <Field
                    type="radio"
                    name="forms"
                    id="forms"
                    value={`${item}`}
                  ></Field>
                  {item}
                </label>
              </>
            );
          })}
          {transmissions.map(item => {
            return (
              <>
                <label key={item}>
                  <Field
                    type="radio"
                    name="transmissions"
                    id="transmissions"
                    value={`${item}`}
                  ></Field>
                  {item}
                </label>
              </>
            );
          })}
          {engines.map(item => {
            return (
              <>
                <label key={item}>
                  <Field
                    type="radio"
                    name="engines"
                    id="engines"
                    value={`${item}`}
                  />
                  {item}
                </label>
              </>
            );
          })}
        </Form>
      </Formik>
    </div>
  );
}

export default FilterForm;
