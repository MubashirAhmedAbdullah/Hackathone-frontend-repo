import Navbar from "../components/navigation"
import React from 'react';
import { Button } from 'antd';
import { Image } from 'antd';
import Footer from "../components/footer";
import LoanSection from "../components/loanSection";
import { Link } from "react-router";


const Home = () => {
    return (
        <div className="bg-gray-100 h-screen">
            <Navbar />
            <section className="py-24 flex items-center px-10">
                {/* Left Side - Hero Content */}
                <div className="flex-1 space-y-6">
                    <h1 className="text-5xl font-semibold">
                        Welcome to Our Finance Solutions
                    </h1>
                    <p className="text-xl text-wrap">
                        Explore a range of loan services designed to fit your needs. Apply today and secure your future!
                    </p>
                    {/* Call to Action Button */}
                    <Link to={'applyloan'}><Button
                    size="large"
                    style={{
                        background: "#ffffff",
                        color: "#8ac642",
                        fontWeight: "bold",
                        border: "none",
                    }}
                    className=""
                >
                    Get Started
                </Button></Link>
                </div>

                {/* Right Side - Hero Image */}
                <div className="">
                    <Image
                        src="https://www.saylaniwelfare.com/static/media/logo_saylaniwelfare.22bf709605809177256c.png"
                        alt="Hero Image"
                        preview={false}
                        className=""
                        height={200}
                        width={600}
                    />
                </div>
            </section>
            {/* <LoanDataSection /> */}
            <LoanSection />
            <Footer />



        </div>
    )
}


export default Home