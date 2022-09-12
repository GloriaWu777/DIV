import React from "react";
import { Children, useEffect } from "react";
import { Link } from "react-router-dom";
import Rarrow from "../../assets/images/right_arrow.svg";

import Pic from "../../assets/images/members/renxipei2.png";

export default function Guozhifan() {
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
						<Link to="/members/guozhifan">Zhifan Guo</Link>
					</div>
				</div>

				<div className="banner_frame_style">
					<div className="banner_pic">
						<img src={Pic} alt="" className="" />
					</div>
					<div className="banner_text">
						<h1>
							郭芝帆<span className="w-px inline-block"></span>Zhifan Guo
						</h1>
						<h2>本科毕业生</h2>
						<h2>交互设计</h2>
						<h2>zhifan4@xxx.com</h2>
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
							Lorem ipsum dolor sit amet consectetur adipisicing elit. In autem
							asperiores porro saepe minus necessitatibus, consequuntur quia
							veritatis officia magnam perferendis, ipsum maxime incidunt esse
							vel ducimus cumque aut doloremque, architecto perspiciatis neque
							quisquam voluptatem.
						</p>
					</div>
				</div>
				{/* 中间 右边部分：教育背景和论文发表 */}
				<div className="education_wrap">
					<div className="pt-12 lg:pt-0">
						<h3>教育背景：</h3>
						<div className="education_content_wrap">
							<h4>2022 – 2025 </h4>
							<p className="col-span-2">乔治亚理工大学 </p>
							<p>研究生</p>

							<h4>2018 – 2022</h4>
							<p className="col-span-2">北京理工大学 设计与艺术学院</p>
							<p>工业设计 学士</p>
						</div>
					</div>
					<div className="split_line"></div>
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
