import './HealthTip.css';
import resources from '../../assets/resources1.svg'
import health2 from '../../assets/health2.svg'
import health3 from '../../assets/health3.svg'
import health4 from '../../assets/health4.svg'
import health5 from '../../assets/health5.png'
import health6 from '../../assets/health6.png'
import health from '../../assets/healthlogo.png'


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
export const HealthTitle = ({ Title, article, article1, article2 }) => {
    return (
        <>
            <h1 className='font-bold underline text-[rgba(35, 34, 34, 1)] leading-[2.5rem] sm:leading-[5.3rem] text-[1.5rem] sm:text-[3.2rem]'>{Title}</h1>
            <p className='leading-[2.5rem] sm:leading-[5.3rem] text-[1.5rem] sm:text-[3.2rem] font-poor-story'>{article}</p>
            {
                article1 && <p className='font-poor-story text-[1.6rem] leading-[1.9rem] font-light'>{article1}</p>
            }
            {
                article2 && <p className='font-poor-story text-[1.6rem] leading-[1.9rem] font-light'>{article2}</p>
            }
        </>
    )
}

export const HealthProps = ({ Title, Content, Img, ContentCtd, ContentCtd1, Content1, Title1 }) => {
    return (
        <div className='mb-[4vh]'>
            <div>
                {Img && <img src={Img} alt="" className='sm:float-right sm:h-[37vh]' />}
            </div>
            <div className='flex flex-col gap-[1vh]'>
                {Title && <h1 className='font-bold text-[1.3rem] sm:text-[1.5rem] leading-[3.1rem]'>{Title}</h1>}
                {Content && <p className='font-normal text-lg leading-[1.7rem] sm:text-left text-justify'>{Content}</p>}
                {Title1 && <h1 className='font-bold text-[1.3rem] sm:text-[1.5rem] leading-[3.1rem]'>{Title1}</h1>}
                {Content1 && <p className='font-normal text-lg leading-[1.7rem] sm:text-left text-justify'>{Content1}</p>}
                {ContentCtd && <p className='font-normal text-lg leading-[1.7rem] clear-right text-justify'>{ContentCtd}</p>}
                {ContentCtd1 && <p className='font-normal text-lg leading-[1.7rem] clear-right text-justify'>{ContentCtd1}</p>}
            </div>
        </div>

    )
}

const HealthTip = () => {

    return (
        <div className='w-full min-h-[100vh] flex items-center flex-col'>
            <div className="w-[90%] mt-[1vh] md:mt-[10vh] md:mb-[4vh] sm:shadow-[17px_9px_20.6px_-1px_rgba(0,0,0,0.25)]">
                <HealthTitle
                    Title={"HEALTH TIPS:"}
                    article={"Pay Attention To Your Health Needs!"}
                />
                <div className='health_props_card'>
                    <HealthProps
                        Title={"Medical Concerns"}
                        Content={"Discuss any medical problems with your general practitioner (GP). This advice supplements anything he or she says. See your GP if you have a problem that makes it a risk to run in a marathon. We are happy for people with serious medical conditions to run, but only with your GP’s agreement  If you send details of your condition and the treatment you are undergoing. Please send these to me and quote your running number when you know it. Address the envelope to the Marathon Office, mark it ‘Confidential’ and send it to:- Medical Manager Ajegunle City Youth Marathon"}
                        Img={health}
                        ContentCtd={"If you have a medical problem that may lead to you having a blackout, such as fits or diabetes, put a cross on the front of your number and write the details, especially your medication, on the reverse of the number."}
                    />

                    <HealthProps
                        Title={"Cardiac Events & Screening"}
                        Content={"Runners may very well be unaware when they have a heart problem. Their condition would have been detected if medical advice had been sought and relevant tests carried out. A ‘fitness test’ is not sufficient to detect these problems. If you have a family history of heart disease or sudden death, or you have symptoms of heart disease i.e. chest pain or discomfort on exertion, sudden shortness of breath or rapid palpitations, see your GP who can arrange for you to have a proper cardiac assessment. Such an assessment may not be instantly available, but continuing to run with these symptoms may shorten your running career catastrophically!"}
                    />

                    <HealthProps
                        Title={"Training"}
                        Content={"Muscular aches and pains occur most commonly after an increase in training. Training should be increased gradually so that you do not suffer prolonged exhaustion and intersperse days of heavy mileage with one or two days of lighter training, so that your body can replace its fuel (muscle glycogen). Rest days are also important"}
                        ContentCtd={"If you have flu, a feverish cold or a tummy bug, do not train until you have fully recovered. Then start gently and build up gradually. Do not attempt to catch up on lost mileage after illness or injury – this may cause further damage or illness. To reduce injury risk, train on soft surfaces when you can, especially on easy training days. Vary routes, do not always use the same shoes and run on differing cambers, hills, etc. Always face oncoming traffic."}
                        ContentCtd1={"Please do not run on this occasion."}
                    />

                    <HealthProps
                        Title={"Fluids"}
                        Content={"Fluids lost in sweat must be replaced otherwise your body becomes dehydrated and less efficient. Alcoholic drinks are dehydrating. A pint of beer produces more than a pint of urine; spirits have a worse effect. Take plenty of non-alcoholic drinks, especially before the race and in hot weather. Thirst is a poor guide to how much you need. Drink enough to keep your urine copious and a pale straw colour. Drink plenty of liquids after training, especially long runs, and drink during races, especially in the first half of a marathon. Practice drinking during longer training runs. Drink plenty of fluids and reduce alcohol intake in the two days before the race."}
                    />

                    <HealthProps
                        Title={"Diet"}
                        Content={"Eat what suits you! Large doses of supplementary vitamins and minerals (such as iron) are not essential and produce no benefit if you are on a good mixed diet, but additional vitamin C in small doses is reasonable when fresh fruit and vegetables are in short supply.Training helps you to sustain a high level of muscle glycogen if you eat a lot of carbohydrate. If you can, eat within two hours of your long runs and the marathon. This helps replace the muscle glycogen quickly and speeds recovery."}
                    />

                    <HealthProps
                        Title={"Carbo Loading"}
                        Content={"Do not change your normal diet drastically in the last week before the marathon, but decrease your intake of protein (meat) and increase your intake of carbohydrate (pasta, bread, potatoes, cereals, rice and sweet things), especially for the last three days when you should also be markedly reducing your training. This loads the muscle with glycogen. Unless you reduce your protein intake you will not eat enough carbohydrate. (Not all runners are helped by first depleting carbohydrate with a long run and low carbo diet and then loading – this can make your muscles very heavy)."}
                    />

                    <HealthProps
                        Title={"Clothing"}
                        Content={"When training in the dark, be seen. Wear white clothing and reflective flashes or bandoliers.Many runners seek medical treatment for blisters at the start. They had either been training too hard in the final two weeks with ill-fitting shoes, or they had worn a new pair of shoes for the last long training run. Use shoes you know from experience will not give you blisters."}
                    />

                    <HealthProps
                        Title={"On The Day"}
                        Content={"Do not run if you feel unwell or have just been unwell. Most medical emergencies occur in people who have been unwell but do not wish to miss the event. If you feel feverish, have been vomiting, have had severe diarrhoea or any chest pains, or otherwise feel unwell, it is unfair to you, your family, your sponsoring charity and the marathon support staff to risk serious illness and become a medical emergency. You are unlikely to do yourself justice. There are many other marathons."}
                        ContentCtd={"If it is hot, wear loose mesh clothing, start slowly and, if possible, run in the shade. Start the race well hydrated (urine looks pale) and drink whenever you can, especially in the first half of the race when you may not feel thirsty, as you lose a lot of fluid insensibly. This will help you feel better late in the race and may prevent cramp. Cramp is most common in runners who have not trained sufficiently or are dehydrated. Do not gulp large volumes of liquid during or after the race. It is possible to become ill from drinking too much, too quickly."}
                    />

                    <HealthProps
                        Title={"At The Finish"}
                        Content={"Do not stand about getting cold. Keep walking, especially if you feel dizzy, and drinking to replace lost liquid, change into warm, dry clothing, and then go to the reunion area."}
                        ContentCtd={"Keep on drinking and have something to eat. Some runners feel faint more than half-an-hour after finishing the race, often because they have taken insufficient fluid at the finish and/or not eaten anything."}
                    />

                    <HealthProps
                        Title={"And Finally…"}
                        Content={"Train sensibly. Follow this simple advice and you will probably not need medical aid. Medical aid posts are located about 20-50 m past the main drink stations and after the finish line. If you drop out, go to an aid station. Keep this advice and refer to it nearer the day and on marathon eve."}
                    />
                    <p className='font-normal italic text-sm sm:text-lg leading-[24px] mb-10 text-left'>Credit: Lagos City Marathon.</p>
                </div>
            </div>
        </div>
    )
}

export default HealthTip