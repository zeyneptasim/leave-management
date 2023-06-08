
import { Formik, Field, Form, ErrorMessage } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import * as Yup from 'yup';
import React, { useState } from 'react';

const ReservationForm = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    department: '',
    position: '',
    reservationType: '',
    startDate: '',
    endDate: '',
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('Полето име е задължително'),
    lastName: Yup.string().required('Полето фамилия е задължително'),
    department: Yup.string().required('Полето отдел е задължително'),
    position: Yup.string().required('Полето позиция е задължително'),
    reservationType: Yup.string().required('Полето причина за отсъствие е задължително'),
    startDate: Yup.date().required('Полето начална дата е задължително'),
    endDate: Yup.date()
      .required('Полето крайна дата е задължително'),
  });

  const reservationTypes = [
    { value: 'annual', label: 'Годишен отпуск' },
    { value: 'marriage', label: 'Встъпване в брак' },
    { value: 'death', label: 'Отсъствие заради починал близък/роднина' },
    { value: 'custom', label: 'Привикан като свидетел по дело' },
  ];

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (values) => {
    console.log(values); // Perform actions with the form values

    // Set the submission status to true
    setIsSubmitted(true);
  };

  return (
    <div className='reservation-form'>
      <h1>Заявление за отпуск</h1>
      {!isSubmitted ? ( // Render the form if not submitted
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, setFieldValue }) => (
            <Form>
            <div>
              <label>Име:</label>
              <Field type="text" name="firstName" />
              <ErrorMessage name="firstName" component="div" />
            </div>
            <div>
              <label>Фамилия:</label>
              <Field type="text" name="lastName" />
              <ErrorMessage name="lastName" component="div" />
            </div>
            <div>
              <label>Отдел:</label>
              <Field type="text" name="department" />
              <ErrorMessage name="department" component="div" />
            </div>
            <div>
              <label>Позиция:</label>
              <Field type="text" name="position" />
              <ErrorMessage name="position" component="div" />
            </div>
            <div>
              <label>Причина за отсъствие:</label>
              <Field as="select" name="reservationType">
                <option value="">Моля, изберете една от посочените причини за отпуск</option>
                {reservationTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </Field>
              <ErrorMessage name="reservationType" component="div" />
            </div>
            <div>
              <label>Начална дата:</label>
              <DatePicker
                selected={values.startDate}
                onChange={(date) => setFieldValue('startDate', date)}
                dateFormat="dd/MM/yyyy"
              />
              <ErrorMessage name="startDate" component="div" />
            </div>
            <div>
              <label>Крайна дата:</label>
              <DatePicker
                selected={values.endDate}
                onChange={(date) => setFieldValue('endDate', date)}
                dateFormat="dd/MM/yyyy"
              />
              <ErrorMessage name="endDate" component="div" />
            </div>
            <button type="submit">Изпрати</button>
          </Form>
          )}
        </Formik>
      ) : (
        // Render the success message if submitted
        <div className="success-message">
          <p>Формата е изпратена успешно! Ще получите имейл с одобрение/отказ и детайли!</p>
        </div>
      )}
    </div>
  );
};

export default ReservationForm;

