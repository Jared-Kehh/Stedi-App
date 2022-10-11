let steps = {}
steps.current = 
[
     {
      "time": 1659623207777,
      "value": 10.28070608443553,
    },
    {
      "time": 1659623208447,
      "value": 6.877545358732901,
    },
     {
      "time": 1659623209181,
      "value": 14.756334774251266,
    },
   {
      "time": 1659623209933,
      "value": 9.273858303712073,
    },
   {
      "time": 1659623210684,
      "value": 7.100254854866576,
    },
   {
      "time": 1659623211326,
      "value": 4.71939440714202,
    },
   {
      "time": 1659623212372,
      "value": 9.887702811834728,
    },
   {
      "time": 1659623213760,
      "value": 6.802916278482989,
    },
   {
      "time": 1659623214496,
      "value": 16.980502684186117,
    },
   {
      "time": 1659623215155,
      "value": 11.124477717569782,
    },
   {
      "time": 1659623217388,
      "value": 10.747957491810777,
    },
   {
      "time": 1659623218222,
      "value": 9.332345260434533,
    },
   {
      "time": 1659623218969,
      "value": 8.627950741295507,
    },
   {
      "time": 1659623219614,
      "value": 10.547572607269059,
    },
   {
      "time": 1659623220354,
      "value": 12.975441842153565,
    },
   {
      "time": 1659623221614,
      "value": 8.426539185671222,
    },
   {
      "time": 1659623222631,
      "value": 9.327471749539768,
    },
   {
      "time": 1659623223602,
      "value": 9.009324950107958,
    },
   {
      "time": 1659623224362,
      "value": 8.947301766145566,
    },
   {
      "time": 1659623225336,
      "value": 7.766755511245052,
    },
   {
      "time": 1659623227874,
      "value": 9.280866545664358,
    },
   {
      "time": 1659623228625,
      "value": 9.611910135936586,
    },
   {
      "time": 1659623229495,
      "value": 8.220940736606208,
    },
   {
      "time": 1659623230250,
      "value": 12.450797839677223,
    },
   {
      "time": 1659623231005,
      "value": 11.85960082585936,
    },
   {
      "time": 1659623232613,
      "value": 8.699548362720448,
    },
   {
      "time": 1659623233365,
      "value": 8.50903276636983,
    },
   {
      "time": 1659623234015,
      "value": 13.525228973506756,
    },
   {
      "time": 1659623234773,
      "value": 12.821525394726578,
    },
   {
      "time": 1659623235746,
      "value": 11.408530778845162,
    },
   {
      "time": 1659623236615,
      "value": 11.968805752730718,
    },
  ]

  const lastStep = steps.current[29];
  const firstStep = steps.current[0];
 const firstTimeStep =  firstStep.time;
 const startTime = 1659623207777 - 3000; //after press the go button
 const endTime = lastStep.time;
 const durationTime = lastStep.time - firstStep.time;
 let previousTime = startTime;
 const stepPoints  = [];
 steps.current.forEach(stepObject=> {
   const stepTime = stepObject.time - previousTime;
   stepPoints.push(stepTime);
   console.log(stepPoints);
}); 
stepPoints.length=30;
 console.log(durationTime);