
import { useState } from 'react'
import { TextInput, Button, Text, View } from 'react-native';
import { Link } from 'expo-router'
import { useRoute } from '@react-navigation/native';
import { useRouter } from 'expo-router'

let nextId = 1;

export const initialResume = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',

    education: [
        { id: nextId, schoolName: '', gpa: '' }
    ],

    skills: ['']
}

export default function FormComponent() {
    const router = useRouter();

    const [skill, setskill] = useState('');
    const [resume, setResume] = useState(initialResume)

    const name = resume.firstName

    const handleSubmit = () => {

    };


    function handleAddEducation(title: any, gpa: any) {
        setResume({
            ...resume, education: [...resume.education, {
                id: nextId++, schoolName: title, gpa: gpa,
            }
            ]
        })
    }

    function handleAddSkill(skill: any) {
        setskill('');
        setResume({
            ...resume, skills: [...resume.skills, skill]
        })
    }

    function AddComponent({ }) {
        const [gpa, setGpa] = useState('');
        const [title, setTitle] = useState('')

        return (
            <>
                <TextInput
                    placeholder='e.g. Fart College'
                    value={title}
                    onChangeText={text => setTitle(text)
                    }
                >
                </TextInput>
                <TextInput
                    placeholder='GPA Here'
                    value={gpa}
                    onChangeText={text => setGpa(text)
                    }
                >
                </TextInput>
                <Button
                    title="Add School"
                    onPress={() => handleAddEducation(title, gpa)}
                />
            </>
        )
    }

    function List({ }) {
        /*
        resume.education.map((schoolName, index) => {
            if (resume.education.at(index + 1)?.schoolName === ' ') {
                alert(`Please enter a School name! (Entry ${index + 1})`);
            }
        });
        */
        return (
            <View>
                {resume.education.map((schoolName, index) => (
                    <View key={index}>
                        <Text>School: {index + 1}</Text>
                        <Text>School Name: {resume.education.at(index)?.schoolName}</Text>
                        <Text>GPA: {resume.education.at(index)?.gpa}</Text>
                    </View>
                ))
                }
            </View >
        );
    }

    function SkillList({ }) {
        return (
            <View>
                {resume.skills.map((skill, index) => (
                    <View key={index}>
                        <Text>Skill: {index + 1}</Text>
                        <Text>{skill}</Text>
                    </View >
                ))
                }
            </View>
        );
    }

    return (
        <>
            <TextInput
                value={resume.firstName}
                placeholder='Enter Firstname Here'
                onChangeText={(text) =>
                    setResume({ ...resume, firstName: text })
                }
            >
            </TextInput>
            <TextInput
                value={resume.lastName}
                placeholder='Enter Lastname Here'
                onChangeText={(text) =>
                    setResume({ ...resume, lastName: text })
                }
            >
            </TextInput>
            <TextInput
                value={resume.email}
                placeholder='Enter Email Here'
                onChangeText={(text) =>
                    setResume({ ...resume, email: text })
                }
            >
            </TextInput>
            <TextInput
                value={resume.phone}
                placeholder='Enter Phone Number Here'
                onChangeText={(text) =>
                    setResume({ ...resume, phone: text })
                }
            >
            </TextInput>
            Education
            <AddComponent></AddComponent>
            <List></List>

            <TextInput
                value={skill}
                placeholder='Add Skill Here!'
                onChangeText={(text) => setskill(text)}
            >
            </TextInput>
            <Button
                title="Add Skill"
                onPress={() => handleAddSkill(skill)}
            />
            <SkillList></SkillList >
            <Link href={{ pathname: '/export', params: { name } }}>
                Click me please
            </Link>
        </>
    )
}
