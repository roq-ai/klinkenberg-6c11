import * as yup from 'yup';

export const appointmentValidationSchema = yup.object().shape({
  status: yup.string().required(),
  student_id: yup.string().nullable().required(),
  calendar_id: yup.string().nullable().required(),
});
