import naviDB from '../data/navi.json';
import logo from '../img/logo.svg';
const Hd = (props) => {
    const navijs = naviDB.naviDB; //Array 네비게이션 DB만 추출하기
    return (
        <header id="hd" className={"fixed-top border-bottom " + props.bgColor }>
            <div className="container-fluid d-flex justify-content-between align-items-center">
                <h1 className='col-2 mx-auto mx-md-0'>
                    <a href='#top'>
                        <img src={logo} />
                    </a>
                </h1>
                {/* d-none d-md-flex -> 작은 사이즈때 안나오고 768사이즈에 나타남 */}
                <ul id="gnb" className="font20 fw600 mb-0 d-none d-md-flex">                 
                    {
                        navijs.map( (item, index) => {
                            return(
                                <li className='px-1'>
                                    <a href={item.naviLink} className={ index > 0 ? "" : "activeColor" } >{item.navititle}</a>
                                </li>
                            )
                        })
                    }
                </ul>
                <a href="http://www.github.com/4thdraw" target="_blank" className="git btn bgActive text-white">
                    GIT
                </a>
            </div>
      </header>
    );
}

export default Hd;
