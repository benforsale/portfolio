'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react';

gsap.registerPlugin(useGSAP);

const Preloader = () => {
    const preloaderRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                defaults: {
                    ease: 'power1.inOut',
                },
            });

            tl.to('.name-text span', {
                y: 0,
                stagger: 0.05,
                duration: 0.2,
            });

            tl.to('.preloader-item', {
                delay: 1,
                y: '100%',
                duration: 0.5,
                stagger: 0.1,
            })
                .to('.name-text span', { autoAlpha: 0 }, '<0.5')
                .to(
                    preloaderRef.current,
                    {
                        autoAlpha: 0,
                    },
                    '<1',
                );
        },
        { scope: preloaderRef },
    );

    return (
        <div className="fixed inset-0 z-[6] flex" ref={preloaderRef}>
            <div className="preloader-item h-full w-[10%] bg-black"></div>
            <div className="preloader-item h-full w-[10%] bg-black"></div>
            <div className="preloader-item h-full w-[10%] bg-black"></div>
            <div className="preloader-item h-full w-[10%] bg-black"></div>
            <div className="preloader-item h-full w-[10%] bg-black"></div>
            <div className="preloader-item h-full w-[10%] bg-black"></div>
            <div className="preloader-item h-full w-[10%] bg-black"></div>
            <div className="preloader-item h-full w-[10%] bg-black"></div>
            <div className="preloader-item h-full w-[10%] bg-black"></div>
            <div className="preloader-item h-full w-[10%] bg-black"></div>

            <p className="name-text flex flex-col items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 leading-none overflow-visible whitespace-nowrap">
                {/* KHANH TOAN */}
                <span className="flex justify-center text-[15vw] lg:text-[150px] font-anton tracking-[0.03em] text-white">
                    <span className="name-letter inline-block translate-y-full">
                        K
                    </span>
                    <span className="name-letter inline-block translate-y-full">
                        H
                    </span>
                    <span className="name-letter inline-block translate-y-full">
                        Á
                    </span>
                    <span className="name-letter inline-block translate-y-full">
                        N
                    </span>
                    <span className="name-letter inline-block translate-y-full">
                        H
                    </span>

                    <span className="inline-block w-[0.3em]"></span>

                    <span className="name-letter inline-block translate-y-full">
                        T
                    </span>
                    <span className="name-letter inline-block translate-y-full">
                        O
                    </span>
                    <span className="name-letter inline-block translate-y-full">
                        À
                    </span>
                    <span className="name-letter inline-block translate-y-full">
                        N
                    </span>
                </span>

                {/* 全全 */}
                <span className="flex justify-center mt-4 text-[9vw] lg:text-[80px] font-bold tracking-[0.2em]">
                    <span className="name-letter inline-block translate-y-full bg-gradient-to-b from-zinc-200 via-zinc-500 to-zinc-800 bg-clip-text text-transparent">
                        全
                    </span>

                    <span className="name-letter inline-block translate-y-full bg-gradient-to-b from-zinc-200 via-zinc-500 to-zinc-800 bg-clip-text text-transparent">
                        全
                    </span>
                </span>
            </p>
        </div>
    );
};

export default Preloader;
