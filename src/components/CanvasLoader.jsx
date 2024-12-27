import React from 'react';
import { Html, useProgress } from '@react-three/drei';

const CanvasLoader = () => {
    const { progress } = useProgress();

    return (
        <Html center>
            <div
                style={{
                    position: 'relative',
                    width: '24em',
                    height: '6em',
                    backgroundColor: '#0a0a0a',
                    border: '0.2em solid #00ff00',
                    borderRadius: '0.5em',
                    padding: '1em',
                    overflow: 'hidden',
                    boxShadow: '0 0 1em rgba(0, 255, 0, 0.3)',
                }}
            >
                <div style={{ textAlign: 'center', marginBottom: '1em' }}>
                    <span
                        style={{
                            color: '#00ff00',
                            fontFamily: 'monospace',
                            fontSize: '1.5em',
                            position: 'relative',
                            display: 'inline-block',
                        }}
                        data-text="Initializing..."
                    >
                        Initializing...
                    </span>
                </div>
                <div
                    style={{
                        width: '100%',
                        height: '0.5em',
                        backgroundColor: '#003300',
                        borderRadius: '0.25em',
                        position: 'relative',
                        overflow: 'hidden',
                    }}
                >
                    <div
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: `${progress}%`,
                            height: '100%',
                            backgroundColor: '#00ff00',
                            transition: 'width 0.2s ease-in-out',
                        }}
                    ></div>
                    <div
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            background: 'linear-gradient(45deg, transparent, rgba(0, 255, 0, 0.2), transparent)',
                            backgroundSize: '200% 200%',
                            animation: 'bar-glitch-animation 2s infinite linear',
                        }}
                    ></div>
                </div>
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        pointerEvents: 'none',
                    }}
                >
                    {[...Array(5)].map((_, index) => (
                        <div
                            key={index}
                            style={{
                                position: 'absolute',
                                width: '0.2em',
                                height: '0.2em',
                                backgroundColor: '#00ff00',
                                borderRadius: '50%',
                                opacity: 0,
                                animation: `particle-animation 2s infinite linear`,
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                animationDelay: `${index * 0.5}s`,
                            }}
                        ></div>
                    ))}
                </div>
            </div>

            <style>
                {`
                    @keyframes bar-glitch-animation {
                        0% {
                            background-position: 0 0;
                        }
                        100% {
                            background-position: 200% 0;
                        }
                    }

                    @keyframes particle-animation {
                        0% {
                            opacity: 0;
                            transform: translate(0, 0);
                        }
                        50% {
                            opacity: 1;
                        }
                        100% {
                            opacity: 0;
                            transform: translate(2em, 2em);
                        }
                    }
                `}
            </style>
        </Html>
    );
};

export default CanvasLoader;
