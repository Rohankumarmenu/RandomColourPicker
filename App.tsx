// import React, { useState } from 'react';

// import {
//   StatusBar,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from 'react-native';

// function App(): React.JSX.Element {
// const [bgc,setBgc]=useState('white');

// const generatecolour=()=>{
//   const range='0123456789ABCDEF'
//   let colour='#'
//   for(let i=0;i<6;i++)
//   {
//     colour=colour+range[Math.floor(Math.random()*16)]
//   }
//   setBgc(colour)
// }

// const Rectangle = () => {
//   return <View style={styles.rectangle} />;
// };

//   return (
//     // <Text>Testing Phase</Text>
//     <>
//       <StatusBar ></StatusBar>
//       <View style={[styles.container,{backgroundColor:bgc}]}>
//         <TouchableOpacity onPress={generatecolour}>
//           <View style={styles.actionBtn}>
//             <Text style={styles.textStyle}>Press Me</Text>
//           </View>
//         </TouchableOpacity>
//       </View>
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center"
//   },
//   actionBtn: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: 12,
//     paddingHorizontal: 32,
//     borderRadius: 8,
//     elevation: 3,
//     backgroundColor: '#ebb434',
//     shadowColor: 'blue',
//     shadowRadius: 4


//   },
//   textStyle: {
//     fontSize: 16,
//     lineHeight: 21,
//     fontWeight: 'bold',
//     letterSpacing: 0.25,
//     color: 'white',
//   },

//   rectangle: {
//     width: 100 * 2,
//     height: 100,
//     backgroundColor: "red",
//   },
// });

// export default App;


import React, { useState } from 'react';

import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function App(): React.JSX.Element {
const [bgc,setBgc]=useState('white');
const [k, setK] = useState<string[]>([]);


// let k=[];
const generatecolour=()=>{
  const range='0123456789ABCDEF'
  let colour='#'
  for(let i=0;i<6;i++)
  {
    colour=colour+range[Math.floor(Math.random()*16)]
  }
  setBgc(colour)
  setK([...k, colour]);
}

const randomIndex = Math.floor(Math.random() * k.length);
// const Rectangle = () => {
//   return <View style={styles.rectangle} />;
// };

// generatecolour()
  return (
    // <Text>Testing Phase</Text>
    <>
      <StatusBar ></StatusBar>
      <View style={[{backgroundColor:bgc},styles.container]}>
        <TouchableOpacity onPress={() => { generatecolour();generatecolour(); generatecolour(); generatecolour(); }}>
          

          <View style={styles.container1}>
                {/* <ScrollView style={styles.scrollView}
                    contentContainerStyle={styles.scrollViewContent}> */}
                    <View style={[styles.card, {backgroundColor:randomIndex+2}]}>
                        <Text style={{ color: 'black'   }}>CHECK</Text>
                    </View>

                    <View style={[styles.card, {backgroundColor:k[randomIndex]}]}>
                        <Text style={{ color: 'black' }}>CHECK</Text>
                    </View>

                    <View style={[styles.card, {backgroundColor:k[randomIndex+1]}]}>
                        <Text style={{ color: 'black' }}>CHECK</Text>
                    </View>
                {/* </ScrollView> */}
            </View>

            <View style={styles.actionBtn}>
            <Text style={styles.textStyle}>Press Me</Text>
          </View>
        </TouchableOpacity>
      </View>


      
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: 'row'
  },
  actionBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6, 
    paddingHorizontal: 10, 
    borderRadius: 8,
    backgroundColor: '#ffffff',
    shadowColor: 'blue',
    shadowRadius: 4,
    marginTop: 70
  },
  
  textStyle: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },

  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
},
textcolor: {
    color: 'black'
},
container1: {
//     flex: 1,
    flexDirection: 'row'
   
},
card: {
    width: 100,
    height: 100,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8
},

});

export default App;
