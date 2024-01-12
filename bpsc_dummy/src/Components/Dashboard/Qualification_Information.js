import React,{useState} from 'react'

const Qualification_Information = () => {
    const [qualificationData, setQualificationData] = useState({
        '10': { name: '', specialization: '', school: '', marks: '', year: '' },
        '12': { name: '', specialization: '', school: '', marks: '', year: '' },
        'UG': { name: '', specialization: '', school: '', marks: '', year: '' },
        'PG': { name: '', specialization: '', school: '', marks: '', year: '' },
        'OTHER': { name: '', specialization: '', school: '', marks: '', year: '' },
    });

    const handleQualificationChange = (key, field, event) => {
        setQualificationData(prevData => ({
            ...prevData,
            [key]: {
                ...prevData[key],
                [field]: event.target.value,
            },
        }));
    };
    const [academicDocuments, setAcademicDocuments] = useState({
        '10': { name: '10', marksSheet: null, viewDocuments: '' },
        '12': { name: '12', marksSheet: null, viewDocuments: '' },
        'UG': { name: 'UG', marksSheet: null, viewDocuments: '' },
        'PG': { name: 'PG', marksSheet: null, viewDocuments: '' },
        'OTHER': { name: 'OTHER', marksSheet: null, viewDocuments: '' },
    });

    const handleMarksSheetChange = (key, event) => {
        setAcademicDocuments(prevData => ({
            ...prevData,
            [key]: {
                ...prevData[key],
                marksSheet: event.target.files[0],
            },
        }));
    };

    const handleViewDocumentsChange = (key, event) => {
        setAcademicDocuments(prevData => ({
            ...prevData,
            [key]: {
                ...prevData[key],
                viewDocuments: event.target.value,
            },
        }));
    };
    return (
        <>
<table className='w-full'>
                <thead className='border '>
                    <tr>
                        <td className='text-lg border text-center'>Qualification Name</td>
                        <td className='text-lg border text-center'>Qualification <br/> (Specialization)</td>
                        <td className='text-lg border text-center'>Name of School <br/>University</td>
                        <td className='text-lg border text-center'>Marks Score</td>
                        <td className='text-lg border text-center'>Year of Completion</td>
                    </tr>
                </thead>
                <tbody className='mt-2'>
                    {Object.keys(qualificationData).map(key => (
                        <tr key={key} className='border'>
                            <td className='border p-1'>
                                <input
                                    type='text'
                                    className='text-center'
                                    value={qualificationData[key].name}
                                    readOnly
                                />
                            </td>
                            <td className='border'>
                                <input
                                    type='text'
                                    className='w-full'
                                    value={qualificationData[key].specialization}
                                    onChange={(e) => handleQualificationChange(key, 'specialization', e)}
                                />
                            </td>
                            <td className='border'>
                                <input
                                    type='text'
                                    className='w-full'
                                    value={qualificationData[key].school}
                                    onChange={(e) => handleQualificationChange(key, 'school', e)}
                                />
                            </td>
                            <td className='border'>
                                <input
                                    type='text'
                                    className='w-full'
                                    value={qualificationData[key].marks}
                                    onChange={(e) => handleQualificationChange(key, 'marks', e)}
                                />
                            </td>
                            <td className='border'>
                                <input
                                    type='text'
                                    className='w-full'
                                    value={qualificationData[key].year}
                                    onChange={(e) => handleQualificationChange(key, 'year', e)}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='container'>
                <div className='bg-slate-200' >
                    <h3 className='text-2xl text-center text-gray-500 p-2'>Accademic Documents</h3>
                    <hr className='w-11/12 ml-12 text-center'/>
                </div>
                <div>
                <table className='w-full'>
                <thead className='border'>
                    <tr>
                        <td className='text-lg border text-center'>Qualification Name</td>
                        <td className='text-lg border text-center'>Marks Sheet Upload</td>
                        <td className='text-lg border text-center'>View Uploaded Documents</td>
                    </tr>
                </thead>
                <tbody className='mt-2'>
                    {Object.keys(academicDocuments).map(key => (
                        <tr key={key} className='border'>
                            <td className='border p-1'>
                                <input
                                    type='text'
                                    className='text-center'
                                    value={academicDocuments[key].name}
                                    readOnly
                                />
                            </td>
                            <td className='border'>
                                <input
                                    type='file'
                                    className='w-full'
                                    onChange={(e) => handleMarksSheetChange(key, e)}
                                />
                            </td>
                            <td className='border'>
                                <input
                                    type='text'
                                    className='w-full'
                                    value={academicDocuments[key].viewDocuments}
                                    onChange={(e) => handleViewDocumentsChange(key, e)}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
                </div>
            </div>
        </>
    )
}

export default Qualification_Information