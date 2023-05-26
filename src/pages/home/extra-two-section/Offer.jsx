import React from 'react';

const Offer = () => {
    return (
        <>
            <div className="p-6 py-12 dark:bg-blue-400 rounded w-[90%] mx-auto">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row items-center justify-between">
                        <h2 className="text-center text-6xl tracking-tighter font-bold">Up to
                            <br className="sm:hidden" />50% Off
                        </h2>
                        <div className="space-x-2 text-center py-2 lg:py-0">
                            <span>Plus free shipping! Use code:</span>
                            <span className="font-bold text-lg ">ROBO11</span>

                            <label className="swap swap-flip text-5xl ">
                                <input type="checkbox" className='w-64' />

                                <div className="swap-on">😈</div>
                                <div className="swap-off">😇</div>
                            </label>

                        </div>
                    </div>

                </div>
            </div>

            <section className="py-6  w-[90%] mx-auto bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 rounded mt-9">
                <div className="container p-4 mx-auto space-y-16 sm:p-10">
                    <div className="space-y-4 text-center">
                        <h3 className="text-2xl font-bold leading-none sm:text-5xl">Meet our team</h3>
                    </div>
                    <div className="grid w-full grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="space-y-4">
                            <img alt="" className="object-cover h-56 mx-auto mb-4 bg-center rounded-sm " src="https://img.freepik.com/free-photo/handsome-man-fixing-scarf_23-2148323500.jpg?w=360&t=st=1684682202~exp=1684682802~hmac=47199ad04ceb43914dbfe27da1b83800e92c061602f3256095be138261436985" />
                            <div className="flex flex-col items-center">
                                <h4 className="text-xl font-semibold">Emon Hasan</h4>
                                <p className="text-sm ">Web developer</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <img alt="" className="object-cover h-56 mx-auto mb-4 bg-center rounded-sm " src="https://img.freepik.com/premium-photo/handsome-young-man-standing-front-beautiful-wooden-door_171337-87425.jpg?w=360" />
                            <div className="flex flex-col items-center">
                                <h4 className="text-xl font-semibold">Jahangir Alom</h4>
                                <p className="text-sm ">Accountant</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <img alt="" className="object-cover h-56 mx-auto mb-4 bg-center rounded-sm " src="https://img.freepik.com/free-photo/selective-focus-shot-handsome-man_181624-51446.jpg?w=360&t=st=1684682308~exp=1684682908~hmac=58d31011e220065e231fa6a9b202ec43fb9adfd773875d02ccb46f0e57a6072e" />
                            <div className="flex flex-col items-center">
                                <h4 className="text-xl font-semibold">Khalek Haowlader</h4>
                                <p className="text-sm ">CEO</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <img alt="" className="object-cover h-56 mx-auto mb-4 bg-center rounded-sm " src="https://img.freepik.com/free-photo/young-handsome-hipster-man-posing-street-it-businessman-plaid-shirt-sunglasses-europe-city-center_291049-1488.jpg?w=360&t=st=1684682363~exp=1684682963~hmac=f0a71609bf5666568cae3f8fd8a382c76d73a7d0356e7a34a8ed984530ce5604" />
                            <div className="flex flex-col items-center">
                                <h4 className="text-xl font-semibold">Babul Mia</h4>
                                <p className="text-sm ">Web Designer</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


        </>
    );
};

export default Offer;