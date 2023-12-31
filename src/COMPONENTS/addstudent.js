
import React , {useState} from 'react';
import { Button,TextField } from "@mui/material";
import { useHistory } from 'react-router-dom';
import Base from '../BASE/base';


const AddStudents = ({studentsData,setStudentsData}) => {

    const history =useHistory();

    const[values,setValues] = useState({
        
        name:"",
        batch:"",
        gender:"",
        qualification:""
    })

    const{
       
        name,
        batch,
        gender,
        qualification} = values;
    

   const handlechange = (name) => (event) => {
            const value = event.target.value;
            setValues({...values,[name]:value})
        }

    const addNewStudent = async() => {

        try {
            
            const newStudent = {
                
                name,
                batch,
                gender,
                qualification
            }
     
            const response = await fetch("https://644bbf924bdbc0cc3a996e03.mockapi.io/student",{
                method:"POST",
                body:JSON.stringify(newStudent),
                headers : {
                    "Content-Type" : "application/json"
                }
            });

            const data = await response.json();

            setStudentsData([...studentsData,data])
    
            setValues({
                ...values,
                
                name:"",
                batch:"",
                gender:"",
                qualification:""
            })
    
            history.push("/students-list")
            console.log(data)


        } catch (error) {
            console.log("Error Occure" , error)
        }
    }
     

    return(
        <Base
        title="Add Student"
        >
         <div className='inputfield'>

          

          <TextField 
           fullWidth label="Enter Name"
           onChange={handlechange("name")}
           value={name}
           name="name"
           id="fullWidth"
           />

           
          <TextField 
           fullWidth label="Enter Batch"
           onChange={handlechange("batch")}
           value={batch}
           name="batch"
           id="fullWidth"
           />
           <TextField 
           fullWidth label="Enter Gender"
           onChange={handlechange("gender")}
           value={gender}
           name="gender"
           id="fullWidth"
           />
           <TextField 
           fullWidth label="Enter Qualification"
           onChange={handlechange("qualification")}
           value={qualification}
           name="qualification"
           id="fullWidth"
           />

           <Button
           
           className='addbtn'
           color='success'
           variant="contained"
           onClick={addNewStudent}
        
           >

            Add Student
           </Button>



         </div>
        </Base>
    )
}

export default AddStudents;