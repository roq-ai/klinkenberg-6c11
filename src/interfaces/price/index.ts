import { SchoolInterface } from 'interfaces/school';
import { GetQueryInterface } from 'interfaces';

export interface PriceInterface {
  id?: string;
  school_id: string;
  lesson_duration: number;
  price: number;
  created_at?: any;
  updated_at?: any;

  school?: SchoolInterface;
  _count?: {};
}

export interface PriceGetQueryInterface extends GetQueryInterface {
  id?: string;
  school_id?: string;
}
