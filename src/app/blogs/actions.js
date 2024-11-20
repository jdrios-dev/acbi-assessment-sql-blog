"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "../../utils/supabase/server";

export async function getBlogs() {
	const supabase = await createClient();
	let { data: blogs, error } = await supabase.from("blogs").select(
		`id, title,
    content,
    created_at,
    categories (id, name)
    
    `
	);

	if (error) {
		redirect("/error");
	}
	revalidatePath("/", "layout");
	return blogs;
}
