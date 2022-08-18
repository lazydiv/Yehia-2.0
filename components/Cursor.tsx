// making custom cursor
import { motion, useMotionValue, useSpring } from 'framer-motion';
import React, { useEffect, useState } from 'react'


const Cursor = () => {
    const [isHover, setIsHover] = useState<boolean>(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 30, stiffness: 500 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: { clientX: number; clientY: number; }) => {
            cursorX.set(e.clientX - 25);
            cursorY.set(e.clientY - 25);
        };

        window.addEventListener("mousemove", moveCursor);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
        };
    }, []);
    return (
        <motion.div
            className="cursor z-[51] pointer-events-none fixed rounded-full bg-white mix-blend-difference w-10 h-10"
            style={{
                translateX: cursorXSpring,
                translateY: cursorYSpring,
            }}
        />
    )
}
export default Cursor;