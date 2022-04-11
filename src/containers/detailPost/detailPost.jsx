import MainLayout from "../../components/layout/"
import CommunityCard from "../../components/elements/CommunityCard"

const PostItem = () => {
    return (
        <div className=""></div>
    )
}

const DetailPostContainer = () => {
    return (
        <MainLayout>
             <div className="pt-4 px-3 lg:px-40">
                <div className="flex items-start justify-center">
                    <div className=" w-full md:w-8/12 mr-3">

                    </div>
                    <div className="hidden md:block w-4/12  bg-darkmode-2 rounded-2xl">
                        {/* card komunitas taro sini */}
                        <CommunityCard />
                    </div>
                
                </div>
            </div>
        </MainLayout>
    )
}

export default DetailPostContainer