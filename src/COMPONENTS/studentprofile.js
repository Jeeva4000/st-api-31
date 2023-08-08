
import { Button } from "@mui/material";
import React from "react";
import { useHistory, useParams } from "react-router-dom";
import Base from "../BASE/base";


export const StudentProfile = ({studentsData}) => {
const {id} = useParams();
const student = studentsData[id]

// const student = studentsData.filter((stud)=>stud.id == id)
const history = useHistory()
return(
    <Base
    title="Student Profile"
    >
         
      
       <div className="studentProfile">
            <div> Student Name : {student.name}</div>
            <p>Gender : {student.gender}</p>
            <p>Batch : {student.batch}</p>
            <p>Qualification : {student.qualification}</p>
            <Button style={{fontSize : "calc(15px + 0.5vw)" , fontWeight:"bold"}} color="secondary"
             onClick={()=>history.push(`/editstudent/${id}`)}>
             EDIT
            </Button>
        </div>
    
    
    
    </Base>
)
}