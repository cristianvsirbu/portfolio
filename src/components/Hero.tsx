const Hero = () => {
	return (
		<section className="h-[100vh] w-full flex flex-col items-center justify-center xl:space-y-12">
			<div className="w-[15rem] xl:w-[20rem] h-[15rem] xl:h-[20rem] bg-gradient-to-b from-yellow-300 to-green-300 rounded-full flex items-center justify-center">
				<img
					src="/profile.png"
					alt="Profile Picture"
					className="w-[90%]"
				/>
			</div>
			<div className="text-center text-white mt-6">
				<p className="font-bold text-4xl xl:text-6xl">
					Hi, I'm <span className="my_name text-[3rem] xl:text-[5rem]">Cristian</span>.
					<br />A Web Developer.
				</p>
			</div>
			<svg
				id="hero_vector"
				className="w-[90%] md:w-[50%] lg:w-[40%]"
				width="728"
				height="141"
				viewBox="0 0 728 141"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M2.30859 70.8467C10.6793 44.5799 33.8934 33.5597 61.2302 32.602C86.7651 31.7075 116.635 39.4197 140.518 47.6822C259.358 88.796 133.856 176.383 141.14 89.5026C142.861 68.9672 154.391 54.052 167.569 39.1316C187.443 16.6297 208.079 13.2477 237.373 11.1477C288.687 7.4692 326.389 23.192 353.506 73.3341C380.738 123.686 318.025 121.403 318.527 87.326C318.922 60.4347 351.411 15.917 379.158 7.57198C403.982 0.106048 447.869 -0.83817 472.516 10.8368C495.63 21.7859 512.266 49.0283 524.674 70.5357C532.372 83.8779 535.686 105.211 525.996 118.652C504.238 148.833 460.582 145.904 462.644 105.36C463.417 90.1426 474.646 73.4855 484.409 62.296C495.089 50.0552 505.076 39.7933 521.41 29.4927C590.081 -13.8128 700.342 35.7538 725.692 68.0483"
					stroke="url(#paint0_linear_1065_125)"
					stroke-width="3"
					stroke-linecap="round"
				/>
				<defs>
					<linearGradient
						id="paint0_linear_1065_125"
						x1="404.5"
						y1="2"
						x2="404.5"
						y2="139"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#FFE597" />
						<stop offset="1" stopColor="#AAFF82" />
					</linearGradient>
				</defs>
			</svg>
		</section>
	);
};

export default Hero;
