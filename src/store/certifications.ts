export interface Certification {
    id: number;
    title: string;
    company: string;
    description: string;
    image: string;
    date: string;
    pdf: string;
}

export const certifications: Certification[] = [
    {
        id: 1,
        title: 'Full Stack web development',
        company:'Udemy',
        description: 'Full-Stack Web Development Bootcamp Udemy (Sept 2025)',
        image: '/certifications/full-stack-web-dev-certificate.jpg',
        date: 'Sept 3rd, 2025',
        pdf: '/certifications/UC-full-stack web development-certificate.pdf',
    },

]