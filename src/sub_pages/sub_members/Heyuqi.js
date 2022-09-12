import React from "react";
import { Children, useEffect } from "react";
import { Link } from "react-router-dom";
import Rarrow from "../../assets/images/right_arrow.svg";

import Pic from "../../assets/images/members/heyuqi2.png";

export default function Heyuqi() {
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
						<Link to="/members/heyuqi">Yuqi He</Link>
					</div>
				</div>

				<div className="banner_frame_style">
					<div className="banner_pic">
						<img src={Pic} alt="" className="" />
					</div>
					<div className="banner_text">
						<h1>
							贺宇祺 <span className="w-px inline-block"></span>Yuqi He
						</h1>
						<h2>研究生</h2>
						<h2>智慧健康 | 用户研究 | 乳腺健康</h2>
						<h2>heyuqibjfu@163.com</h2>
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
            大家好，我是贺宇祺。目前的研究方向是针对乳腺癌术后修复的运动劝导设计研究，通过定性研究和参与式设计来了解和分析用户行为和需求，不断迭代设计方案来帮助她们进而改善她们的环境，对相关方面感兴趣或者有感悟可以联系我，希望我们能相互沟通学习～
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
							<p className="col-span-2">北京林业大学木材科学与技术院 </p>
							<p>学士</p>
						</div>
					</div>
					<div className="split_line"></div>
					<div className="space-y-2">
						<h3>获奖情况：</h3>
						<div className="grid grid-cols-1 gap-4">
							<p> 赫德曼家3D云高校设计比赛 三等奖</p>

							<p>全球吉庆生肖比赛 三等奖</p>
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
