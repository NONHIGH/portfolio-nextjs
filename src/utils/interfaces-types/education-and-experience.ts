export type education = {
	institution: string;
	start: Date;
	end: Date;
	title: string;
};

export type experience = {
	typeOfWork: typeOfWork;
    title: String;
	placeOrEmployer: string;
	start: Date;
	end: Date;
	tasks: task[];
};

export enum typeOfWork {
	enterprise = 'Empresa',
	freelancer = 'Freelancer',
}

type task = {
	title: string;
	description: string;
} 
