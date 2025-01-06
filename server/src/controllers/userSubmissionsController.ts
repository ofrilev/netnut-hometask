import { Request, Response } from 'express';
import { getAllPlans } from '../models/plan';
import { getAllAddOns } from '../models/addon';
import { addUserSubmission } from '../models/userSubmission';

export const postUserSubmission = async (req: Request, res: Response): Promise<void> => {
  try {
    let { Name, Email, PhoneNumber, PlanID, AddOnIDs } = req.body;

    // Validate required fields
    if (!Name || !Email || !PlanID) {
      res.status(400).json({
        error: 'Bad Request',
        message: 'UserName, Email, and PlanID are required.'
      });
      return;
    }

    // Ensure AddOnIDs is an array
    if (AddOnIDs) {
      // Turn string into array if needed
      AddOnIDs = typeof AddOnIDs === 'string' ? JSON.parse(AddOnIDs) : AddOnIDs;
      if (!Array.isArray(AddOnIDs)) {
        AddOnIDs = [AddOnIDs]; 
      }
    } else {
      AddOnIDs = []; 
    }

    PlanID = Number(PlanID);

    // Validate plan ID
    const plans = await getAllPlans();
    const plan = plans.find(p => p.plan_id === PlanID);
    if (!plan) {
      res.status(404).json({
        error: 'Not Found',
        message: 'Selected PlanID does not exist.'
      });
      return;
    }

    // Validate add-on IDs
    if (AddOnIDs.length > 0) {
      const validAddOns = await getAllAddOns();
      for (const addOnID of AddOnIDs) {
        if (typeof addOnID !== 'number') {
          res.status(400).json({
            error: 'Bad Request',
            message: `AddOnID ${addOnID} must be a number.`
          });
          return;
        }
        if (!validAddOns.find(a => a.add_on_id === addOnID)) {
          res.status(404).json({
            error: 'Not Found',
            message: `AddOnID ${addOnID} does not exist.`
          });
          return;
        }
      }
    }

    const submissionId = await addUserSubmission({
      Name,
      Email,
      PhoneNumber,
      PlanID,
      AddOnIDs,
    });

    res.status(201).json({ submissionId });
  } catch (error) {
    console.error('Error creating user submission:', error);
    res.status(500).json({
      error: 'Internal Server Error',
      message: 'An unexpected error occurred. Please try again later.'
    });
  }
};
