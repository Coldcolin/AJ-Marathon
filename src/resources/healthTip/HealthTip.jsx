import './HealthTip.css';
import resources from '../../assets/resources1.svg'
import health2 from '../../assets/health2.svg'
import health3 from '../../assets/health3.svg'
import health4 from '../../assets/health4.svg'
import health5 from '../../assets/health5.png'
import health6 from '../../assets/health6.png'


export const HealthCard = ({ H1, P }) => {
    return (
        <div className='health_card_body'>
            <h1 className='health_card_body_H1'>{H1}</h1>
            <p className='health_card_body_P'>{P}</p>
        </div>
    )
}

const HealthImage = ({ bgColor, Img, H1 }) => {
    return (
        <div className='health_image_main_container'>
            <div className="health_image_holder" style={{ backgroundColor: bgColor }}>
                <img src={Img} alt="" className='health_image' />
            </div>
            <h1 className='health_image_H1'>{H1}</h1>
        </div>
    )
}

const HealthTip = () => {

    return (
        <div className='health_tip_mainBody'>
            <div className="health_tip_hero_section">
                <div className="health_hero_wrapper">
                    <img src={resources} alt="resources" />
                </div>
            </div>
            <div className="health_tip_body_wrapper">
                <div className="health_tip_body">
                    <div className="health_tip_main_body">
                        <h1 className='health_tip_H1'>HEALTH TIPS :</h1>
                        <div className="health_tip_card_body">
                            <HealthCard H1={"Medical concern"} P={"A ‘fitness test’ is not sufficient to detect these problems. If you have a family history of heart disease or sudden death, or you have symptoms of heart disease i.e. chest pain or       discomfort on exertion, sudden shortness of breath or rapid palpitations, see your GP who can arrange for you to have a proper cardiac."} />
                            <HealthCard
                                H1={"Training"}
                                P={" Training should be increased gradually so that you do not suffer prolonged exhaustion and intersperse days of heavy mileage with one or two days of lighter training, so that your body can replace its fuel (muscle glycogen). Rest days are also important.If you have flu, a feverish cold or a tummy bug, do not train until you have fully recovered. Then start gently and build up gradually. Do not attempt to catch up on lost mileage after illness or injury – this may cause further damage or illness. To reduce injury risk, train on soft surfaces when you can, especially on easy training"}
                            />
                            <HealthCard
                                H1={"Fluids"}
                                P={"Fluids lost in sweat must be replaced otherwise your boy becomes dehydrated and less efficient. Take plenty of non-alcoholic drinks, especially before the race and in hot weather.  Drink enough to keep your urine copious and a pale straw color Drink plenty of liquids after training, especially long runs, and drink during races, especially in the first half of a marathon. Practice drinking during longer training runs. Drink plenty of fluids and reduce alcohol intake in the two days before the race"}
                            />
                            <HealthCard
                                H1={"Diets"}
                                P={"Eat what suits you! Large doses of supplementary vitamins and minerals (such as iron) are not essential and produce no benefit if you are on a good mixed diet, but additional vitamin C in small doses is reasonable when fresh fruit and vegetables are in short supply.Training helps you to sustain a high level of muscle glycogen if you eat a lot of carbohydrate. If you can, eat within two hours of your long runs and the marathon. This helps replace the muscle glycogen quickly and speeds recovery."}
                            />
                            {/* <HealthCard 
                            H1={""} 
                            P={""}
                            /> */}
                        </div>
                        <div className="health_image_card">
                            <HealthImage Img={health2} H1={"Medical Concern"} />
                            <HealthImage Img={health3} H1={"Training"} />
                        </div>
                        <div className="health_image2_card">
                            <HealthImage Img={health4} H1={"Diet"} />
                        </div>
                        <div className="health_image_card">
                            <HealthImage Img={health5} H1={"Fluids"} />
                            <HealthImage Img={health6} H1={"Clothing"} />
                        </div>
                        <div className="health_tip_card_body">
                            <HealthCard
                                H1={"Carbon Loading"}
                                P={"Do not change your normal diet drastically in the last week before the marathon, but decrease your intake of protein (meat) and increase your intake of carbohydrate (pasta, bread, potatoes, cereals, rice and sweet things), especially for the last three days when you should also be markedly reducing your training. This loads the muscle with glycogen. Unless you reduce your protein intake you will not eat enough carbohydrate. (Not all runners are helped by first depleting carbohydrate with a long run and low carbon diet and then loading – this can make your muscles very heavy)."}
                            />
                            <HealthCard
                                H1={"Clothing"}
                                P={"When training in the dark, be seen. Wear white clothing and reflective flashes or bandoliers.Many runners seek medical treatment for blisters at the start. They had either been training too hard in the final two weeks with ill-fitting shoes, or they had worn a new pair of shoes for the last long training run. Use shoes you know from experience will not give you blisters."}
                            />
                        </div>
                        <div className="health_learn_more_btn_container">
                            <button className='health_learn_more_btn'>LEARN MORE</button>
                            <button className='health_learn_more_btn'>BACK</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HealthTip