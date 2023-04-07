

const Header = () => {
  return (<>
    <div id='cabecera'>
        <img className='logo' src={process.env.PUBLIC_URL + "/logo192.png"} alt= 'mi logo' />
        <h3 className='mensaje'>TRES EN LINEA</h3>
    </div>  
  </>)
}

export default Header