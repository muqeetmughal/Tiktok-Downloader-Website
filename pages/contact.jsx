import { useState } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import axios from 'axios';
import toast from 'react-hot-toast';

const ContactForm = () => {
  const [name, setName] = useState('Muhammad Hamza');
  const [email, setEmail] = useState('muhammadhamzackt@gmail.com');
  const [message, setMessage] = useState('Hi I need website');

  const handleSubmit = async (e) => {
    e.preventDefault();

    

    try {

     
      if (email && name && message){

        const data = {
          name: name,
          email: email,
          message: message,
        };
  
        const response = await axios.post('/api/send-email', data);
  
  
        console.log('Response:', response.data);
  
        setName('');
        setEmail('');
        setMessage('');
      }else{
        toast.error("Fill all fields")
      }
      
      
    } catch (error) {
      console.error('Error:', error);
    }
  }


  return (
    <>
      <Breadcrumbs pageTitle="Contact" urls={[
        {
          title: "Home",
          url: "/",
          isActive: false
        },
        {
          title: "Contact",
          url: "/contact",
          isActive: true

        }
      ]} />
      <div className="w-full h-full sm:max-w-screen-sm sm:mx-auto py-10"  >

        <form className="grid grid-cols-1 gap-6 my-4 lg:p-0 p-10"  method="POST" onSubmit={handleSubmit} >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <div className="mt-1">
              <input type="text" placeholder="Type here" className="input w-full input-bordered focus:input-primary" value={name} onChange={(e) => setName(e.target.value)}
 />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <div className="mt-1">
              <input type="text" placeholder="Type here" className="input w-full input-bordered focus:input-primary" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700" >Message</label>
            <div className="mt-1">

              <textarea placeholder="Message" className="textarea textarea-bordered textarea-lg w-full focus:input-primary" value={message} onChange={(e) => setMessage(e.target.value)}  ></textarea>

            </div>
          </div>
          <div className="text-center">
            <button className="btn btn-secondary btn-wide" type='submit'>Submit</button>
          </div>
        </form>
      </div>


    </>




  );
}

export default ContactForm;