import { FormEvent, useState } from "react";
import { CheckBox } from "../components/CheckBox"
import { Link } from "react-router-dom";

const Home = () => {
  const [checked, toggleChecked] = useState(false);

  const fields = [
    {id: "firstName", type: "text", label: "First Name", placeholder: "John"},
    {id: "lastName", type: "text", label: "Last Name", placeholder: "Doe"},
    {id: "email", type: "email", label: "Email", placeholder: "john.doe@example.com"},
    {id: "birthday", type: "date", label: "Birthday (optional)", placeholder: "Optional"},
  ]

  const signUp = (event: FormEvent) => {
    event.preventDefault();

    // @ts-ignore
    const elementsArray = [...event.target.elements];

    const data = elementsArray.reduce((acc, element) => {
      if (element.id) {
        acc[element.id] = element.value;
      }

      return acc;
    }, {});

    try {
      if (data.firstName === '') throw("Please enter your first name")
      if (data.lastName === '') throw("Please enter your last name")
      if (data.email === '') throw("Please enter your email")

      fetch('https://mywebsite.example/endpoint/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })
    }
    catch (error) {
      alert(error);
    } 
  }

  return (
    <div className="flex w-full h-auto mx-auto my-0 align-middle">
      <div className="p-10 text-lg leading-8 relative z-10 mt-20">
        <h1 className="text-3xl font-bold mb-2 text-google-blue">Sign up for our newsletter!</h1>
        <p>Welcome to GDSC University of Sydney's newsletter! With our newsletter, you can get:</p>
        <li>event and semester recaps with exclusive access to high quality photos from each event,</li>
        <li>early access to tickets for all future events,</li>
        <li>alerts for future internships and graduate opportunities across ANZ</li>
        <p className="mt-2">Signing up adds you to a draw to win some GDSC merch!</p>
      </div>
      <form className="border mx-10 my-auto px-8 pt-4 pb-9 min-w-80 w-80 relative rounded-lg z-50" onSubmit={signUp}>
        <div className="flex flex-col my-2">
          {fields.map(field => {
            return (
              <div className="flex flex-col my-2">
                <label className="text-xs mb-0 text-neutral-600">{field.label}</label>
                <input id={field.id} type={field.type} placeholder={field.placeholder} className="border border-google-blue my-1 rounded py-1.5 px-4 text-sm" />
              </div>
            )
          })}
          
        </div>
        <div className="flex mt-4 mb-2">
          <CheckBox checked={checked} toggleChecked={toggleChecked} /><p className="text-neutral-600 leading-6 text-sm m-0 select-none">I agree to receive communication from GDSC University of Sydney and acknowledge that GDSC may use my data in accordance with our <Link className="underline" to={'terms-of-service'}>Terms of Service</Link> and <Link className="underline" to={'privacy-policy'}>Privacy Policy</Link>.</p>
        </div>
        <button className="bg-google-blue text-white px-8 text-sm py-1.5 rounded mt-12">Submit</button>
      </form>
    </div>
  )
}

export default Home