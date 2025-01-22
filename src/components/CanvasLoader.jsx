import React from 'react';
import { Html, useProgress } from '@react-three/drei';

const CanvasLoader = () => {
    const { progress } = useProgress();

    return (
        <Html center>
            <div
                style={{
                    position: 'relative',
                    width: '12em', // Reduced size for better mobile performance
                    height: '4em',
                    backgroundColor: '#0a0a0a',
                    border: '0.1em solid #00ff00',
                    borderRadius: '0.5em',
                    padding: '0.5em',
                    overflow: 'hidden',
                    boxShadow: '0 0 0.5em rgba(0, 255, 0, 0.3)',
                }}
            >
                <div style={{ textAlign: 'center', marginBottom: '0.5em' }}>
                    <span
                        style={{
                            color: '#00ff00',
                            fontFamily: 'monospace',
                            fontSize: '1em',
                        }}
                    >
                        Loading... {Math.round(progress)}%
                    </span>
                </div>
                <div
                    style={{
                        width: '100%',
                        height: '0.5em',
                        backgroundColor: '#003300',
                        borderRadius: '0.25em',
                    }}
                >
                    <div
                        style={{
                            width: `${progress}%`,
                            height: '100%',
                            backgroundColor: '#00ff00',
                            transition: 'width 0.2s ease-in-out',
                        }}
                    ></div>
                </div>
            </div>
        </Html>
    );
};

export default CanvasLoader;
