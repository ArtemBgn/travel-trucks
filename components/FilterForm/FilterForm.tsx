'use client';
import { Field, Form, Formik } from 'formik';
import css from './FilterForm.module.css';
import Button from '../Button/Button';
import { IoClose, IoMapOutline } from 'react-icons/io5';
import { useFilterStore } from '@/store/useFilterStore';
import { useFilters } from '@/hooks/useFilters';

interface InitialValuesProps {
  location: string;
  form: string;
  transmission: string;
  engine: string;
}

function FilterForm() {
  const setFilters = useFilterStore(state => state.setFilters);
  const resetFilters = useFilterStore(state => state.resetFilters);

  const { data: filterOptions, isLoading } = useFilters();

  const initialValuesF: InitialValuesProps = {
    location: '',
    form: '',
    transmission: '',
    engine: '',
  };
  const handleSubmit = (data: InitialValuesProps) => {
    setFilters(data);
  };
  const handleReset = () => resetFilters();

  if (isLoading || !filterOptions) return <p>Loading filters...</p>;

  const { forms, transmissions, engines } = filterOptions;

  return (
    <Formik
      initialValues={initialValuesF}
      enableReinitialize
      // validationSchema={transactionSchema}
      onSubmit={handleSubmit}
      onReset={handleReset}
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
                    name="form"
                    id="form"
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
                    name="engine"
                    id="engine"
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
                    name="transmission"
                    id="transmission"
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
          <Button
            text="Search"
            type="submit"
            className={css['button-search']}
          />
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
