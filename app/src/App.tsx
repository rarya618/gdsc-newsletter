import { Route, Routes } from 'react-router'
import logo from './assets/logo.png'
import mobileLogo from './assets/mobileLogo.png'
import headerGraphic from './assets/headerGraphic.png'

import './App.css'

import Home from './views/Home'
import ContentGenerator from './components/ContentGenerator'
import { Link } from 'react-router-dom'

export type Content = {
  heading: string;
  content: {
      heading?: string;
      content: JSX.Element;
  }[];
}

const termsOfService: Content = {
  heading: "GDSC Newsletter Platform Terms and Conditions of Use",
  content: [
    {
      heading: "1. Terms", 
      content: <p>By accessing GDSC Newsletter Platform, accessible from gdscusyd.org, you are agreeing to be bound by GDSC Newsletter Platform's Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site. The materials contained in GDSC Newsletter Platform are protected by copyright and trade mark law.</p>
    },
    {
      heading: "2. Use License", 
      content: <><p>Permission is granted to temporarily download one copy of the materials on GDSC Newsletter Platform for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
      <ul>
          <li>modify or copy the materials;</li>
          <li>use the materials for any commercial purpose or for any public display;</li>
          <li>attempt to reverse engineer any software contained on GDSC Newsletter Platform;</li>
          <li>remove any copyright or other proprietary notations from the materials; or</li>
          <li>transferring the materials to another person or "mirror" the materials on any other server.</li>
      </ul>
      <p>This will let GDSC University of Sydney to terminate upon violations of any of these restrictions. Upon termination, your viewing right will also be terminated and you should destroy any downloaded materials in your possession whether it is printed or electronic format.</p></>
    },
    {
      heading: "3. Disclaimer", 
      content: <p>All the materials on GDSC Newsletter Platform are provided "as is". GDSC University of Sydney makes no warranties, may it be expressed or implied, therefore negates all other warranties. Furthermore, GDSC Newsletter Platform Inc. does not make any representations concerning the accuracy or reliability of the use of the materials on GDSC Newsletter Platform or otherwise relating to such materials or any sites linked to GDSC Newsletter Platform.</p>
    },
    {
      heading: "4. Limitations", 
      content: <p>GDSC University of Sydney or its suppliers will not be hold accountable for any damages that will arise with the use or inability to use the materials on GDSC Newsletter Platform, even if GDSC University of Sydney or an authorized representative of GDSC University of Sydney has been notified, orally or written, of the possibility of such damage. Some jurisdiction does not allow limitations on implied warranties or limitations of liability for incidental damages, these limitations may not apply to you.</p>
    },
    {
      heading: "5. Revisions and Errata", 
      content: <p>The materials appearing on GDSC Newsletter Platform may include technical, typographical, or photographic errors. GDSC University of Sydney will not promise that any of the materials in GDSC Newsletter Platform are accurate, complete, or current. GDSC University of Sydney may change the materials contained on GDSC Newsletter Platform at any time without notice. GDSC University of Sydney does not make any commitment to update the materials.</p>
    },
    {
      heading: "6. Links", 
      content: <p>GDSC University of Sydney has not reviewed all of the sites linked to GDSC Newsletter Platform and is not responsible for the contents of any such linked site. The presence of any link does not imply endorsement by GDSC University of Sydney of the site. The use of any linked website is at the user’s own risk.</p>
    },
    {
      heading: "7. Site Terms of Use Modifications", 
      content: <p>GDSC University of Sydney may revise these Terms of Use for GDSC Newsletter Platform at any time without prior notice. By using GDSC Newsletter Platform, you are agreeing to be bound by the current version of these Terms and Conditions of Use.</p>
    },
    {
      heading: "8. Your Privacy", 
      content: <p>Please read our <Link className='underline' to={"/privacy-policy"}>Privacy Policy</Link>.</p>
    },
    {
      heading: "9. Governing Law", 
      content: <p>Any claim related to GDSC Newsletter Platform shall be governed by Australian laws without regards to its conflict of law provisions.</p>
    },
  ]
}

const privacyPolicy: Content = {
  heading: "Privacy Policy for GDSC University of Sydney",
  content: [
    {
      content: <><p>At GDSC Newsletter Platform, accessible from gdscusyd.org, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by GDSC Newsletter Platform and how we use it.</p>

      <p>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.</p></>
    },
    {
      heading: "General Data Protection Regulation (GDPR)",
      content: <><p>We are a Data Controller of your information.</p>

      <p>GDSC Newsletter Platform Inc. legal basis for collecting and using the personal information described in this Privacy Policy depends on the Personal Information we collect and the specific context in which we collect the information:</p>
      <ul>
        <li>GDSC Newsletter Platform Inc. needs to perform a contract with you</li>
        <li>You have given GDSC Newsletter Platform Inc. permission to do so</li>
        <li>Processing your personal information is in the legitimate interests of GDSC Newsletter Platform Inc.</li>
        <li>GDSC Newsletter Platform Inc. needs to comply with the law</li>
      </ul>
    
      <p>GDSC Newsletter Platform Inc. will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies.</p> 
    
      <p>If you are a resident of the European Economic Area (EEA), you have certain data protection rights. If you wish to be informed what Personal Information we hold about you and if you want it to be removed from our systems, please contact us.</p>
    
      <p>In certain circumstances, you have the following data protection rights:</p>
      <ul>
        <li>The right to access, update or to delete the information we have on you.</li>
        <li>The right of rectification.</li> 
        <li>The right to object.</li>
        <li>The right of restriction.</li>
        <li>The right to data portability</li>
        <li>The right to withdraw consent</li>
      </ul></>
    },
    {
      heading: "Log Files",
      content: <p>GDSC Newsletter Platform follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.</p>
    },
    {
      heading: "Cookies and Web Beacons",
      content: <><p>Like any other website, GDSC Newsletter Platform uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.</p>

      <p>For more general information on cookies, please read <a className='underline' href="https://www.generateprivacypolicy.com/#cookies">Cookies - Privacy Policy Generator</a>.</p></>
    },
    {
      heading: "Privacy Policies",
      content: <><p>You may consult this list to find the Privacy Policy for each of the advertising partners of GDSC Newsletter Platform.</p>

      <p>Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on GDSC Newsletter Platform, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.</p>
    
      <p>Note that GDSC Newsletter Platform has no access to or control over these cookies that are used by third-party advertisers.</p></>
    },
    {
      heading: "Third Party Privacy Policies",
      content: <><p>GDSC Newsletter Platform's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. </p>

      <p>You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.</p></>
    },
    {
      heading: "Children's Information",
      content: <><p>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</p>

      <p>GDSC Newsletter Platform does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.</p></>
    },
    {
      heading: "Online Privacy Policy Only",
      content: <p>Our Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in GDSC Newsletter Platform. This policy is not applicable to any information collected offline or via channels other than this website.</p>
    },
    {
      heading: "Consent",
      content: <p>By using our website, you hereby consent to our Privacy Policy and agree to its <Link className='underline' to={"/terms-of-service"}>terms</Link>.</p>
    },
  ]
}

function App() {

  return (
    <div className='w-screen h-screen flex select-none overflow-hidden bg-white dark:bg-neutral-900'>
      {/* text */}
      <div className='w-full mx-0 fixed z-50'>
        <div className='flex justify-between mx-10 my-5 py-0.5 rounded-xl bg-gray-100 dark:bg-neutral-800'>
          <Link to='/'>
            <img src={mobileLogo} className='block md:hidden h-6 mx-4 my-7' />
            <img src={logo} className='hidden md:block h-14 mx-4 my-3' />
          </Link>
          <img src={headerGraphic} className='h-20 mr-4 my-0' />
        </div>
      </div>
      {/* routes */}
      <div className='my-0 flex w-full relative overflow-scroll z-10'>
        <Routes>
          <Route 
            index 
            element={<Home />}
          />
          <Route 
            path="newsletter" 
            element={<Home />}
          />
          <Route 
            path="terms-of-service" 
            element={<ContentGenerator content={termsOfService} />}
          />
          <Route 
            path="privacy-policy" 
            element={<ContentGenerator content={privacyPolicy} />}
          />
        </Routes>
      </div>
      {/* right design */}
      <div className='fixed rightFix z-0'>
        <div className="bg-google-yellow w-8 h-8 rounded-full mx-0 my-1"></div>
        <div className="bg-google-red w-20 h-20 rounded-full mx-3.5"></div>
      </div>
      {/* bottom design */}
      <div className="fixed flex bottomFix z-0">
        <div className="bg-google-green w-28 h-28 rounded-full"></div>
        <div className="flex absolute bottom-10 left-20">
          <div className="bg-google-blue w-8 h-8 rounded-full my-auto ml-3 mx-1"></div>
          <div className="bg-google-yellow w-8 h-8 rounded-full my-auto mx-1"></div>
          <div className="bg-google-red w-8 h-8 rounded-full my-auto mx-1"></div>
        </div>
      </div>
    </div>
  )
}

export default App
