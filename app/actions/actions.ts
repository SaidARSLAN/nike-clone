"use server";

import { pool } from "./db";

type FormState = {
  message: string;
};

export async function sendMailToClient(
  prevState: FormState | undefined,
  formData: FormData,
): Promise<FormState> {
  try {
    const email = formData.get("email");
    if (!email)
      return {
        message: "Email need",
      };

    const result = await pool.query("Select * from test");
    console.log(result.rows);

    return { message: "Success" };
  } catch (err: any) {
    return { message: err.message };
  }
}
