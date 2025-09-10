import { Suspense, useState } from 'react';
import { workExperiences } from '../constants/index.js';

const WorkExperience = () => {
  const [animationName, setAnimationName] = useState('idle');

  return (
    <section className="c-space my-20" id="work">
      <div className="w-full text-white-600">
        <p className="head-text">My Journey</p>     
          

          <div className="work-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {workExperiences.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setAnimationName(item.animation.toLowerCase())}
                  onPointerOver={() => setAnimationName(item.animation.toLowerCase())}
                  onPointerOut={() => setAnimationName('idle')}
                  className="work-content_container group">
                  <div className="flex flex-col h-full justify-start items-center py-2">
                    <div className="work-content_logo" >
                      <img className="w-full h-full" loading="lazy" src={item.icon} alt="" />
                    </div>

                    <div className="work-content_bar" />
                  </div>

                  <div className="sm:p-5 px-2.5 py-5">
                    <p className="font-bold text-black">{item.name}</p>
                    <p className="text-black text-sm mb-5">
                      {item.pos} -- <span>{item.duration}</span>
                    </p>                    
                    <p className="text-black group-hover:text-black transition-all ease-in-out duration-500 whitespace-pre-line">{item.title}</p>
                    {item.description && Array.isArray(item.description) && (
                    <ul className="text-black list-disc ml-4 leading-relaxed group-hover:text-black transition-all ease-in-out duration-500 whitespace-pre-line">
                    {item.description.map((point, idx) => (
                    <li key={idx}>{point}</li>
                    ))}
                    </ul>
                )}
                <p className="text-black group-hover:text-black transition-all ease-in-out duration-500 whitespace-pre-line">{item.title2}</p>
                    {item.description2 && Array.isArray(item.description2) && (
                    <ul className="text-black list-disc ml-4 leading-relaxed group-hover:text-black transition-all ease-in-out duration-500 whitespace-pre-line">
                    {item.description2.map((point, idx) => (
                    <li key={idx}>{point}</li>
                    ))}
                    </ul>
                )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        
      </div>
    </section>
  );
};

export default WorkExperience;
