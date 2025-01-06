import pool from '../config/database';

export interface AddOn {
  add_on_id: number;
  title: string;
  description: string;
  monthly_price: number;
  yearly_price: number;
}

// Function to get all add-ons from the database
export const getAllAddOns = async (): Promise<AddOn[]> => {
  const [rows] = await pool.execute('SELECT * FROM add_ons');
  return rows as AddOn[];
};