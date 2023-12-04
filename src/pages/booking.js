import React, { Component } from "react";
import axios from 'axios';
import './partials/footer'
import './partials/Header'

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../Styles/booking.css'




// function DatePicker()  {
//    const [startDate, setStartDate] = useState(new Date());
//    return (
//      <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
//    );
//    };

// export default DatePicker

class Booking extends Component{
     constructor(props){
        super(props);
        this.onChangeFirstName = this.onChangeFirstName.bind(this)
        this.onChangeLastName = this.onChangeLastName.bind(this)
        this.onChangeEmail = this.onChangeEmail.bind(this)
        this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this)
        this.onChangeDate = this.onChangeDate.bind(this)
   
        this.onChangeQuestion = this.onChangeQuestion.bind(this)
        this.onChangeSubmit = this.onSubmit.bind(this)
        this.state = {
         firstname: " ",
         lastname: " ",
         phonenumber: " ",
         date: " ",
         email: " ",
         questions: " ",
        };
      }

      onChangeFirstName(e){
         this.setState({
            firstname: e.target.value
         })
      }
      onChangeLastName(e){
         this.setState({
            lastname: e.target.value
         });
      }
      onChangeEmail(e){
         this.setState({
            email: e.target.value
         });
      }
      onChangePhoneNumber(e){
         this.setState({
            phonenumber: e.target.value
         });
      }
      onChangeDate(date){
         this.setState({
            date: date
         });
      }
      onChangeQuestion(e){
         this.setState({
            question: e.target.value
         });
      }
      onSubmit(e) {
         e.preventDefault();
         const booking = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            phonenumber: this.state.phonenumber,
            date: this.state.date,
            question: this.state.question
         };
         console.log(booking);
         
      axios.post('http://localhost:5000/booking/add', booking)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));

      }
      
      render(){
         return(
           
            <div className="container">   
                
       <div>         
      <form onSubmit={this.onSubmit}>
         
      
      <label  className='text '>Name</label>
      <input type="text" id="fname" name="firstname" placeholder="Your  first name.." value={this.state.name} onChange={this.onChangeFirstName}/>
  
       <label className='text'>Last Name</label>
      <input type="text" id="lname" name="lastname" placeholder="Your last name.." value={this.state.lastname} onChange={this.onChangeLastName}/> 
       
      <label  className='text'>Email</label>
      <input type="text" id="lname" name="email" placeholder="Your email here.." value={this.state.email} onChange={this.onChangeEmail}/>
      
      <label  className='text'>Phone Number</label>
      <input type="text" id="lname" name="phonenumber" placeholder="Your phone number.." value={this.state.phonenumber} onChange={this.onChangePhoneNumber}/>

      <div>
            <label className='text'>Date Picker</label>
            <div>
            <DatePicker dateFormat="MM-dd-yyyy" className="date" selected={new Date(this.state.date)} onChange={this.onChangeDate}/>
                </div>
                
                
         
      
  
      <label  className="text">Questions or comments</label>
      <textarea id="subject" name="subject" placeholder="Write something.." value={this.state.question} onChange={this.onChangeQuestion}></textarea>

      
      <div className="container">
  <input type="checkbox" id="start" />
  <label >
    <input type="submit" value="send" />
  </label>
</div>
</div>
</form>
    </div>
     </div>
     

         );
      }  
   }

    export default Booking