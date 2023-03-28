import React from 'react'
import Table from './Table'


const App = () => {
  const keys = ['Name', 'Role', 'Email', 'Status', 'Join Date', 'Action'];
  const data = [
    { name: 'Aryan', role: 'engineer', email: 'test@mailinator.com', status: "Active", joindate: "12/03/2023" },
    { name: 'Aryan1', role: 'engineer', email: 'test@mailinator.com', status: "Pending", joindate: "12/03/2023" },
    { name: 'Aryan2', role: 'engineer', email: 'test@mailinator.com', status: "Viewer", joindate: "12/03/2023" },
    { name: 'Aryan3', role: 'engineer', email: 'test@mailinator.com', status: "Deactivated", joindate: "12/03/2023" }

  ]
  return (
    <><Table keys={keys} data={data}></ Table></>
  )
}
export default App
