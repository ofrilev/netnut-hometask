import { Request, Response } from 'express';
import { getAllAddOns } from '../models/addon';

export const getAddOns = async (req: Request, res: Response): Promise<void> => {
  try {
    const addons = await getAllAddOns(); // Await the promise from getAllAddOns
    res.json(addons);
  } catch (error) {
    console.error('Error fetching add-ons:', error);
    res.status(500).json({
      error: 'Internal Server Error',
      message: 'An unexpected error occurred. Please try again later.'
    });
  }
};