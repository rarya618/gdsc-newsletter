import CustomForm from "../components/CustomForm";

const Home = () => {  
  return (
    <div className="flex flex-col md:flex-row w-full h-auto mx-auto my-0 align-middle">
      <div className="p-10 text-lg leading-8 relative z-10 mt-20">
        <h1 className="text-3xl font-bold mb-2 text-google-blue">Sign up for our newsletter!</h1>
        <p>Welcome to GDSC University of Sydney's newsletter! With our newsletter, you can get:</p>
        <li>event and semester recaps with exclusive access to high quality photos from each event,</li>
        <li>early access to tickets for all future events,</li>
        <li>alerts for future internships and graduate opportunities across ANZ</li>
        <p className="mt-2">Signing up adds you to a weekly draw to win some GDSC merch!</p>
      </div>
      <div className="mb-10 mr-20 md:mr-0 md:my-auto">
        <CustomForm />
      </div>
    </div>
  )
}

export default Home