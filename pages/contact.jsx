import { useRef, useState } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
    setLoading(true); // Start loading
  
    emailjs
      .sendForm('service_9jg1snr', 'template_nv24rbn', form.current, 'U8T3X6sHRW_5PpV9a')
      .then((result) => {
        console.log(result.text);
        setSubmitted(true);

        setName("");
        setEmail("");
        setMessage("");

        setLoading(false);

        setTimeout(() => {
          setSubmitted(false);
        }, 3000);
      })
      .catch((error) => {
        console.log(error.text);
        setSubmitted(false);
        setLoading(false); 
      });
  };
  
  

  return (
    <>
      <Breadcrumbs
        pageTitle="Contact"
        urls={[
          {
            title: 'Home',
            url: '/',
            isActive: false,
          },
          {
            title: 'Contact',
            url: '/contact',
            isActive: true,
          },
        ]}
      />
      <div className="w-full h-full sm:max-w-screen-sm sm:mx-auto py-10">
        <form className="grid grid-cols-1 gap-6 my-4 lg:p-0 p-10" method="POST" ref={form} onSubmit={sendEmail}>
          <div>
            <label htmlFor="name" className="block text-md font-bold text-black">
              Name
            </label>
            <div className="mt-1">
              <input
                type="text"
                placeholder="Enter Your Name"
                className="input w-full input-bordered focus:input-primary"
                value={name}
                onChange={(e) => setName(e.target.value)}
                name="to_name"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-md font-bold text-black">
              Email
            </label>
            <div className="mt-1">
              <input
                type="text"
                placeholder="Enter Your Email"
                className="input w-full input-bordered focus:input-primary"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="from_name"
                
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-md font-bold text-black">
              Message
            </label>
            <div className="mt-1">
              <textarea
                placeholder="Type Message Here"
                className="textarea textarea-bordered textarea-lg w-full focus:input-primary"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                name="message"
              ></textarea>
            </div>
          </div>
          <div className="text-center">
            <button className='btn btn-secondary btn-wide' type="submit" disabled={loading}>
              {loading ? "..." : submitted ? "Submitted" : "Submit"}
            </button>
          </div>
        </form>

        {submitted && <p className="submitalert">Thank you for taking the time to submit the form, We will be reaching out to you very soon In Sha Allah</p>}
      </div>
    </>
  );
};

export default ContactForm;
