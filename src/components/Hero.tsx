const Hero = () => {
	return (
		<div className="flex flex-col items-center justify-center space-y-10">
			<div className="w-[25rem] h-[25rem] bg-slate-400 rounded-full flex items-center justify-center">
				<img
					src="/profile.png"
					alt="Profile Picture"
					className="w-[90%] h-[90%]"
				/>
			</div>
			<div className="w-full h-full font-bold text-7xl text-center text-white">
				<p className="">
					Hi, I'm <span className="my_name">Cristian</span>. <br /> A Web
					Developer.
				</p>
			</div>
			<img src="/public/hero-vector.svg" alt="Hero Vector" className="" />
		</div>
	);
};

export default Hero;
