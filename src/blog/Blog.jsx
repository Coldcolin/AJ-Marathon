import './Blog.css';
import './BlogRes.css';
import { IoMdPlay } from 'react-icons/io'
// import blog2 from '../assets/blog2.png'
import news1 from '../assets/news1.jpg';
import news2 from '../assets/news2.jpg';
import news3 from '../assets/news3.jpg';
import blog2 from '../assets/news1.jpg'; // Dummy image for new blogs
import Lamp from "../assets/Lampholder.jpg"
import RoyalEnd from "../assets/RoyalEnd.jpg"
import EndIFE from "../assets/EndIFE.jpg"
import VisitKal from "../assets/VisitKal.jpg"
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
            <h1 className='blog_landing_write_holder_h1'>{"Ajegunle City Youth Marathon, 2025 - Volunteer Registration Open!"}</h1>
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
                ACYM2025 | Local Organising Committee
              </p>
              <ul className='blog_landing_write_holder_Div_Ul'>
                <li>
                  #ACYM2025
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
            Finally, the venue for the end point event gig of the Ajegunle City Youth Marathon, Maiden Edition; 29th November, 2024 at the Sports Ground, Nigeria Army Signal Barracks, Mile-2 have been confirmed.
<br/><br/>
We want to greatly thank the Commander, Brig. Gen. P.A Zipele and his team, Major Umar, 2IC and Lieut. Yahaya, Admin Officer; for the warm hospitality and reception of the project as a welcomed development and the immense support in collaboration, towards fruitful results ahead. 
<br/><br/>
This is a great milestone recorded in our planning process to ensure successful implementation outcomes of the event; aimed to become the largest Youth Engagement Platform in the annals of the Ajeromi-Ifelodun Youth Council, to drive social transformation and positive change among youths and advocacy for good governance in Ajeromi-Ifelodun LGA at large.  
<br/><br/>
To join our Volunteer Youth Force simply fill out the online registration form: https://bit.ly/Volunteer-Registration-Ajegunle-City-Youth-Marathon-2024 , submission closes by July 28th, 2024. It Can Only Get Better!
<br/><br/>
#ACYM2024
#RUNAjegunle
#AjegunleMarathon
#AjegunleCity5KRace
            </p>
            <p className='blog_landing_write_holder_p'>
              To join our Volunteer Youth Force simply fill out the online registration form: <a href="https://bit.ly/Volunteer-Registration-Ajegunle-City-Youth-Marathon-2024">https://bit.ly/Volunteer-Registration-Ajegunle-City-Youth-Marathon-2024</a> , submission closes by July 28th, 2024.
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
            <h1 className='blog_landing_write_holder_h1'>{"Ajegunle City Youth Marathon, 2025 - flagged-off"}</h1>
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
                  #ACYM2025
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
        </div>) : img === Lamp ? (<div className="blog_landing_card_body">
          <div className="blog_landing_card_image_holder">
            <img src={img} alt="" />
          </div>
          <div className="blog_landing_write_holder">
            <h1 className='blog_landing_write_holder_h1'>{"Ajegunle City Youth Marathon LOC Briefs Ajeromi-Ifelodun Executive Chairman, Confers Certificate of Honor as Life Patron"}</h1>
            <p className='blog_landing_write_holder_p'>
              The Local Organizing Committee (LOC) of the Ajegunle City Youth Marathon has formally briefed the Executive Chairman of Ajeromi-Ifelodun Local Government on the planning progress for the 2025 edition of the Marathon, scheduled to further expand youth engagement and community development within Ajegunle.
            </p>
            <p className='blog_landing_write_holder_p'>
              During the official debriefing session held at the Chairman's office, the LOC presented detailed updates on preparations for the 2025 race, including school and athlete mobilization, route planning, logistics coordination, volunteer deployment, and partnership development. The committee reaffirmed its mission to position the marathon as a sustainable platform for youth empowerment, sports excellence, and social transformation.
            </p>
            <p className='blog_landing_write_holder_p'>
              In recognition of his unwavering support and strategic leadership, the LOC presented the Executive Chairman with a Certificate of Honor, conferring on him the distinguished status of Life Patron of the Ajegunle City Youth Marathon Project. This honor celebrates his commitment to providing an enabling environment that strengthens the continuity and impact of the project across the community.
            </p>
            <p className='blog_landing_write_holder_p'>
              The Executive Chairman expressed appreciation for the recognition and reiterated the Local Government's readiness to continually support initiatives that inspire young people and elevate Ajegunle's identity as a center for grassroots sports and development.
            </p>
            <p className='blog_landing_write_holder_p'>
              The LOC will continue its stakeholder engagements as preparations intensify for the 2025 Marathon, which is expected to attract increased participation from schools, youth groups, and community partners.
            </p>
            <div className='blog_landing_write_holder_Div'>
              <ul className='blog_landing_write_holder_Div_Ul'>
                <li>#ACYM2025</li>
                <li>#RUNAjegunle</li>
                <li>#AjegunleMarathon</li>
                <li>#AjegunleCity5KRace</li>
                <li>#MarathonInMyHood</li>
                <li>#CommunityMarathon</li>
              </ul>
            </div>
          </div>
        </div>) : img === RoyalEnd ? (<div className="blog_landing_card_body">
          <div className="blog_landing_card_image_holder">
            <img src={img} alt="" />
          </div>
          <div className="blog_landing_write_holder">
            <h1 className='blog_landing_write_holder_h1'>{"Royal Endorsement & Blessings for Ajegunle City Youth Marathon 2025"}</h1>
            <p className='blog_landing_write_holder_p'>
              The Local Organizing Committee of the Ajegunle City Youth Marathon paid a royal visit to His Royal Majesty, Oba Moroof Atanda Oyekunle Amodu Tijani (Amore III), Olu of Iwa and Apapa Kingdom, to seek his endorsement and prayers for the 2025 edition.
            </p>
            <p className='blog_landing_write_holder_p'>
              In a moment of honor and history, His Majesty was formally conferred with the prestigious title of Lifetime Grand Patron of the Ajegunle City Youth Marathon Project, and presented with a Certificate of Honor in recognition of his unwavering support for youth empowerment, cultural unity, and community development.
            </p>
            <p className='blog_landing_write_holder_p'>
              We are deeply blessed by his royal prayers, fatherly guidance, and profound commitment to the growth of our youth and the transformation of the Ajegunle–Apapa axis.
            </p>
            <p className='blog_landing_write_holder_p'>
              Together, we advance toward a stronger, brighter, and more impactful 2025 Marathon!
            </p>
            <div>
              <h3 className='blog_landing_write_holder_H3'>2025 Marathon Theme</h3>
              <p className='blog_landing_write_holder_p'>
                This Year 2025 Edition of the Ajegunle City Youth Marathon is strategically curated to raise tailored awareness against Drug Abuse and Ilicit Trafficking among Adolescents and Young People and the general populace with the theme:
              </p>
              <p className='blog_landing_write_holder_p' style={{fontWeight: 'bold', color: 'rgba(23, 183, 136, 1)'}}>
                Run To The Path of Life, Say No To Drugs!
              </p>
            </div>
            <div className='blog_landing_write_holder_Div'>
              <ul className='blog_landing_write_holder_Div_Ul'>
                <li>#ACYM2025</li>
                <li>#RUNAjegunle</li>
                <li>#AjegunleMarathon</li>
                <li>#SayNoToDrugs</li>
                <li>#YouthEmpowerment</li>
              </ul>
            </div>
          </div>
        </div>) : img === EndIFE ? (<div className="blog_landing_card_body">
          <div className="blog_landing_card_image_holder">
            <img src={img} alt="" />
          </div>
          <div className="blog_landing_write_holder">
            <h1 className='blog_landing_write_holder_h1'>{"Ajegunle City Youth Marathon LOC Receives Endorsement from Ifelodun LCDA Chairman, Confers Lifetime Patron Honor"}</h1>
            <p className='blog_landing_write_holder_p'>
              The Local Organizing Committee (LOC) of the Ajegunle City Youth Marathon has received the official endorsement of the Executive Chairman of Ifelodun Local Council Development Area (LCDA), Hon. Olufemi Akanbi Okeowo, as preparations intensify for the 2025 edition of the Marathon.
            </p>
            <p className='blog_landing_write_holder_p'>
              During an official briefing session held at the Chairman's office, the LOC outlined the progress made in the planning and mobilization phases for the upcoming race. Key updates included athlete and school engagement strategies, route and safety planning, community volunteer coordination, and partnership expansion aimed at deepening the Marathon's developmental impact.
            </p>
            <p className='blog_landing_write_holder_p'>
              In recognition of his unwavering commitment to youth development and his continued support for community-oriented projects, the LOC conferred upon Hon. Okeowo the distinguished title of Lifetime Patron of the Ajegunle City Youth Marathon Project. He was also presented with a Certificate of Honor celebrating his leadership and contributions to the long-term sustainability of youth-focused initiatives within Ajegunle.
            </p>
            <p className='blog_landing_write_holder_p'>
              Hon. Okeowo praised the vision of the Marathon and pledged full support from Ifelodun LCDA toward ensuring a successful and impactful 2025 edition. He reaffirmed the council's commitment to creating opportunities that uplift young people and strengthen community cohesion.
            </p>
            <p className='blog_landing_write_holder_p'>
              The LOC continues to engage key stakeholders across Ajeromi-Ifelodun and Ifelodun LCDA as it advances toward the Marathon date, with expectations of increased participation and wider social impact across the region.
            </p>
            <div className='blog_landing_write_holder_Div'>
              <ul className='blog_landing_write_holder_Div_Ul'>
                <li>#ACYM2025</li>
                <li>#RUNAjegunle</li>
                <li>#AjegunleMarathon</li>
                <li>#IfelodunLCDA</li>
                <li>#YouthDevelopment</li>
              </ul>
            </div>
          </div>
        </div>) : img === VisitKal ? (<div className="blog_landing_card_body">
          <div className="blog_landing_card_image_holder">
            <img src={img} alt="" />
          </div>
          <div className="blog_landing_write_holder">
            <h1 className='blog_landing_write_holder_h1'>{"Ajegunle City Youth Marathon LOC Advocacy Visit to Hon. KAP"}</h1>
            <p className='blog_landing_write_holder_p'>
              The Ajegunle City Youth Marathon LOC paid an advocacy visit to Hon. Kalejaiye Paul Adebiye (KAP), Member House of Representatives for Ajeromi-Ifelodun Federal Constituency.
            </p>
            <p className='blog_landing_write_holder_p'>
              Hon. KAP pledged his full support and commitment to the project, describing the Marathon as "a welcome development in the right direction, one that has come to stay and will continue to project Ajegunle City in good light among global communities."
            </p>
            <p className='blog_landing_write_holder_p'>
              We appreciate his leadership, encouragement, and readiness to stand with our youth on this transformative journey.
            </p>
            <div className='blog_landing_write_holder_Div'>
              <ul className='blog_landing_write_holder_Div_Ul'>
                <li>#ACYM2025</li>
                <li>#RUNAjegunle</li>
                <li>#AjegunleMarathon</li>
                <li>#AjeromiIfelodun</li>
                <li>#YouthTransformation</li>
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
                  content={"The Venue for the End Point Event Gig of the Ajegunle City Youth Marathon, 2024; 29th November, 2024 @The Sports Ground, Nigeria Army Signals Barracks, Mile 2."}
                />
                <Newscard
                  img={news3}
                  H4={"AJCYM 2024 -"}
                  Span={"Volunteer Registration!"}
                  content={"Are you passionate about empowering youth and promoting fitness, healthy living while advocating for positive change in the community? Join us as a volunteer for the Ajegunle City Youth Marathon, 2024 event and be a part of something extraordinary!"}
                />
                <Newscard
                  H4={"AJCYM 2024 -"}
                  Span={"Flag-Off"}
                  img={news2}
                  content={"The Ajegunle City Youth Marathon is Raging higher as we officially flagged-off the project at the floor of The Ifelodun Local Youth Council Management Committee Meeting. Watch out for the biggest gig ever in the city of Ajegunle,.......Coming Soon!"}
                />
                <Newscard
                  H4={"Ajegunle City Youth Marathon LOC Briefs Ajeromi-Ifelodun Executive Chairman, Confers Certificate of Honor as Life Patron"}
                  Span={""}
                  img={Lamp}
                  content={"The Local Organizing Committee (LOC) of the Ajegunle City Youth Marathon has formally briefed the Executive Chairman of Ajeromi-Ifelodun Local Government on the planning progress for the 2025 edition of the Marathon, scheduled to further expand youth engagement and community development within Ajegunle. During the official debriefing session held at the Chairman's office, the LOC presented detailed updates on preparations for the 2025 race, including school and athlete mobilization, route planning, logistics coordination, volunteer deployment, and partnership development. The committee reaffirmed its mission to position the marathon as a sustainable platform for youth empowerment, sports excellence, and social transformation. In recognition of his unwavering support and strategic leadership, the LOC presented the Executive Chairman with a Certificate of Honor, conferring on him the distinguished status of Life Patron of the Ajegunle City Youth Marathon Project. This honor celebrates his commitment to providing an enabling environment that strengthens the continuity and impact of the project across the community. The Executive Chairman expressed appreciation for the recognition and reiterated the Local Government's readiness to continually support initiatives that inspire young people and elevate Ajegunle's identity as a center for grassroots sports and development. The LOC will continue its stakeholder engagements as preparations intensify for the 2025 Marathon, which is expected to attract increased participation from schools, youth groups, and community partners."}
                />
                <Newscard
                  H4={"Royal Endorsement & Blessings for Ajegunle City Youth Marathon 2025"}
                  Span={""}
                  img={RoyalEnd}
                  content={"The Local Organizing Committee of the Ajegunle City Youth Marathon paid a royal visit to His Royal Majesty, Oba Moroof Atanda Oyekunle Amodu Tijani (Amore III), Olu of Iwa and Apapa Kingdom, to seek his endorsement and prayers for the 2025 edition. In a moment of honor and history, His Majesty was formally conferred with the prestigious title of Lifetime Grand Patron of the Ajegunle City Youth Marathon Project, and presented with a Certificate of Honor in recognition of his unwavering support for youth empowerment, cultural unity, and community development. We are deeply blessed by his royal prayers, fatherly guidance, and profound commitment to the growth of our youth and the transformation of the Ajegunle–Apapa axis. Together, we advance toward a stronger, brighter, and more impactful 2025 Marathon! This Year 2025 Edition of the Ajegunle City Youth Marathon is strategically curated to raise tailored awareness against Drug Abuse and Ilicit Trafficking among Adolescents and Young People and the general populace with the theme: Run To The Path of Life, Say No To Drugs!"}
                />
                <Newscard
                  H4={"Ajegunle City Youth Marathon LOC Receives Endorsement from Ifelodun LCDA Chairman, Confers Lifetime Patron Honor"}
                  Span={""}
                  img={EndIFE}
                  content={"The Local Organizing Committee (LOC) of the Ajegunle City Youth Marathon has received the official endorsement of the Executive Chairman of Ifelodun Local Council Development Area (LCDA), Hon. Olufemi Akanbi Okeowo, as preparations intensify for the 2025 edition of the Marathon. During an official briefing session held at the Chairman's office, the LOC outlined the progress made in the planning and mobilization phases for the upcoming race. Key updates included athlete and school engagement strategies, route and safety planning, community volunteer coordination, and partnership expansion aimed at deepening the Marathon's developmental impact. In recognition of his unwavering commitment to youth development and his continued support for community-oriented projects, the LOC conferred upon Hon. Okeowo the distinguished title of Lifetime Patron of the Ajegunle City Youth Marathon Project. He was also presented with a Certificate of Honor celebrating his leadership and contributions to the long-term sustainability of youth-focused initiatives within Ajegunle. Hon. Okeowo praised the vision of the Marathon and pledged full support from Ifelodun LCDA toward ensuring a successful and impactful 2025 edition. He reaffirmed the council's commitment to creating opportunities that uplift young people and strengthen community cohesion. The LOC continues to engage key stakeholders across Ajeromi-Ifelodun and Ifelodun LCDA as it advances toward the Marathon date, with expectations of increased participation and wider social impact across the region."}
                />
                <Newscard
                  H4={"Ajegunle City Youth Marathon LOC Advocacy Visit to Hon. KAP"}
                  Span={""}
                  img={VisitKal}
                  content={"The Ajegunle City Youth Marathon LOC paid an advocacy visit to Hon. Kalejaiye Paul Adebiye (KAP), Member House of Representatives for Ajeromi-Ifelodun Federal Constituency. Hon. KAP pledged his full support and commitment to the project, describing the Marathon as 'a welcome development in the right direction, one that has come to stay and will continue to project Ajegunle City in good light among global communities.' We appreciate his leadership, encouragement, and readiness to stand with our youth on this transformative journey."}
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