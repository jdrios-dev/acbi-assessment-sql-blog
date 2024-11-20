"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "../../../utils/supabase/server";

export async function getBlog(id) {
	const supabase = await createClient();
	let { data: blog, error } = await supabase
		.from("blogs")
		.select(
			`id, title,
    content,
    created_at,
    categories (id, name)
    
    `
		)
		.eq("id", id);

	if (error) {
		redirect("/error");
	}
	revalidatePath("/", "layout");
	return blog[0];
}
