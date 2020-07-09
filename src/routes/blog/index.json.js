import fs from "fs";
import path from "path";
import grayMatter from "gray-matter";

const getAllPosts = () => {
	try {
	  return fs.readdirSync("static/content/posts/").map((fileName) => {
		const post = fs.readFileSync(
		  path.resolve("static/content/posts", fileName),
		  "utf-8"
		);
		return grayMatter(post).data;
	  });
	} catch (e) {
	  return [];
	}
  };

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	const posts = getAllPosts();
  	res.end(JSON.stringify(posts));
}