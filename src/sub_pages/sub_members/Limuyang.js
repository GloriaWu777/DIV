import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Rarrow from "../../assets/images/right_arrow.svg";

import Pic from "../../assets/images/members/limuyang2.png";

export default function Limjuyang() {
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
						<Link to="/members/limuyang">Muyang Li</Link>
					</div>
				</div>

				<div className="banner_frame_style">
					<div className="banner_pic">
						<img src={Pic} alt="" className="" />
					</div>
					<div className="banner_text">
						<h1>
							李沐阳 <span className="w-px inline-block"></span>Muyang Li
						</h1>
						<h2>研究生</h2>
						<h2>人机交互设计 | 工业设计 | 产品造型</h2>
						<h2>爱好绘画、篮球、模型制作等</h2>
						<h2>1012118559@qq.com</h2>
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
							我叫李沐阳，是一个热爱生活，肯吃苦耐劳且富有上进心的人；我非常热爱设计工作，兴趣爱好十分广泛，对于机械，模型，时尚等多方面都有所涉猎。最大的优势是可以从多方面整合来进行设计工作。
						</p>
					</div>
				</div>
				{/* 中间 右边部分：教育背景和论文发表 */}
				<div className="education_wrap">
					<div className="pt-12 lg:pt-0">
						<h3>教育背景：</h3>
						<div className="education_content_wrap">
							<h4>2022 – 2025</h4>
							<p className="col-span-2">北京理工大学 </p>
							<p>工业设计 硕士学位</p>

							<h4>2018 – 2022</h4>
							<p className="col-span-2">中国石油大学（华东）机电工程学院</p>
							<p>工业设计 学士学位</p>
						</div>
					</div>
					<div className="split_line"></div>

					<div className="space-y-2">
						<h3>获奖情况：</h3>
						<div className="grid grid-cols-1 gap-4">
							<p> 2020山东省互联网+省级 银奖</p>

							<p>2020第十二届全国大学生广告艺术大赛 二等奖</p>
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
