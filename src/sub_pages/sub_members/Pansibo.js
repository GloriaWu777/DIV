import React from 'react'
import { Link } from "react-router-dom";
import Rarrow from "../../assets/images/right_arrow.svg";
import {useEffect} from 'react'

import Pic from "../../assets/images/members/pansibo2.png";

export default function Pansibo() {
    useEffect(()=>{
        window.scrollTo(0,0)
    })
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
						<Link to="/members/pansibo">Sibo Pan</Link>
					</div>
				</div>
				{/* 头像加简介部分 */}
				<div className="banner_frame_style">
					<div className="banner_pic">
						<img src={Pic} alt="" />
					</div>
					<div className="banner_text">
						<h1>
							潘思博 <span className="w-px inline-block"></span> Sibo Pan
						</h1>

						<h2>中国美术学院讲师，埃因霍温理工大学博士候选人

</h2>
						<h2> 设计 | 人机交互研究</h2>
					</div>
{/* TODO: 修改信息 */}
					<div className="banner_text self_info text-darkest">
						<h2>
							个人网站：{" "}
							<a href="https://www.bin-yu.com">https://www.bin-yu.com</a>{" "}
						</h2>
						<h2>
							LinkedIn：{" "}
							<a href="https://www.linkedin.cn/incareer/in/bin-yu-85935450/">
								https://www.linkedin.cn/incareer/in/bin-yu-85935450/
							</a>
						</h2>
						<h2>
							Researchgate：
							<a href="https://www.researchgate.net/profile/Bin-Yu-14">
								{" "}
								https://www.researchgate.net/profile/Bin-Yu-14
							</a>{" "}
						</h2>
						<h2>邮箱： pansibo@xxx.com</h2>
					</div>
				</div>

				<div className="px-12 md:px-24 pt-[75vw] sm:pt-[30vw] md:pt-[25vw] lg:pt-[300px] bg-white pb-48">
					<h3>学术履历概述：</h3>
					<p>
						Hi, there ! My name is Sibo Pan.
						<br></br>
						<br></br>I was born in China, and moved to Eindhoven in 2013.
						<br></br>
						<br></br>I finished Ph.D on HCI Research for Biofeedback. In 2010,
						Bin Yu received the double bachelor degree in Biomedical Engineering
						and Industrial Design at Chongqing University in China. Then, he
						obtained the Master degree on Mobile Healthcare Design at
						Northeastern University, Shenyang, in 2012. After graduation, he
						worked as a research assistant in the Institute of Biomedical and
						Health Engineering, SIAT, Chinese Academy of Sciences, Shenzhen. In
						2018, he obtained his Ph.D. on “Designing Everyday Biofeedback for
						Stress Management” at TU/e.
						<br></br>
						<br></br>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Necessitatibus molestiae consectetur reiciendis obcaecati,
						laboriosam aliquam culpa est, modi quas vel dolorum. Iure fuga
						adipisci veritatis nihil odio, quod recusandae possimus.

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus modi, voluptates porro eos placeat dolores aspernatur cupiditate, dolor ratione ab qui reiciendis, earum perspiciatis expedita. Fugiat dolores soluta numquam aut quia, dolor provident officia accusantium repellat quo minus ab odit.

                        <br></br><br></br>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis recusandae in ipsam ratione quibusdam odio adipisci reiciendis suscipit, deleniti eaque sed rerum veritatis quo id sunt tempore natus itaque, ex delectus. Vitae sapiente unde expedita, culpa itaque in est quisquam? Eligendi commodi autem ratione impedit animi illo soluta atque? Corporis suscipit enim eligendi quis magnam. At quo mollitia hic rerum soluta voluptatibus aspernatur omnis pariatur architecto, adipisci dolore quibusdam rem molestiae minima, vero cum iure tempora, nihil natus earum? Ut, inventore distinctio eaque quasi tempore, commodi delectus cum accusamus quas provident praesentium! Officia blanditiis ducimus ratione voluptatem totam enim unde?
					</p>
				</div>
			</div>
		</section>
  )
}
