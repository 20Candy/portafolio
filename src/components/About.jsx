import React from 'react';
import { aboutData } from '../data/aboutData';

function Landing() {
  
    return (
        <div className='landing'>
            <div className='landing--container'>
                <div  className='landing--container-left'>
                    </div>
                        <img
                            src={aboutData.image}
                            alt=''
                            className='landing--img'
                        />

                        <div className='landing--container-right'>
                        <div className='lcr--content'>
                            
                            <h6>{aboutData.title}</h6>
                            <h1>{aboutData.name}</h1>
                            <p>{aboutData.desciption}</p>

                            <div className='lcr-buttonContainer'>
                                {aboutData.resumePdf && (
                                    <a
                                        href={aboutData.resumePdf}
                                        download='resume'
                                        target='_blank'
                                        rel='noreferrer'
                                    >
                                        <button className="btn">
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
