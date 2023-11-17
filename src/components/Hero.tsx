const Hero = () => {
	return (
		<div className="h-[100vh] flex flex-col items-center justify-center space-y-12">
			<div className="w-[25rem] h-[25rem] bg-[#cca2f1bb] rounded-full flex items-center justify-center">
				<img
					src="/profile.png"
					alt="Profile Picture"
					className="w-[90%] h-[90%]"
				/>
			</div>
			<div className="text-7xl text-center text-white">
				<p className="">
					Hi, I'm <span className="my_name">Cristian</span>.
					<br />A Web Developer.
				</p>
			</div>
			<svg
				id="hero_vector"
				width="728"
				height="141"
				viewBox="0 0 728 141"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M2.30859 70.8467C10.6793 44.5799 33.8934 33.5597 61.2302 32.602C86.7651 31.7075 116.635 39.4197 140.518 47.6822C259.358 88.796 133.856 176.383 141.14 89.5026C142.861 68.9672 154.391 54.052 167.569 39.1316C187.443 16.6297 208.079 13.2477 237.373 11.1477C288.687 7.4692 326.389 23.192 353.506 73.3341C380.738 123.686 318.025 121.403 318.527 87.326C318.922 60.4347 351.411 15.917 379.158 7.57198C403.982 0.106048 447.869 -0.83817 472.516 10.8368C495.63 21.7859 512.266 49.0283 524.674 70.5357C532.372 83.8779 535.686 105.211 525.996 118.652C504.238 148.833 460.582 145.904 462.644 105.36C463.417 90.1426 474.646 73.4855 484.409 62.296C495.089 50.0552 505.076 39.7933 521.41 29.4927C590.081 -13.8128 700.342 35.7538 725.692 68.0483"
					stroke="url(#paint0_linear_1035_162)"
					strokeWidth="3"
					strokeLinecap="round"
				/>
				<defs>
					<linearGradient
						id="paint0_linear_1035_162"
						x1="639.802"
						y1="70.4386"
						x2="2.30859"
						y2="70.4386"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#DBA6F4" />
						<stop offset="1" stopColor="#A981FE" />
					</linearGradient>
				</defs>
			</svg>
		</div>
	);
};

export default Hero;
