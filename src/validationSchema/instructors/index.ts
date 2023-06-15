import * as yup from 'yup';
import { calendarValidationSchema } from 'validationSchema/calendars';

export const instructorValidationSchema = yup.object().shape({
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  school_id: yup.string().nullable().required(),
  calendar: yup.array().of(calendarValidationSchema),
});
