export type projects = project[];

export type project = {
	id: string;
	name: string,
	description: string,
	tecnologies: tecnology[];
	presentationImage: string;
};

type tecnology = {
	readonly name: string;
	readonly version?: string;
};
