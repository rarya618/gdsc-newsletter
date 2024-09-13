const Home = () => {
    return (
        <div className="">
            <div className="border m-auto px-8 py-10 w-96 rounded-lg">
                <h1 className="text-3xl font-bold mb-4">Sign up for our newsletter!</h1>
                <form>
                    <div className="flex flex-col my-2">
                        <label>Email</label>
                        <input id="email" type="email" className="border my-1 rounded pt-1.5 pb-2 px-3" />
                    </div>
                    <div className="flex mt-4 mb-2">
                        <input type="checkbox" className="vertical-top"/>
                        <label className="ml-2">I agree to receive communication from GDSC University of Sydney and acknowledge that GDSC may use my data as outlined in the Privacy Policy</label>
                    </div>
                    <button className="bg-blue-900 px-7 py-1.5 rounded mt-8">Submit</button>
                </form>
            </div>
        </div>
        
    )
}

export default Home