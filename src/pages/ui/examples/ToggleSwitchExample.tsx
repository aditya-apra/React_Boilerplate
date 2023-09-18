import Navigation from "../../../containers/Navigation";
import Footer from "../../../containers/Footer";
import Sidebar from "../Sidebar";
import ToggleSwitchComponent from "../../../components/ToggleSwitchComponent";
import { useTranslation } from "react-i18next";
import '../styles/Common.css';

const ToggleSwitchExample: React.FC = () => {
    const { t } = useTranslation();

    return (
        <>
            <Navigation />
            <Sidebar />
            <h1 className="heading">{t("ToggleSwitch")}</h1>
            <div className="commonContainer">
                <ToggleSwitchComponent label={t("MySwitch")} onChange={() => {}}/>
            </div>
            <Footer />
        </>
    )
}

export default ToggleSwitchExample;