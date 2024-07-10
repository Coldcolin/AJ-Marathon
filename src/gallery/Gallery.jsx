import './Gallery.css'
import './GalleryRes.css'
import gallery9 from '../assets/gallery9.png'
import { FaAngleRight } from 'react-icons/fa6'
import gallery1 from '../assets/gallery1.png'
import gallery3 from '../assets/gallery3.png'


const Gallery = () => {

  const GalleryCard = (props) => {
    return (
      <div className='gallery_card_body'>
        <div className="gallery_card_image_wrapper"
          style={{ backgroundImage: `url(${props.img})` }}>
          {/* <img src={props.img} alt="" className='gallery_card_image_wrapper_img'/> */}
        </div>
        <div className="gallery_card_image_content">
          {props.content}
        </div>
      </div>
    )
  }

  const GalleryWhyYouShouldJoincard = (props) => {
    return (
      <div className='gallery_why_body'>
        <div className="gallery_why_icon_div">
          <FaAngleRight color='white' />
        </div>
        <div className="gallery_why_article">
          <h1 className='gallery_why_article_h1'>{props.H1}</h1>
          <p className='gallery_why_article_p'>{props.P}</p>
        </div>
      </div>
    )
  }


  return (
    <div className='gallery_main_body'>
      <div className="gallery_hero_wrapper">Our Gallery</div>
      <div className="gallery_hero_writeUp_wrapper">
        <h1 className='gallery_hero_writeUp_wrapper_h1'>OUR GALLERY</h1>
        <h2 className='gallery_hero_writeUp_wrapper_h2'>Feeling Fit is the joy you get after running</h2>
        <p className='gallery_hero_writeUp_wrapper_p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
      </div>
      <div className="gallery_card_wrapper">
        <GalleryCard  content='young-happy-athletic-women-running-a-marathon-in-nature-' img='../assets/gallery1.png'/>
        <GalleryCard  content='Happy-male-athlete-sprinter-in-sport-clothes-emotionally-rejoices-victory-at-the-running-track'/>
        <GalleryCard  content='Friends running and exercise in city with training workout and cardio for health and wellness'/>
        <GalleryCard  content='A young male athlete launching off the start line'/>
        <GalleryCard  content='Marathon race runner running on a city road'/>
        <GalleryCard  content='Two-male-runners-running-city-marathon-race-athletes-jogging-on-asphalt-road'/>
      </div>
      <div className="gallery_if_you_feel_container">
        <div className="gallery_if_you_feel_wrapper">
          <div className="gallery_if_you_feel_body">If you feel like feeling heaven like, Run and feel your breath and heartbeat</div>
        </div>
      </div>
      <div className="gallery_make_the_diff_wrapper">
        <div className="gallery_make_the_diff_body">
          <div className="gallery_make_the_diff_image_wrapper">
            <div className='gallery_make_the_diff_image_div'>
              <img src={gallery9} alt="athlete" />
            </div>
            <div className='gallery_make_the_diff_content'>
              <h1>Make The Difference</h1>
            </div>
          </div>
          <div className="gallery_why_you_shouldJoin_wrapper">
            <p className='gallery_why_you_shouldJoin_wrapper_P'>WHY YOU SHOULD JOIN US</p>
            <h1 className='gallery_why_you_shouldJoin_wrapper_H1'>Run unintentionally, and feel the difference</h1>
            <div className="gallery_why_you_shouldJoin_card_wrapper">
              <GalleryWhyYouShouldJoincard H1='Be Healthy ' P='Per luctus accumsan dictumst duis orci finibus facilisi.' />
              <GalleryWhyYouShouldJoincard H1='Be Strong' P='Per luctus accumsan dictumst duis orci finibus facilisi.' />
              <GalleryWhyYouShouldJoincard H1='Be Faster ' P='Per luctus accumsan dictumst duis orci finibus facilisi.' />
              <GalleryWhyYouShouldJoincard H1='Be One of Us' P='Per luctus accumsan dictumst duis orci finibus facilisi.' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery