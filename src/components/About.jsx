import React from 'react';
import { headerData } from '../data/headerData';

function Landing() {
  
    return (
        <div className='landing'>
            <div className='landing--container'>
                <div
                    className='landing--container-left'
                >
                </div>
                <img
                    src={headerData.image}
                    alt=''
                    className='landing--img'
                    style={{
                        opacity: 1,
                        borderColor: "#e1c7dd",
                    }}
                />
                <div
                    className='landing--container-right'
                    style={{ backgroundColor: "#02000A" }}
                >
                    <div
                        className='lcr--content'
                        style={{ color: "white" }}
                    >
                        <h6>{headerData.title}</h6>
                        <h1>{headerData.name}</h1>
                        <p>{headerData.desciption}</p>

                        <div className='lcr-buttonContainer'>
                            {headerData.resumePdf && (
                                <a
                                    href={headerData.resumePdf}
                                    download='resume'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <button className="resumeButton">
                                        Download CV
                                    </button>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;
