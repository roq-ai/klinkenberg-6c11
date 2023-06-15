import * as yup from 'yup';
import { instructorValidationSchema } from 'validationSchema/instructors';
import { priceValidationSchema } from 'validationSchema/prices';

export const schoolValidationSchema = yup.object().shape({
  description: yup.string(),
  image: yup.string(),
  name: yup.string().required(),
  user_id: yup.string().nullable().required(),
  instructor: yup.array().of(instructorValidationSchema),
  price: yup.array().of(priceValidationSchema),
});
