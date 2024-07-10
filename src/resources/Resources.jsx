import './Resources.css';
import resources from '../assets/resources1.svg'

const ResourcesCard = ({ Num, P1, P2, P3, P4, P5, Span1, Span2, Span3, Span4, flexD, Just }) => {
  return (
    <div className='resourcesCardBody'>
      <div className="resources_card_mainBody" style={{flexDirection:flexD}}>
        <div className="resources_card_number_holder" style={{justifyContent: Just}}>
          <div className="resources_card_number">{Num}</div>
        </div>
        <div className="resources_card_text_holder">
          <p className='resources_card_P'>{P1}</p>
          <p className='resources_card_P'><span className='resources_card_Span'>{Span1} </span>{P2}</p>
          <p className='resources_card_P'><span className='resources_card_Span'>{Span2} </span>{P3}</p>
          <p className='resources_card_P'><span className='resources_card_Span'>{Span3} </span>{P4}</p>
          <p className='resources_card_P'><span className='resources_card_Span'>{Span4} </span>{P5}</p>
        </div>
      </div>
    </div>
  )
}



const Resources = () => {
  return (
    <div className='resources_mainBody'>
      <div className="resources_hero_section">
        <img src={resources} alt="resources" />
      </div>
      <div className="resources_artice_body">
        <h1 className='resources_article_H1'>TRAINING TIPS:</h1>
        <div className="resources_article_card_wrapper">
          <ResourcesCard
            Num={"1"}
            P1={"1. After your warm-up, try running at an easy training pace, throwing in bursts of speed for various distances throughout the run. Vary the speed and times of the speed sections, from as short as 15 seconds to as long as 2-3 minutes. Between these bursts, allow yourself enough recovery time to match roughly 2/3 of the effort time."}
          />

          <ResourcesCard
            Num={"2"}
            P1={"2. As we get older, the need to do a proper warm-up and cool-down is paramount. Since our muscles become brittle and lose their elasticity as we grow older, the chances of injury increase dramatically. By taking 10 to 15 minutes to thoroughly warm-up your muscles before a workout, you could save yourself from months of time off due to injury. Stretching is important, but never stretch cold muscles. Before you begin your stretching routine jog lightly to warm-up your muscles."}
            flexD={"column-reverse"}
            Just={"flex-end"}
          />

          <ResourcesCard
            Num={"3"}
            P1={"3. There are no hard and fast rules as to how to run as everyone has their own style. However, here are a few pointers to help improve your performance:"}
            P2={"– Look straight ahead and focus on a point 10 to 15 meters in front. Try to run in a straight line."}
            P3={" – Keep your body upright with your back straight. Try not to lean, even when running up hill."}
            P4={" – Let your arms swing naturally and in rhythm with your legs while loosely cupping your hands."}
            P5={" –Naturally, the ball of the foot lands first, followed by the heel and the toes push off a fraction after that"}
            Span1={"Head"}
            Span2={"Body"}
            Span3={"Arms"}
            Span4={"Feet"}
            Just={"flex-end"}
          />

          <ResourcesCard
            Num={"4"}
            P1={"4. On an average day we need to drink about two liters of fluid a day to be properly hydrated. During training you will need more than this as we lose on average 500-1000ml of fluid per hour. If you exercise while dehydrated, your temperature can rise quickly and cause heatstroke, which is potentially fatal. The colour of your urine is probably the easiest indicator of fluid loss. If it’s pale and plentiful you’re well hydrated, whereas if it’s dark and sparse, you need more fluid. A loss of just 2% in your body weight may affect your ability to exercise and a 4% loss can cause exhaustion. When you are competing, for every 1% drop in body weight there’s about a 5% drop in performance."}
            flexD={"column-reverse"}
          />

          <ResourcesCard
            Num={"5"}
            P1={"5. Every runner has experienced a stitch – that sudden sharp pain in the side of the upper abdomen at the base of the ribs. The pain is caused by a spasm of the diaphragm. A stitch will usually go away quickly after slowing down or stopping. However, you can often make it go away by bringing your breathing  into careful control during running."}
          />

          <ResourcesCard
            Num={"6"}
            flexD={"column-reverse"}
            Just={"flex-end"}
            P1={"6. Concentrate on belly breathing, pushing your belly out when you breathe in and relaxing it as you breathe out. Take deep breaths on the intake, and exhale suddenly, even noisily. To get the diaphragm to contract in rhythm with your steps, try to inhale and exhale as you land on your left foot. This can help prevent spasms by encouraging the diaphragm to bounce along in sync with your stride."}
          />

          <ResourcesCard
            Num={"7"}
            Just={"flex-end"}
            P1={"7. Don’t skimp on your stretching. Stretching is vital and should only be done after a full warm-up. Muscles are susceptible to injury if stretched when cold. Think of them like a cold metal bar. Try and bend it cold and it will crack, splinter or even break. However, if you warm the bar up it bends without too much effort. Cold ligaments (which stabilize joints) and tendons (which attach muscles to bones) can only be stretched when fully warmed-up."}
          />

          <ResourcesCard
            Num={"8"}
            flexD={"column-reverse"}
            P1={"8. Carry out ‘body scans’ during your running sessions. All you need to do is cast your mind’s eye from head to toe, looking for any signs of unnecessary tension or tightness, any muscles that could do with a stretch, and any joints that could do with loosening up. You should also try a smile – it’s impossible to be tense and smile at the same time! Try to carry out a body scan every ten to 15 minutes, to ensure you are as relaxed as possible and not wasting energy"}
          />

          <ResourcesCard
            Num={"9"}
            P1={"9. Most beginners start off by running around the block or down roads by their home but ideal places are parks, running tracks or on short cut grass. Beginners may suffer from common aches and pains such as shin-splints’ as a result of running on hard surfaces. If you have to run on busy roads, make sure you"}
          />

          <ResourcesCard
            Num={"10"}
            flexD={"column-reverse"}
            Just={"flex-end"}
            P1={"10. It is vital that you drink plenty of fluid to avoid compromising your health. To succeed, you need to plan your drinking strategies and get into the habit of drinking, so that your body can gradually adapt to increased fluid intakes. Don’t leave it to chance; take your beverage choice with you. It is unlikely that you will drink too much water – not drinking enough is usually the problem. The only time drinking plain water may cause a problem is if you’re sweating very heavily for a prolonged period of time. In this situation, a sports drink containing sodium would be better than plain water to prevent low blood sodium levels (hyponatraemia)."}
          />

        </div>
      </div>
      <div className="article_see_more_btn_container">
        <button className='article_see_more_btn'>SEE MORE</button>
      </div>
    </div>
  )
}

export default Resources