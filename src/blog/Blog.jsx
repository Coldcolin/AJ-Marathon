import './Blog.css';
import './BlogRes.css';
import { IoMdPlay } from 'react-icons/io'
import blog2 from '../assets/blog2.png'
import news1 from '../assets/news1.jpg';
import news2 from '../assets/news2.jpg';
import news3 from '../assets/news3.jpg';
import { useLocation, useNavigate } from 'react-router-dom';
import { Newscard } from '../landingPage/LandingPage';
import { useEffect } from 'react';

const Blog = () => {
  const location = useLocation();
  const { img, H4, Span, content } = location.state || {};
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [img]);

  // const BlogCard = (props) => {
  //   return (
  //     <div className='blog_card_body'>
  //       <div className='blog_card_image_holder'>
  //         <img src={blog2} alt="" />
  //       </div>
  //       <div className='blog_write_holder'>
  //         <h1 className='blog_write_holder_h1'>{props.h1}</h1>
  //         <p className='blog_write_holder_p'>{props.p}</p>
  //         <h2 className='blog_write_holder_h2'>{props.btn}</h2>
  //       </div>npmrun
  //     </div>
  //   )
  // }







  return (
    <div className='blog_main_body'>
      <div className="blog_hero_section">
        <div className="blog_hero_section_content">
          <h1 className='blog_hero_section_content_h1'>Top Stories</h1>
          <h2 className='blog_hero_section_content_h2'>Highlights:</h2>
          <h2 className='blog_hero_section_content_h2'>Previous marathon held</h2>
          <div className="blog_hero_section_play_container">
            <IoMdPlay />
          </div>
        </div>
      </div>
      {img === news3 ? (
        <div className="blog_landing_card_body">
          <div className="blog_landing_card_image_holder">
            <img src={img} alt="" />
          </div>
          <div className="blog_landing_write_holder">
            <h1 className='blog_landing_write_holder_h1'>{"Ajegunle City Youth Marathon, 2024 - Volunteer Registration Open!"}</h1>
            <p className='blog_landing_write_holder_p'>
              Are you passionate about empowering youth and promoting fitness, healthy living while advocating for positive change in the community? Join us as a volunteer for the Ajegunle City Youth Marathon, 2024 event and be a part of something extraordinary! Your support will play a vital role in making this event a resounding success.
            </p>
            <div>
              <h3 className='blog_landing_write_holder_H3'>Volunteer Roles</h3>
              <ul className='blog_landing_write_holder_UL'>
                <li>Registration Assistants</li>
                <li>Route Marshals</li>
                <li>Water Station Attendants</li>
                <li>Event Guides</li>
                <li>And more!</li>
              </ul>
            </div>
            <div>
              <h3 className='blog_landing_write_holder_H3'>Benefits of Volunteering:</h3>
              <ul className='blog_landing_write_holder_UL'>
                <li>Opportunity to give back and make a positive impact</li>
                <li>Valuable experience in event management</li>
                <li>Build connections and network with like-minded individuals</li>
                <li>Certificate of Appreciation</li>
              </ul>
            </div>
            <div className='blog_landing_write_holder_Div'>
              <h3 className='blog_landing_write_holder_H3'>How to Register</h3>
              <p className='blog_landing_write_holder_P'>If you are interested in volunteering for the Ajegunle City Youth Marathon, 2024 event, simply fill out the online registration form <a href="https://bit.ly/Volunteer-Registration-Ajegunle-City-Youth-Marathon-2024">https://bit.ly/Volunteer-Registration-Ajegunle-City-Youth-Marathon-2024</a> , submission closes by July 28th, 2024.
                Space is limited, so don't miss this chance to be part of an inspiring and rewarding experience. Join us in shaping a healthier and more active community for our youth!
              </p>
              <p className='blog_landing_write_holder_P'>For any inquiries or assistance with registration, please contact: Amudalat Temitope Oloola:
                +234 809 315 9529.
                Let's make a difference together!
                Warm regards,
                ACYM2024 | Local Organising Committee
              </p>
              <ul className='blog_landing_write_holder_Div_Ul'>
                <li>
                  #ACYM2024
                </li>
                <li>
                  #RUNAjegunle
                </li>
                <li>
                  #AjegunleMarathon
                </li>
                <li>
                  #AjegunleCity5KRace
                </li>
                <li>
                  #MarathonInMyHood
                </li>
                <li>
                  #CommunityMarathon
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) :
        img === news1 ? (<div className="blog_landing_card_body">
          <div className="blog_landing_card_image_holder">
            <img src={img} alt="" />
          </div>
          <div className="blog_landing_write_holder">
            <h1 className='blog_landing_write_holder_h1'>{"Venue for the End Point Event Gig of the Ajegunle City Youth Marathon, 2024"}</h1>
            <p className='blog_landing_write_holder_p'>
              Finally, the Venue for the End Point Event Gig of the Ajegunle City Youth Marathon, 2024; 30th November, 2024 @The Sports Ground, Nigeria Army Signals Barracks, Mile 2.
            </p>
            <p className='blog_landing_write_holder_p'>
              We want to greatly thank the Commander, Brig. Gen. P.A Zipele and his team, Major Umar, 2IC and Lieut. Yahaya, Admin Officer; for the warm hospitality and reception of the project as a welcomed development and the immense support in collaboration, towards fruitful results ahead.
            </p>
            <p className='blog_landing_write_holder_p'>
              This is a great milestone recorded in our planning process to ensure successful implementation outcomes of the event; aimed to become the largest Youth Engagement Platform in the annals of the NYCN-AJIF Local Branch, to drive social transformation and positive change among youths and advocacy for good governance in Ajeromi-Ifelodun LGA at large.
            </p>
            <p className='blog_landing_write_holder_p'>
              To join our Volunteer Youth Force simply fill out the online registration form: <a href="https://bit.ly/Volunteer-Registration-Ajegunle-City-Youth-Marathon-2025">https://bit.ly/Volunteer-Registration-Ajegunle-City-Youth-Marathon-2024</a> , submission closes by July 28th, 2024.
            </p>
            <p className='blog_landing_write_holder_p'>
              It Can Only Get Better!
            </p>
            <div className='blog_landing_write_holder_Div'>
              <ul className='blog_landing_write_holder_Div_Ul'>
                <li>
                  #ACYM2024
                </li>
                <li>
                  #RUNAjegunle
                </li>
                <li>
                  #AjegunleMarathon
                </li>
                <li>
                  #AjegunleCity5KRace
                </li>
                <li>
                  #MarathonInMyHood
                </li>
                <li>
                  #CommunityMarathon
                </li>
              </ul>
            </div>
          </div>
        </div>) : img === news2 ? (<div className="blog_landing_card_body">
          <div className="blog_landing_card_image_holder">
            <img src={img} alt="" />
          </div>
          <div className="blog_landing_write_holder">
            <h1 className='blog_landing_write_holder_h1'>{"Ajegunle City Youth Marathon, 2024 - flagged-off"}</h1>
            <p className='blog_landing_write_holder_p'>
              The Ajegunle City Youth Marathon is Raging higher as we officially flagged-off the project at the floor of The Ifelodun Local Youth Council Management Committee Meeting.
              Watch out for the biggest gig ever in the city of Ajegunle,.......Coming Soon!
            </p>
            <p className='blog_landing_write_holder_p'>
              For sponsorship or partnership, Kindly contact the Head of Marketing and Advertisements, Oghenekaro Lawrence: +234 803 270 9217, or Project Director, Isaac Moses: +234 802 644 3165.
            </p>
            <div className='blog_landing_write_holder_Div'>
              <ul className='blog_landing_write_holder_Div_Ul'>
                <li>
                  #ACYM2024
                </li>
                <li>
                  #RUNAjegunle
                </li>
                <li>
                  #AjegunleMarathon
                </li>
                <li>
                  #AjegunleCity5KRace
                </li>
                <li>
                  #MarathonInMyHood
                </li>
                <li>
                  #CommunityMarathon
                </li>
              </ul>
            </div>
          </div>
        </div>) : (
          <>
            <div className="blog_title_header">Other Top Stories</div>
            <div className="blog_card_container">
              <div className="blog_card_wrapper">
                {/* <BlogCard h1='NBA PLAYOFF X-FACTOR' p='the NBA is on a ' btn='Read more' />
                <BlogCard h1='NBA PLAYOFF X-FACTOR' p='the NBA is on a ' btn='Read more' />
                <BlogCard h1='NBA PLAYOFF X-FACTOR' p='the NBA is on a ' btn='Read more' />
                <BlogCard h1='NBA PLAYOFF X-FACTOR' p='the NBA is on a ' btn='Read more' /> */}

                {/* <div className="landing_news_wrapper"> */}
                <Newscard
                  H4={"AJCYM 2024 -"}
                  Span={"End Point"}
                  img={news1}
                  content={"The Venue for the End Point Event Gig of the Ajegunle City Youth Marathon, 2024; 30th November, 2024 @The Sports Ground, Nigeria Army Signals Barracks, Mile 2."}
                />
                <Newscard
                  H4={"AJCYM 2024 -"}
                  Span={"Flag-Off"}
                  img={news2}
                  content={"The Ajegunle City Youth Marathon is Raging higher as we officially flagged-off the project at the floor of The Ifelodun Local Youth Council Management Committee Meeting. Watch out for the biggest gig ever in the city of Ajegunle,.......Coming Soon!"}
                />
                <Newscard
                  img={news3}
                  H4={"AJCYM 2024 -"}
                  Span={"Volunteer Registration!"}
                  content={"Are you passionate about empowering youth and promoting fitness, healthy living while advocating for positive change in the community? Join us as a volunteer for the Ajegunle City Youth Marathon, 2024 event and be a part of something extraordinary!"}
                />
                {/* </div> */}
              </div>
            </div>
          </>
        )}
    </div>
  )
}

export default Blog