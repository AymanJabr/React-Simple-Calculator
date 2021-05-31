
import '../components/Styles.css';



function Header(){

    return(
        <div className="Header">
            <h1>Math Magician</h1>

            <div className="Navigation ">
                <Link to="/">Home </Link>
                <Link to="/calculator">Calculator</Link>
                <Link to="/quote">Quote</Link>
            </div>

            
        </div>
    )
}

export default Header
