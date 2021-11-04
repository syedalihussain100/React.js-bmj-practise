import React from 'react'

function Services() {
    return (
        <div>
        <h2>hello World</h2>            
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
