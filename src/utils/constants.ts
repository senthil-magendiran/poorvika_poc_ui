import { AxiosError } from "axios";
import { IAPIResponse } from "services/interfaces/common.interface";

export const BASE_URL = "http://localhost:3000";
export const IP_URL = "https://ipapi.co/json/";

export const deviceQuestions = [
    {
        question: "Are you able to make and receive calls ? ", 
        hint: "Check your device for cellular network connectivity issues.",
        positive: "Able to Make and Receive Calls", 
        negative: "Not Able to Make and Receive Calls"
    },
    {
        question: "Are there any problems with your mobile screen? ", 
        hint: "Check your mobile screen for scratches, cracks, discoloration spots, lines or touch issues.",
        positive: "Mobile Screen Defective", 
        negative: "Mobile Screen Not Defective"
    },
    {
        question: "Are there any defects on your phone body? ", 
        hint: "Check you device body (back & edges) for visible scratches and dents.",
        positive: "Phone Body Defective",
        negative: "Phone Body Flawless"
    },
    {
        question: "Is your mobile under brand warranty?", 
        hint: "You can get a better price for your device if it's under brand's warranty. Note: Please provide a valid bill for your device.",
        positive: "Mobile Under Warranty",
        negative: "Mobile Out of Warranty"
    }];

    export const defects = [
        {
            image: "https://firebasestorage.googleapis.com/v0/b/poorvika-7599c.appspot.com/o/defects%2Ffront_camera.jpg?alt=media&token=15f2d0e5-58c2-4f10-9ebb-0436e764f7f1", 
            text: "Front Camera not working"
        },
        {
            image: "https://firebasestorage.googleapis.com/v0/b/poorvika-7599c.appspot.com/o/defects%2Fback_camera.jpg?alt=media&token=6f4d3985-cfba-40a9-b8f5-5ec9331fb49d", 
            text: "Back Camera not working"
        },
        {
            image: "https://firebasestorage.googleapis.com/v0/b/poorvika-7599c.appspot.com/o/defects%2Fvolume_button.jpg?alt=media&token=cdcf8e9d-796e-4b15-b1ca-58dc654e0962", 
            text: "Volume Button not working"
        },
        {
            image: "https://firebasestorage.googleapis.com/v0/b/poorvika-7599c.appspot.com/o/defects%2Ffingure_touch.jpg?alt=media&token=f2845e56-41ef-4cac-8ad1-2fdb3cf73485", 
            text: "Finger Touch not working"
        },
        {
            image: "https://firebasestorage.googleapis.com/v0/b/poorvika-7599c.appspot.com/o/defects%2Fwifi.jpg?alt=media&token=2778a8cd-abc5-40d7-b7f3-bc6373cc2de8", 
            text: "WiFi not working"
        },
        {
            image: "https://firebasestorage.googleapis.com/v0/b/poorvika-7599c.appspot.com/o/defects%2Fbattery.jpg?alt=media&token=8e842d00-24e1-429b-ac9e-d20af3d0db63", 
            text: "Battery Faulty"
        },
        {
            image: "https://firebasestorage.googleapis.com/v0/b/poorvika-7599c.appspot.com/o/defects%2Fspeaker.jpg?alt=media&token=85596e14-1fea-4e1f-8914-b997f08b8797", 
            text: "Speaker Faulty"
        },
        {
            image: "https://firebasestorage.googleapis.com/v0/b/poorvika-7599c.appspot.com/o/defects%2Fpowerbutton.jpg?alt=media&token=764894a0-fb3e-452c-954f-55c425d42e8d", 
            text: "Power Button not working"
        },
        {
            image: "https://firebasestorage.googleapis.com/v0/b/poorvika-7599c.appspot.com/o/defects%2Fchargeport.jpg?alt=media&token=d6f1cd30-2a46-4c6f-b916-eb9599e2979c", 
            text: "Charging Port not working"
        },
        {
            image: "https://firebasestorage.googleapis.com/v0/b/poorvika-7599c.appspot.com/o/defects%2Ffacecensor.jpg?alt=media&token=474aaaed-9d2a-4305-a7c4-f766c65c6df6", 
            text: "Face Sensor not working"
        },
        {
            image: "https://firebasestorage.googleapis.com/v0/b/poorvika-7599c.appspot.com/o/defects%2Fsilentbutton.png?alt=media&token=d3cbbd22-562d-4067-ac4f-f65f4782bfa9", 
            text: "Silent Button not working"
        },
        {
            image: "https://firebasestorage.googleapis.com/v0/b/poorvika-7599c.appspot.com/o/defects%2Faudioreceiver.png?alt=media&token=fe758689-d3e7-4a2a-906a-b7f0c77787d1", 
            text: "Audio Receiver not working"
        },
        {
            image: "https://firebasestorage.googleapis.com/v0/b/poorvika-7599c.appspot.com/o/defects%2Fcamera%20glass.png?alt=media&token=085585d7-3d9b-4ba0-8257-c47b8ac9679e", 
            text: "Camera Glass Broken"
        },
        {
            image: "https://firebasestorage.googleapis.com/v0/b/poorvika-7599c.appspot.com/o/defects%2Fbluetooth.png?alt=media&token=5ccbba73-b13c-4062-86f2-0f4bef9b2f5c", 
            text: "Bluetooth not working"
        },
        {
            image: "https://firebasestorage.googleapis.com/v0/b/poorvika-7599c.appspot.com/o/defects%2Fvibrator.png?alt=media&token=6fad4983-a3bd-4911-bf70-96ec07cd6540", 
            text: "Vibrator is not working"
        },
        {
            image: "https://firebasestorage.googleapis.com/v0/b/poorvika-7599c.appspot.com/o/defects%2Fmic.png?alt=media&token=8032449c-aa96-4bac-9c65-ce7479e83b7c", 
            text: "Microphone not working"
        },
    ]

    export const accessories = [
        {
            image: "https://firebasestorage.googleapis.com/v0/b/poorvika-7599c.appspot.com/o/defects%2Faccessories%2Fcharge.jpg?alt=media&token=f0e5d344-4cde-4745-9b68-dc01cb028535", 
            text: "Original Charger of Device"
        },
        {
            image: "https://firebasestorage.googleapis.com/v0/b/poorvika-7599c.appspot.com/o/defects%2Faccessories%2Fearphone.jpg?alt=media&token=08a1670f-dfb7-47ae-8be3-573e80ee0130", 
            text: "Original Earphones"
        },
        {
            image: "https://firebasestorage.googleapis.com/v0/b/poorvika-7599c.appspot.com/o/defects%2Faccessories%2Fbox.jpg?alt=media&token=9f8e8df7-07a5-4533-82fb-1274c9da3506", 
            text: "Box with same IMEI"
        },
        {
            image: "https://firebasestorage.googleapis.com/v0/b/poorvika-7599c.appspot.com/o/defects%2Faccessories%2Fbill.jpg?alt=media&token=982b68e9-4fe3-4bce-b1cb-db0273d34690", 
            text: "Bill with same IMEI"
        }
    ]

    export const parseAPIError = (error: AxiosError): IAPIResponse => {
        if (error.isAxiosError && error.response) {
          return { status: "failure", message: error.response.data.message, error }
        }
      
        return { status: "failure", message: error.message, error }
      }