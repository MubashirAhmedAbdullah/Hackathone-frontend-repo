import { Image } from "antd"
import LoanCards from "../components/loanData"

function Home() {
    return (

        <div className="">
            <div className="container mx-auto flex items-center justify-between min-h-screen px-6 lg:px-16">
                {/* Text Section */}
                <div className="max-w-2xl">
                    <h1 className="text-6xl font-bold leading-tight">
                        <span className="text-[#8AC441] underline">Saylani</span>
                        <span className="text-[#0072BB] underline"> Loan Program</span>
                    </h1>
                    <p className="text-3xl pt-6 font-medium text-gray-700">
                        <span className="text-[#8AC441] underline">Empowering Dreams</span>
                        <span className="text-[#0072BB] underline"> One Loan at a Time!</span>
                    </p>
                    <p className="text-lg pt-4 text-gray-600">
                        Turning aspirations into achievements by providing the financial support you need.
                    </p>
                    <div className="mt-8">
                        <button className="bg-[#8AC441] text-white px-6 py-3 rounded-2xl font-medium shadow-lg hover:bg-[#76ad39] transition">
                            Apply Now
                        </button>
                        <button className="ml-4 bg-[#0072BB] text-white px-6 py-3 rounded-2xl font-medium shadow-lg hover:bg-[#005b93] transition">
                            Learn More About Saylani
                        </button>
                    </div>
                </div>

                {/* Image Section */}
                <div>
                    <Image
                        src="https://www.saylaniwelfare.com/static/media/logo_saylaniwelfare.22bf709605809177256c.png"
                        preview={false}
                        alt="Saylani Welfare Logo"
                        className="h-36 w-auto object-contain"
                    />
                </div>
            </div>

            <div className="container mx-auto pl-2">
                <div className="text-4xl font-bold text-[#0072BB] underline">Available Loans</div>
                <LoanCards />
            </div>


            <div className="container mx-auto pl-2 pb-12">
                <div className="text-4xl font-bold text-[#0072BB] underline">Saylani Founder Goal</div>
                <div className="flex items-center gap-36 pl-5 pt-12">
                    <div>
                        <Image src="data:image/jpeg;base64,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"
                            preview={false}
                            height={350}
                            width={300}
                            className="rounded-2xl" />
                    </div>
                    <div className="max-w-3xl text-lg font-semibold text-center">
                        <Image src="https://www.saylaniwelfare.com/static/media/logo_saylaniwelfare.22bf709605809177256c.png" preview={false}/>
                        <div>Allama Bashir Farooqi, the founder and chairman of Saylani Welfare International Trust, aims to eradicate poverty by providing free food, healthcare, education, and skill development to underprivileged communities. His vision is to empower the youth and create financially independent individuals through world-class education and IT training programs, ultimately uplifting the socio-economic condition of Pakistan.</div>
                    </div>
                </div>
            </div>
        </div>

    )
}


export default Home