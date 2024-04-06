import Nav from "./Nav";
import HamburgerButton from "./ui/HamburgerButton";



export default function Header() {



  return (
    <header>
      <div className="layout-wrapper">
        <div className="flex justify-between items-center">
          <div>
            <a href="#" className="logo">socre master</a>
          </div>
          <Nav />
          <HamburgerButton />
        </div>
      </div>
    </header>
  )
}
