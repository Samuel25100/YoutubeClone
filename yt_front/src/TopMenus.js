import './TopMenus.css';
import ytIcon from './asset/youtube.png';
import searchIc from './asset/search.png';
import recIcon from './asset/mic.png';
import notifIc from './asset/NotificationBell.png';
import profileIc from './asset/userProfile.png';
import downldIc from './asset/downloadIcon.png';
import uploadIc from './asset/uploadIc.png';

function TopMenus() {
    return (
        <nav className='top'>
        <div className='navGr'>
            <div className='menuBt'>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className='ytHomeBt'>
              <img className="homeIcon" src={ytIcon}/>
              <h2>Youtube</h2>
            </div>
        </div>
        
        <div className='navGr allSearch'>
            <div className='searchBar'>
              <img className="searchIco1" src={searchIc}/>
              <input type='text' placeholder='Search'/>
            </div>
            <button type='none' className='leftSearch'>
              <img src={searchIc}></img>
            </button>
            <button type='none' className='recordIc'>
              <img src={recIcon}></img>
            </button>
        </div>
        
        <div className='leftMenus'>
          <div className='downloadIc'>
            <img src={uploadIc}></img>
          </div>
          <div className='notificationIc'>
            <img src={notifIc}></img>
          </div>
          <div className='profileIc'>
            <img src={profileIc}></img>
          </div>
        </div>
      </nav>
    );
}

export default TopMenus;