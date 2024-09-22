import CustomForm from "../components/CustomForm";

const Home = () => {  
  return (
    <div className="flex flex-col md:flex-row w-full h-auto mx-auto my-0 align-middle absolute justify-between">
      <div className="px-10 py-5 md:py-10 text-lg text-black dark:text-neutral-400 leading-9 z-10 mt-40 relative animate-appear">
        <h1 className="text-3xl font-bold mb-3 text-google-blue">Sign up for our newsletter!</h1>
        <p>Welcome to GDSC University of Sydney's newsletter! With our newsletter, you can get:</p>
        <li>event and semester recaps with exclusive access to high quality photos from each event,</li>
        <li>early access to tickets for all future events,</li>
        <li>alerts for future internships and graduate opportunities across ANZ</li>
        <p className="mt-3">Signing up adds you to a weekly draw to win some <span className="font-bold">GDSC merch</span>!</p>
      </div>
      <div className="mb-5 md:mb-10 mr-20 md:mr-0 md:mt-8">
        <CustomForm />
      </div>
    </div>
  )
}

export default Home