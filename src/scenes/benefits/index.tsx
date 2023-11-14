import Htext from "@/shared/Htext";
import { BenefitType, SelectedPage } from "@/shared/types";
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";


const benefits:Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title : 'State of art facilities',
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat suscipit modi quibusdam dignissimos. Animi, exercitat.'
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title : 'Hundreds of diversed classes',
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat suscipit modi quibusdam dignissimos. Animi, exercitat.'
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title : 'Experts and pro trainers',
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat suscipit modi quibusdam dignissimos. Animi, exercitat.'
    }
];

const container = {
    hidden: {},
    visible: {
        transition: {staggerChildren: 0.2}
    }
}

type Props = {
    setSelectedPage : (value : SelectedPage) => void;
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section 
        id="benefits"
        className="mx-auto min-h-full w-5/6 py-20"
    >
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
        >
            {/* Header */}
            <motion.div 
                className="md:my-5 md:w-3/5"
                initial='hidden'
                whileInView='visible'
                viewport={{once:true, amount: 0.5}}
                transition={{duration:1}}
                variants={{
                    hidden : {opacity:0, x:-50},
                    visible : {opacity: 1, x:0}
                }}>
                <Htext>
                    MORE THAN JUST A GYM
                </Htext>
                <p className="my-5 text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam voluptate eveniet tempore eligendi nemo odio labore, dolore veniam illo tempora laborum deserunt quisquam perspiciatis totam voluptas, esse cupiditate minus iure.</p>
            </motion.div>

        {/* Benefits */}
        <motion.div className="mt-5 items-center justify-between gap-8 md:flex"
            initial='hidden'
            whileInView='visible'
            viewport={{once:true, amount:0.5}}
            variants={container}
        >
            {benefits.map((benefit:BenefitType) => (
                <Benefit 
                    key={benefit.title}
                    icon={benefit.icon}
                    title={benefit.title}
                    description={benefit.description}
                    setSelectedPage={setSelectedPage}
                />
            ))}
        </motion.div>
        {/* Graphics and description */}
        <div className="mt-16  items-center justify-between gap-20 md:mt-28 md:flex">
            {/* graphic */}
            <img className="mx-auto" alt="benefits-page-graphic" src={BenefitsPageGraphic}/>
            {/* description */}
            <div>
                {/* title */}
                <div className="relative">
                    <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
                        <motion.div
                            initial='hidden'
                            whileInView='visible'
                            viewport={{once:true, amount: 0.5}}
                            transition={{duration:1}}
                            variants={{
                                hidden : {opacity:0, x: 50},
                                visible : {opacity: 1, x:0}
                            }}
                        >
                            <Htext>MILLIONS OF HAPPY MEMBERS GETTING{' '}<span className="text-primary-500">FIT</span>.</Htext>
                        </motion.div>
                    </div>
                </div>
                {/* description */}
                <motion.div
                    initial='hidden'
                    whileInView='visible'
                    viewport={{once:true, amount: 0.5}}
                    transition={{delay: 0.2,  duration:0.5}}
                    variants={{
                        hidden : {opacity:0, x:-50},
                        visible : {opacity: 1, x:0}
                    }}
                >
                    <p className="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic accusantium eligendi aspernatur error repudiandae illo? Iure corrupti modi asperiores impedit. Molestiae, ut voluptas voluptatibus hic quidem accusamus est sit non?</p>
                    <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi inventore </p>
                </motion.div>
                {/* button */}
                <div className="relative mt-16">
                    <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                        <ActionButton
                            setSelectedPage={setSelectedPage}
                        >
                            Join Now
                        </ActionButton>
                    </div>

                </div>
            </div>
        </div>
        </motion.div>        
    </section>
  )
}

export default Benefits;