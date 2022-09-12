import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Rarrow from "../../assets/images/right_arrow.svg";

import Pic from "../../assets/images/members/renxipei2.png";

export default function Renxipei() {
	useEffect(() => {
		window.scrollTo(0, 0);
	});

	return (
		<section className="member_section">
			<div className="bg-darkest relative text-darkest ">
				{/* 面包屑部分 */}
				<div className="h-[300px]">
					<div className=" bread_wrap ">
						<Link to="/homepage" className="border-b leading-none">
							HXD
						</Link>
						<img src={Rarrow} alt="" className="w-[9px]" />
						<Link to="/members" className="border-b leading-none">
							团队
						</Link>
						<img src={Rarrow} alt="" className="w-[9px]" />
						<Link to="/members/renxipei">Xipei Ren</Link>
					</div>
				</div>
				{/* 头像加简介部分 */}
				<div className="banner_frame_style">
					<div className="banner_pic">
						<img src={Pic} alt="" />
					</div>
					<div className="banner_text">
						<h1>
							任熹培 <span className="w-px inline-block"></span> Xipei Ren
						</h1>
						<h2>副教授、博士生导师 / Assoc. Prof., PhD Promoter</h2>
						<h2>
							国际设计中心副主任 / Vice Director of the BIT International Design
							Center
						</h2>
						<h2>智能交互设计 | 数字健康产品 | 医疗服务体验</h2>
					</div>

					<div className="banner_text self_info text-darkest">
						<h2>
							个人网站：{" "}
							<a href="https://www.xipeiren.com">https://www.xipeiren.com</a>{" "}
						</h2>
						<h2>
							LinkedIn：{" "}
							<a href="https://www.xipeiren.com">https://www.xipeiren.com</a>
						</h2>
						<h2>
							Researchgate：<a href=""> https://www.xipeiren.com</a>{" "}
						</h2>
						<h2>邮箱： x.ren@bit.edu.cn</h2>
					</div>
				</div>

				<div className="px-12 md:px-24 pt-[75vw] sm:pt-[30vw] md:pt-[25vw] lg:pt-[300px] bg-white pb-48">
					<h3>学术履历概述：</h3>
					<p>
						Hello, I am Xipei. As a design researcher with a background in
						industrial design, I am interested in exploring new forms of
						intelligent product service systems in relation to health promotion,
						human vitality, and healthcare provision. 
                        <br></br><br></br>
                        Currently, I am associate
						professor and PhD promoter at Beijing Institute of Technology (BIT).
						Besides, I also work as the principle investigator of the Healthful
						Experience Design (HxD) research group, the vice director of the
						BIT-International Design Center, as well as the vice director of the
						interaction design and social innovation key lab at BIT.
						Additionally, I am appointed as a guest researcher and a PhD advisor
						at Eindhoven University of Technology (TU/e). Previously, I was a
						postdoc researcher of Vitality Data Centre at TU/e. Apart from my
						postdoctoral fellowship, I also worked as UX researcher in the AI
						and Data Science team at HumanTotalCare, the largest occulational
						health service provider in the Netherlands.
                        <br></br><br></br>
                        I received a Ph.D.
						degree also from the Industrial Design department at TU/e, under the
						supervison of Dr.Yuan Lu and Prof.dr.Aarnout Brombacher. I regularly
						publish scientific papers in international journals and conferences
						in the field of human-computer interaction or digital health, and
						presents research projects in design exhibitions globally. I coach
						students at BIT and TU/e and many more design institutions on design
						and research projects at batchelor, master, and Ph.D. levels. I
						sometimes travel to universities and research institutions in China
						and Europe to give lectures.
                        <br></br><br></br>
                        My research often conducts in
						collaborative settings with partners from academia and industry. I
						take qualitative inquiry and participatory design to understand
						users and contexts and derive design requirements for health
						technology; I follow iterative design processes to develop concepts,
						mockups, and functional prototypes; I use quantitative and
						qualitative evaluations to study the meaning of novel designs to
						people's life and measure their impacts on health, well-being, and
						beyond.
					</p>
				</div>
			</div>
		</section>
	);
}
