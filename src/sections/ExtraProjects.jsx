import React from 'react';

const ExtraProjects = () => {
    return (
        <extra_projects_box className="w-full bg-black flex flex-col items-center py-8">
            {/*add grid and rows to add more projects*/}
            <div className="grid grid-cols-1 md:grid-cols-2 l:grid-cols-3 gap-5 w-full max-w-6xl">
                {/* Project 1 */}
                <div className="p-6 border border-green-500 rounded-lg bg-black"> 
                    <div className="flex items-center gap-2 mb-1">
                        <p className='font-mono text-3xl text-green-400'>Neural Network</p>
                        <div className="flex gap-1">
                            <div className='h-6 w-6 bg-gray-800 rounded-md flex items-center justify-center'>
                                <img src="/assets/python.svg" alt="Python" className="rounded" />
                            </div>
                        </div>
                    </div>
                    <div className='relative w-full overflow-hidden rounded-lg flex items-start justify-start'>
                        <p className='font-mono text-white'>This project is a simple neural network built from scratch to classify handwritten digits from the MNIST dataset.</p>
                    </div>
                </div>

                {/* Project 2 */}
                <div className="p-6 border border-green-500 rounded-lg bg-black"> 
                    <div className="flex items-center gap-2 mb-1">
                        <p className='font-mono text-3xl text-green-400'>HTTP Server</p>
                        <div className="flex gap-1">

                            <div className='h-6 w-6 bg-gray-800 rounded-md flex items-center justify-center'>
                                <img src="/assets/c.png" alt="Linux" className="rounded" />
                            </div>
                        </div>
                    </div>
                    <div className='relative w-full overflow-hidden rounded-lg flex items-start justify-start'>
                        <p className='font-mono text-white'>A lightweight HTTP server written in C that supports basic HTTP methods (GET and POST) and serves static files</p>
                    </div>
                </div>

                {/* Project 3 */}
                <div className="p-6 border border-green-500 rounded-lg bg-black"> 
                    <div className="flex items-center gap-2 mb-1">
                        <p className='font-mono text-3xl text-green-400'>Space Invaders</p>
                        <div className="flex gap-1">
                            <div className='h-6 w-6 bg-gray-800 rounded-md flex items-center justify-center'>
                                <img src="/assets/python.svg" alt="Python" className="rounded" />
                            </div>
\
                        </div>
                    </div>
                    <div className='relative w-full overflow-hidden rounded-lg flex items-start justify-start'>
                        <p className='font-mono text-white'>Remade Space Invaders in python</p>
                    </div>
                </div>

                {/* Project 4 */}
                <div className="p-6 border border-green-500 rounded-lg bg-black"> 
                    <div className="flex items-center gap-2 mb-1">
                        <p className='font-mono text-3xl text-green-400'>AI Video Summary</p>
                        <div className="flex gap-1">
                            <div className='h-6 w-6 bg-gray-800 rounded-md flex items-center justify-center'>
                                <img src="/assets/python.svg" alt="Python" className="rounded" />
                            </div>
                            <div className='h-6 w-6 bg-gray-800 rounded-md flex items-center justify-center'>
                                <img src="/assets/react.svg" alt="OpenAI" className="rounded" />
                            </div>
                        </div>
                    </div>
                    <div className='relative w-full overflow-hidden rounded-lg flex items-start justify-start'>
                        <p className='font-mono text-white'>Developed an AI-powered tool using Whisper that analyzes videos and generates comprehensive study guides based on the content.</p>
                    </div>
                </div>
            </div>
        </extra_projects_box>
    )
}

export default ExtraProjects;