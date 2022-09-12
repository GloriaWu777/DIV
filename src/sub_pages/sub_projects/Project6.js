import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Rarrow from "../../assets/images/right_arrow.svg";

import Pic11 from "../../assets/images/project_healthgaming/mainpic1-1.png";
import Pic12 from "../../assets/images/project_healthgaming/subpic1-2.png";

export default function Project6() {
	useEffect(()=>{
		window.scrollTo(0,0)
	})
	return (
		<section>
			<div className="h-[300px] bg-no-repeat bg-cover w-[100%] bg-top bg-project6_banner">
				<div className="bg-darkest/30 h-full">
					<div className="bread_wrap">
						<Link to="/homepage" className="border-b leading-none">
							HXD
						</Link>
						<img src={Rarrow} alt="" className="w-[9px]" />
						<Link to="/projects" className="border-b leading-none">
							项目
						</Link>
						<img src={Rarrow} alt="" className="w-[9px]" />
						<Link to="/projects/6666">健康知识科普游戏设计研究</Link>
					</div>
				</div>
			</div>

			{/* 项目总介绍 */}
			<Description
				p_name="健康知识科普游戏设计研究"
				p_duration="2019-2022"
				p_abstract="《抗疫战线》是一款致力于分享新冠肺炎相关知识的科普游戏，项目特色在于将游戏玩法与科普内容相融合，兼具游戏性与教育性。探索游戏在提高玩家记忆效率和改变个人行为方面的巨大潜力"
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

			{/* 项目总container */}
			<div className="projects_frame_style space-y-24 flex flex-col">
				{/* 第一个项目 */}
				<ProjectExample
					project_number="- project 1 -"
					project_title="抗议战线"
				
				>
					<p>
          游戏被置于架空世界之中，游戏所在的世界各地都遭到“新型冠状病毒生物“的入侵。玩家将作为反抗病毒生物入侵的指挥官，统筹协调各方人员与防疫设施，保护群众免受感染.                                                                                                                                                                          
          《抗疫战线》以塔防作为核心玩法，并在其中融入了卡牌元素。玩家需要合理分配有限的资源，搭建各类设施，动员才能各异的角色抵挡病毒生物，并借助千变万化的卡牌一举扭转战局。希望能为玩家塑造一种兼具策略性与惊喜感的游戏体验。
						{/* 图片 */}
						<div className="-mx-12 lg:-mx-24 grid grid-cols-2 gap-8 py-8 ">
							<div className="col-span-2">
								<img src={Pic11} alt="" className="w-full" />
							</div>
						</div>

            防御塔主要分为四大类，对应三种常见的消毒方法和医院。常见的消毒知识被整合到防御塔的设计中。它不是通过文字灌输，而是通过多感官互动来加深玩家的记忆；卡牌元素不仅可以提高游戏的可玩性，还可以补充科普内容。卡牌分为增益卡、装备卡、消耗卡三类，玩家可以通过不同的背景颜色轻松区分不同类型的牌。卡牌出现在游戏的特定阶段。卡牌元素对游戏可玩性的提高体现在两个方面：首先，获取卡片的随机性创造了一种未知感和兴奋感，类似于抽奖；其次，这种随机性为玩家留下了预想的空间。玩家会期望一张牌出现在一个事件中，并试图通过持续的尝试来实现它。实现后，会做出下一个期望，这为玩家重复体验游戏提供了动机，从而通过多次的重复增强游戏的科普效果。                                                                                                                                                                                                                                                                       新冠疫情防控仍然是不可忽视的问题。为积极响应国家疫情防控相关政策，充分发挥游戏在提高玩家记忆效率和改变个人行为方面的巨大潜力，本项目基于对现有防疫科普类产品与用户痛点的分析，提出了一种将科普游戏的教育性与游戏性融合的新模式。旨在满足大众休闲娱乐需求的同时，向大众科普防疫知识，弘扬防疫抗疫精神，探讨科普游戏在社会与市场层面的潜在价值，为疫情防控贡献一份力量。
            <div className="-mx-12 lg:-mx-24 grid grid-cols-2 gap-8 py-8 ">
              <div className="col-span-2">
								<img src={Pic12} alt="" className="w-full" />
							</div>
              </div>
					</p>
				</ProjectExample>
				{/* 全部项目结束后的分割线 */}
				<div className="split_line bg-split h-px w-[70%] self-center  text-center"></div>
			</div>
			{/* 项目下方补充信息 */}
			<SupplementContent
				participants="李天yi"
				acknowledgement="这是关于项目的致谢：MAIN IDEA MAIN IDEA MAIN IDEA MAIN IDEAMAIN IDEA MAIN IDEAMAIN IDEA MAIN IDEAMAIN IDEA MAIN IDEAMAIN IDEA MAIN IDEAMAIN IDEA MAIN IDEAMAIN IDEA MAIN IDEAMAIN IDEA MAIN IDEAMAIN
      IDEA MAIN IDEAMAIN IDEA MAIN IDEAMAIN IDEA MAIN IDEAMAIN IDEA MAIN
      IDEAMAIN IDEA MAIN IDEA。"
			>
				<Publication
					href=""
					publication="this is a publication from litianyi xxx xxxxxxxx"
				></Publication>
			</SupplementContent>
		</section>
	);
}

// -----------------------------------------  定义部分  ------------------------------------------------
// 白底上方总描述部分，会议自自定义部分
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

// 页面中部项目具体内容（只有一张项目图片的情况）
function ProjectExample({ project_number, project_title, children, ...props }) {
	return (
		// example 1
		<div className="space-y-12 " {...props}>
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
        rel= "noreferrer"
				className="hover:underline hover:cursor-pointer"
			>
				{publication}
			</a>
		</li>
	);
}
