import { FormEvent, useState } from "react";
import { CheckBox } from "./CheckBox";
import { Link } from "react-router-dom";
import jsonp from 'jsonp';

const CustomForm = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isChecked, toggleChecked] = useState(false);

  const [isFormVisible, toggleFormVisible] = useState(true);
  const [formMessage, setFormMessage] = useState("");

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
    <form className="border mx-10 my-auto px-7 pt-4 pb-9 w-full md:min-w-80 md:w-80 relative rounded-lg z-50" onSubmit={onSubmit} method="post" target="_self">
      {isFormVisible ? 
      // form has not been filled
      <>
        <div className="flex flex-col my-2">
          {fields.map(field => {
            return (
              <div className="flex flex-col my-2">
                <label htmlFor={field.id} className="text-xs mb-0 text-neutral-600">{field.label}</label>
                <input 
                  id={field.id} 
                  name={field.id} 
                  type={field.type} 
                  placeholder={field.placeholder}
                  value={field.value}
                  onChange={(e) => field.onChangeHandler(e.target.value)}
                  required
                  className="border focus:border-google-blue my-1 rounded py-1.5 px-4 text-sm" 
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
          <CheckBox checked={isChecked} toggleChecked={toggleChecked} /><p className="text-neutral-600 leading-6 text-sm m-0 select-none">I agree to receive communication from GDSC University of Sydney and acknowledge that GDSC may use my data in accordance with Mailchimp's <Link className="underline" to={'https://mailchimp.com/legal/terms/'}>Terms of Use</Link> and <Link className="underline" to={'https://www.intuit.com/privacy/statement/'}>Privacy Statement</Link>.</p>
        </div>
        <button className="bg-google-blue text-white px-8 text-sm py-1.5 rounded mt-12">Sign up</button>
      </> : 
      // form is filled
      <>
        <h2 className="text-center mt-5">{formMessage}</h2>
      </> }
    </form>
  )
}

export default CustomForm