import { useAppContext } from "../AppContext";
import HeroSection from "../components/HeroSection";
import Leaderboard from "../components/Leaderboard";
import Mask from "../components/Mask";
import RegisterForm from "../components/RegisterForm";



export default function Home() {


    const { isModalOpen, isMenuOpen } = useAppContext()
  return (
    <>
        <HeroSection />
        <RegisterForm />
        <Leaderboard />
        {isModalOpen && <Mask /> || isMenuOpen && <Mask />}
    </>
  )
}
