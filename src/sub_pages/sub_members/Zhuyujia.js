import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Rarrow from "../../assets/images/right_arrow.svg";

import Pic from "../../assets/images/members/zhuyujia2.png";



export default function Zhuyujia() {
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
						<Link to="/members/zhuyujia">Yujia Zhu</Link>
					</div>
				</div>

				<div className="banner_frame_style">
					<div className="banner_pic">
						<img src={Pic} alt="" className="" />
					</div>
					<div className="banner_text">
						<h1>
                        朱雨佳 <span className="w-px inline-block"></span>Yujia Zhu
						</h1>
						<h2>研究生</h2>
						<h2>智能交互 | XR未来交互 | 智慧健康</h2>
                        <h2>喜好绘画、摄影与影片创作</h2>
				
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
                        我叫朱雨佳，毕业于北京科技大学工业设计专业，目前攻读北京理工大学艺术设计硕士学位。我对设计有着浓厚的兴趣，乐于学习和尝试不同领域与方向的设计知识与实践，以此培养独特的设计思维，包括使用3D、影像、绘图等不同形式丰富的设计的表现，期望通过设计实现对社会问题的发掘与探索。
						</p>
					</div>
					
				</div>
				{/* 中间 右边部分：教育背景和论文发表 */}
				<div className="education_wrap">
					<div className="pt-12 lg:pt-0">
						<h3>教育背景：</h3>
						<div className="education_content_wrap">
							<h4>2018 – 2022</h4>
							<p className="col-span-2">北京科技大学 </p>
							<p>工业设计 学士学位</p>

							
						</div>
					</div>
					<div className="split_line"></div>
					
                    <div className="space-y-2">
						<h3>获奖情况：</h3>
						<div className="grid grid-cols-1 gap-4">
							<p> 2019.12   北京科技大学ROBOTAC新媒体创意赛 三等奖</p>

							<p>2020.12   北京市节能节水低碳减排大赛北京市 三等奖</p>

							<p> 2020.12   “OPPO”杯校园文创作品大赛 一等奖</p>

							<p> 2021.08   第七届“互联网+”创新创业大赛北京市 二等奖（两项）</p>

							<p>2021.08   第十四届全国大学生节能减排科技竞赛 一等奖</p>
						</div>
					</div>

                    <div className="split_line"></div>
				</div>
				{/* project部分 */}
				{/*  */}
			</div>
		</section>
	);
}
