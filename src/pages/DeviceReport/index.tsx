import React from "react";
import CloseIcon from '@mui/icons-material/Close';

import "./styles.scss";

type sliderProps = {
    displayModal: boolean
    handleClose: () => void;
}


const DeviceReport: React.FC<sliderProps> = ({ handleClose, displayModal }) => {

    return (
        <div>
            <div className={`Modal ${displayModal ? "Show" : ""}`}>
                <div className='w-full justify-end flex  cursor-pointer'>
                    <CloseIcon onClick={() => handleClose()} />
                </div>

                <p className="font-medium text-2xl">Device report</p>

            </div>
            <div
                className={`Overlay ${displayModal ? "Show" : ""}`}
            />

        </div>
    );
}

export default DeviceReport
