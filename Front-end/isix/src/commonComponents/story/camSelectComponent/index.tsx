interface CamSelectProps {
    devices : any;
    setDeviceId : any;
}

const CamSelect: React.FC<CamSelectProps> = ({setDeviceId, devices}) => {
    return (
        <div style={{height:20}}>
        <select style={{position:'fixed', left:"2%", top: "17%"}} onChange={(e)=>{
            setDeviceId(e.target.value)
            console.log("change",e.target.value)
            }}
            >
            {devices && devices.map((device,index) => 
            <option value={device.deviceId} key={index}>{device?.label}</option>
            )}
        </select>
        </div>
    )
}

export default CamSelect;