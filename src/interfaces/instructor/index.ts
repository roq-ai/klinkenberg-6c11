import { CalendarInterface } from 'interfaces/calendar';
import { SchoolInterface } from 'interfaces/school';
import { GetQueryInterface } from 'interfaces';

export interface InstructorInterface {
  id?: string;
  first_name: string;
  last_name: string;
  school_id: string;
  created_at?: any;
  updated_at?: any;
  calendar?: CalendarInterface[];
  school?: SchoolInterface;
  _count?: {
    calendar?: number;
  };
}

export interface InstructorGetQueryInterface extends GetQueryInterface {
  id?: string;
  first_name?: string;
  last_name?: string;
  school_id?: string;
}
