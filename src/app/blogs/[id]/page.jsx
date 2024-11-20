"use client";

import Head from "next/head";
import { useParams } from "next/navigation";
import { getBlog } from "./actions";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function BlogsDetail() {
	const router = useParams();
	const blogId = router?.id;

	const [blog, setBlog] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const getData = async () => {
		setIsLoading(true);
		const data = await getBlog(blogId);
		setBlog(data);
		setIsLoading(false);
	};

	useEffect(() => {
		getData();
	}, []);
	if (isLoading) {
		return <div>Loading...</div>;
	}
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<div className="min-h-screen bg-gray-100 py-8">
					<div className="max-w-4xl mx-auto px-4">
						<h1 className="text-4xl font-bold text-gray-800 mb-4">
							{blog.title}
						</h1>
						<p className="text-gray-600 mb-6 text-sm">
							Category:{" "}
							<span className="font-medium text-gray-800">
								{blog?.categories?.name}
							</span>
						</p>
						<p className="text-gray-500 mb-6 text-sm">
							Published on: {new Date(blog.created_at).toLocaleDateString()}
						</p>
						<div className="bg-white shadow-md rounded-lg p-6">
							<p className="text-gray-700 leading-relaxed">{blog.content}</p>
						</div>
						<Link
							href={"/blogs"}
							className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
						>
							Go Back
						</Link>
					</div>
				</div>
			</main>
		</div>
	);
}
