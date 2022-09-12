import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Rarrow from "../../assets/images/right_arrow.svg";

import Pic from "../../assets/images/members/wuxiaoyi2.png";
// TODO: 导入项目图片
import Picp1 from "../../assets/images/project_covid19/mainpic1-1.png";
import Picp2 from "../../assets/images/project_covid19/mainpic2-1.png";
import Picp3 from "../../assets/images/project_covid19/mainpic3-1.png";

export default function Wuxiaoyi() {
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
						<Link to="/members/wuxiaoyi">Xiaoyi Wu</Link>
					</div>
				</div>

				<div className="banner_frame_style">
					<div className="banner_pic">
						<img src={Pic} alt="" className="" />
					</div>
					<div className="banner_text">
						<h1>
							吴晓宜 <span className="w-px inline-block"></span> Xiaoyi Wu
						</h1>
						<h2>研一 Graduate Student</h2>
						<h2>Health Detection Design | Technology Probing | <br></br> Front-end/Hardware Development</h2>
						<h2>13261651577@163.com</h2>
					</div>
				</div>
			</div>

			{/*  白底部分 */}
			<div className="description_frame_style">
				{/* 中间 左边部分：个人简历 */}
				<div className="space-y-2">
					<h3>个人简历：</h3>
					<h4>
						<a
							href="https://gloriawu777.github.io/HXD-LAB/"
							className="underline"
						>
							https://gloriawu777.github.io/HXD-LAB/
						</a>
					</h4>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam corrupti officia, delectus magni eaque accusamus eius nesciunt voluptatem nulla.</p>
				</div>
				{/* 中间 右边部分：教育背景和论文发表 */}
				<div className="education_wrap">
					<div className="pt-12 lg:pt-0">
						<h3>教育背景：</h3>
						<div className="education_content_wrap">
							<h4>2021-2024</h4>
							<p className="col-span-2">北京理工大学 设计与艺术学院 工业设计</p>
							<p>研究生</p>

							<h4>2015-2019</h4>
							<p className="col-span-2">北京理工大学 计算机学院 物联网工程</p>
							<p>工学学士</p>

							
						</div>
					</div>
					<div className="split_line"></div>
					<div className="pt-4">
						<h3>论文发表：</h3>
						<ul className="list-disc pl-4 space-y-2">
							<li>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nisi expedita, commodi repellendus incidunt et!
								</p>
							</li>
							<li>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam laudantium velit officia inventore dolor minima, dolores similique consectetur.
								</p>
							</li>
						</ul>
					</div>
					<div className="split_line "></div>
				</div>
				{/* 下面部分 */}
				<div className="projects_wrap">
					<h3>参与项目：</h3>
					{/* 1 */}
					<div className="projects_content_wrap">
						<div className="single_project">
							<header className="">
								picker-box
							</header>
							<h5 className="underline">
								<a href="https://link.springer.com/chapter/10.1007/978-3-031-05431-0_20">
									Go To The Publication Site
								</a>
							</h5>
							<p>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae reiciendis odit omnis numquam neque tempora repellendus rem at? Numquam nostrum impedit at reiciendis debitis! Ut provident voluptatem nihil omnis porro eos odit natus dolorem a id, tempora explicabo. Necessitatibus, rerum! Dolorem sequi laboriosam, vero illo repellendus labore praesentium quidem soluta unde atque nesciunt. Tenetur eum consectetur quaerat maiores ipsa laboriosam odio ratione eos, odit libero est fugit laudantium inventore sint. Officiis odit ex odio cumque eius eligendi totam maxime voluptatum iusto, accusamus quasi labore velit enim dolores dignissimos itaque soluta repudiandae eaque ipsam explicabo veritatis mollitia iure? Et, labore sit!
							</p>
						</div>

						<div className="">
							<img src={Picp1} alt="" />
						</div>
						{/* 2 */}
						<div className="single_project">
							<header className="">
								covid-19 watch
							</header>
							<h5 className="underline">
								<a href="https://dl.acm.org/doi/10.1145/3491101.3519886">
									Go To The Publication Site
								</a>
							</h5>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus similique illo rerum tempora quisquam cum veniam rem quaerat natus dolores quis, possimus eos, qui dolorum molestiae ea quibusdam debitis nulla. Saepe accusamus quas laudantium, sapiente ullam voluptatum quo pariatur necessitatibus dignissimos sunt, laborum ipsa vero. Repellendus modi sint nam sequi perferendis ab iure possimus, ipsa nihil ad in rerum alias.
							</p>
						</div>
						<div className="">
							<img src={Picp2} alt="" />
						</div>
						{/* 3 */}
						<div className="single_project">
							<header>workshop

              </header>
							<h5 className="underline">
								<a href="/projects/2222/">Go To The Publication Site</a>
							</h5>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident optio esse animi ex deleniti officiis maxime, cumque voluptatem omnis veniam laborum dignissimos sequi corrupti ullam repudiandae, porro iure explicabo! Distinctio cumque inventore unde quae nostrum ipsum, nemo facere, minima optio culpa repellendus nesciunt minus est error iure. Consectetur accusantium neque ratione, perspiciatis ab blanditiis, recusandae quisquam necessitatibus cum qui error.
							</p>
						</div>
			
						<div className="">
							<img src={Picp3} alt="" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
