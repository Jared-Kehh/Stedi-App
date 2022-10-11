const getSpikesFromAccelerometer = ({recentAccelerationData, threshold, previousValue, previousHighPointTime, wasGoingUp}) =>{
    console.log("Spike Calculator Called");
    const overThresholdSpikes = [];//the acceleration data, often look like the following, can you find the spike(s) over the default threshold
/*
[
{"value": 9.88,
"time": 1289182498},
{"value": 9.89,
"time": 1289182898},
{"value": 9.88,
"time": 1289183498},
{"value": 10.01,
"time": 1289184498},
{"value": 11.03,
"time": 1289185498},
{"value": 12.45,
"time": 1289186498},
{"value": 11.99,
"time": 1289187498},
{"value": 11.88,
"time": 1289188498}
]
     _______
    | 9.88  |
     -------
    | 9.89  |
     -------
    | 10.01 |
     -------
    | 11.03 |
     -------
    | 12.45 |
     -------
    | 11.99 |
     -------
    | 11.88 |
     -------
    | 10.33 |
     -------
     */

    let goingUp=wasGoingUp;//when we stop going up, we have hit a spike
    //let previousValue = 0;//this is not a real value
    if (previousHighPointTime===0 && recentAccelerationData.length > 0){//this should only happen the first time this function is called during an exercise, since we have no spikes yet
        previousHighPointTime=recentAccelerationData[0].time;//just assume the timestamp of the first sensor reading is good enough to compare with for noise elimination
    }
    recentAccelerationData.forEach((accelerationDatum) => {

        if (accelerationDatum.value > previousValue && previousValue!=0){
            goingUp = true;
            console.log("Going UP: "+goingUp );
            console.log("Previous Value: "+previousValue);
            console.log("Value: "+accelerationDatum.value);
        } else {
            if (goingUp===true && (accelerationDatum.time-previousHighPointTime > 600 || previousHighPointTime==0) && previousValue > threshold){
                console.log("Found spike!");
                overThresholdSpikes.push(accelerationDatum);
                previousHighPointTime = accelerationDatum.time;
            }
            goingUp = false;
            console.log("Previous Value: "+previousValue);
            console.log("Value: "+accelerationDatum.value);

        }       
        previousValue = accelerationDatum.value;
    });

    console.log("Spike Count: "+overThresholdSpikes.length);
    return {spikes: overThresholdSpikes, previousHighPointTime, wasGoingUp:goingUp};

}

export default getSpikesFromAccelerometer;