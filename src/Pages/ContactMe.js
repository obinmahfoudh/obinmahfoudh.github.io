import emailjs from '@emailjs/browser'
import {useRef} from 'react'
import email_logo from '../images/email_logo.png'
import linkedin_logo from '../images/linkedin_logo.png'
import clipboard_logo from '../images/clipboard_icon.png'

function ContactMe(){
  
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('contact_service','contact_me', form.current, '-qAK-Y3yxLX9eoFQ6')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      })

    alert("Your email has been sent");
  };

  return (
    <div>
      <h2 className='text-2xl text-white font-extrabold pt-40 px-60'>Send me an Email:</h2>
      <div className='flex justify-center'>
        <form ref={form} onSubmit={sendEmail} className='flex flex-col w-9/12 text-white font-bold gap-2 pt-4'>
          <label>Name</label>
          <input type="text" required name="from_name" minlength='2' className='bg-inherit' />
          <label>Email</label>
          <input type="email" required name="reply_to" className='bg-inherit'/>
          <label>Message</label>
          <textarea name="message" required minlength='5' className='resize-none bg-inherit h-40'/>
          <div className='flex justify-center'>
            <input type="submit" value="Send" className='bg-sky-500 rounded-full w-2/12 '/>
          </div>
        </form>
      </div>
      <div className='flex flex-col pt-20 pl-60 gap-2 text-white font-bold'>
        <h3 className='text-2xl font-extrabold'>You can also reach me directly at: </h3>
        <div className='flex content-center pt-4'>
          <a href='mailto:binmahfoudhobaid@gmail.com'><img src={email_logo} alt='logo representing an email' title='open email app' className='w-16'/></a>
          <p className='self-center pr-4'>: binmahfoudhobaid@gmail.com</p>
          <button onClick={() => navigator.clipboard.writeText("binmahfoudhobaid@gmail.com")}><img src={clipboard_logo} alt='logo representing a clipboard' title='copy text to clipboard' className='w-8'/></button>
        </div>
        <div className='flex'>
          <a href='https://www.linkedin.com/in/obaid-bin-mahfoudh/' target='_blank' rel='noreferrer'><img src={linkedin_logo} alt='logo representing the website linkedin' title='redirect to linkedin site' className='w-16'/></a>
          <p className='self-center pr-4'>: https://www.linkedin.com/in/obaid-bin-mahfoudh/</p>
          <button onClick={() => navigator.clipboard.writeText("https://www.linkedin.com/in/obaid-bin-mahfoudh/")}><img src={clipboard_logo} alt='logo representing a clipboard' title='copy text to clipboard' className='w-8'/></button>
        </div>
      </div>
    </div>
  );
  } 
  
  export default ContactMe;