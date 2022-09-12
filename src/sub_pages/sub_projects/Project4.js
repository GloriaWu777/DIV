import React from 'react'
import { useEffect } from 'react';

import {Link} from 'react-router-dom';
import Rarrow from '../../assets/images/right_arrow.svg'

export default function Project4() {
  useEffect(()=>{
		window.scrollTo(0,0)
	})
  return (
    <section>
      <div className="h-[300px] bg-no-repeat bg-cover w-[100%] bg-top bg-project4_banner">
				<div className="bg-darkest/30 h-full">
          <div className=" bread_wrap ">
            <Link to="/homepage" className="border-b leading-none">
              HXD
            </Link>
            <img src={Rarrow} alt="" className="w-[9px]" />
            <Link to="/projects" className="border-b leading-none">
              项目
            </Link>
            <img src={Rarrow} alt="" className="w-[9px]" />
            <Link to="/projects/4444">新常态化健康监测技术研究</Link>
          </div>
        </div>
			</div>
    </section>
  )
}
