import React from "react";
import { Text, View, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
  
const Story = (props: {judul: string, gambar: string}) => {
    return (
        <View style={{alignItems: 'center', marginRight: 20}}>
            <Image
                source={{
                    uri: props.gambar
                }}
                style={{width: 100, height: 100, borderRadius: 100 / 2}}
            />
            <Text style={{maxWidth: 100, textAlign: 'center'}}>{props.judul}</Text>
        </View>
    );
};

const PropsDinamis = () => {
    return (
        <View>
            <Text>Materi Component Dinamis Dengan Props</Text>
            <ScrollView horizontal>
                <View style={{flexDirection: 'row'}}>
                    <Story 
                        judul="Togame Jo" 
                        gambar="https://i.pinimg.com/736x/17/ce/1e/17ce1e188851eeee9a497a80722a9625.jpg"
                    />
                    <Story 
                        judul="Umemiya Hajime" 
                        gambar="https://i.pinimg.com/736x/81/9a/6e/819a6e3071c2d20bd8d07250dbb27e3c.jpg" 
                    />
                    <Story 
                        judul="Tomiyama Chouji" 
                        gambar="https://i.pinimg.com/736x/d3/95/14/d39514fe2823977ebe7ba3c3e3bee326.jpg" 
                    />
                    <Story 
                        judul="Haruka Sakura" 
                        gambar="https://i.pinimg.com/736x/03/7e/ac/037eac4d3ee60e9c73ca7e7ddea76303.jpg" 
                    />
                    <Story 
                        judul="a" 
                        gambar="https://i.pinimg.com/736x/17/ce/1e/17ce1e188851eeee9a497a80722a9625.jpg" 
                    />
                    <Story 
                        judul="b" 
                        gambar="https://i.pinimg.com/736x/81/9a/6e/819a6e3071c2d20bd8d07250dbb27e3c.jpg" 
                    />
                    <Story 
                        judul="c" 
                        gambar="https://i.pinimg.com/736x/d3/95/14/d39514fe2823977ebe7ba3c3e3bee326.jpg" 
                    />
                    <Story 
                        judul="d" 
                        gambar="https://i.pinimg.com/736x/03/7e/ac/037eac4d3ee60e9c73ca7e7ddea76303.jpg" 
                    />
                    <Story 
                        judul="e" 
                        gambar="https://i.pinimg.com/736x/17/ce/1e/17ce1e188851eeee9a497a80722a9625.jpg" 
                    />
                    <Story 
                        judul="f" 
                        gambar="https://i.pinimg.com/736x/d3/95/14/d39514fe2823977ebe7ba3c3e3bee326.jpg" 
                    />
                    <Story 
                        judul="g" 
                        gambar="https://i.pinimg.com/736x/03/7e/ac/037eac4d3ee60e9c73ca7e7ddea76303.jpg" 
                    />
                </View>
            </ScrollView>
        </View>
    );
};

export default PropsDinamis;