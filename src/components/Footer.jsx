import React from 'react';
import styled from 'styled-components';
import evokeLogo from '../assets/evoke.png';

const InstagramButton = styled.div`
  .Btn {
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: transparent;
    position: relative;
    border-radius: 7px;
    cursor: pointer;
    transition: all .3s;
  }

  .svgContainer {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    backdrop-filter: blur(4px);
    letter-spacing: 0.8px;
    border-radius: 10px;
    transition: all .3s;
    border: 1px solid rgba(156, 156, 156, 0.466);
  }

  .BG {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background: #f09433;
    background: -moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
    background: -webkit-linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);
    background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
    z-index: -1;
    border-radius: 9px;
    pointer-events: none;
    transition: all .3s;
  }

  .Btn:hover .BG {
    transform: rotate(35deg);
    transform-origin: bottom;
  }

  .Btn:hover .svgContainer {
    background-color: rgba(156, 156, 156, 0.466);
  }
`;

const LinkedInButton = styled.div`
  .LinkedinBtn {
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: transparent;
    position: relative;
    border-radius: 7px;
    cursor: pointer;
    transition: all 0.3s;
  }

  .LinkedinBtn .svgContainer {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    backdrop-filter: blur(4px);
    letter-spacing: 1px;
    border-radius: 10px;
    transition: all 0.3s;
    border: 1px solid rgba(156, 156, 156, 0.466);
  }

  .LinkedinBtn .BG {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background: #0077b5;
    z-index: -1;
    border-radius: 9px;
    pointer-events: none;
    transition: all 0.3s;
  }

  .LinkedinBtn:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }

  .LinkedinBtn:hover .BG {
    transform: rotate(35deg);
    transform-origin: bottom;
  }

  .LinkedinBtn:hover .svgContainer {
    background-color: rgba(156, 156, 156, 0.466);
  }
`;

const Footer = ({ theme }) => {
  return (
    <footer className={`relative z-[300] py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-10 border-t ${theme === 'dark' ? 'bg-black border-white/5' : 'bg-white border-black/5'}`}>
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content - Flex on laptop only */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 lg:gap-12">
          {/* Left Section: EVOKE AI + About */}
          <div className="flex flex-col items-start gap-3 lg:gap-4">
            <div className="flex items-center">
              <img src={evokeLogo} className='w-10 h-10 object-contain rounded-full translate-y-1' />
              <span className={`font-black uppercase tracking-tighter text-base sm:text-lg md:text-xl ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Evoke AI</span>
            </div>
            <p 
              className={`text-xs sm:text-sm font-medium tracking-wide max-w-md ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}
            >
              A next-generation enterprise AI framework setting the standard for intelligent growth and scalable, high-performance systems.
            </p>
          </div>

          {/* Right Section: Social Media */}
          <div className="flex flex-col items-center lg:items-end gap-4">
            <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
              <LinkedInButton>
                <a href="#" className="LinkedinBtn">
                  <span className="svgContainer">
                    <svg viewBox="0 0 24 24" height={24} width={24} xmlns="http://www.w3.org/2000/svg" fill="white">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </span>
                  <span className="BG" />
                </a>
              </LinkedInButton>
              <InstagramButton>
                <a href="#" className="Btn">
                  <span className="svgContainer">
                    <svg fill="white" className="svgIcon" viewBox="0 0 448 512" height="1.5em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                    </svg>
                  </span>
                  <span className="BG" />
                </a>
              </InstagramButton>
            </div>
            {/* Copyright - Below social icons */}
            <div className={`pt-4 lg:pt-6 border-t ${theme === 'dark' ? 'border-white/5' : 'border-black/5'}`}>
              <p className={`text-[8px] sm:text-[9px] md:text-[10px] font-bold tracking-widest opacity-40 text-center lg:text-right ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                © 2026 EVOKE AI. ALL RIGHTS RESERVED.
              </p>
            </div>
          </div>
        </div>

       
      </div>
    </footer>
  );
};

export default Footer;






