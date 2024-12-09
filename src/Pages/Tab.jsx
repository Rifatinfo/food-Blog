import { useState } from "react";

const Tab = () => {
    // State to track the active tab
    const [activeTab, setActiveTab] = useState("ENTREES");

    // Function to handle tab switch
    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };
    // flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b dark:border-gray-600 dark:text-gray-600
    return (
        <div className="mt-14">
            <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap dark:bg-gray-100 dark:text-gray-800">
                {/* Tabs */}
                <a
                    href="#"
                    onClick={() => handleTabClick("ENTREES")}
                    className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b ${activeTab === "ENTREES"
                            ? "border-orange-500 border-b-4 text-gray-900  dark:text-gray-900"
                            : "dark:border-gray-600 dark:text-gray-600"
                        }`}
                >
                    
                    <span>ENTREES</span>
                </a>
                <a
                    href="#"
                    onClick={() => handleTabClick("BREAKFAST")}
                    className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 border border-b-0 rounded-t-lg  ${activeTab === "BREAKFAST"
                            ? "border-orange-500 border-t-4 text-gray-900 dark:text-gray-900"
                            : "dark:border-gray-600 dark:text-gray-600"
                        }`}
                >
                    
                    <span>BREAKFAST</span>
                </a>
                <a
                    href="#"
                    onClick={() => handleTabClick("LUNCH")}
                    className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b ${activeTab === "LUNCH"
                            ? "border-orange-500 border-b-4 text-gray-900 dark:text-gray-900"
                            : "dark:border-gray-600 dark:text-gray-600"
                        }`}
                >
                    
                    <span>LUNCH</span>
                </a>
                <a
                    href="#"
                    onClick={() => handleTabClick("DESSERTS")}
                    className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2  border border-b-0 rounded-t-lg  ${activeTab === "DESSERTS"
                            ? "border-orange-500 border-t-4 text-gray-900 dark:text-gray-900"
                            : "dark:border-gray-600 dark:text-gray-600"
                        }`}
                >
                    
                    <span>DESSERTS</span>
                </a>
                <a
                    href="#"
                    onClick={() => handleTabClick("SIDES")}
                    className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b ${activeTab === "SIDES"
                            ? "border-orange-500 border-b-4 text-gray-900 dark:text-gray-900"
                            : "dark:border-gray-600 dark:text-gray-600"
                        }`}
                >
                    
                    <span>SIDES</span>
                </a>
                <a
                    href="#"
                    onClick={() => handleTabClick("DRINKS")}
                    className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2  border border-b-0 rounded-t-lg  ${activeTab === "DRINKS"
                            ? "border-orange-500 border-t-4 text-gray-900 dark:text-gray-900"
                            : "dark:border-gray-600 dark:text-gray-600"
                        }`}
                >
                    
                    <span>DRINKS</span>
                </a>
            </div>

            {/* Tab Content */}
            <div className="mt-6">
                {activeTab === "ENTREES" && <p>Content for Architecto</p>}
                {activeTab === "BREAKFAST" && <p>Content for Corrupti</p>}
                {activeTab === "LUNCH" && <p>Content for Excepturi</p>}
                {activeTab === "DESSERTS" && <p>Content for DESSERTS</p>}
                {activeTab === "SIDES" && <p>Content for SIDES</p>}
            </div>
        </div>
    );
};

export default Tab;
