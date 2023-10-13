import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const Experiences = () => {
    return (
        <>
            <motion.div variants={textVariant()}>

                <h2 className={`${styles.sectionHeadText} text-center`}>
                    Work Experience.
                </h2>
            </motion.div>
            <div className="mt-12 bg-black-100 rounded-[20px]">
                <div
                    className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
                >

                </div>
            </div>
        </>

    )
}

export default SectionWrapper(Experiences, "");