import * as yup from 'yup';
import { appointmentValidationSchema } from 'validationSchema/appointments';

export const calendarValidationSchema = yup.object().shape({
  date: yup.date().required(),
  start_time: yup.date().required(),
  end_time: yup.date().required(),
  instructor_id: yup.string().nullable().required(),
  appointment: yup.array().of(appointmentValidationSchema),
});
