import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Rarrow from "../../assets/images/right_arrow.svg";

import Pic from "../../assets/images/members/liuzhao2.png";

export default function Liuzhao() {
	useEffect(() => {
		window.scrollTo(0, 0);
	},[]);
	return (
		<section className="member_section">
			{/* banner部分 */}
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
						<Link to="/members/liuzhao">Zhao Liu</Link>
					</div>
				</div>

				<div className="banner_frame_style">
					<div className="banner_pic">
						<img src={Pic} alt="" className="" />
					</div>
					<div className="banner_text">
						<h1>
							刘朝 <span className="w-px inline-block"></span>Zhao Liu
						</h1>
						<h2>22级本科毕业生/研究生</h2>
						<h2>交互设计 | 主动健康 | 智能防疫 | 设计探针 | 跟踪实验</h2>
						<h2>zhaoyoung6@outlook.com</h2>
						<h2>Wechat: zc756628182</h2>
					</div>
				</div>
			</div>

			{/*  白底部分 */}
			<div className="description_frame_style">
				{/* 中间 左边部分 获奖情况 */}
				<div className="space-y-8">
					<div className="">
						<h3>个人简介：</h3>
						<p>
							我是北京理工大学设计与艺术学院工业设计系研一的刘朝，目前主要研究交互设计领域、主动健康与智能防疫方向，包括实体交互与劝导设计等。本人在用户研究、跟踪实验、组织设计工作方面也有较多经验，也欢迎大家和我交流元宇宙、中国传统文化创意相关的设计问题。
						</p>
					</div>
					<div className="space-y-2">
						<h3>获奖情况：</h3>
						<div className="grid grid-cols-2 gap-4">
							<p>第一届北京市大学生文创设计竞赛 </p>
							<p>二等奖</p>
							<p>圆点国际大学生设计奖 </p>
							<p>一等奖</p>
							
						</div>
					</div>
				</div>
				{/* 中间 右边部分：教育背景和论文发表 */}
				<div className="education_wrap">
					<div className="pt-12 lg:pt-0">
						<h3>教育背景：</h3>
						<div className="education_content_wrap">
							<h4>2018-2022 </h4>
							<p className="col-span-2">北京理工大学 设计与艺术学院 工业设计系 </p>
							<p>学士学位</p>

							
						</div>
					</div>
					<div className="split_line"></div>
					<div className="pt-4">
						<h3>论文发表：</h3>
						<ul className="list-disc pl-4 space-y-2">
							<li>
								<p>
									Liu Z, Fu J. 2021. Design of Intelligent Atmosphere Lamp Based
									on Chinese Traditional Wooden Structure. IEEE ICSESS 2021.
									（EI）
								</p>
							</li>

							<li>
								<p>
									Liu Z, Cheng E, Zhang X, et al. 2021. LUNOST: Connected
									Tangible Messengers for Enhancing Off-Site ParentTeenager
									Relationships. Chinese CHI 2021. （EI）
								</p>
							</li>
						</ul>
					</div>
					<div className="split_line "></div>
				</div>
				{/* 下面部分 */}
				<div className="projects_wrap"></div>
			</div>
		</section>
	);
}
