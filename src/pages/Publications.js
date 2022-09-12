import React from "react";
import { Link } from "react-router-dom";
import { useEffect, Children} from "react";
import Rarrow from "../assets/images/right_arrow.svg";

import "../css/publications.css";

// TODO: 导入pdf文件，还差12个。。。
import pdf1 from "../assets/pdfs/The_Effects_of_a_Virtual_Reality_Rehabilitation_Task_on_Elderly_Subjects_An_Experimental_Study_Using_Multimodal_Data.pdf";
import pdf2 from "../assets/pdfs/sustainability-14-04006-v3.pdf";
import pdf3 from "../assets/pdfs/3491101.3519886.pdf";

const Publications = () => {

	useEffect(() => {
		window.scrollTo(0, 0);
		return () => {
			window.scrollTo(0, 0);
		};
	}, []);

	return (
		<section>
			<div className="h-[300px] bg-no-repeat bg-cover w-[100%] bg-top bg-publications_banner">
				<div className="bg-darkest/30 h-full">
					<div className=" bread_wrap ">
						<Link to="/homepage" className="border-b leading-none">
							DIV
						</Link>
						<img src={Rarrow} alt="" className="w-[9px]" />
						<Link to="/publications" className="leading-none">
							论文
						</Link>
					</div>
				</div>
			</div>

			<div className="publication_frame_style ">
				{/* 2022 */}
				<div className="single_year_col">
					<div className="year_index">
						2022 <span className="text-xl">:</span>
					</div>
					{/* 2022-1 */}
					<Publication
						href="https://ieeexplore.ieee.org/document/9797783"
						note="IEEE Transactions on Neural Systems and Rehabilitation Engineering.（SCI）"
						title="The Effects of a Virtual Reality Rehabilitation Task on
                        Elderly Subjects: An Experimental Study Using Multimodal Data."
						authors="Jing Qu, Lizhen Cui, Wei Guo, Xipei Ren, Lingguo Bu."
						highlights="Highlights: jfcdsnvjdfjfiwofnhvjdksimnvidkls"
						pdf={pdf1}
					></Publication>

					{/* 2022-2 */}
					<Publication
						href="https://www.mdpi.com/2071-1050/14/7/4006"
						note="Sustainability. (SCI/SSCI)"
						title="Effects of Social Robotics in Promoting Physical Activity in
                        the Shared Workspace."
						authors="Xipei Ren, Zhifan Guo, Aobo Huang, Yuying Li, Xinyi Xu, Xiaoyu
                        Zhang."
						highlights="Highlights: hfiudfndjsfhndjsiufhndes"
						pdf={pdf2}
					></Publication>

					{/* 2022-3 */}
					<Publication
						href="https://dl.acm.org/doi/10.1145/3491101.3519886"
						note="CHI 2022 Interactivity. (CCF-A, EI)"
						title="Hicclip: A Smart Sealing Rack Using Interactive Sounds to
									Intervene Snack Addictions."
						authors="Xinyue Liu, Xipei Ren, Xiaoqing Sun."
						highlights="Highlights: hnfjdksbnvijdhnfejrwknfgv bdjsvg"
						pdf={pdf3}
					></Publication>

					{/* TODO: 2022-4 */}
					<Publication
						href=""
						note="NordiCHI 2022. (EI)"
						title="Record or Recall? Exploring Self-Reported Dietary Assessment
                        Methods for Office Workers during the COVID-19 Work-from-Home
                        Period."
						authors="Sibo Pan, Elske Brouwer-Brolsma, Xipei Ren, Steven Vos, Aarnout
                        Brombacher, Desiree Lucassen."
						highlights="Highlights: ncmidksfjesfndsjfhndksngvdjksgv"
						pdf={pdf3}
					></Publication>

					{/* TODO: 2022-5 */}
					<Publication
						href=""
						note="ICEC 2022. (EI)"
						title="SleepHill: Designing an Incrementally Bouncing Pillow as a
                        Comfortable Wake-Up Approach."
						authors="Wenshu Xun, Pengsong Zhang, Zixuan Liu, Yufei Meng, Xipei Ren,
                        Yaqi Zheng, Renyao Zou."
						highlights="Highlights: jidksfhndfnhedjsfnvedksfgvredslgmnfvks"
						pdf={pdf3}
					></Publication>

					{/* TODO: 2022-6 */}
					<Publication
						href=""
						note="HCII 2022. (EI)"
						title="Persuasive Design for Healthy Eating: A Scoping Review."
						authors="Xinyue Liu, Xipei Ren, Sibo Pan."
						highlights="Highlights: dgvndfiogjerktfgmnveiod;rjvge"
						pdf={pdf3}
					></Publication>

					{/* TODO:  2022-7 */}
					<Publication
						href=""
						note="包装工程.(中文核心)"
						title="远程医疗类信息产品设计的研究现状及发展趋势综述."
						authors="邹仁耀, 任熹培."
						highlights="Highlights: dgvndfiogjerktfgmnveiod;rjvge"
						pdf={pdf3}
					></Publication>
				</div>

				{/* 2021 */}
				<div className="single_year_col">
					<div className="year_index">
						2021 <span className="text-xl">:</span>
					</div>
					{/* TODO:  2021-1 */}
					<Publication
						href="/"
						note="International Journal of Environmental Research and Public Health. (SCI/SSCI)"
						title="Why Exercise at Work: Development of the Office Exercise Behavior Determinants Scale."
						authors="Tianmei Zhang, Jaap Ham, Xipei Ren."
						highlights="lorem lorem lorem lorem"
						pdf={pdf1}
					></Publication>
					{/* TODO:  2021-2 */}
					<Publication
						href="/"
						note="International Journal of Environmental Research and Public Health. (SCI/SSCI)"
						title="Why Exercise at Work: Development of the Office Exercise Behavior Determinants Scale."
						authors="Desiree Lucassen, Marlou Lasschuijt, Guido Camps, Ellen Van Loo, Arnout Fischer, Roelof de Vries, Juliet Haarman, Monique Simons, Emely de Vet, Marina Bos-de Vos, Sibo Pan, Xipei Ren, Kees de Graaf, Yuan Lu, Edith Feskens, Elske Brouwer-Brolsma. "
						highlights="lorem lorem lorem lorem"
						pdf={pdf1}
					></Publication>
					{/* TODO:  2021-3 */}
					<Publication
						href="/"
						note="PervasiveHealth 2021. (EI)"
						title=" EAT@WORK: Designing an mHealth App for Promoting Healthy Eating Routines among Dutch Office Workers."
						authors="Sibo Pan, Xipei Ren, Aarnout Brombacher, Steven Vos."
						highlights="lorem lorem lorem lorem"
						pdf={pdf1}
					></Publication>

					{/* TODO:  2021-4 */}
					<Publication
						href="/"
						note="Chinese CHI 2021. (EI)
                        "
						title=" Digital Tools to Promote Healthy Eating for Working-Age Individuals: A Scoping Review."
						authors="Sibo Pan, Xipei Ren, Steven Vos, Aarnout Brombacher. "
						highlights="lorem lorem lorem lorem"
						pdf={pdf1}
					></Publication>

					{/* TODO:  2021-5 */}
					<Publication
						href="/"
						note="Chinese CHI 2021. (EI)
                        "
						title=" Co-Drink: Exploring Social Support Water Bottles to Increase the Hydration Status of Individuals with Intimate Relationship."
						authors="Wenting Cui, Yuanyu Li, Yurui Ma, Liyuan Zhang, Xipei Ren. "
						highlights="lorem lorem lorem lorem"
						pdf={pdf1}
					></Publication>

                    {/* TODO:  2021-6 */}
					<Publication
						href="/"
						note="Chinese CHI 2021. (EI)
                        "
						title=" LUNOST: Connected Tangible Messengers for Enhancing Off-Site Parent-Teenager Relationships."
						authors="Zhao Liu, Ernuo Cheng, Xinyuan Zhang, Xipei Ren. "
						highlights="lorem lorem lorem lorem"
						pdf={pdf1}
					></Publication>

                    {/* TODO:  2021-7 */}
					<Publication
						href="/"
						note="ICBBT 2021. (EI)
                        "
						title=" Steadi: Proactively Preventing Burnouts among Office Workers through App-Based Workflow Management Services."
						authors="Xipei Ren, Salman A. Sherif, Benno Thijs, Yuan Lu. "
						highlights="lorem lorem lorem lorem"
						pdf={pdf1}
					></Publication>

                    {/* TODO:  2021-8 */}
					<Publication
						href="/"
						note="HCII 2022.(EI)
                        "
						title="Design Opportunities of Digital Tools for Promoting Healthy Eating Routines among Dutch Office Workers."
						authors="Sibo Pan, Xipei Ren, Aarnout Brombacher, Steven Vos. "
						highlights="lorem lorem lorem lorem"
						pdf={pdf1}
					></Publication>
				</div>
			</div>
		</section>
	);
};

export default Publications;

function Publication({
	href,
	note,
	title,
	authors,
	highlights,
	pdf,
	...props
}) {
	return (
		<div className="single_publication_row">
			<div className="note">{note}</div>

			<div className="publication_content">
				{/* 论文标题 */}
				<h1>
					<a href={href} target="_blank " className="hover:underline hover:cursor-link">
						{title}
					</a>
				</h1>
				{/* 论文作者 */}
				<h2>{authors}</h2>
				{/* TODO: 创新点/相关项目链接 */}
				<p>{highlights}</p>
			</div>

			<div className="btn">
				<a href={pdf} className="pdf_btn">
					VIEW PDF
				</a>
			</div>
		</div>
	);
}
