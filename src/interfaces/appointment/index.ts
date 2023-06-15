import { UserInterface } from 'interfaces/user';
import { CalendarInterface } from 'interfaces/calendar';
import { GetQueryInterface } from 'interfaces';

export interface AppointmentInterface {
  id?: string;
  student_id: string;
  calendar_id: string;
  status: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  calendar?: CalendarInterface;
  _count?: {};
}

export interface AppointmentGetQueryInterface extends GetQueryInterface {
  id?: string;
  student_id?: string;
  calendar_id?: string;
  status?: string;
}
