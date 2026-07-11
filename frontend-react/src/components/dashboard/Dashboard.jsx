import { useEffect } from "react";
import axiosInstance from "../../asioxinstance.jsx";

const Dashboard = () => {
    useEffect(() => {
        const fetchProtectedData = async () => {
            try {
                const response = await axiosInstance.get("/protected-view/");
                console.log("Successfully fetched protected-view");
                console.log("Success:", response.data);
            } catch (error) {
                console.error("Error fetching protected data:", error);
            }
        };

        fetchProtectedData();
    }, []);

    return (
        <div className="text-light container">
            Dashboard
        </div>
    );
};

export default Dashboard;