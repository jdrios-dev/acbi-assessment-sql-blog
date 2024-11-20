"use client";
import Head from "next/head";
import { useState } from "react";
import { createBlog } from "./actions";

export default function NewBlog() {
	const [formData, setFormData] = useState({
		title: "",
		content: "",
		categorieId: "",
	});
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		createBlog(formData);
		// TODO: Add your API call here to save the blog entry
	};

	return (
		<div>
			<Head>
				<title>New Blog</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
					<div className="w-full max-w-lg bg-white shadow-md rounded-lg p-6">
						<h1 className="text-2xl font-bold text-gray-800 mb-6">
							Create Blog Entry
						</h1>
						<form onSubmit={handleSubmit} className="space-y-4">
							{/* Title */}
							<div>
								<label
									htmlFor="title"
									className="block text-gray-700 font-medium"
								>
									Title
								</label>
								<input
									type="text"
									id="title"
									name="title"
									value={formData.title}
									onChange={handleChange}
									className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
									placeholder="Enter the blog title"
									required
								/>
							</div>

							{/* Content */}
							<div>
								<label
									htmlFor="content"
									className="block text-gray-700 font-medium"
								>
									Content
								</label>
								<textarea
									id="content"
									name="content"
									value={formData.content}
									onChange={handleChange}
									className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
									placeholder="Enter the blog content"
									rows="5"
									required
								></textarea>
							</div>

							{/* CategorieId */}
							<div>
								<label
									htmlFor="categorieId"
									className="block text-gray-700 font-medium"
								>
									Category ID
								</label>
								<input
									type="text"
									id="categorieId"
									name="categorieId"
									value={formData.categorieId}
									onChange={handleChange}
									className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
									placeholder="Enter the category ID"
									required
								/>
							</div>

							{/* Submit Button */}
							<div>
								<button
									type="submit"
									className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
								>
									Submit
								</button>
							</div>
						</form>
					</div>
				</div>
			</main>
		</div>
	);
}
