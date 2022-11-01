import Doen from './assets/Doen.jpeg'

import camera from './assets/camera.svg'
//  comment here
const Profile = () => {

return(
  <section className='profile'>
    <div className='profile-picture-frame'>
      <img id='profile__img' className='Doen' src={Doen} />
      <div className ='profile-overlay'>
        <a href="#" className='camera-icon'>
          <img className='camera' src={camera} />
        </a>
      </div>
    </div>
    <h1 id='twitter' className='twitter-username'>Doen</h1>
    <h1 id='slack' className='slack-username'>Doen</h1>
  </section>
)

}

export default Profile