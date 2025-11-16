import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Ourclient from '../components/Ourclient'
import OurWork from '../components/OurWork'
// import Teams from '../components/Teams'
import Services from '../components/Services'
import ContactUsPage from '../components/ContactUsPage.jsx'

const Home = () => {
  return (
    <div><Navbar/>
    <Hero/>
    {/* <Ourclient/>
    <OurWork/> */}
    <Services/>
    {/* <Teams/> */}
    {/* <Title/> */}
    <ContactUsPage/>
    </div>
  )
}

export default Home