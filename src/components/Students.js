import React, { useState, useEffect } from 'react'

export default function Students(props) {
    let tableHeaders = ['First Name', 'Last Name']
   
    const [students, setStudents] = useState([]);

    
    useEffect(() => {
        fetch(`https://kekambas-bs.herokuapp.com/kekambas`)
            .then(res => res.json())
            .then(data => {
                let studentKekambas = data;
                setStudents(studentKekambas);
            })
    })

    
    return (
        <div className='row py-3'>
            <h4 className="text-center">Kekambas-96</h4>
            <table className='table table-success table-striped mt-3'>
                <thead>
                    <tr>
                        {tableHeaders.map((th, i) => <th key={i}>{th}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, idx) => {   
                        return (<tr key={idx}>
                            <td>{student.first_name}</td>
                            <td>{student.last_name}</td>
                        </tr>)
                    })}
                </tbody>
            </table>
        </div>
    )
}