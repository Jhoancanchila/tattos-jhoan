import "./Sidebar.css";

const Sidebar = () => {
  return (
    <nav>
      <a href="#" className="logo">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" fill="white">
          <path d="M25.565,9.785c-0.123,0.077-3.051,1.702-3.051,5.305c0.138,4.109,3.695,5.55,3.756,5.55 c-0.061,0.077-0.537,1.963-1.947,3.94C23.204,26.283,21.962,28,20.076,28c-1.794,0-2.438-1.135-4.508-1.135 c-2.223,0-2.852,1.135-4.554,1.135c-1.886,0-3.22-1.809-4.4-3.496c-1.533-2.208-2.836-5.673-2.882-9 c-0.031-1.763,0.307-3.496,1.165-4.968c1.211-2.055,3.373-3.45,5.734-3.496c1.809-0.061,3.419,1.242,4.523,1.242 c1.058,0,3.036-1.242,5.274-1.242C21.394,7.041,23.97,7.332,25.565,9.785z M15.001,6.688c-0.322-1.61,0.567-3.22,1.395-4.247 c1.058-1.242,2.729-2.085,4.17-2.085c0.092,1.61-0.491,3.189-1.533,4.339C18.098,5.937,16.488,6.872,15.001,6.688z" />
        </svg>
      </a>
      <ul>
        <li><a href="#" className="link">Nosotros</a></li>
        <li><a href="#" className="link">Testimonios</a></li>
        <li><a href="#" className="link">Contacto</a></li>
      </ul>
      <button className="menu-icon">
        <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 6H20M4 12H20M13 18H20" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      </button>
    </nav>
  )
}

export default Sidebar