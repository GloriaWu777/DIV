import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Rarrow from "../../assets/images/right_arrow.svg";

import Pic from "../../assets/images/members/qiuchunman2.png";

export default function Qiuchunman() {
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
						<Link to="/members/qiuchunman">Chunman Qiu</Link>
					</div>
				</div>

				<div className="banner_frame_style">
					<div className="banner_pic">
						<img src={Pic} alt="" className="" />
					</div>
					<div className="banner_text">
						<h1>
                        邱春熳 <span className="w-px inline-block"></span>Chunman Qiu
						</h1>
						<h2>22级本科毕业生/研究生</h2>
						<h2>智慧健康 | 用户体验 | 交互设计</h2>
						<h2>chuanmanqiua@163.com</h2>
						
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
                        大家好，我是邱春熳。在过去的设计学习中，我曾聚焦的老年人健康饮食复杂系统、跨设备交互体验研究等，让我享受设计的过程，感受到设计的魅力，设计的整体性与逻辑性。目前我选择研究生阶段的学习，拓宽对设计的认识，丰富对设计的理解，有兴趣探索智慧健康设计研究新模式，欢迎和我一起探讨设计。
						</p>
					</div>
					
					
				</div>
				{/* 中间 右边部分：教育背景和论文发表 */}
				<div className="education_wrap">
					<div className="pt-12 lg:pt-0">
						<h3>教育背景：</h3>
						<div className="education_content_wrap">
							<h4>2018-2022 </h4>
							<p className="col-span-2">湖南大学 设计艺术学院工业设计 </p>
							<p>学士学位</p>

							
						</div>
					</div>
					<div className="split_line"></div>
					<div className="pt-4">
						<h3>论文发表：</h3>
						<ul className="list-disc pl-4 space-y-2">
							<li>
								<p>
                                2021年于CHII2021发表《Analyze the impact of human desire on the developmen of vehicle navigation systems》
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
