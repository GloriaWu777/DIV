import React from "react";
import Logoimg from "../assets/images/lab_logo.svg";
import "../index.css";

const Footer = () => {
	// TODO: 这里改成任导的邮箱地址
	const sendMail = () => {
		console.log("contact us");
		var link =
			"mailto:13261651577@163.com" +
			"?cc=3120211887@bit.edu.cn" +
			"&subject=" +
			encodeURIComponent("我想要联系该实验室的负责人，寻求合作") +
			"&body=" +
			encodeURIComponent(document.getElementById("lab_name").value);
		window.location.href = link;
	};
	return (
		<section>
			<div className="bg-darkest text-white footer_frame_style">
				<div className="grid md:grid-flow-col grid-flow-row space-y-12 md:space-y-0">
					<div className="flex flex-col lg:flex-row">
						<div className="flex space-x-4">
							<div className="w-10 ">
								<img src={Logoimg} alt="" />
							</div>
							<div className="">
								<h1 id="lab_name" className="text-xxl font-normal">
								智能与健康设计研究组
								</h1>
								<p className="font-normal text-[18px] text-darker pt-2">
								Lab of Design Intelligence for Vitality 
								</p>
							</div>
						</div>
						<div className="pt-16 pl-14 md:pl-8 text-base font-normal leading-loose">
							<p>电话：+86 12345678901</p>
							<p>地址：北京理工大学良乡校区</p>
						</div>
					</div>
					<div className="text-right flex flex-col items-start space-y-8 pl-14 md:items-end md:pl-0 justify-between">
						<button
							onClick={sendMail}
							className="border w-auto px-8 py-2 text-lg transition duration-300 ease-in-out hover:bg-white hover:text-darkest"
						>
							联系我们
						</button>
						<div className="font-normal text-base text-darker">
							© 2020 HXD Lab
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Footer;
