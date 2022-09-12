import React from 'react'
import { Children, useEffect } from "react";
import { Link } from "react-router-dom";
import Rarrow from "../../assets/images/right_arrow.svg";

import Pic from "../../assets/images/members/lianchengbo2.png";
import Picp1 from "../../assets/images/project_healthgaming/subpic1-2.png";

export default function Lianchengbo() {
  useEffect(() => {
		window.scrollTo(0, 0);
	},[]);
	return (
		<section className="member_section">
			<div className="bg-darkest relative text-white">
				<div className="h-[300px]">
					<div className="bread_wrap ">
						<Link to="/homepage" className="border-b leading-none">
							DIV
						</Link>
						<img src={Rarrow} alt="" className="w-[9px]" />
						<Link to="/members" className="border-b leading-none">
							团队
						</Link>
						<img src={Rarrow} alt="" className="w-[9px]" />
						<Link to="/members/lianchengbo">Chengbo Lian</Link>
					</div>
				</div>

				<div className="banner_frame_style">
					<div className="banner_pic">
						<img src={Pic} alt="" className="" />
					</div>
					<div className="banner_text">
						<h1>
							连成波<span className="w-px inline-block"></span>Chengbo Lian
						</h1>
						<h2>研究生</h2>
						<h2>人机交互 | 劝导技术 | 劝导设计 | 协同式设计</h2>
            <h2>爱好音乐、运动、阅读、电子与数码</h2>
						<h2>Hermionedes@outlook.com</h2>
					</div>
				</div>
			</div>

			{/*  白底部分 */}
			<div className="description_frame_style">
				{/* 中间 左边部分 获奖情况 */}
				<div className="space-y-8">
					<div className="">
						<h3>个人简介：</h3>
						<p className="w-[90%]">
            大家好，我是连成波。目前研究生阶段就读于北京理工大学设计与艺术学院。作为一名有着本科工业设计学科背景的学生，我对工业设计、人机交互、人工智能相关的产品以及服务体验流程等有着浓厚的兴趣，本科阶段主要学习产品设计创新知识技能，研究生阶段以及今后长期一段时间将主要探索人机交互领域相关的学科知识、前沿技术。
						</p>
					</div>
				</div>
				{/* 中间 右边部分：教育背景和论文发表 */}
				<div className="education_wrap">
					<div className="pt-12 lg:pt-0">
						<h3>教育背景：</h3>
						<div className="education_content_wrap">
							<h4>2021 – 2024</h4>
							<p className="col-span-2">北京理工大学 设计与艺术学院</p>
							<p>工业设计 硕士</p>

							<h4>2013 – 2017 </h4>
							<p className="col-span-2">太原理工大学现代科技学院 </p>
							<p>工业设计 学士</p>
						</div>
					</div>
					<div className="split_line"></div>
					<div className="space-y-2">
						<h3>获奖情况：</h3>
						<div className="grid grid-cols-1 gap-4">
							<p> 2020年国际红点设计奖概念设计组 Winner</p>

							<p>全国大学生广告设计大赛山西分赛区 优秀奖</p>

							
						</div>
					</div>
					<div className="split_line "></div>
				</div>
				{/* 下面部分 */}
				<div className="projects_wrap lg:pt-24 pt-8">
					<h3>参与项目：</h3>
					<div className="projects_content_wrap">
						<div className="single_project">
							<header>智能材料工作坊</header>
							<h5 className="underline">
								<a href="/projects/4444">Go To The Detailed Page</a>
							</h5>
							<p>
              
							</p>
						</div>
						<div className="">
							<img src="" alt="" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
