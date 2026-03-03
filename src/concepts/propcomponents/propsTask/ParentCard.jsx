import ChildCard from "./ChildCard"


const ParentCard=()=>{
     const cricketers = [
  {
    id: 1,
    name: "Virat Kohli",
    age: 35,
    jerseyno: 18,
    country: "India",
    gender: "Male",
    specialist: "Batsman",
    imgurl: "https://picsum.photos/id/1011/300/300",
    pickupline: "Intensity is my signature."
  },
  {
    id: 2,
    name: "Rohit Sharma",
    age: 36,
    jerseyno: 45,
    country: "India",
    gender: "Male",
    specialist: "Opening Batsman",
    imgurl: "https://picsum.photos/id/1015/300/300",
    pickupline: "Timing beats power."
  },
  {
    id: 3,
    name: "MS Dhoni",
    age: 42,
    jerseyno: 7,
    country: "India",
    gender: "Male",
    specialist: "Wicketkeeper",
    imgurl: "https://picsum.photos/id/1016/300/300",
    pickupline: "Calm wins championships."
  },
  {
    id: 4,
    name: "Sachin Tendulkar",
    age: 50,
    jerseyno: 10,
    country: "India",
    gender: "Male",
    specialist: "Batsman",
    imgurl: "https://picsum.photos/id/1020/300/300",
    pickupline: "Technique never fades."
  },
  {
    id: 5,
    name: "Jasprit Bumrah",
    age: 30,
    jerseyno: 93,
    country: "India",
    gender: "Male",
    specialist: "Fast Bowler",
    imgurl: "https://picsum.photos/id/1024/300/300",
    pickupline: "Unplayable by design."
  },

  {
    id: 6,
    name: "Ben Stokes",
    age: 32,
    jerseyno: 55,
    country: "England",
    gender: "Male",
    specialist: "All-Rounder",
    imgurl: "https://picsum.photos/id/1025/300/300",
    pickupline: "Pressure is my fuel."
  },
  {
    id: 7,
    name: "Joe Root",
    age: 33,
    jerseyno: 66,
    country: "England",
    gender: "Male",
    specialist: "Batsman",
    imgurl: "https://picsum.photos/id/1027/300/300",
    pickupline: "Class over chaos."
  },
  {
    id: 8,
    name: "James Anderson",
    age: 41,
    jerseyno: 9,
    country: "England",
    gender: "Male",
    specialist: "Swing Bowler",
    imgurl: "https://picsum.photos/id/1031/300/300",
    pickupline: "Swing is an art."
  },
  {
    id: 9,
    name: "Babar Azam",
    age: 29,
    jerseyno: 56,
    country: "Pakistan",
    gender: "Male",
    specialist: "Batsman",
    imgurl: "https://picsum.photos/id/1032/300/300",
    pickupline: "Elegance in every stroke."
  },
  {
    id: 10,
    name: "Shaheen Afridi",
    age: 24,
    jerseyno: 10,
    country: "Pakistan",
    gender: "Male",
    specialist: "Fast Bowler",
    imgurl: "https://picsum.photos/id/1033/300/300",
    pickupline: "Speed with swing."
  },

  {
    id: 11,
    name: "Kane Williamson",
    age: 33,
    jerseyno: 22,
    country: "New Zealand",
    gender: "Male",
    specialist: "Batsman",
    imgurl: "https://picsum.photos/id/1035/300/300",
    pickupline: "Calmness defines me."
  },
  {
    id: 12,
    name: "Trent Boult",
    age: 34,
    jerseyno: 18,
    country: "New Zealand",
    gender: "Male",
    specialist: "Fast Bowler",
    imgurl: "https://picsum.photos/id/1036/300/300",
    pickupline: "Early wickets matter."
  },
  {
    id: 13,
    name: "Steve Smith",
    age: 34,
    jerseyno: 49,
    country: "Australia",
    gender: "Male",
    specialist: "Batsman",
    imgurl: "https://picsum.photos/id/1037/300/300",
    pickupline: "Unorthodox. Unstoppable."
  },
  {
    id: 14,
    name: "Pat Cummins",
    age: 30,
    jerseyno: 30,
    country: "Australia",
    gender: "Male",
    specialist: "Fast Bowler",
    imgurl: "https://picsum.photos/id/1038/300/300",
    pickupline: "Lead from the front."
  },
  {
    id: 15,
    name: "David Warner",
    age: 37,
    jerseyno: 31,
    country: "Australia",
    gender: "Male",
    specialist: "Opening Batsman",
    imgurl: "https://picsum.photos/id/1039/300/300",
    pickupline: "Attack is my defense."
  },

  {
    id: 16,
    name: "AB de Villiers",
    age: 39,
    jerseyno: 17,
    country: "South Africa",
    gender: "Male",
    specialist: "Batsman",
    imgurl: "https://picsum.photos/id/1040/300/300",
    pickupline: "360 degrees of magic."
  },
  {
    id: 17,
    name: "Kagiso Rabada",
    age: 28,
    jerseyno: 25,
    country: "South Africa",
    gender: "Male",
    specialist: "Fast Bowler",
    imgurl: "https://picsum.photos/id/1041/300/300",
    pickupline: "Raw pace, pure intent."
  },
  {
    id: 18,
    name: "Shakib Al Hasan",
    age: 36,
    jerseyno: 75,
    country: "Bangladesh",
    gender: "Male",
    specialist: "All-Rounder",
    imgurl: "https://picsum.photos/id/1042/300/300",
    pickupline: "Balance wins games."
  },
  {
    id: 19,
    name: "Lasith Malinga",
    age: 40,
    jerseyno: 99,
    country: "Sri Lanka",
    gender: "Male",
    specialist: "Fast Bowler",
    imgurl: "https://picsum.photos/id/1043/300/300",
    pickupline: "Yorkers are deadly."
  },
  {
    id: 20,
    name: "Sanath Jayasuriya",
    age: 54,
    jerseyno: 6,
    country: "Sri Lanka",
    gender: "Male",
    specialist: "All-Rounder",
    imgurl: "https://picsum.photos/id/1044/300/300",
    pickupline: "Fearless from ball one."
  },
  
  {
    id: 21,
    name: "Hardik Pandya",
    age: 30,
    jerseyno: 33,
    country: "India",
    gender: "Male",
    specialist: "All-Rounder",
    imgurl: "https://picsum.photos/id/1045/300/300",
    pickupline: "Confidence is my cover drive."
  },
  {
    id: 22,
    name: "KL Rahul",
    age: 31,
    jerseyno: 1,
    country: "India",
    gender: "Male",
    specialist: "Batsman",
    imgurl: "https://picsum.photos/id/1047/300/300",
    pickupline: "Style meets stability."
  },
  {
    id: 23,
    name: "Ravindra Jadeja",
    age: 35,
    jerseyno: 8,
    country: "India",
    gender: "Male",
    specialist: "All-Rounder",
    imgurl: "https://picsum.photos/id/1047/300/300",
    pickupline: "Sword celebration loading."
  },
  {
    id: 24,
    name: "Yuvraj Singh",
    age: 42,
    jerseyno: 12,
    country: "India",
    gender: "Male",
    specialist: "All-Rounder",
    imgurl: "https://picsum.photos/id/1048/300/300",
    pickupline: "Six sixes. Enough said."
  },
  {
    id: 25,
    name: "Gautam Gambhir",
    age: 42,
    jerseyno: 5,
    country: "India",
    gender: "Male",
    specialist: "Opening Batsman",
    imgurl: "https://picsum.photos/id/1049/300/300",
    pickupline: "Big match mindset."
  },

  {
    id: 26,
    name: "Glenn Maxwell",
    age: 35,
    jerseyno: 32,
    country: "Australia",
    gender: "Male",
    specialist: "All-Rounder",
    imgurl: "https://picsum.photos/id/1050/300/300",
    pickupline: "Anything is possible."
  },
  {
    id: 27,
    name: "Mitchell Starc",
    age: 34,
    jerseyno: 56,
    country: "Australia",
    gender: "Male",
    specialist: "Fast Bowler",
    imgurl: "https://picsum.photos/id/1051/300/300",
    pickupline: "Left arm thunder."
  },
  {
    id: 28,
    name: "Adam Gilchrist",
    age: 52,
    jerseyno: 7,
    country: "Australia",
    gender: "Male",
    specialist: "Wicketkeeper",
    imgurl: "https://picsum.photos/id/1052/300/300",
    pickupline: "Attack from ball one."
  },
  {
    id: 29,
    name: "Ricky Ponting",
    age: 49,
    jerseyno: 14,
    country: "Australia",
    gender: "Male",
    specialist: "Batsman",
    imgurl: "https://picsum.photos/id/1053/300/300",
    pickupline: "Leadership defines me."
  },
  {
    id: 30,
    name: "Shane Warne",
    age: 52,
    jerseyno: 23,
    country: "Australia",
    gender: "Male",
    specialist: "Spin Bowler",
    imgurl: "https://picsum.photos/id/1054/300/300",
    pickupline: "Spin is magic."
  },

  {
    id: 31,
    name: "Chris Gayle",
    age: 44,
    jerseyno: 333,
    country: "West Indies",
    gender: "Male",
    specialist: "Opening Batsman",
    imgurl: "https://picsum.photos/id/1054/300/300",
    pickupline: "Universe Boss mode on."
  },
  {
    id: 32,
    name: "Brian Lara",
    age: 54,
    jerseyno: 9,
    country: "West Indies",
    gender: "Male",
    specialist: "Batsman",
    imgurl: "https://picsum.photos/id/1056/300/300",
    pickupline: "Elegance over power."
  },
  {
    id: 33,
    name: "Jason Holder",
    age: 32,
    jerseyno: 98,
    country: "West Indies",
    gender: "Male",
    specialist: "All-Rounder",
    imgurl: "https://picsum.photos/id/1057/300/300",
    pickupline: "Calm and composed."
  },
  {
    id: 34,
    name: "Muttiah Muralitharan",
    age: 51,
    jerseyno: 800,
    country: "Sri Lanka",
    gender: "Male",
    specialist: "Spin Bowler",
    imgurl: "https://picsum.photos/id/1058/300/300",
    pickupline: "Records speak."
  },
  {
    id: 35,
    name: "Kumar Sangakkara",
    age: 46,
    jerseyno: 11,
    country: "Sri Lanka",
    gender: "Male",
    specialist: "Wicketkeeper",
    imgurl: "https://picsum.photos/id/1059/300/300",
    pickupline: "Grace under pressure."
  },

  {
    id: 36,
    name: "Mohammad Amir",
    age: 31,
    jerseyno: 5,
    country: "Pakistan",
    gender: "Male",
    specialist: "Fast Bowler",
    imgurl: "https://picsum.photos/id/1060/300/300",
    pickupline: "Swing is my weapon."
  },
  {
    id: 37,
    name: "Wasim Akram",
    age: 57,
    jerseyno: 1,
    country: "Pakistan",
    gender: "Male",
    specialist: "Fast Bowler",
    imgurl: "https://picsum.photos/id/1061/300/300",
    pickupline: "The art of reverse swing."
  },
  {
    id: 38,
    name: "Inzamam-ul-Haq",
    age: 53,
    jerseyno: 12,
    country: "Pakistan",
    gender: "Male",
    specialist: "Batsman",
    imgurl: "https://picsum.photos/id/1062/300/300",
    pickupline: "Silky smooth shots."
  },
  {
    id: 39,
    name: "Shahid Afridi",
    age: 44,
    jerseyno: 10,
    country: "Pakistan",
    gender: "Male",
    specialist: "All-Rounder",
    imgurl: "https://picsum.photos/id/1063/300/300",
    pickupline: "Boom boom always."
  },
  {
    id: 40,
    name: "Saqlain Mushtaq",
    age: 47,
    jerseyno: 28,
    country: "Pakistan",
    gender: "Male",
    specialist: "Spin Bowler",
    imgurl: "https://picsum.photos/id/1064/300/300",
    pickupline: "Doosra king."
  },

  {
    id: 41,
    name: "Andre Russell",
    age: 35,
    jerseyno: 12,
    country: "West Indies",
    gender: "Male",
    specialist: "All-Rounder",
    imgurl: "https://picsum.photos/id/1065/300/300",
    pickupline: "Power meets pace."
  },
  {
    id: 42,
    name: "Sunil Narine",
    age: 35,
    jerseyno: 74,
    country: "West Indies",
    gender: "Male",
    specialist: "Spin Bowler",
    imgurl: "https://picsum.photos/id/1066/300/300",
    pickupline: "Mystery is my skill."
  },
  {
    id: 43,
    name: "Quinton de Kock",
    age: 31,
    jerseyno: 12,
    country: "South Africa",
    gender: "Male",
    specialist: "Wicketkeeper",
    imgurl: "https://picsum.photos/id/1067/300/300",
    pickupline: "Fearless starts."
  },
  {
    id: 44,
    name: "Hashim Amla",
    age: 40,
    jerseyno: 1,
    country: "South Africa",
    gender: "Male",
    specialist: "Batsman",
    imgurl: "https://picsum.photos/id/1068/300/300",
    pickupline: "Pure technique."
  },
  {
    id: 45,
    name: "Dale Steyn",
    age: 40,
    jerseyno: 8,
    country: "South Africa",
    gender: "Male",
    specialist: "Fast Bowler",
    imgurl: "https://picsum.photos/id/1069/300/300",
    pickupline: "Fast. Fierce. Fearless."
  },

  {
    id: 46,
    name: "Shubman Gill",
    age: 24,
    jerseyno: 77,
    country: "India",
    gender: "Male",
    specialist: "Opening Batsman",
    imgurl: "https://picsum.photos/id/1070/300/300",
    pickupline: "Future is bright."
  },
  {
    id: 47,
    name: "Rishabh Pant",
    age: 26,
    jerseyno: 17,
    country: "India",
    gender: "Male",
    specialist: "Wicketkeeper",
    imgurl: "https://picsum.photos/id/1071/300/300",
    pickupline: "Fearless cricket."
  },
  {
    id: 48,
    name: "Mohammed Shami",
    age: 33,
    jerseyno: 11,
    country: "India",
    gender: "Male",
    specialist: "Fast Bowler",
    imgurl: "https://picsum.photos/id/1072/300/300",
    pickupline: "Seam speaks."
  },
  {
    id: 49,
    name: "Suryakumar Yadav",
    age: 33,
    jerseyno: 63,
    country: "India",
    gender: "Male",
    specialist: "Batsman",
    imgurl: "https://picsum.photos/id/1073/300/300",
    pickupline: "360 degree shots."
  },
  {
    id: 50,
    name: "Axar Patel",
    age: 30,
    jerseyno: 20,
    country: "India",
    gender: "Male",
    specialist: "All-Rounder",
    imgurl: "https://picsum.photos/id/1074/300/300",
    pickupline: "Silent match-winner."
  }
];



  
   






    return(
        <div id="parent-card">
            {
                cricketers.map((ele)=>{
                     return <ChildCard info={ele}/>
                }
        )
            }
            
        </div>
        
    )
}
        


               
            
    

export default ParentCard;