import pool from '../config/database';

export interface Plan {
  plan_id: number;
  name: string;
  type: string;
  cost: number;
  details: string;
}

// Function to get all plans from the database
export const getAllPlans = async (): Promise<Plan[]> => {
  const [rows] = await pool.execute('SELECT * FROM plans');
  return rows as Plan[];
};