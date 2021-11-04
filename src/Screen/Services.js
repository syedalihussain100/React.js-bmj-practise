import React, { useState } from 'react'

function Services() {
    const [person, setPerson] = useState({ firstname: '', lastname: '', email: '' });
    const [people, setPeople] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (person.firstname && person.lastname && person.email) {
            const newPerson = { ...person, id: new Date().getTime().toString() };
            setPeople({ ...people, newPerson });
           console.log(newPerson)
        } else {
            alert('Please Submit The Form!')
        }
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setPerson({ ...person, [name]: value });
    }
    return (
        <div>
            <h2>React.Js Form State</h2>
            <br />
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Enter Your First Name' name='firstname'
                    value={person.firstname} onChange={handleChange}
                />
                <br /> <br />
                <input type="text" placeholder='Enter Your Last Name' name='lastname'
                    value={person.lastname} onChange={handleChange}
                />
                <br /> <br />
                <input type="email" placeholder='Ente Your Email' name='email'
                    value={person.email} onChange={handleChange}
                />
                <button type='submit'>Form Submit</button>
            </form>
        </div>
    )
}

export default Services





















// import React, { useState } from 'react'

// function Services() {
//     const [name, setName] = useState({ firstname: "", email: "" });
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         let data = {
//             firstname: name.firstname,
//             email: name.email
//         }
//         console.log(data);
//     }

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <input type="text" placeholder='Enter Your Name' value={name.firstname} onChange={e => setName({ ...name, firstname: e.target.value })} />
//                 <br /> <br />
//                 <input type="email" placeholder='Enter Your Email' value={name.email} onChange={e => setName({ ...name, email: e.target.value })} />
//                 <br /> <br />
//                 <button>Submit Data</button>
//             </form>
//         </div>
//     )
// }

// export default Services
