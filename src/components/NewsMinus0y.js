import React from 'react';
import { Routes,Route, Link} from 'react-router-dom';
// TODO:
// 更改新闻js的导入
import News1to1 from '../sub_pages/sub_news/News1to1.js'
import News1to2 from "../sub_pages/sub_news/News1to2.js"

import Rarrow from '../assets/images/right_arrow.svg';
// TODO:
// 更改新闻图片的导入：x-to-y x对应新闻年份 y对应新闻标号
import Newsimg1to1 from '../assets/images/news_img_example.png'

const NewsMinus0y = () => {
  return (
    <div className="bg-darkest grid grid-rows-4 gap-y-14 pt-0">
    {/* news 1 */}
    <Link to = "/news/news1to1" className="each_news_row">
        <div className="text">
            <div className="news_time ">
                <div className="time_dot"></div>
                <div className="">2022.07.03</div>
            </div>
        
            <div className="">
                <h1 className="text_title">实验室平台搭建</h1>
                <p className="text_content">wuxiaoyi和刘鑫月正在figma中辛勤地工作。wuxiaoyi和刘鑫月正在figma中辛勤地工作。wuxiaoyi和刘鑫月正在figma中辛勤地工作。wuxiaoyi和刘鑫月正在figma中辛勤地工作。</p>
            </div>
        </div>
        <div className="news_img_wrap">
            <img src={Newsimg1to1} alt="news image level1-to-no.1" className="w-[100%]"/>
        </div>
    </Link>

    {/* news 2 */}
    <Link to = "/news/news1to2" className="each_news_row ">
        <div className="text">
            <div className="news_time">
                <div className="time_dot"></div>
                <div className="">2022.07.03</div>
            </div>
        
            <div className="">
                <h1 className="text_title">实验室平台搭建</h1>
                <p className="text_content">wuxiaoyi和刘鑫月正在figma中辛勤地工作。wuxiaoyi和刘鑫月正在figma中辛勤地工作。wuxiaoyi和刘鑫月正在figma中辛勤地工作。wuxiaoyi和刘鑫月正在figma中辛勤地工作。</p>
            </div>
        </div>
        <div className="news_img_wrap">
            <img src={Newsimg1to1} alt="news image level1-to-no.1" className="w-[100%]"/>
        </div>
    </Link>

    {/* news 3 */}
    <Link to = "/news/news1to3" className="each_news_row">
        <div className="text">
            <div className="news_time">
                <div className="time_dot"></div>
                <div className="">2022.07.03</div>
            </div>
        
            <div className="">
                <h1 className="text_title">实验室平台搭建</h1>
                <p className="text_content">wuxiaoyi和刘鑫月正在figma中辛勤地工作。wuxiaoyi和刘鑫月正在figma中辛勤地工作。wuxiaoyi和刘鑫月正在figma中辛勤地工作。wuxiaoyi和刘鑫月正在figma中辛勤地工作。</p>
            </div>
        </div>
        <div className="news_img_wrap">
            <img src={Newsimg1to1} alt="news image level1-to-no.1" className="w-[100%]"/>
        </div>
    </Link>

    {/* news 4 */}
    <Link to = "/news/news1to4" className="each_news_row">
        <div className="text">
            <div className="news_time">
                <div className="time_dot"></div>
                <div className="">2022.07.03</div>
            </div>
        
            <div className="">
                <h1 className="text_title">实验室平台搭建</h1>
                <p className="text_content">wuxiaoyi和刘鑫月正在figma中辛勤地工作。wuxiaoyi和刘鑫月正在figma中辛勤地工作。wuxiaoyi和刘鑫月正在figma中辛勤地工作。wuxiaoyi和刘鑫月正在figma中辛勤地工作。</p>
            </div>
        </div>
        <div className="news_img_wrap">
            <img src={Newsimg1to1} alt="news image level1-to-no.1" className="w-[100%]"/>
        </div>
    </Link>

    {/* news 5 */}
    <Link to = "/news/news1to5" className="each_news_row">
        <div className="text">
            <div className="news_time">
                <div className="time_dot"></div>
                <div className="">2022.07.03</div>
            </div>
        
            <div className="">
                <h1 className="text_title">实验室平台搭建</h1>
                <p className="text_content">wuxiaoyi和刘鑫月正在figma中辛勤地工作。wuxiaoyi和刘鑫月正在figma中辛勤地工作。wuxiaoyi和刘鑫月正在figma中辛勤地工作。wuxiaoyi和刘鑫月正在figma中辛勤地工作。</p>
            </div>
        </div>
        <div className="news_img_wrap">
            <img src={Newsimg1to1} alt="news image level1-to-no.1" className="w-[100%]"/>
        </div>
    </Link>
</div>
  )
}
export default NewsMinus0y;