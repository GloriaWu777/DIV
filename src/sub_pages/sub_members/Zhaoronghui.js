import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Rarrow from "../../assets/images/right_arrow.svg";

import Pic from "../../assets/images/members/zhaoronghui2.png";

export default function Zhaoronghui() {
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
						<Link to="/members/zhaoronghui">Ronghui Zhao</Link>
					</div>
				</div>

				<div className="banner_frame_style">
					<div className="banner_pic">
						<img src={Pic} alt="" className="" />
					</div>
					<div className="banner_text">
						<h1>
							赵容慧 <span className="w-px inline-block"></span>Ronghui Zhao
						</h1>
						<h2>研究生</h2>
						<h2>工业设计</h2>
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
							赵容慧，北京理工大学设计与艺术学院工业设计系研究生，热爱设计，对设计方法、产品设计、用户调研有充分的了解与应用。
						</p>
					</div>

                    <div className="space-y-2">
						<h3>论文发表：</h3>
						<ul className="list-disc pl-4 space-y-2">
							<li>
								<p>2021.8《天工》论文《马车文化在现代文创中的应用和发展》</p>
							</li>
						
						</ul>
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
							<p className="col-span-2">北京理工大学</p>
							<p> 产品设计 学士学位</p>
						</div>
					</div>
					<div className="split_line"></div>

					<div className="space-y-2">
						<h3>获奖情况：</h3>
						<div className="grid grid-cols-1 gap-4">
							<p>2020.5 韩国眼镜设计大赛 荣誉奖</p>

							<p>2020.12 香港当代设计奖 铜奖(4件)</p>
							<p>2020.12 北京市文创设计大赛 三等奖</p>
							<p>2021.8 国际用户创新体验大赛 三等奖</p>
							<p>2021.8 新加披金沙艺术设计大赛 优秀奖、铜奖、银奖</p>
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
