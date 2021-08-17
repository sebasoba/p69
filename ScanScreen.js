import { TouchableOpacity } from "react-native";

export default class ScanScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            hasCameraPermissions : null,
            scanned: false,
            scannedData: '',
            buttonState: 'normal'
        }

        

        >
    

    getCameraPermission(){
    const {status} = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
        hasCameraPermissions:status === "granted"
    })
    }

    handleBarCodeScanner(){
        <View style={styles.container}>
        <Text style={styles.displayText}>{
            hasCameraPermissions===true ? this.state.scannedData: "Request Camera Permission"
        } </Text>
            <TouchableOpacity
            onPress={this.getCameraPermissions}
            style={styles.scanButton}>
            <Text style={styles.buttonText}>Scan QR Code</Text>
            </TouchableOpacity>
            <TouchableOpacity
        onPress={this.getCameraPermissions}
        style= {style.scanButton}
        title = "Bar Code Scanner">
            <Text style={styles.buttonText}>Scan QR code</Text>
            </TouchableOpacity>
            </View>
    }
}}





  