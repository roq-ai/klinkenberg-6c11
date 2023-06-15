import axios from 'axios';
import queryString from 'query-string';
import { InstructorInterface, InstructorGetQueryInterface } from 'interfaces/instructor';
import { GetQueryInterface } from '../../interfaces';

export const getInstructors = async (query?: InstructorGetQueryInterface) => {
  const response = await axios.get(`/api/instructors${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createInstructor = async (instructor: InstructorInterface) => {
  const response = await axios.post('/api/instructors', instructor);
  return response.data;
};

export const updateInstructorById = async (id: string, instructor: InstructorInterface) => {
  const response = await axios.put(`/api/instructors/${id}`, instructor);
  return response.data;
};

export const getInstructorById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/instructors/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteInstructorById = async (id: string) => {
  const response = await axios.delete(`/api/instructors/${id}`);
  return response.data;
};
