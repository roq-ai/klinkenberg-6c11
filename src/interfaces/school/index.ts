import { InstructorInterface } from 'interfaces/instructor';
import { PriceInterface } from 'interfaces/price';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface SchoolInterface {
  id?: string;
  description?: string;
  image?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  instructor?: InstructorInterface[];
  price?: PriceInterface[];
  user?: UserInterface;
  _count?: {
    instructor?: number;
    price?: number;
  };
}

export interface SchoolGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  image?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
