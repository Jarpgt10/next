'use client'
import * as React from "react";
import { motion } from "framer-motion";

export default function Animate1({ children }) {


    // const container = {
    //     hidden: { opacity: 1, scale: 0 },
    //     visible: {
    //         opacity: 1,
    //         scale: 1,
    //         transition: {
    //             delayChildren: 15.0,
    //             staggerChildren: 3.0
    //         }
    //     }
    // };

    return (
        <motion.div
            className="box"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0, 0.71, 0.2, 1.01]
            }}
        >
            {children}
        </motion.div>
        // <motion.ul
        //     className="container"
        //     variants={container}
        //     initial="hidden"
        //     animate="visible"
        // >
        //     {children}
        // </motion.ul>
    )
}



