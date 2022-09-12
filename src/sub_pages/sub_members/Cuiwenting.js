import React from "react";
import { Children, useEffect } from "react";
import { Link } from "react-router-dom";
import Rarrow from "../../assets/images/right_arrow.svg";

import Pic from "../../assets/images/members/cuiwenting2.png";

export default function Cuiwenting() {
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
						<Link to="/members/cuiwenting">Wenting Cui</Link>
					</div>
				</div>

				<div className="banner_frame_style">
					<div className="banner_pic">
						<img src={Pic} alt="" className="" />
					</div>
					<div className="banner_text">
						<h1>
						崔文婷 <span className="w-px inline-block"></span>Wenting Cui
						</h1>
						<h2>研究生</h2>
						<h2>智能交互</h2>
						
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
						崔文婷，女，中共党员，北京理工大学设计与研究学院在读研究生，本科毕业于北京理工大学设计与艺术学院工业设计专业。
						</p>
					</div>


					<div className="space-y-2">
						<h3>获奖情况：</h3>
						<div className="grid grid-cols-1 gap-4">
							<p> 本科期间获得两次国家励志奖学金</p>

							<p></p>
						</div>
					</div>

				</div>
				{/* 中间 右边部分：教育背景和论文发表 */}
				<div className="education_wrap">
					<div className="pt-12 lg:pt-0">
						<h3>教育背景：</h3>
						<div className="education_content_wrap">
							<h4>2018 – 2022</h4>
							<p className="col-span-2">北京理工大学 设计与艺术学院</p>
							<p>工业设计 学士学位</p>

						</div>
					</div>
					<div className="split_line"></div>

					<div className="pt-4">
						<h3>论文发表：</h3>
						<ul className="list-disc pl-4 space-y-2">
							<li>
								<p>Cui, W., Li, Y., Ma, Y., Zhang, L., & Ren, X. (2021, October). Co-Drink: Exploring Social Support Water Bottles to Increase the Hydration Status of Individuals with Intimate Relationship. In The Ninth International Symposium of Chinese CHI (pp. 92-100).</p>
							</li>
							
						</ul>
					</div>
					
					<div className="split_line "></div>

				</div>
				{/* <div className="space-y-2">
						<h3>获奖情况：</h3>
						<div className="grid grid-cols-1 gap-4">
							<p> </p>

							<p></p>
						</div>
					</div>
					<div className="split_line "></div>
				</div> 
				{/* 下面部分 */}
				{/* <div className="projects_wrap lg:pt-24 pt-8">
					<h3>参与项目：</h3>
					<div className="projects_content_wrap">
						<div className="single_project">
							<header></header>
							<h5 className="underline">
								<a href="/projects/6666">Go To The Detailed Page</a>
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
