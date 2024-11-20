"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "../../utils/supabase/server";

export async function createBlog(formData) {
	const supabase = await createClient();

	// const dataRaw = {
	// 	title: formData.get("title"),
	// 	content: formData.get("content"),
	// 	categorieId: formData.get("categorieId"),
	// };

	const { data, error } = await supabase
		.from("blogs")
		.insert([
			{
				title: formData.title,
				content: formData.content,
				categorieId: formData.categorieId,
			},
		])
		.select();

	if (error) {
		redirect("/error");
	}

	revalidatePath("/", "layout");
	redirect("/blogs");
}
