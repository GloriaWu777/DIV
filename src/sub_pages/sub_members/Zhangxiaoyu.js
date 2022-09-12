import React from "react";
import { Children, useEffect } from "react";
import { Link } from "react-router-dom";
import Rarrow from "../../assets/images/right_arrow.svg";

import Pic from "../../assets/images/members/zhangxiaoyu2.png";
import Picp1 from "../../assets/images/project_healthgaming/subpic1-2.png";

export default function Zhangxiaoyu() {
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
						<Link to="/members/zhangxiaoyu">Xiaoyu Zhang</Link>
					</div>
				</div>

				<div className="banner_frame_style">
					<div className="banner_pic">
						<img src={Pic} alt="" className="" />
					</div>
					<div className="banner_text">
						<h1>
							张晓玉 <span className="w-px inline-block"></span>Xiaoyu Zhang
						</h1>
						<h2>研究生</h2>
						<h2>交互设计 | 可视化 | 智慧健康 </h2>
            <h2>爱好古筝</h2>
						<h2>gysjzxy@163.com</h2>
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
            北京理工大学设计学2021级硕士生。参与2021 ICDF、2021 PDIA、2022 ICACHI十周年系列活动举办。掌握设计基本知识与软件技能，以及D3.js等编程语言。目前研究课题为《新常态化健康监测技术研究》。
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

							<h4>2017 – 2021 </h4>
							<p className="col-span-2">中国海洋大学  </p>
							<p>工业设计 学士</p>
						</div>
					</div>
					<div className="split_line"></div>
					<div className="pt-4">
						<h3>论文发表：</h3>
						<ul className="list-disc pl-4 space-y-2">
							<li>
								<p>Ren, X.; Guo, Z.; Huang, A.; Li, Y.; Xu, X.; Zhang, X. Effects of Social Robotics in Promoting Physical Activity in the Shared Workspace. Sustainability 2022, 14, 4006. https://doi.org/10.3390/su14074006</p>
							</li>
							
						</ul>
					</div>
					<div className="split_line "></div>
				</div>
				{/* 下面部分 */}
				<div className="projects_wrap lg:pt-24 pt-8">
					<h3>参与项目：</h3>
					<div className="projects_content_wrap">
						<div className="single_project">
							<header>个人健康监测</header>
							<h5 className="underline">
								<a href="/projects/4444">Go To The Detailed Page</a>
							</h5>
							<p>
              由于2019年末新冠疫情爆发并相继席卷全球，隔离、核酸检测等措施逐渐成为新常态化防疫不可或缺的一部分。这种生活形式的转变会对身体和精神方面带来一定影响，如：研究表明处于隔离状态的人更容易出现压力、失眠等各种心理症状。
              <br></br>
              疫情导致的负面情绪正在产生和蔓延，给人们的生活带来负担，这同样体现在各个方面，比如社交网络的使用在疫情期间大量增加可以佐证人们在发泄焦虑、寻求情感支持等方面的需求。积极的自我反思和状态调整是缓解压力、促进个人健康管理的有效方式，人们需要能够有意识地控制和缓解焦虑并养成良好的新常态化防疫习惯。然而习惯的形成和保持往往需要长期的努力和坚持，这个过程通常要求人们“为了长远的利益而暂时放弃眼前的快乐”。所以需要一种能够提供趣味、帮助习惯养成的自我管理途径来促进个人健康管理。<br></br>
本项目在提供客观记录的基础上，融入用户的主观思考，并以及描绘等创作方式，让人们能够积极、快速地回顾、反思和调节日常生活状态，并在长期的使用过程中形成良好的行为习惯。从而即便在面对突然的生活状态改变、重大事件时也能够从容应对。
							</p>
						</div>
						<div className="">
							<img src={Picp1} alt="" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
