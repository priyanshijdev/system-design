import React, { useState } from 'react';
import './Student.css';

export const StudentForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        studentId:'',
        major: ''
       });
       const handleChange = (e:any) =>{
            const {name, value} = e.target;
            setFormData(prevData=>({
                ...prevData,
                [name]: value
            }))
       }

     const handleSubmit = (e: any) =>{
        e.preventDefault();
        console.log('Form Submitted',formData)
     }  
     return (
        <div className="student-form">
          <div className="student-form__card">
            <div className="student-form__header">
              <h2 className="student-form__title">Student Information</h2>
              <p className="student-form__description">Please fill out the form below with your details.</p>
            </div>
            <form onSubmit={handleSubmit} className="student-form__form">
              <div className="student-form__field">
                <label htmlFor="name" className="student-form__label">Full Name</label>
                <input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="student-form__input"
                />
              </div>
              <div className="student-form__field">
                <label htmlFor="email" className="student-form__label">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="student-form__input"
                />
              </div>
              <div className="student-form__field">
                <label htmlFor="studentId" className="student-form__label">Student ID</label>
                <input
                  id="studentId"
                  name="studentId"
                  value={formData.studentId}
                  onChange={handleChange}
                  required
                  className="student-form__input"
                />
              </div>
              <div className="student-form__field">
                <label  className="student-form__label">Phone </label>
                <input
                  id="number"
                  name="Phone Number"
                //   type='number'
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="student-form__input"
                />
              </div>
              <div className="student-form__field">
                <label htmlFor="major" className="student-form__label">Major</label>
                <select
                  id="major"
                  name="major"
                  value={formData.major}
                  onChange={handleChange}
                  required
                  className="student-form__select"
                >
                  <option value="">Select your major</option>
                  <option value="computer-science">Computer Science</option>
                  <option value="engineering">Engineering</option>
                  <option value="business">Business</option>
                  <option value="arts">Arts</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <button type="submit" className="student-form__submit">Submit</button>
            </form>
          </div>
        </div>
      )

}
