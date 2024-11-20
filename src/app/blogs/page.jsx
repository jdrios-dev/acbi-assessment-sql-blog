"use client";
import Head from "next/head";
import { getBlogs } from "./actions";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Blogs() {
	const [blogs, setBlogs] = useState([]);

	const getData = async () => {
		const data = await getBlogs();
		setBlogs(data);
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<h1>Blogs</h1>
				<div className="min-h-screen bg-gray-100 py-8">
					<div className="max-w-5xl mx-auto px-4">
						<h1 className="text-3xl font-bold text-gray-800 mb-6">
							Blog Posts
						</h1>

						{blogs?.length > 0 ? (
							<div className="space-y-6">
								{blogs.map((blog) => (
									<Link key={blog.id} href={`/blogs/${blog.id}`}>
										<div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
											<h2 className="text-xl font-semibold text-gray-800 mb-2">
												{blog.title}
											</h2>
											<p className="text-gray-600 mb-4">{blog.description}</p>
											<p className="text-gray-500 text-sm">
												Category:{" "}
												<span className="font-medium">
													{blog.categories.name}
												</span>
											</p>
										</div>
									</Link>
								))}
							</div>
						) : (
							<p className="text-gray-500">No blogs available.</p>
						)}
					</div>
				</div>
			</main>
		</div>
	);
}
