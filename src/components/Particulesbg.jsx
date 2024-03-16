import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles"; 

const Particulesbg = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            try {
                await loadFull(engine);
                setInit(true);
            } catch (error) {
                console.error("Erreur lors du chargement des particules :", error);
            }
        });
    }, []);

    return (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: -1 }}>
            {init && (
                <Particles
                    id="tsparticles"
                    options={{
                        background: {
                            color: {
                                value: "#000000"
                            }
                        },
                        fpsLimit: 60,
                        interactivity: {
                            events: {
                                onClick: {
                                    enable: true,
                                    mode: "push"
                                },
                                onHover: {
                                    enable: true,
                                    mode: "repulse"
                                },
                                resize: true
                            },
                            modes: {
                                push: {
                                    quantity: 8
                                },
                                repulse: {
                                    distance: 150,
                                    duration: 0.3
                                }
                            }
                        },
                        particles: {
                            color: {
                                value: "#ffffff"
                            },
                            links: {
                                color: "#ffffff",
                                distance: 150,
                                enable: true,
                                opacity: 0.5,
                                width: 1
                            },
                            move: {
                                direction: "none",
                                enable: true,
                                outModes: {
                                    default: "bounce"
                                },
                                random: false,
                                speed: 2,
                                straight: false
                            },
                            number: {
                                density: {
                                    enable: true,
                                    area: 800
                                },
                                value: 100
                            },
                            opacity: {
                                value: 0.5
                            },
                            shape: {
                                type: "triangle"
                            },
                            size: {
                                value: 2
                            }
                        },
                        detectRetina: true
                    }}
                />
            )}
        </div>
    );
};

export default Particulesbg;
