import './NutritionTip.css'
import resources from '../../assets/resources1.svg'
import nutrition3 from '../../assets/nutrition3.png'
import nutrition4 from '../../assets/nutrition4.png'
import nutrition5 from '../../assets/nutrition5.png'
import nutrition6 from '../../assets/nutrition6.png'
import nutrition7 from '../../assets/nutrition7.png'
import nutrition8 from '../../assets/nutrition8.png'
import nutrition9 from '../../assets/nutrition9.png'
import nutrition10 from '../../assets/nutrition10.png'
import nutrition11 from '../../assets/nutrition11.png'
import { HealthCard } from '../healthTip/HealthTip'


const CoffeeCard = ({ img, P }) => {
    return (
        <div className='coffe_card_body'>
            <div className="coffee_card_icon_wrapper">
                <img src={img} alt="Drink&Food" className='coffee_card_icon' />
            </div>
            <div className="coffee_card_text_wrapper">
                <p className='coffee_card_text_wrapper_P'>{P}</p>
            </div>
        </div>
    )
}

const FewDaysCards = ({ Img, P }) => {
    return (
        <div className="few_days_card_body">
            <div className="few_days_card_img_wrapper">
                <img src={Img} alt="Athletes" className='few_days_card_img' />
            </div>
            <div className="few_days_card_txt_wrapper">
                <p className='few_days_card_txt'>{P}</p>
            </div>
        </div>
    )
}
const RestCard = ({ Img, H1, P, Direct }) => {
    return (
        <div className='rest_card_body' style={{ flexDirection: Direct }}>
            <div className="rest_card_txt_holder">
                <h1 className='rest_card_txt_H1'>{H1}</h1>
                <p className='rest_card_txt_P'>{P}</p>
            </div>
            <div className="rest_card_img_holder">
                <img src={Img} alt="" className='rest_card_img' />
            </div>
        </div>
    )
}


const NutritionTip = () => {


    return (
        <div className='nutrition_tip_mainBody'>
            <div className="nutrition_tip_hero_section">
                <div className="nutrition_hero_wrapper">
                    <img src={resources} alt="resources" />
                </div>
            </div>
            <div className="nutrition_tip_main_container">
                <div className="nutrition_tip_main_wrapper">
                    <div className="nutrition_tip_H1_holder">
                        <div className="nutrition_tip_H1_container">
                            <h1 className='nutirition_tip_H1'>NUTRITIONAL TIPS :</h1>
                            <p className='nutirition_tip_P'>Take Stock Of Your Diet Habits</p>
                            <h2 className='nutrition_tip_H2'>Nutrition</h2>
                            <p className='nutrition_tip_P2'>The Ajegunle City Youth Marathon, 2024 may be months and many training miles away but as far as your diet is
                                concerned, the preparations for race day can start now. The good news is that you probably won’t have to make
                                drastic changes to your current eating
                                habits; there is no need to buy expensive supplements or special foods.
                            </p>
                        </div>
                        <div className="nutrition_tip_H1_image_wrapper">
                            <img src={nutrition3} alt="nutritious meal" className='nutrition_tip_H1_image' />
                        </div>
                    </div>
                    <HealthCard H1={"ON YOUR MARKS"} P={"As you embark on your training programme you should take stock of your current diet habits. Remember that food is the fuel that will help to ensure your body makes it through the miles of training in the months ahead. Flunk on your diet and fluid intake and you risk feeling tired and run-down. Use this checklist to make sure you are giving yourself the right start."} />
                    <div className="nutrition_eating_enough_wrapper">
                        <div className='nutrition_eating_enough_img_holder'>
                            <img src={nutrition4} alt="nutrtious meal" className='nutrition_eating_enough_img' />
                        </div>
                        <div className='nutrition_eating_enough_article'>
                            <h2 className='nutrition_eating_enough_H2'><span className='nutrition_eating_enough_H2_Span'>Are</span> You Eating Enough?</h2>
                            <p className='nutrition_eating_enough_P'>You should aim to get around 60 per cent of all your daily calories from foods which are high in carbohydrate
                                including bread, pasta, potatoes, rice, beans, lentils, fruits and vegetables. Unlike protein and fat, carbohydrate
                                is stored in your muscles so that it is readily available for energy when you are running.
                            </p>
                            <h2 className='nutrition_eating_enough_H2'>Should You Be Eating Before You Run?</h2>
                            <p className='nutrition_eating_enough_P'>Some runners claim to perform perfectly well on an empty stomach, but it is fair to say that most of the scientific
                                evidence is against them. Eating 2-4 hours before you exercise means]that some of the gastric juices in your
                                stomach will be absorbed, leaving you feeling less hungry when you set off.
                            </p>
                        </div>
                    </div>
                    <HealthCard H1={"Race Morning"} P={"There are no hard and fast rules here, only to leave enough time for your pre-race meal to digest so that you don’t feel uncomfortably full. In general, a large meal takes around four hours to digest, a smaller meal up to two hours. Do not be tempted by a hotel breakfast or try anything new at this stage. Drink plenty of fluids in the 2-3 hours before you start and a small cup water about ten minutes before the "} />
                    <div className="nutrition_coffee_drink_wrapper">
                        <CoffeeCard
                            img={nutrition5}
                            P={"Drinking tea or coffee will not harm your performance but bear in mind that both contain caffeine, a diuretic, and should therefore be drunk in moderation. Avoid alcohol which can promote dehydration and fizzy drinks which can cause bloating."}
                        />
                        <CoffeeCard
                            img={nutrition6}
                            P={"A dehydrated runner will end up going nowhere fast and it doesn’t happen only on hot days. Dehydration can be the cumulative effect of drinking too little. A simple way to test if you are drinking enough is to check the colour of your urine. If it is bright yellow, it may have become concentrated with metabolic wastes because you aren’t drinking enough."}
                        />
                        <CoffeeCard
                            img={nutrition7}
                            P={"Research has shown that the ideal meal to eat on the morning of a race should be high in carbohydrate with a little low-fat protein to make it more digestible. Something like lightly scrambled egg on toast is ideal. But ultimately it is a matter of personal choiceand you should be trying out as many pre-run meals as possible in training."}
                        />
                    </div>
                    <h1 className='nutrition_go_H1'>Go!</h1>
                    <div className="nutrition_few_days_container">
                        <FewDaysCards
                            Img={nutrition8}
                            P={"A few days before the race and there is still plenty to do. You should concentrate on eating a high carbohydrate diet so that your muscles are constantly re-fueled. And there are other rules too."}
                        />
                        <FewDaysCards
                            Img={nutrition9}
                            P={" Don’t try anything new. If you are handed free samples of snacks when you go to collect your number from the exhibition save them until after the race. You may find that they cause gastro-intestinal  upset."}
                        />
                    </div>
                    <RestCard
                        Img={nutrition10}
                        H1={"REST"}
                        P={"Yes, you deserve it! A hard race will deplete your body’s stores of glycogen and your muscles will need at least two days rest coupled with lots of carbohydrate foods. This, of course, means you have plenty of time too."}
                    />
                    <RestCard
                        Img={nutrition11}
                        H1={"Recovery Fluids"}
                        P={"Try fresh fruit juice which will supply carbohydrate, fluid and electrolytes or body salts – dilute with water if it tastes too acidic. Water will replace fluids as well as any commercial drink."}
                        Direct={"row-reverse"}
                    />
                    <div className="nutrition_learn_more_btn_container">
                        <div className="nutrition_learn_more_btn_wrapper">
                            <button className='nutrition_learn_more_btn'>LEARN MORE</button>
                            <button className='nutrition_learn_more_btn'>BACK</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NutritionTip