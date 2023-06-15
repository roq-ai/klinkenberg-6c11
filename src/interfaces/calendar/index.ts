import { AppointmentInterface } from 'interfaces/appointment';
import { InstructorInterface } from 'interfaces/instructor';
import { GetQueryInterface } from 'interfaces';

export interface CalendarInterface {
  id?: string;
  instructor_id: string;
  date: any;
  start_time: any;
  end_time: any;
  created_at?: any;
  updated_at?: any;
  appointment?: AppointmentInterface[];
  instructor?: InstructorInterface;
  _count?: {
    appointment?: number;
  };
}

export interface CalendarGetQueryInterface extends GetQueryInterface {
  id?: string;
  instructor_id?: string;
}
