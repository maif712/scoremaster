
import Header from "./components/Header.jsx"
import HeroSection from "./components/HeroSection.jsx"
import RegisterForm from "./components/RegisterForm.jsx"
import Leaderboard from "./components/Leaderboard.jsx"
import Footer from "./components/Footer.jsx"
import Mask from "./components/Mask.jsx"
import { useAppContext } from "./AppContext.jsx"
import { ToastContainer } from "react-toastify"

export default function App() {

  const {isModalOpen} = useAppContext()

  return (
    <>
      <Header />
      <HeroSection />
      <RegisterForm />
      <Leaderboard />
      <Footer />
      {isModalOpen && <Mask />}
      <ToastContainer />
    </>
      
  )
}
