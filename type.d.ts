import { ElementNode } from "@graphcms/rich-text-types";

type Technology = {
	id: string;
	title: string;
	category: string;
	tech: string;
	img: string;
	color: string;
};

type Snippet = {
	id: string;
	title: string;
	author: Author;
	date: string;
	category: string;
	topic: string;
	tech: string;
	description: string;
	img: { url: string };
	subTitle: string;
	code: { json: ElementNode };
	slug: string;
	videolink: { url: string };
};

type Article = {
	id: string;
	createdAt: Date;
	title: string;
	image: { url: string };
	author: Author;
	level: string;
	slug: string;
	url: string;
	shortDescription: string;
	content: { json: ElementNode };
	date: Date;
};

type Author = {
	name: string;
	photo: { url: string };
	bio: string;
	description: string;
	linkedIn: string;
	twitter: string;
	instagram: string;
	github: string;
	youtube: string;
	discord: string;
	articles: Article[];
	snippets: Snippet[];
};

type Docs = {
	id: number;
	title: string;
	category: string;
	links: Docs[];
	name: string;
	url: string;
};

type PdfFile = {
	id: number;
	file: string;
	image: { url: string };
};

type Category = {
	id: number;
	name: string;
};
