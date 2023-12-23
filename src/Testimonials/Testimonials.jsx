

const Testimonials = () => {
    return (
        <div className="my-20">
            <h2 className="mt-5 text-4xl text-center font-bold text-blue-900">User Feedback</h2>
            <p className="mb-5 mt-3 text-center text-xl text-blue-900 ">Productivity Revolutionaries: Hear How They Do It</p>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full flex justify-center items-center">
                    <div className="card card-compact bg-base-100 shadow-xl">
                        <figure className="w-full lg:w-1/4 mx-auto"><img src="https://i.ibb.co/d5XrYzd/person-working-html-computer.jpg" alt="Movie" /></figure>
                        <div className="card-body justify-center items-center">
                            <h2 className="card-title text-2xl font-semibold">Sarah, Web Developer</h2>
                            <p className="text-lg mx-96 text-center">"My productivity skyrocketed since I started using this app. No more context switching between tools. Everything's organized and accessible from anywhere."</p>
                            <div className="card-actions justify-end">
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full flex justify-center items-center">
                    <div className="card card-compact bg-base-100 shadow-xl">
                        <figure className="w-full lg:w-1/4 mx-auto"><img src="https://i.ibb.co/kHZVwnq/person-working-html-computer-1.jpg" alt="Movie" /></figure>
                        <div className="card-body justify-center items-center">
                            <h2 className="card-title text-2xl font-semibold"> John, Senior Software Engineer</h2>
                            <p className="text-center text-lg mx-96">"Finally, a task management app that speaks my language.  Drag-and-drop features for sprints, issue tracking, and code snippets? Sign me up!"</p>
                            <div className="card-actions justify-end">
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full flex justify-center items-center">
                    <div className="card card-compact bg-base-100 shadow-xl">
                        <figure className="w-full lg:w-1/4 mx-auto"><img src="https://i.ibb.co/kG70dPq/widely-smiling-businesswoman-working-laptop-sitting-cafe.jpg" alt="Movie" /></figure>
                        <div className="card-body justify-center items-center">
                            <h2 className="card-title  text-2xl font-semibold">Emily, Marketing Manager</h2>
                            <p className="text-center text-lg mx-96">"This app saved my sanity during peak season. Prioritizing tasks, setting deadlines, and automating reminders – it's like having a personal assistant for my productivity."</p>
                            <div className="card-actions justify-end">
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full flex justify-center items-center">
                    <div className="card card-compact bg-base-100 shadow-xl">
                        <figure className="w-full lg:w-1/4 mx-auto"><img src="https://i.ibb.co/3mtkHNS/cheerful-young-caucasian-businessman.jpg" alt="Movie" /></figure>
                        <div className="card-body justify-center items-center">
                            <h2 className=" card-title text-2xl font-semibold">Daniel, Investment Analyst</h2>
                            <p className="text-center text-lg mx-96">"Time is money, and this app helps me manage both efficiently. Streamlined workflows, secure data management, and automated reports – it's a perfect fit for the financial world."</p>
                            <div className="card-actions justify-end">
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;