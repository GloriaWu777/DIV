import React from "react";
import { useEffect } from 'react'
import { Link } from "react-router-dom";
import Rarrow from "../../assets/images/right_arrow.svg";

import Pic11 from "../../assets/images/project_medicare/1-1.jpg";
// 项目三的项目包
import Pdf_3 from "./Project_3_Package.zip";

export default function Project3() {
	useEffect(()=>{
		window.scrollTo(0,0)
	})
	return (
		<section>
			<div className="h-[300px] bg-no-repeat bg-cover w-[100%] bg-top bg-project3_banner">
				<div className="bg-darkest/30 h-full">
					<div className=" bread_wrap ">
						<Link to="/homepage" className="border-b leading-none">
							HXD
						</Link>
						<img src={Rarrow} alt="" className="w-[9px]" />
						<Link to="/projects" className="border-b leading-none">
							项目
						</Link>
						<img src={Rarrow} alt="" className="w-[9px]" />
						<Link to="/projects/3333">数字医疗中的用户体验研究</Link>
					</div>
				</div>
			</div>

			{/* 项目总介绍 */}
      <Description
      p_name="数字医疗中用户体验研究"
      p_duration="2019-2022"
      p_abstract="项目概述：该项目设计了一组基于日常聊天软件的嵌入式个人健康管理远程医疗助手，系统由对话式小助手和问卷式小助手两部分组成，小助手可以为用户提供集健康状况监测、当地疫情动态信息反馈、健康问题管理为一体的健康管理服务。"
      href={Pdf_3}
      grants="某赞助xxx"
      >
        <Conference
            conference_name="某会议名称"
            concise_info="Xiaoyi Wu, Xinyueliu, Xipei Ren. 某个会议, 2021,
            迪拜.好兄弟出版社, 2021(第五版)."
        ></Conference>
        <Conference
            conference_name="某会议名称"
            concise_info="Xiaoyi Wu, Xinyueliu, Xipei Ren. 某个会议, 2021,
            迪拜.好兄弟出版社, 2021(第五版)."
        ></Conference>
      </Description>
	

			{/* 项目example */}
			{/* 项目总container */}
			<div className="projects_frame_style space-y-24 flex flex-col">
				<ProjectExample
					project_number="- project 1 -"
					project_title="数字医疗中的用户体验研究"
				>
					<p>
						在疫情期间，传统的信息采集方式耗费大量人力、物力，例如打电话、上门询问等方式不仅给各地区防疫人员带来很大压力，也给被询问者带来很大精神压力，尤其是在疫情期间，更容易给被问询者带来紧张、沮丧等负面精神影响。此外，在疫情期间，由于不能很方便的出入医院等场所，居家的健康管理成为提升人们健康水平的重要方式。远程医疗也成为缓解当地医疗压力的重要手段，此外远程医疗也能让不同地区的人们享受更好的医疗服务。
						在该项目中，我们进行了一项探索性的研究，旨在设计一组基于日常聊天软件的嵌入式个人健康管理远程医疗助手，该系统由两部分服务组成。一部分是基于微信的集健康状况监测、当地疫情动态信息反馈、健康问题管理为一体的对话式健康管理小助手，另一部分的服务形式与第一部分类似，将对话部分转变成问卷部分。该项研究改进了当前的疫情信息收集方式、疫情动态信息反馈方式和居家健康管理方式。并为未来的基于日常聊天软件的嵌入式个人健康管理远程医疗助手提供了一些设计探索。
						对话式小助手提升了信息收集过程中的乐趣，缓解了使用者的压力，并且使用者也很愿意和一个像朋友一样的AI助手进行对话，并获得健康建议。问卷式小助手相比于对话式小助手可以更高效的收集使用者的相关健康信息。
						<div className="-mx-12 lg:-mx-24 py-8">
							<img src={Pic11} alt="" />
						</div>
						我们计划和更多职业医生和医院合作，进一步提升健康管理方法与健康建议的科学性。由于本次实验更加侧重在疫情背景下的健康管理，所以我们在功能的设置上更倾向于COVID-19相关健康问题的管理，但我们更希望这成为一项日常健康管理服务，在未来我们会加入更多健康管理服务，例如情绪管理、睡眠管理、运动管理等，希望能为使用者带来更加全面的健康管理体验。
					</p>
				</ProjectExample>

				<div className="split_line bg-split h-px w-[70%] self-center  text-center"></div>
			</div>

			{/* 内容下方补充文字 */}
			<SupplementContent
				participants="邹仁耀，任熹培"
				acknowledgement="这是关于项目的致谢：MAIN IDEA MAIN IDEA MAIN IDEA MAIN IDEAMAIN IDEA
      MAIN IDEAMAIN IDEA MAIN IDEAMAIN IDEA MAIN IDEAMAIN IDEA MAIN
      IDEAMAIN IDEA MAIN IDEAMAIN IDEA MAIN IDEAMAIN IDEA MAIN IDEAMAIN
      IDEA MAIN IDEAMAIN IDEA MAIN IDEAMAIN IDEA MAIN IDEAMAIN IDEA MAIN
      IDEAMAIN IDEA MAIN IDEA。"
			>
				<Publication
					href=""
					publication="邹仁耀, 任熹培. 远程医疗类信息产品设计的研究现状及发展趋势综述.包装工程."
				></Publication>
			</SupplementContent>
		</section>
	);
}

// -------------------------- 以下是函数定义部分 --------------------------------
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
				{/* 会议部分简介 children */}
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

// 页面中部项目具体内容（多张照片插入在文本中间的情况，直接将文本模块设为children，在html标签中灵活插入需要的图片）
function ProjectExample({ project_number, project_title, children }) {
	return (
		// example 1
		<div className="space-y-12">
			{/* 正文 */}
			<div className="px-12 lg:px-24 space-y-4 leading-normal">
				<p className="text-center">{project_number}</p>
				<h1 className="text-center leading-loose">
					{/*  还没有发表论文，添加”暂无fa文“icon */}
					<a className="transition duration-300 ease-out hover:cursor-nolink hover:border-b-[2px] hover:border-bg-darkest">
						{project_title}
					</a>
				</h1>

				{children}
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
				className="hover:underline hover:cursor-pointer"
			>
				{publication}
			</a>
		</li>
	);
}
