import { useState, useEffect } from "react";
import { Dropdown, InputGroup, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";

interface DropDownProps {
    label: string;
    options: { key: string; value: string; }[];
    variant?: "primary" | "secondary" | "danger" | "success" | "warning" | "info" | "light" | "dark";
    onSelect?: (e: string | null) => void;
    enableSearch?: boolean;
    dropdownToggleStyle?: React.CSSProperties;
    dropdownMenuStyle?: React.CSSProperties;
    searchComponentStyle?: React.CSSProperties;
    searchInputStyle?: React.CSSProperties;
    placeholder?: string;
    dropDownclassName?: string;
    dropDownToggleclassName?: string;
    dropDownMenuclassName?: string;
    dropDownItemclassName?: string;
    id?: string;
    //multi select options
}

const defaultProps: Partial<DropDownProps> = {
    variant: "primary",
    enableSearch: true,
    placeholder: "Search...",
    dropdownMenuStyle: {padding: 10, maxHeight: '20rem', overflowY: 'auto'},
    searchInputStyle: {outline: "none", boxShadow: "none"}
};


const DropDownComponent: React.FC<DropDownProps> = ({
    variant,
    label,
    options: items,
    onSelect,
    enableSearch,
    dropdownToggleStyle,
    dropdownMenuStyle,
    searchComponentStyle,
    searchInputStyle,
    placeholder,
    dropDownclassName,
    dropDownMenuclassName,
    dropDownToggleclassName,
    dropDownItemclassName,
    id
}) => {
    const [inputValue, setInputValue] = useState<string>("");
    const [filteredData, setFilteredData] = useState<{ key: string; value: string; }[] | undefined >(items);

    useEffect(() => {
        if (filteredData?.length === 0) {
            setFilteredData(items);
        }
    }, [items, filteredData]);

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        const filter = items?.filter((item) => {
            return item.key.toLowerCase().includes(inputValue.toLowerCase());
        })
        setFilteredData(filter);
    };

    const clearInput = () => {
        setInputValue("");
        setFilteredData([]);
    }

    return (
        <Dropdown onSelect={onSelect}  className={dropDownclassName} id={id} role="myDropdown">
            <Dropdown.Toggle variant={variant} style={dropdownToggleStyle} className={dropDownToggleclassName}>{label}</Dropdown.Toggle>
            <Dropdown.Menu style={dropdownMenuStyle} className={dropDownMenuclassName}> 
                {enableSearch &&
                    <InputGroup style={searchComponentStyle}>
                        <Form.Control placeholder={placeholder} style={searchInputStyle} onChange={handleOnChange} value={inputValue} className={dropDownMenuclassName}/>
                        {(inputValue !== '') ?
                            <InputGroup.Text onClick={clearInput} style={{ cursor: 'pointer' }} className={dropDownMenuclassName}>
                                <FontAwesomeIcon icon={faXmark} />
                            </InputGroup.Text>
                            : <InputGroup.Text className={dropDownMenuclassName}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </InputGroup.Text>
                        }
                    </InputGroup>
                }
                {filteredData?.map(item => <Dropdown.Item className={dropDownItemclassName} eventKey={item.value}>{item.key}</Dropdown.Item>)}
            </Dropdown.Menu>
        </Dropdown>
    )
}

DropDownComponent.defaultProps = defaultProps;
export default DropDownComponent;