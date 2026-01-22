//This is my beautiful resume form. This is the blueprint of what all information will be in when it
//is exported to the pdf generator! Gaze at it's perfect beauty...

export const initialResume = {
    //Contact Info
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',

    //Portfolio Fields:
    education: [
        { id: 0, schoolName: '', degree: '', gpa: '' }
    ],
    experience: [
        { id: 0, jobTitle: '', companyName: '', jobDesc: '', timeWorked: '' }
    ],
    project: [
        { id: 0, projectName: '', projectDesc: '', projectLink: '' }
    ],

    //Extra Fields
    skills: [''],
    languages: [''],
    links: [''],
    certifications: [''],
}
