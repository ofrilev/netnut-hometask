import pool from '../config/database';

export interface UserSubmission {
  SubmissionID?: number; // Optional because it's auto-incremented by the database
  Name: string;
  Email: string;
  PhoneNumber?: string;
  PlanID: number;
  AddOnIDs?: number[];
  SubmissionDate?: string; // Optional because it's handled by the database
}

// Function to add a new user submission to the database
export const addUserSubmission = async (submission: UserSubmission): Promise<number> => {
  const connection = await pool.getConnection();

  try {
    await connection.beginTransaction();

    const [result] = await connection.execute('INSERT INTO user_submissions (user_name, email, phone_number, plan_id) VALUES (?, ?, ?, ?)', [
      submission.Name,
      submission.Email,
      submission.PhoneNumber || null,
      submission.PlanID
    ]);

    const submissionId = (result as any).insertId;

    if (submission.AddOnIDs && submission.AddOnIDs.length > 0) {
      const addOnRecords = submission.AddOnIDs.map(addOnId => [submissionId, addOnId]);
      await connection.query('INSERT INTO user_submission_add_ons (submission_id, add_on_id) VALUES ?', [addOnRecords]);
    }

    await connection.commit();
    return submissionId;
  } catch (error) {
    await connection.rollback();
    throw error;
  } finally {
    connection.release();
  }
};
