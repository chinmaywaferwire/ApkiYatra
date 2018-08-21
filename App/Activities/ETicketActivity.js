import React from "react";
import { Card, Tile, Button, Icon } from "react-native-elements";
import { View, Text, ScrollView } from "react-native";

export default class ETicketActivity extends React.Component {

    constructor(props) {
        super(props)
        this.data = {
            fare: 200,
            startPoint: "MIT College of Engineering",
            endPoint: "Ojas Apartments",
            midPoints: [
                {
                    stop: 'Point 1',
                    mode: "Bus",
                    ticketFare: 5,
                    startTime: "8:00 am",
                    endTime: '8:13 am'
                },
                {
                    stop: 'Point 2',
                    mode: "Train",
                    ticketFare: 15,
                    startTime: "8:15 am",
                    endTime: "8:50 am"
                },
                {
                    stop: 'Point 3',
                    mode: "Walking",
                    ticketFare: 0,
                    startTime: "8:50 am",
                    endTime: "9:00 am"
                },
            ]
        }
    }

    static navigationOptions = {
        header: null,
    }

    addIconsToData = () => {
        var midPoints = this.data.midPoints;
        for (var i = 0; i < midPoints.length; i += 1) {
            var icon = null
            var type = null
            switch (midPoints[i].mode) {
                case "Bus":
                    icon = 'bus'
                    type = 'material-community'
                    break;
                case "Train":
                    icon = 'train'
                    type = 'material-community'
                    break;
                case "Walking":
                    icon = 'md-walk'
                    type = 'ionicon'
                default:
                    break;
            }

            midPoints[i].icon = icon
            midPoints[i].iconType = type
            midPoints[i].id = i
        }

        this.data.midPoints = midPoints

        console.log(midPoints)

    }

    render() {

        var commuteDetailsText = this.data.startPoint + " -> " + this.data.endPoint
        this.addIconsToData()
        return (
            <View
                style={{ flex: 1 }}
            >
                <Button title='Pay' onPress={() => { console.log('Payment') }} />
                <Text>{commuteDetailsText}</Text>
                <ScrollView
                    contentContainerStyle={{ flex: 1 }}
                >
                    {
                        this.data.midPoints.map((item) => (
                            <Card
                                key={item.id}
                                title={item.mode}
                            >
                                <Icon name={item.icon} type={item.iconType} />
                                <Text>Station : {item.stop}</Text>
                                <Text>Fare : {item.ticketFare}</Text>
                            </Card>
                        ))
                    }
                </ScrollView>
                <Button title='Go back' onPress={() => { this.props.navigation.navigate('Map') }} />
            </View>
        )
    }
}