import logo from '../img/logo192.png'
import '../styles/Logo.css'

function Logo(props) {
  return (
    <div className='title-container'>
      <h1 className='title'>{props.title}</h1>
      <img
        className='logo'
        src={logo}
        alt='Logo'
      />
    </div>
  );
}

export default Logo;