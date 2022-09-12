import React from "react";
import { Children, useEffect } from "react";
import { Link } from "react-router-dom";
import Rarrow from "../../assets/images/right_arrow.svg";

import Axios from "axios";
import FileDownload from "js-file-download";
import Pdf_2 from "./Project_2_Package.zip";

import Pic11 from "../../assets/images/project_dietpersuasion/mainpic1-1.jpg";
import Pic12 from "../../assets/images/project_dietpersuasion/subpic1-2.png";
import Pic13 from "../../assets/images/project_dietpersuasion/subpic1-3.png";

import Pic21 from "../../assets/images/project_dietpersuasion/mainpic2-1.jpg";
import Pic22 from "../../assets/images/project_dietpersuasion/subpic2-2.png";
import Pic23 from "../../assets/images/project_dietpersuasion/subpic2-3.jpg";

export default function Project2() {
	useEffect(()=>{
		window.scrollTo(0,0)
	})
	return (
		<section>
			<div className="h-[300px] bg-no-repeat bg-cover w-[100%] bg-top bg-project2_banner">
				<div className="bg-darkest/30 h-full">
					<div className=" bread_wrap">
						<Link to="/homepage" className="border-b leading-none">
							HXD
						</Link>
						<img src={Rarrow} alt="" className="w-[9px]" />
						<Link to="/projects" className="border-b leading-none">
							项目
						</Link>
						<img src={Rarrow} alt="" className="w-[9px]" />
						<Link to="/projects/2222">健康饮食行为劝导设计研究</Link>
					</div>
				</div>
			</div>

			{/* 项目总介绍 */}
			<Description
				p_name="健康饮食行为劝导设计研究"
				p_duration="2019-2022"
				p_abstract="项目概述：Lorem ipsum dolor sit, amet consectetur
				adipisicing elit. Temporibus quas, consequatur quae quisquam
				delectus aut molestiae totam sit numquam libero porro accusamus qui
				optio id deserunt dolore saepe odit dicta!"
				href={Pdf_2}
				grants="某资助项目"
			>
				<Conference
					conference_name="某个会议名称"
					concise_info="Xiaoyi Wu, Xinyueliu, Xipei Ren. 某个会议, 2021, 迪拜.好兄弟出版社,
					2021(第五版)."
				></Conference>

				<Conference
					conference_name="某个会议名称"
					concise_info="Xiaoyi Wu, Xinyueliu, Xipei Ren. 某个会议, 2021, 迪拜.好兄弟出版社,
					2021(第五版)."
				></Conference>
			</Description>

			{/* 项目example */}
			<div className="projects_frame_style space-y-24 flex flex-col">
				{/* example 1 */}
				<ProjectExample
					project_number="- project 1 -"
					project_title1="Hicclip: A Smart Sealing Rack Using Interactive Sounds to
				Intervene Snack Addictions"
					project_title2="面向健康饮食的干预性设计：听觉交互的智能零食密封夹"
					project_desc="适当的零食摄入情况是组成健康饮食习惯的一部分，而许多现代人正在面临过量摄取高热量零食的问题。本文描述了一项智能零食密封夹装置设计，该交互装置可以在用户吃零食的过程中与之互动，输出饮食行为相关声音的反馈，目的在于探索该声音交互是否能对用户的零食摄取形成有效的干预，从而防止用户过量地摄入高热量零食。"
					project_href="https://dl.acm.org/doi/10.1145/3491101.3519886"
					p1={Pic11}
					p2={Pic12}
					p3={Pic13}
					hover_style="hover:cursor-link "
				></ProjectExample>

				{/* example 2 */}
				<div className="space-y-12">
					{/* 正文 */}
					<div className="px-12 lg:px-24  space-y-4 leading-normal">
						<p className="text-center">- project 2 -</p>
						<h1 className="text-center relative leading-loose">
							<a
								href="https://link.springer.com/chapter/10.1007/978-3-031-05431-0_20"
								target="_blank"
								rel= "noreferrer"
								className="transition duration-300 ease-out hover:border-b-[2px] hover:border-bg-darkest hover:cursor-link"
							>
								Persuasive Design for Healthy Eating: A Scoping Review<br></br>
								针对健康饮食的劝导设计文献综述
							</a>
						</h1>

						<p className="">
							本文献综述旨在总结和分析针对健康饮食行为的劝导设计的最新研究进展，以探索未来的设计机会。本文首先通过检索，在计算机协会(ACM)数字图书馆、IEEEXplore和SpringerLink三个数据库中，收集了2011年至2021年的1231篇论文，后经过人工条件筛选将28篇论文纳入分析对象。本文从研究规范、方法和设计原理三个维度进行了分析，数据结果显示，现有文献主要利用劝导技术来进行饮食行为监测、记录和健康饮食建议，覆盖的设计类型包括移动应用、劝导信息、智能产品和系统、可穿戴设备、虚拟助手和公共装置。本文得出的结论是：目前的研究文献大多将劝导式设计作为一种促进健康饮食的通用方法，缺乏针对特定用户群体，如办公室职员和青少年的个性化解决方案的研究调查。希望未来的研究者们可以通过用户体验的研究方法，检验劝导式设计促进不同背景下各群体的健康饮食行为的有效性。
						</p>
					</div>
				</div>

				{/* example 3 */}
				<ProjectExample
					project_number="- project 3 -"
					project_title1="Sustainable Eating and Coral Coloring"
					project_title2="校园可持续饮食助推与个人健康饮食管理系统设计"
					project_desc="将游戏化运用到学生食堂的食物选择过程中。个人与集体的食物消费情况将被可视化为一个暗喻的虚拟形象，例如白化珊瑚的点亮过程。健康和可持续的饮食，将转化为良好的数字形象。
					面向学生集体场景，以公共屏幕中的互动海报为载体，通过设定集体目标、共同完成任务的方式，推动可持续健康饮食在学生群体间的推广，和饮食行为的相互监督。"
					p1={Pic21}
					p2={Pic22}
					p3={Pic23}
					hover_style="hover:cursor-nolink"
				></ProjectExample>

				<div className="split_line bg-split h-px w-[70%] self-center  text-center"></div>
			</div>

			<SupplementContent
				participants="刘鑫月，潘思博，任熹培"
				acknowledgement="这是关于项目的致谢：MAIN IDEA MAIN IDEA MAIN IDEA MAIN IDEAMAIN IDEA MAIN IDEAMAIN IDEA MAIN IDEAMAIN IDEA MAIN IDEAMAIN IDEA MAIN IDEAMAIN IDEA MAIN IDEAMAIN IDEA MAIN IDEAMAIN IDEA MAIN IDEAMAIN
				IDEA MAIN IDEAMAIN IDEA MAIN IDEAMAIN IDEA MAIN IDEAMAIN IDEA MAIN
				IDEAMAIN IDEA MAIN IDEA。"
			>
				<Publication
					href="https://dl.acm.org/doi/10.1145/3491101.3519886"
					publication="Xinyue Liu, Xipei Ren, and Xiaoqing Sun. 2022. Hicclip: A Smart
		Sealing Rack Using Interactive Sounds to Intervene Snack
		Addictions. In Extended Abstracts of the 2022 CHI Conference on
		Human Factors in Computing Systems (CHI EA '22). Association for
		Computing Machinery, New York, NY, USA, Article 188, 1–4."
				></Publication>

				<Publication
					href="https://link.springer.com/chapter/10.1007/978-3-031-05431-0_20"
					publication="Liu, X., Ren, X., Pan, S. (2022). Persuasive Design for Healthy
					Eating: A Scoping Review. In: Streitz, N.A., Konomi, S. (eds)
					Distributed, Ambient and Pervasive Interactions. Smart Living,
					Learning, Well-being and Health, Art and Creativity. HCII 2022.
					Lecture Notes in Computer Science, vol 13326. Springer, Cham."
				></Publication>
			</SupplementContent>
			{/* 内容下方补充文字 */}
		</section>
	);
}

// 定义部分
// 项目总介绍
function Description({
	p_name,
	p_duration,
	p_abstract,
	href,
	grants,
	children,
	...props
}) {
	return (
		<div className="text-black content_frame_style flex flex-col space-y-14 md:flex-row md:space-x-20 md:space-y-0 lg:space-x-48 px-12 md:px-24 py-24">
			{/* 左侧 */}
			<div className="flex-1 space-y-2">
				<h1 className="text-xl font-medium">{p_name}</h1>
				<p className="text-lg font-light">{p_duration}</p>
				{/* TODO: 项目概述索要修改 */}
				<p className="text-tiny font-normal pt-6 pb-3 ">{p_abstract}</p>

				<button className="border-darkest border px-8 py-4 text-base font-medium  hover:cursor-download hover:bg-darkest group">
					<a
						href={href}
						download
						className="group-hover:cursor-download group-hover:bg-darkest group-hover:text-white"
					>
						Project Package
					</a>
				</button>
			</div>
			{/* 右侧 */}
			{/* TODO: 会议名称 论文索引修改*/}
			<div className="flex-1 space-y-8">
				{children}
				<div className="w-full h-px bg-darkest"></div>
				{/* TODO:*/}
				<div className="text-base font-medium">
					Grants <span> {grants}</span>
				</div>
			</div>
		</div>
	);
}
// 页面右上角：项目相关会议，简要信息的展示
function Conference({ conference_name, concise_info }) {
	return (
		<div className="single_conference_ref space-y-2">
			<h1 className="text-base font-medium">{conference_name}</h1>
			<p className="text-tiny font-normal">{concise_info}</p>
		</div>
	);
}

function ProjectExample({
	project_number,
	project_title1,
	project_title2,
	project_desc,
	project_href,
	p1,
	p2,
	p3,
	hover_style,
	...props
}) {
	let title_classname =
		"transition duration-300 ease-out hover:border-b-[2px] hover:border-bg-darkest" +
		" " +
		hover_style;
	return (
		<div className="space-y-12" {...props}>
			{/* 正文 */}
			<div className="px-12 lg:px-24  space-y-4 leading-normal">
				<p className="text-center">{project_number}</p>
				<h1 className="text-center relative leading-loose">
					<a href={project_href} target="_blank" rel= "noreferrer" className={title_classname}>
						{project_title1}
						<br></br>
						{project_title2}
					</a>
				</h1>

				<p className="">{project_desc}</p>
			</div>
			{/* 图片 */}
			<div className="grid grid-cols-2 gap-8">
				<div className="col-span-2">
					<img src={p1} alt="" className="w-full" />
				</div>
				<div className="col-span-2 lg:col-span-1">
					<img src={p2} alt="" className="w-full" />
				</div>
				<div className="col-span-2 lg:col-span-1">
					<img src={p3} alt="" className="w-full" />
				</div>
			</div>
		</div>
	);
}

// 项目下方补充内容函数
function SupplementContent({
	participants,
	acknowledgement,
	children,
	...props
}) {
	return (
		<div
			className="projects_frame_style pt-24 grid grid-cols-2 gap-12 pb-60"
			{...props}
		>
			{/* 主要研究人员 */}
			<div className="col-span-2 order-1 lg:col-span-1">
				<h1 className="">主要研究成员：</h1>
				{/* TODO: 修改主要成员信息*/}
				<p className="">{participants}</p>
			</div>
			{/* 鸣谢 */}
			<div className="order-3 col-span-2 lg:col-span-1 lg:order-2 ">
				<h1>Acknowledgement:</h1>
				<p>{acknowledgement}</p>
			</div>
			{/* 已发表论文 */}
			<div className="order-2 lg:order-3 col-span-2 leading-loose space-y-4">
				<h1 className="">已发表论文：</h1>
				<ul className="list-disc pl-4 text-tiny font-light space-y-4">
					{children}
				</ul>
			</div>
		</div>
	);
}

function Publication({ href, publication, ...props }) {
	return (
		<li className="leading-relaxed" {...props}>
			<a
				href={href}
				target="_blank"
				rel= "noreferrer"
				className="hover:underline hover:cursor-pointer"
			>
				{publication}
			</a>
		</li>
	);
}
