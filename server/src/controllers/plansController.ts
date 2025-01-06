import { Request, Response } from 'express';
import { Plan, getAllPlans } from '../models/plan';

export const getPlans = async (req: Request, res: Response): Promise<void> => {
  try {
    const { type } = req.query;
    const validTypes = ['Monthly', 'Yearly'];

    if (type && typeof type === 'string' && !validTypes.includes(type)) {
      res.status(400).json({
        error: 'Bad Request',
        message: `Invalid type parameter. Valid values are: ${validTypes.join(', ')}.`
      });
      return;
    }

    const plans: Plan[] = await getAllPlans(); // Await the promise and type the result
    const filteredPlans = typeof type === 'string'
      ? plans.filter((plan: Plan) => plan.type === type) // Type the plan parameter
      : plans;

    res.json(filteredPlans);
  } catch (error) {
    console.error('Error fetching plans:', error);
    res.status(500).json({
      error: 'Internal Server Error',
      message: 'An unexpected error occurred. Please try again later.'
    });
  }
};