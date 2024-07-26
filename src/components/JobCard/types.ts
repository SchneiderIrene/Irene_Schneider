export interface JobDescription{
titleDescription?: string,
span?: string[],
li: string[]
}


export interface Job{
    title: string,
    company: string,
    companyDescription: string,
    link: string,
    period: string,
    location: string,
    description: JobDescription[],
}

export interface JobProps {
    jobs: Job[]
}

