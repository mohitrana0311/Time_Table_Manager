import React from "react";
import Card from "./Card";
export default function About(){
    return(
        <div className="about">
        <p className="about-heading">Welcome to the Scheduling Assistant</p>
        <p className="main-heading">IITG Slot system</p>
        <p className="about-paragraph">The idea was originally conceived due to the slot system here at IITG. There are slots A1, A2, B1 etc which have their pre-assigned days and times set in the common timetable. Instructors simply announce their respective slots and the entire timetable for a course gets generated therein. Due to this neat arrangement, scheduling assistant allows the users to easily create their academic schedule and also maintain attendance record.</p>
        <p className="main-heading">About Developer</p>
        <p className="about-paragraph">We are a group of students studying at Indian Institute of technology, Guwahati. This project has been created with an intention of using a database management system tool along with React to build something that is of actual utility and importance to the user (Our fellow students).</p>
        <div className="social-follows">
        <div className="cards">
        <Card
        imgadd="kapil_garg.jpg"
        devname="KAPIL GARG"
        linkedin="https://www.linkedin.com/in/kapil6530/"
        emailid="gargkapill2001@gmail.com"
        phone="9772724435"
        />
        </div>
        <div className="cards">
        <Card
        imgadd="sanyam_jhang.jpg"
        devname="SANYAM JHANG"
        linkedin="https://www.linkedin.com/in/sanyamjhang9"
        emailid="sanyamjhang9@gmail.com"
        phone="8949977439"
        />
        </div>
        <div className="cards">
        <Card
        imgadd="Mohit.jpg"
        devname="Mohit Rana"
        linkedin="https://wwww.linkedin.com/in/mohit2054"
        emailid="mohitrana0311@gmail.com"
        phone="8077499774"
        />
        </div>
        </div>
        </div>
    )
}