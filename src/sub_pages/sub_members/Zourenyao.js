import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Rarrow from "../../assets/images/right_arrow.svg";

import Pic from "../../assets/images/members/zourenyao2.png";

import Picp1 from "../../assets/images/project_medicare/1-1.jpg";

export default function Zourenyao() {
	useEffect(() => {
		window.scrollTo(0, 0);
	});
	return (
		<section className="member_section">
			{/* banner部分 */}
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
						<Link to="/members/zourenyao">Renyao Zou</Link>
					</div>
				</div>

				<div className="banner_frame_style">
					<div className="banner_pic">
						<img src={Pic} alt="" className="" />
					</div>
					<div className="banner_text">
						<h1>
							邹仁耀 <span className="w-px inline-block"></span>Renyao Zou
						</h1>
						<h2>研究生</h2>
						<h2>智能产品设计 ｜ 人机交互 ｜ 虚拟现实 ｜ 远程医疗</h2>
						<h2>zourenyao@foxmail.com</h2>
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
							致力于科技向善，提升产品用户体验，提升用户精神与身体健康水平。将人机交互、用户体验、心理学等产品设计方法引入设计探索、设计实践过程中，注重跨学科的设计合作与探索。
						</p>
					</div>
					<div className="space-y-2">
						<h3>获奖情况：</h3>
						<div className="grid grid-cols-1 gap-4">
							<p> 第九届全国大学生机械创新设计大赛 一等奖</p>

							<p>第六届 “互联网+创新创业大赛”辽宁省 金奖</p>

							<p> 第十二届“挑战杯”中国大学生创业计划竞赛 铜奖</p>

							<p> 2020“挑战杯”·辽宁省创新创业大赛 金奖</p>

							<p>米兰设计周辽宁省 一等奖</p>
						</div>
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
							<p className="col-span-2">北京理工大学 设计与艺术学院</p>
							<p>工业设计 学士</p>
						</div>
					</div>
					<div className="split_line"></div>
					<div className="pt-4">
						<h3>论文发表：</h3>
						<ul className="list-disc pl-4 space-y-2">
							<li>
								<p>实用新型专利：一种智能测温消毒门</p>
							</li>
							<li>
								<p>实用新型专利：一种智能衣服挑选系统</p>
							</li>
							<li>
								<p>外观专利：多功能花器</p>
							</li>
							<li>
								<p>邹仁耀, 任熹培. 远程医疗类信息产品设计的研究现状及发展趋势综述.包装工程.</p>
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
                            <header>数字医疗中的用户体验研究</header>
                            <h5 className="underline">
								<a href="/projects/3333">
									Go To The Detailed Page
								</a>
							</h5>
                            <p>在疫情期间，传统的信息采集方式耗费大量人力、物力，例如打电话、上门询问等方式不仅给各地区防疫人员带来很大压力，也给被询问者带来很大精神压力，尤其是在疫情期间，更容易给被问询者带来紧张、沮丧等负面精神影响。此外，在疫情期间，由于不能很方便的出入医院等场所，居家的健康管理成为提升人们健康水平的重要方式。远程医疗也成为缓解当地医疗压力的重要手段，此外远程医疗也能让不同地区的人们享受更好的医疗服务。 在该项目中，我们进行了一项探索性的研究，旨在设计一组基于日常聊天软件的嵌入式个人健康管理远程医疗助手，该系统由两部分服务组成。一部分是基于微信的集健康状况监测、当地疫情动态信息反馈、健康问题管理为一体的对话式健康管理小助手，另一部分的服务形式与第一部分类似，将对话部分转变成问卷部分。该项研究改进了当前的疫情信息收集方式、疫情动态信息反馈方式和居家健康管理方式。并为未来的基于日常聊天软件的嵌入式个人健康管理远程医疗助手提供了一些设计探索。 对话式小助手提升了信息收集过程中的乐趣，缓解了使用者的压力，并且使用者也很愿意和一个像朋友一样的AI助手进行对话，并获得健康建议。问卷式小助手相比于对话式小助手可以更高效的收集使用者的相关健康信息。 我们计划和更多职业医生和医院合作，进一步提升健康管理方法与健康建议的科学性。由于本次实验更加侧重在疫情背景下的健康管理，所以我们在功能的设置上更倾向于COVID-19相关健康问题的管理，但我们更希望这成为一项日常健康管理服务，在未来我们会加入更多健康管理服务，例如情绪管理、睡眠管理、运动管理等，希望能为使用者带来更加全面的健康管理体验</p>
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
