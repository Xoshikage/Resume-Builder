
import { useState } from 'react'
import { TextInput, Button, Text, View } from 'react-native';
import { Link } from 'expo-router'
import { useRoute } from '@react-navigation/native';
import { useRouter } from 'expo-router'
import { initialResume } from './InitialResume';
import React from 'react'

//Remove These Eventually, apparently they arent needed or whatever.
let ProjectId = 0;
let ExperienceId = 0;
let EducationId = 0;

//
const portfolioLimit = 3
const extraLimit = 5;

//Enums
enum ExtraFields {
    Skill = 'SKILL',
    Language = 'LANGUAGE',
    Link = 'LINK',
    Certification = 'CERTIFS',
}

enum PortfolioFields {
    Education = 'EDUCATION',
    Experience = 'EXPERIENCE',
    Project = 'PROJECT',
}
//Mappers :: MOVE ME
const EXTRA_FIELD_MAP = {
    [ExtraFields.Skill]: 'skills',
    [ExtraFields.Language]: 'languages',
    [ExtraFields.Link]: 'links',
    [ExtraFields.Certification]: 'certifications',
} as const;

const PORTFOLIO_FIELD_MAP = {
    [PortfolioFields.Education]: 'education',
    [PortfolioFields.Experience]: 'experience',
    [PortfolioFields.Project]: 'project',
} as const;

//Labels :: MOVE ME TOO!!
const PORTFOLIO_FIELD_LABEL = {
    [PortfolioFields.Education]: 'School',
    [PortfolioFields.Experience]: 'Experience',
    [PortfolioFields.Project]: 'Project',
}

const EXTRA_FIELD_LABEL = {
    [ExtraFields.Skill]: 'Skill',
    [ExtraFields.Language]: 'Language',
    [ExtraFields.Link]: 'Link',
    [ExtraFields.Certification]: 'Certification',
}

//Build VECTOR FORM Inputs Right Here

export default function FormComponent() {
    const router = useRouter();

    const [ExtraFieldData, setExtraFieldData] = useState({
        skills: '',
        languages: '',
        links: '',
        certifications: '',
    });

    const [resume, setResume] = useState(initialResume)

    //const butt = resume;

    const handleSubmit = () => {

    };

    //Extra Field Handler - 
    function HandleAddExtraFields(value: string, type: ExtraFields) {
        setResume({
            ...resume,
            [EXTRA_FIELD_MAP[type]]: [
                ...resume[EXTRA_FIELD_MAP[type]],
                value
            ]
        })
        setExtraFieldData(prev => ({ ...prev, [type]: '' }))
    }

    //Vector Field Handler
    function HandlePortfolioFields(value: string, type: PortfolioFields) {
        switch (type) {
            case 'EDUCATION':
                setResume({
                    ...resume, education: [...resume.education,
                    {
                        id: EducationId++,
                        schoolName: value,
                        degree: '',
                        gpa: ''
                    }
                    ]
                })
                break;
            case 'EXPERIENCE':
                setResume({
                    ...resume, experience: [...resume.experience,
                    {
                        id: ExperienceId++,
                        jobTitle: value,
                        companyName: '',
                        jobDesc: '',
                        timeWorked: '',
                    }
                    ]
                })
                break;
            case 'PROJECT':
                setResume({
                    ...resume, project: [...resume.project,
                    {
                        id: ProjectId++,
                        projectName: value,
                        projectDesc: '',
                        projectLink: '',
                    }
                    ]
                })
        }
    }

    const placeholders = ['Technical Communication', 'English - Fluent', 'XavierJackson.com', 'AWS'];

    function Extra({ type, placeholder }: { type: ExtraFields; placeholder: string }) {

        return (
            <View>
                <TextInput>
                    value={resume[]}
                    placeholder: {placeholder}
                    onChangeText={(text) => 
                        setResume({ ...resume, })
                    }

                </TextInput>
            </View>
        )
    }
    function ContactFields() {
        type ContactKey = 'firstName' | 'lastName' | 'email' | 'phone' | 'address';

        const contactFields: ContactKey[] = ['firstName', 'lastName', 'email', 'phone', 'address'];
        const contactLabels = ['First Name', 'Last Name', 'Email', 'Phone', 'Address'];
        return (
            <View>
                {contactFields.map((key, index) => (
                    <TextInput
                        key={key}
                        value={String(resume[key] ?? '')}
                        placeholder={'Enter your ' + contactLabels[index] + ' here!'}
                        onChangeText={(text) =>
                            setResume({ ...resume, [key]: text })
                        }
                        style={{ marginBottom: 10, borderWidth: 1, padding: 5 }}
                    >
                    </TextInput>
                ))}
            </View>
        )
    }

    function AddPortfolio({ type }: { type: PortfolioFields }) {

        const [title, setTitle] = useState('');
        const label = PORTFOLIO_FIELD_LABEL[type] + " title!"
        const buttonlabel = "Add " + PORTFOLIO_FIELD_LABEL[type];

        return (
            <View>
                <TextInput
                    value={title}
                    placeholder={label}
                    onChangeText={(text) => setTitle(text)}
                    style={{ marginBottom: 10, borderWidth: 1, padding: 5 }}
                />
                <Button
                    title={buttonlabel}
                    onPress={() => {
                        HandlePortfolioFields(title, type)
                        setTitle('')
                    }}
                ></Button>
            </View >
        )
    }
    function DeletePorfolio({ type }: { type: PortfolioFields }) {

    }
    function EditPorfolioField({ type }: { type: PortfolioFields }) {

    }

    function DisplayEducation({ type }: { type: PortfolioFields }) {
        const key = PORTFOLIO_FIELD_MAP[type];

        return (
            <View>
                {resume.education.map((item, index) => (
                    <View

                    >
                        <Text>{PORTFOLIO_FIELD_LABEL[type]}. {index + 1}</Text>
                        <Text>School Name: {item.schoolName}</Text>
                        <Text>Degree: {item.degree}</Text>
                        <Text>GPA: {item.gpa}</Text>
                    </View>
                ))
                }
            </View >
        );
    }
    function DisplayExperience({ type }: { type: PortfolioFields }) {
        const key = PORTFOLIO_FIELD_MAP[type];
        return (
            <View>
                {resume.experience.map((item, index) => (
                    <View>
                        <Text>{PORTFOLIO_FIELD_LABEL[type]}. {index + 1}</Text>
                        <Text>Company Name: {item.companyName}</Text>
                        <Text>Degree: {item.jobTitle}</Text>
                        <Text>GPA: {item.jobDesc}</Text>
                        <Text>Time Worked: {item.timeWorked}</Text>
                    </View>
                ))
                }
            </View >
        );
    }
    function DisplayProjects({ type }: { type: PortfolioFields }) {
        const key = PORTFOLIO_FIELD_MAP[type];
        return (
            <View>
                {resume.project.map((item, index) => (
                    <View>
                        <Text>{PORTFOLIO_FIELD_LABEL[type]}. {index + 1}</Text>
                        <Text>Project Name: {item.projectName}</Text>
                        <Text>Project Desc: {item.projectDesc}</Text>
                        <Text>Project Link: {item.projectLink}</Text>
                    </View>
                ))
                }
            </View >
        );
    }
    //Fix: if field is empty chamber
    function MetaButton({ type, value }: { type: ExtraFields, value: string }) {
        const ButtonLabel = 'Add ' + EXTRA_FIELD_LABEL[type];
        const alertMsg = 'Max ' + EXTRA_FIELD_LABEL[type] + ' added!';
        const key = EXTRA_FIELD_MAP[type];

        return (
            < Button
                title={ButtonLabel}
                onPress={() => {
                    HandleAddExtraFields(value, type)
                }}
            />
        )
    }

    //Super Dynamic! Just call me once!
    function MetaList({ type }: { type: ExtraFields }) {
        const key = EXTRA_FIELD_MAP[type];
        return (
            <View>
                <Text>{EXTRA_FIELD_LABEL[type]} {resume[key].length - 1} / 5</Text>
                {resume[key].map((item, index) => (
                    item !== '' ? ( // Use a ternary operator
                        <Text key={index}>
                            {index}. {item}
                        </Text>
                    ) : null // Return null if the condition is not met
                ))}
            </View>
        );
    }


    return (
        <>
            <ContactFields></ContactFields>
            <>
                <AddPortfolio type={PortfolioFields.Education}></AddPortfolio>
                <DisplayEducation type={PortfolioFields.Education}></DisplayEducation>
                <AddPortfolio type={PortfolioFields.Experience}></AddPortfolio>
                <DisplayExperience type={PortfolioFields.Experience}></DisplayExperience>
                <AddPortfolio type={PortfolioFields.Project}></AddPortfolio>
                <DisplayExperience type={PortfolioFields.Project}></DisplayExperience>
            </>
            <>
                <Text>Relevant Skills:</Text>
                <Extra></Extra>
            </>
        </>
    )
}

//Checker NON-FUNCTIONAL
/*
resume.education.map((schoolName, index) => {
    if (resume.education.at(index + 1)?.schoolName === ' ') {
        alert(`Please enter a School name! (Entry ${index + 1})`);
    }
});
*/

/*
<Link href={{ pathname: '/export', params: { butt } }}>
                Click me please</Link>
*/