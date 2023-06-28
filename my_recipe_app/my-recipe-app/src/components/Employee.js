// const Employee = [
//     {
//         ID:"123",
//         Name:"Oppo",
//         Location:"Kolkata"
//     },
//     {
//         ID:"456",
//         Name:"Vivo",
//         Location:"Kota"
//     },
//     {
//         ID:"789",
//         Name:"Samsung",
//         Location:"Pune"
//     }
// ]

// export default Employee;
// import { useEffect, useState } from "react"; 
// const url = "http://localhost:4000/companies";
// const [companies, setCompanies] = useState([]);

// const fetchCompanies = async (url) => {
//     try {
//         const response = await fetch(url);
//         const data = await response.json();
//         console.log(data);
//         if (data.length > 0) {
//             setCompanies(data);
//         }
//     }
//     catch (err) {
//         console.error(err);
//     }
// }

// useEffect(() => {
//     fetchCompanies(url);
// }, [])

// export default companies;