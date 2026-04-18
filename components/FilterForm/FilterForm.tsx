'use client'; //возможно убрать
import { Field, Form, Formik } from 'formik';
import css from './FilterForm.module.css';
import { getFilters } from '@/lib/api/api';
import { useEffect, useState } from 'react';
import Button from '../Button/Button';
import { IoClose, IoMapOutline } from 'react-icons/io5';

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
    <Formik
      initialValues={initialValuesF}
      enableReinitialize
      // validationSchema={transactionSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css['firstClass']}>
        <fieldset className={css['fieldset']}>
          <legend className={css['legend-name']}>Location</legend>
          <div className={css['location-for-blockicon']}>
            <IoMapOutline className={css['location-map-icon']} />
            <Field
              type="text"
              name="location"
              id="location"
              // value=""

              placeholder="City"
              className={css['location-input']}
            />
          </div>
        </fieldset>
        <h3 className={css['title-filters']}>Filters</h3>
        <fieldset className={css['fieldset']}>
          <legend className={css['legend-name']}>Camper form</legend>
          <div className={css['radio-block']}>
            {forms.map(item => {
              return (
                <label key={item} className={css['legend-radio-name']}>
                  <Field
                    type="radio"
                    name="forms"
                    id="forms"
                    value={`${item}`}
                    className="visually-hidden"
                  />
                  <span className={css['borderGrey']}>
                    <span className={css['inCircleColorMane']}></span>
                  </span>
                  {item.replaceAll('_', ' ')}
                </label>
              );
            })}
          </div>
        </fieldset>
        <fieldset className={css['fieldset']}>
          <legend className={css['legend-name']}>Engine</legend>
          <div className={css['radio-block']}>
            {engines.map(item => {
              return (
                <label key={item} className={css['legend-radio-name']}>
                  <Field
                    type="radio"
                    name="engines"
                    id="engines"
                    value={`${item}`}
                    className="visually-hidden"
                  />
                  <span className={css['borderGrey']}>
                    <span className={css['inCircleColorMane']}></span>
                  </span>
                  {item.replaceAll('_', ' ')}
                </label>
              );
            })}
          </div>
        </fieldset>
        <fieldset className={css['fieldset']}>
          <legend className={css['legend-name']}>Transmission</legend>
          <div className={css['radio-block']}>
            {transmissions.map(item => {
              return (
                <label key={item} className={css['legend-radio-name']}>
                  <Field
                    type="radio"
                    name="transmissions"
                    id="transmissions"
                    value={`${item}`}
                    className="visually-hidden"
                  />
                  <span className={css['borderGrey']}>
                    <span className={css['inCircleColorMane']}></span>
                  </span>
                  {item.replaceAll('_', ' ')}
                </label>
              );
            })}
          </div>
        </fieldset>
        <div className={css['button-block']}>
          <Button text="Search" type="submit" />
          <Button
            icon={<IoClose className={css['size-icon-inbtn']} />}
            text="Clear filters"
            type="reset"
            className={css['button-outh-color']}
          />
        </div>
      </Form>
    </Formik>
  );
}

export default FilterForm;
