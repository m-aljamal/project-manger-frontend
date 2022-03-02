// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { Role } from "src/generated/generates";
// import { useFindAllEmployees } from "src/utils/employees";

// const EmployeesList = () => {
//   const [role, setRole] = useState(Role.Manger);
//   const { employees } = useFindAllEmployees(role);

//   return (
//     <div>
//       <h2>جميع الموظفين:</h2>
//       <button
//         onClick={() => setRole(role === Role.Admin ? Role.Manger : Role.Admin)}
//       >
//         {role === Role.Admin ? "المشرفين" : "الموظفين"}
//       </button>
//       {employees?.map((emp) => (
//         <Link key={emp.id} to={`/employee/${emp.id}`}>
//           <div>
//             <h2>{emp.name}</h2>
//             <p>{emp.role}</p>
//           </div>
//         </Link>
//       ))}
//     </div>
//   );
// };

// export default EmployeesList;


import React from 'react'

const EmployeesListScreen = () => {
  return (
    <div>EmployeesListScreen</div>
  )
}

export default EmployeesListScreen