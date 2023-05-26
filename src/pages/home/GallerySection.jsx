import React from 'react';
import useTitle from '../../components/hooks/useTitle';
import Marquee from "react-fast-marquee";

const GallerySection = () => {
	return (
		<>
			<div className='w-[90%] mx-auto'>

				<h1 className='text-2xl font-bold text-center mt-10 mb-10'>Gallery Section</h1>

				<Marquee speed='100' pauseOnHover='boolean'>
					<section className="py-6 ">
						<div className="container flex flex-col justify-center p-4 mx-auto">
							<div className="grid grid-cols-2 gap-4 lg:grid-cols-4 sm:grid-cols-2">
								<img className="object-cover w-full rounded aspect-square" src="https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" />
								<img className="object-cover w-full rounded aspect-square" src="https://img.freepik.com/premium-photo/cute-pink-android-robot-field-tulips-generative-ai_81340-24114.jpg?w=740" />
								<img className="object-cover w-full rounded aspect-square" src="https://img.freepik.com/free-photo/robot-boy-walk-down-street_1340-27697.jpg?w=740&t=st=1684666319~exp=1684666919~hmac=c2a7ec12bee951e3d61d5908be72a9701022b5339866b242be95228688c7fb16" />
								<img className="object-cover w-full rounded aspect-square" src="https://img.freepik.com/free-photo/3d-rendering-biorobots-concept_23-2149524385.jpg?w=740&t=st=1684666509~exp=1684667109~hmac=976e4b77b18d76dea373ff91c1f4885fa9fc304ac5082bd50f6816939412848a" />
							</div>
						</div>
					</section>

				</Marquee>


			</div>


		</>


	)
};

export default GallerySection;