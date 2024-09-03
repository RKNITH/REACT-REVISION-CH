import React from 'react';

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                            alt="React Development"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            React Development: Building the Future of the Web
                        </h2>
                        <p className="mt-6 text-gray-600">
                            Our team of passionate developers is dedicated to creating cutting-edge web
                            applications using React. With a focus on performance and user experience, we
                            strive to build scalable, maintainable, and powerful solutions that drive the
                            future of the web.
                        </p>
                        <p className="mt-4 text-gray-600">
                            From single-page applications to complex enterprise solutions, our expertise in
                            React allows us to tackle challenges of any size. We are committed to continuous
                            learning and staying at the forefront of web development technologies, ensuring
                            that our projects are always built with the latest best practices.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
