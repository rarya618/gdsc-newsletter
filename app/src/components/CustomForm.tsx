import { FormEvent, useState } from "react";
import { CheckBox } from "./CheckBox";
import formGraphic from '../assets/formGraphic.png'
import formGraphic2 from '../assets/formGraphic2.png'

import { Link } from "react-router-dom";
import jsonp from 'jsonp';

const CustomForm = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isChecked, toggleChecked] = useState(false);

  const [isFormVisible, toggleFormVisible] = useState(true);
  const [formMessage, setFormMessage] = useState("");

  const [isButtonClicked, toggleButtonClicked] = useState(false);

  // form fields [id from Mailchimp]
  const fields = [
    {id: "mce-FIRSTNAME", name: "FIRSTNAME", type: "text", label: "First Name", value: firstName, onChangeHandler: setFirstName, placeholder: "John"},
    {id: "mce-LASTNAME", name: "LASTNAME", type: "text", label: "Last Name", value: lastName, onChangeHandler: setLastName, placeholder: "Doe"},
    {id: "mce-EMAIL", name: "EMAIL", type: "email", label: "Email", value: email, onChangeHandler: setEmail, placeholder: "john.doe@example.com"},
  ]

  // when form is submitted
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    try {
      // check if checkbox is ticked
      if (!isChecked) throw ("You need to agree to Mailchimp's terms to proceed");

      toggleButtonClicked(true);

      // post url
      const url = 'https://gmail.us18.list-manage.com/subscribe/post-json?u=04e0f167d66d73102f443b1db&amp;id=ff1bb01fea&amp;f_id=00962ce2f0';

      // add data to url
      jsonp(`${url}&EMAIL=${email}&FIRSTNAME=${firstName}&LASTNAME=${lastName}`, { param: 'c' }, (_, data) => {
          const { msg } = data

          // show confirmation screen
          toggleFormVisible(false);
          // set the text
          setFormMessage(msg);
      });
    } 
    // error catching
    catch (e) {
      alert(e);
    }
    
  };

  return (
    <div className="flex flex-col mt-0 mb-10 md:mb-0 md:mt-20 md:mr-10">
      <img src={formGraphic} className="w-32 md:w-36 ml-auto mr-0 md:mr-10 right-0 top-0"/>
      <form className="border dark:border-neutral-600 mx-10 my-0 px-7 pt-4 pb-9 w-full md:min-w-80 md:w-80 rounded-lg z-50 top-28 bg-white dark:bg-neutral-900" onSubmit={onSubmit} method="post" target="_self">
        {isFormVisible ? 
        // form has not been filled
        <>
          <div className="flex flex-col my-2">
            {fields.map(field => {
              return (
                <div className="flex flex-col my-2">
                  <label htmlFor={field.id} className="text-xs mb-0 text-neutral-600 dark:text-neutral-400">{field.label}</label>
                  <input 
                    id={field.id} 
                    name={field.id} 
                    type={field.type} 
                    placeholder={field.placeholder}
                    value={field.value}
                    onChange={(e) => field.onChangeHandler(e.target.value)}
                    required
                    className="border dark:border-neutral-600 focus:border-google-blue my-1 rounded py-1.5 px-4 text-sm bg-white dark:bg-neutral-900" 
                  />
                </div>
              )
            })}
            <div aria-hidden="true" style={{position: 'absolute', left: '-5000px'}}>
              /* real people should not fill this in and expect good things - do not remove this or risk form bot signups */
              <input type="text" name="b_04e0f167d66d73102f443b1db_ff1bb01fea" tabIndex={-1} value="" />
            </div>
          </div>
          <div className="flex mt-4 mb-2">
            <CheckBox checked={isChecked} toggleChecked={toggleChecked} /><p className="text-neutral-600 dark:text-neutral-500 leading-7 md:leading-6 text-sm md:text-xs m-0 select-none">I agree to receive communication from GDSC University of Sydney and acknowledge that GDSC may use my data in accordance with Mailchimp's <Link className="underline" to={'https://mailchimp.com/legal/terms/'}>Terms of Use</Link> and <Link className="underline" to={'https://www.intuit.com/privacy/statement/'}>Privacy Statement</Link>.</p>
          </div>
          { isButtonClicked? 
            <button className="bg-google-blue text-white px-8 text-sm py-1.5 rounded mt-10 animation-pulse dark:text-neutral-900">Processing...</button> :
            <button className="bg-google-blue text-white px-8 text-sm py-1.5 rounded mt-10 dark:text-neutral-900">Sign up</button>
          }
        </> : 
        // form is filled
        <>
          <h2 className="text-center mt-5">{formMessage}</h2>
        </> }
        <div className="relative hidden md:block">
          <img src={formGraphic2} className="logoFix w-40 absolute"/>
        </div>
      </form>
    </div>
  )
}

export default CustomForm