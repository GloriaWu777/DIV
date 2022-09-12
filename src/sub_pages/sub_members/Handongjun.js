import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Rarrow from "../../assets/images/right_arrow.svg";

import Pic from "../../assets/images/members/handongjun2.png";

export default function Handongjun() {
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
						<Link to="/members/handongjun">Dongjun Han</Link>
					</div>
				</div>

				<div className="banner_frame_style">
					<div className="banner_pic">
						<img src={Pic} alt="" className="" />
					</div>
					<div className="banner_text">
						<h1>
							韩东君 <span className="w-px inline-block"></span>Dongjun Han
						</h1>
						<h2>博士生</h2>
						<h2>传统村落保护与更新 ｜ 传统街区空间环境 ｜ 公共环境健康设计</h2>
						<h2>爱好绘画、跳舞、电吉他、旅游等</h2>
						<h2>871513007@qq.com</h2>
					</div>
				</div>
			</div>

			{/*  白底部分 */}
			<div className="description_frame_style">
				{/* 中间 左边部分 获奖情况 */}
				<div className="space-y-8">
					<div className="">
						<h3>个人简介：</h3>
                        <p>我是韩东君，本硕期间的学习研究使我具备环境设计专业研究基础，现作为一名在读设计学博士，主要兴趣点在城乡公共环境健康设计领域，结合交互设计、环境设计、服务设计等学科探索如何以更好的形式服务于人的健康生活、工作以及环境。</p>
					</div>
					<div className="space-y-2">
						<h3>获奖情况：</h3>
						<div className="grid grid-cols-2 gap-4">
							<h2>作品《太行大洼学堂》 </h2>
							<p> 2021第八届中国高等院校设计作品大赛 二等奖</p>

							<h2>作品《阿日善的哈敦绥格》</h2>
							<p>2021第八届中国高等院校设计作品大赛 二等奖</p>

							<h2>作品《吾家》</h2>
							<p>2020江苏省第十五届室内设计装饰设计大赛 优秀奖</p>

							<h2>作品《一“块”儿生活》 </h2>
							<p>2019中国发展中国家建筑设计大展 银奖</p>
						</div>
					</div>
				</div>
				{/* 中间 右边部分：教育背景和论文发表 */}
				<div className="education_wrap">
					<div className="pt-12 lg:pt-0">
						<h3>教育背景：</h3>
						<div className="education_content_wrap">
							<h4>2022 – 至今</h4>
							<p className="col-span-2">北京理工大学 设计与艺术学院</p>
							<p>博士</p>

							<h4>2018 – 2021 </h4>
							<p className="col-span-2">北京理工大学 设计与艺术学院</p>
							<p>研究生</p>

							<h4>2014 – 2018</h4>
							<p className="col-span-2">北京理工大学 设计与艺术学院 </p>
							<p>本科</p>
						</div>
					</div>
					<div className="split_line"></div>
					<div className="pt-4">
						<h3>论文发表：</h3>
						<ul className="list-disc pl-4 space-y-2">
							<li>
								<p>
									韩东君,王涛,布和.传统村落保护之路——儿童友好型乡村空间理念的探索实践[J].建筑与文化，2021(06):240-242.
								</p>
							</li>
							<li>
								<p>
									韩东君,布和.工业废弃地的改造设计研究[J].工业设计,2021(04):90-91.
								</p>
							</li>
							<li>
								<p>
									瞿蕊,韩东君,朱亚丹.被动式超低能耗建筑发展现状及思考[J].中外建筑，2021(01):185-188.
								</p>
							</li>
						</ul>
					</div>
					<div className="split_line "></div>
				</div>
				{/* 下面部分 */}
				<div className="projects_wrap">
					
				</div>

			</div>
		</section>
	);
}
