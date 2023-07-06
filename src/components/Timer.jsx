import React, { useState, useEffect } from 'react';

const Timer = ({ time,onTimeEnd  }) => {
    const [timeLeft, setTimeLeft] = useState(Number(time)); // initial time in seconds (3 minutes)

    useEffect(() => {
        let intervalId = null;
        if (timeLeft > 0) {
            intervalId = setInterval(() => {
                setTimeLeft(timeLeft - 1);
            }, 1000); // 1000 milliseconds = 1 second
        } else {
            clearInterval(intervalId);
            onTimeEnd && onTimeEnd()
        }
        return () => clearInterval(intervalId);
    }, [timeLeft,onTimeEnd]);

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    return (
        <>
            {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </>
    );
};

export default Timer;
