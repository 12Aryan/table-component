import React from 'react'


const Table = ({ data, keys }) => {
    //  console.log('data,',data);
    //  console.log('keys,',keys);
    return (
        <>
       {/*custom table*/ }
         <div className="table-container-div">
           <table className="table-div">
           <thead>
           <tr className='heading'>
           {keys.map((element, index) => { 
            return (<><td className={element} key={index}> {element} </td>
            </>)
        
        })}
        </tr>
           </thead>
           <tbody>
           {data.map((element) => {

            return (<>
                <tr>
                    <td className='names'>{element.name}</td>
                    <td>{element.role}</td>
                    <td>{element.email}</td>
                    <td ><p className={element.status}>{element.status}</p> </td>
                    <td>{element.joindate}</td>
                    <td className='action'>:</td>
                </tr>
                 </>)
        })}
           </tbody>
           </table>
           </div>

        </>
    )
}

export default Table
