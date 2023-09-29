import Navigation from "../../../containers/Navigation";
import Footer from "../../../containers/Footer";
import Sidebar from "../Sidebar";
import CheckBoxComponent from "../../../components/CheckBoxComponent";
import { useTranslation } from "react-i18next";
import ButtonComponent from "../../../components/ButtonComponent";
import '../styles/Common.css';
import { useState } from "react";
import ToastComponent from "../../../components/ToastComponent";
import ToastContainerComponent from "../../../components/ToastContainerComponent";

const CheckBoxExample: React.FC = () => {
    const [showAlert, setShowAlert] = useState<boolean>(false);
    const [option, setOption] = useState<string>('');

    const { t } = useTranslation();

    const closeAlert = () => {
        setShowAlert(false);
    }

    const handleOnChange = (e: any) => {
        setOption(e.target.value);
    }

    const handleOnClick = () => {
        setShowAlert(true);
    }

    return (
        <div className="exampleContainer">
            <Navigation />
            <Sidebar />
            <h1 className="heading">{t("Checkbox")}</h1>
            <div className="commonContainer">
                <ToastContainerComponent position="top-end">
                    <ToastComponent
                        header={t("Checkbox") + ' ' + t("choosed")}
                        message={option}
                        show={showAlert}
                        onClose={closeAlert}
                        variant="primary"
                        headerStyle={{ justifyContent: 'space-between' }}
                        messageStyle={{ color: 'white' }}
                    />
                </ToastContainerComponent>
                <h3>{t("SelectOptions")}</h3>
                <CheckBoxComponent label={t("Option1")} onChange={handleOnChange} className="checkbox" value="option 1" />
                <CheckBoxComponent label={t("Option2")} onChange={handleOnChange} className="checkbox" value="option 2" />
                <CheckBoxComponent label={t("Option3")} onChange={handleOnChange} className="checkbox" value="option 3" />
                <ButtonComponent label="Submit" onClick={handleOnClick} />
            </div>
            <Footer />
        </div>
    )
}

export default CheckBoxExample;