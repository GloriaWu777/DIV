import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Rarrow from "../assets/images/right_arrow.svg";
// TODO:
// 更改2021年新闻图片
import Newsimg2to1 from '../assets/images/news_img_example.png';
import "../css/news.css";
// TODO:
// 导入对应的新闻组件
import News2to1 from "../sub_pages/sub_news/News2to1.js";

const NewsMinus1y = () => {
  return (
    <section>
      <div className="font-body text-white bg-darkest">
        <div className="bread_wrap">
          <Link to="/homepage" className="underline">
            HXD
          </Link>
          <img src={Rarrow} alt="" className="w-[9px]" />
          <Link to="/news/2021">新闻</Link>
        </div>

        <div className="news_container">
          <div className="">
            <ul className="text-base font-light list-disc leading-loose pl-[1.2rem]">
              <Link to="/news/2022" className="time_index">
                <li>2022</li>
              </Link>
              <Link to="/news/2021" className="time_index after:w-[55px]"><li>2021</li></Link>
            </ul>
          </div>

          <div className="bg-darkest grid grid-rows-4 gap-y-14 pt-0">
            {/* news 1 */}
            <Link to="/news/news2to1" className="each_news_row">
              <div className="text">
                <div className="news_time ">
                  <div className="time_dot"></div>
                  <div className="">2021.07.03</div>
                </div>

                <div className="">
                  <h1 className="text_title">实验室平台搭建</h1>
                  <p className="text_content">
                    wuxiaoyi和刘鑫月正在figma中辛勤地工作。wuxiaoyi和刘鑫月正在figma中辛勤地工作。wuxiaoyi和刘鑫月正在figma中辛勤地工作。wuxiaoyi和刘鑫月正在figma中辛勤地工作。
                  </p>
                </div>
              </div>
              <div className="news_img_wrap">
                <img
                  src={Newsimg2to1}
                  alt="news image level1-to-no.1"
                  className="w-[100%]"
                />
              </div>
            </Link>

            {/* news 2 */}
            <Link to="/news/news2to2" className="each_news_row ">
              <div className="text">
                <div className="news_time">
                  <div className="time_dot"></div>
                  <div className="">2021.07.03</div>
                </div>

                <div className="">
                  <h1 className="text_title">实验室平台搭建</h1>
                  <p className="text_content">
                    wuxiaoyi和刘鑫月正在figma中辛勤地工作。wuxiaoyi和刘鑫月正在figma中辛勤地工作。wuxiaoyi和刘鑫月正在figma中辛勤地工作。wuxiaoyi和刘鑫月正在figma中辛勤地工作。
                  </p>
                </div>
              </div>
              <div className="news_img_wrap">
                <img
                  src={Newsimg2to1}
                  alt="news image level1-to-no.1"
                  className="w-[100%]"
                />
              </div>
            </Link>

            {/* news 3 */}
            <Link to="/news/news2to3" className="each_news_row">
              <div className="text">
                <div className="news_time">
                  <div className="time_dot"></div>
                  <div className="">2021.07.03</div>
                </div>

                <div className="">
                  <h1 className="text_title">实验室平台搭建</h1>
                  <p className="text_content">
                    wuxiaoyi和刘鑫月正在figma中辛勤地工作。wuxiaoyi和刘鑫月正在figma中辛勤地工作。wuxiaoyi和刘鑫月正在figma中辛勤地工作。wuxiaoyi和刘鑫月正在figma中辛勤地工作。
                  </p>
                </div>
              </div>
              <div className="news_img_wrap">
                <img
                  src={Newsimg2to1}
                  alt="news image level1-to-no.1"
                  className="w-[100%]"
                />
              </div>
            </Link>

            {/* news 4 */}
            <Link to="/news/news2to4" className="each_news_row">
              <div className="text">
                <div className="news_time">
                  <div className="time_dot"></div>
                  <div className="">2021.07.03</div>
                </div>

                <div className="">
                  <h1 className="text_title">实验室平台搭建</h1>
                  <p className="text_content">
                    wuxiaoyi和刘鑫月正在figma中辛勤地工作。wuxiaoyi和刘鑫月正在figma中辛勤地工作。wuxiaoyi和刘鑫月正在figma中辛勤地工作。wuxiaoyi和刘鑫月正在figma中辛勤地工作。
                  </p>
                </div>
              </div>
              <div className="news_img_wrap">
                <img
                  src={Newsimg2to1}
                  alt="news image level1-to-no.1"
                  className="w-[100%]"
                />
              </div>
            </Link>

            {/* news 5 */}
            <Link to="/news/news2to5" className="each_news_row">
              <div className="text">
                <div className="news_time">
                  <div className="time_dot"></div>
                  <div className="">2021.07.03</div>
                </div>

                <div className="">
                  <h1 className="text_title">实验室平台搭建</h1>
                  <p className="text_content">
                    wuxiaoyi和刘鑫月正在figma中辛勤地工作。wuxiaoyi和刘鑫月正在figma中辛勤地工作。wuxiaoyi和刘鑫月正在figma中辛勤地工作。wuxiaoyi和刘鑫月正在figma中辛勤地工作。
                  </p>
                </div>
              </div>
              <div className="news_img_wrap">
                <img
                  src={Newsimg2to1}
                  alt="news image level1-to-no.1"
                  className="w-[100%]"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsMinus1y;
