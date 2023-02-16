import { FaQuestion } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function AboutIconLink() {
    return(
        <div className="about-link">
            <Link to='/about'>
                <FaQuestion size={30} />
            </Link>

            {/* alternative way to set up a link (with parameters, 
            it can be done in the other way as a string as well)

                <Link to={{
                    pathname: '/about',
                    search: '?sort=name',
                    hash: '#hello'
                }}>
                    <FaQuestion size={30} />
                </Link>
            */}
        </div>
    )
}

export default AboutIconLink;