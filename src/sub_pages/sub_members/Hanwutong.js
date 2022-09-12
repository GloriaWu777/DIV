import React from 'react'
import { Children, useEffect } from "react";
import { Link } from "react-router-dom";
import Rarrow from "../../assets/images/right_arrow.svg";

import Pic from "../../assets/images/members/hanwutong2.png";
import Picp1 from "../../assets/images/project_healthgaming/subpic1-2.png";

export default function Hanwutong() {
  useEffect(() => {
		window.scrollTo(0, 0);
	});
	return (
		<section className="member_section">
			<div className="bg-darkest relative text-white">
				<div className="h-[300px]">
					<div className="bread_wrap ">
						<Link to="/homepage" className="border-b leading-none">
							HXD
						</Link>
						<img src={Rarrow} alt="" className="w-[9px]" />
						<Link to="/members" className="border-b leading-none">
							团队
						</Link>
						<img src={Rarrow} alt="" className="w-[9px]" />
						<Link to="/members/hanwutong">Wutong Han</Link>
					</div>
				</div>

				<div className="banner_frame_style">
					<div className="banner_pic">
						<img src={Pic} alt="" className="" />
					</div>
					<div className="banner_text">
						<h1>
            韩吴桐 <span className="w-px inline-block"></span>Wutong Han
						</h1>
						<h2>研究生</h2>
						<h2>虚拟现实 | 触觉反馈 | 多通道反馈 | 人机交互</h2>
            <h2>爱好绘画</h2>
						<h2>id_zyq@163.com</h2>
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
            大家好，我是韩吴桐，北京理工大学在读硕士研究生，目前研一，专业为工业设计，导师任熹培老师。我目前主要致力于虚拟现实技术方面，包括虚拟现实的人机交互及现实反馈方面，以提升虚拟现实的沉浸感。
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

							{/* <h4>2017 – 2021 </h4>
							<p className="col-span-2">  </p>
							<p>工业设计 学士</p> */}
						</div>
					</div>
					<div className="split_line"></div>
					{/* 竞赛论文发表补充在这 */}
					{/* <div className="split_line "></div> */}
				</div>
				{/* 下面部分 */}
				{/* <div className="projects_wrap lg:pt-24 pt-8">
					<h3>参与项目：</h3>
					<div className="projects_content_wrap">
						<div className="single_project">
							<header></header>
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
				</div> */}
			</div>
		</section>
	);
}
