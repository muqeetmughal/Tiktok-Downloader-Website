import { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission logic here
  }

  return (

    <div className="w-full h-full sm:max-w-screen-sm sm:mx-auto">

      <form className="grid grid-cols-1 gap-6 my-4" action="#" method="POST">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <div className="mt-1">
            <input type="text" placeholder="Type here" className="input w-full input-bordered" />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <div className="mt-1">
            <input type="text" placeholder="Type here" className="input w-full input-bordered" />
          </div>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
          <div className="mt-1">

            <textarea placeholder="Message" className="textarea textarea-bordered textarea-lg w-full" ></textarea>

          </div>
        </div>
        <div className="text-right">
          <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Send</button>
        </div>
      </form>
    </div>



  );
}

export default ContactForm;