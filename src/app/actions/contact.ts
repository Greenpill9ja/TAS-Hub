"use server";

import { sql } from "@vercel/postgres";

export async function submitContactForm(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !message) {
        return { success: false, error: "All fields are required." };
    }

    try {
        await sql`
            CREATE TABLE IF NOT EXISTS contact_submissions (
                id SERIAL PRIMARY KEY,
                name TEXT NOT NULL,
                email TEXT NOT NULL,
                message TEXT NOT NULL,
                created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
            )
        `;

        await sql`
            INSERT INTO contact_submissions (name, email, message)
            VALUES (${name}, ${email}, ${message})
        `;

        return { success: true };
    } catch (error) {
        console.error("Contact form submission failed:", error);
        return { success: false, error: "Something went wrong. Please try again." };
    }
}
