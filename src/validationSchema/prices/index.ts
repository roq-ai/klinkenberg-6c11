import * as yup from 'yup';

export const priceValidationSchema = yup.object().shape({
  lesson_duration: yup.number().integer().required(),
  price: yup.number().integer().required(),
  school_id: yup.string().nullable().required(),
});
