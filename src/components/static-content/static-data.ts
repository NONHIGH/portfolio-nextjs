import {
	experience,
	typeOfWork,
	education,
} from '@/utils/interfaces-types/education-and-experience';

export const experiences: experience[] = [
	{
		title: 'Desarrollador Freelancer',
		placeOrEmployer: 'The Fourth Element',
		start: new Date(2023, 7),
		end: new Date(),
		typeOfWork: typeOfWork.freelancer,
		tasks: [
			
		],
	},
];

export const educations: education[] = [
	{
		institution: 'Soy Henry',
		title: 'Full Stack developer',
		start: new Date(2023, 5),
		end: new Date(2023, 8),
	},
	{
		institution: 'Argentina programa 4.0',
		title: 'Full stack developer',
		start: new Date(2023, 5),
		end: new Date(2023, 4),
	},
];
