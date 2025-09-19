export interface Types {
    id: number;
    skill: string;
    skillPercentage: number;
}

export const frontendSkills: Types[] = [
    {
        id: 1,
        skill: 'HTML/CSS',
        skillPercentage: 85
    },
    {
        id: 2,
        skill: 'JavaScript',
        skillPercentage: 80

    },
    {
        id: 3,
        skill: 'React.js',
        skillPercentage: 85
    },
    {
        id: 4,
        skill: 'TypeScript',
        skillPercentage: 80
    }, {
        id: 5,
        skill: 'Next.js',
        skillPercentage: 85
    }, {
        id: 6,
        skill: 'Tailwind CS',
        skillPercentage: 85
    },

];

export const backendSkills: Types[] = [
    {
        id: 1,
        skill: 'Node.js',
        skillPercentage: 75
    },
    {
        id: 2,
        skill: 'Express.js',
        skillPercentage: 75
    },
    {
        id: 3,
        skill: 'MongoDB',
        skillPercentage: 75
    },
    {
        id: 4,
        skill: 'REST APIs',
        skillPercentage: 80
    },
    {
        id: 5,
        skill: 'PostgresSQL',
        skillPercentage: 65
    },

];

export const toolsAndTechnologies: Types[] = [
    {
        id: 1,
        skill: 'Git/GitHub',
        skillPercentage: 80
    },
    {
        id: 2,
        skill: 'Figma',
        skillPercentage: 80
    }, {
        id: 3,
        skill: 'Postman',
        skillPercentage: 80
    }, {
        id: 4,
        skill: 'AWS',
        skillPercentage: 65
    }, {
        id: 5,
        skill: 'VS Code',
        skillPercentage: 90
    }, {
        id: 6,
        skill: 'WebStorm',
        skillPercentage: 90
    },
];

export const additionalTechnologies: Types[] = [
    {
        id: 1,
        skill: 'React Native(Expo)',
        skillPercentage: 70
    },
    {
        id: 2,
        skill: 'Django REST Framework',
        skillPercentage: 20
    },

]
