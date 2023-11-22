const About = () => {
	return (
		<section className="w-full h-[100vh]">
			<div className="flex justify-center pt-20">
				<h1 className="heading text-white text-center pt-20">About Me</h1>
        <img src="/big-star.svg" alt="Big Star"/>
        <img src="/small-star.svg" alt="Small Star" className="pb-14"/>
			</div>

			<div className="pt-20 flex justify-center">
				<p className="text-white text-center max-w-[60%]">
					I am a frontend developer with a particular interest in making things
					that make a difference. I try to keep up with security and best
					practices, and am always looking for new things to learn. 
				</p>
			</div>
		</section>
	);
};

export default About;
