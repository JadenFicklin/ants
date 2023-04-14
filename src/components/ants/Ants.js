import React, { useEffect, useState } from 'react';
import c from 'classnames';

import sugar from '../images/sugar.png';
import antHill from '../images/ant-hill.png';
import ant from '../images/ant.png';

function Ants() {
    const [antReturnedToHill, setAntReturnedToHill] = useState(false);
    const [food, setFood] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setAntReturnedToHill(!antReturnedToHill);
        }, 4000);
    }, [antReturnedToHill]);

    useEffect(() => {
        if (!antReturnedToHill) {
            setFood(food + 1);
        }
    }, [antReturnedToHill]);

    return (
        <div className="absolute bg-gray-300 border-2 w-[800px] h-[800px] top-20 right-32">
            <img
                src={sugar}
                alt=""
                className="absolute -translate-x-1/2 cursor-pointer left-1/2 top-32 hover:scale-110 active:scale-125"
                onClick={() => setFood(food + 1)}
            />
            <img
                src={antHill}
                alt=""
                className="absolute -translate-x-1/2 bottom-32 left-1/2"
            />
            <img
                src={ant}
                alt=""
                className={c(
                    'absolute scale-[20%] -translate-x-1/2 left-1/2 duration-1000 pointer-events-none',
                    antReturnedToHill
                        ? ' rotate-[135deg] top-[400px]'
                        : '-rotate-45 top-5'
                )}
            />
            <p>food: {food}</p>
        </div>
    );
}

export default Ants;
