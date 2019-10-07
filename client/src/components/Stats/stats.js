import React from "react";
import fakestats from "../../assets/images/fakestats.png";
import { Container, Row, Col } from "../Grid/index";
import "../../assets/css/stats.css";
// import { ResponsiveBar } from "@nivobar"; 

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
// const MyResponsiveBar = ({ data /* see data tab */ }) => (
//     <ResponsiveBar
//         data={data}
//         keys={[ 'hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut' ]}
//         indexBy="country"
//         margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
//         padding={0.15}
//         innerPadding={1}
//         groupMode="grouped"
//         colors={{ scheme: 'nivo' }}
//         defs={[
//             {
//                 id: 'dots',
//                 type: 'patternDots',
//                 background: 'inherit',
//                 color: '#38bcb2',
//                 size: 4,
//                 padding: 1,
//                 stagger: true
//             },
//             {
//                 id: 'lines',
//                 type: 'patternLines',
//                 background: 'inherit',
//                 color: '#eed312',
//                 rotation: -45,
//                 lineWidth: 6,
//                 spacing: 10
//             }
//         ]}
//         fill={[
//             {
//                 match: {
//                     id: 'fries'
//                 },
//                 id: 'dots'
//             },
//             {
//                 match: {
//                     id: 'sandwich'
//                 },
//                 id: 'lines'
//             }
//         ]}
//         borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
//         axisTop={null}
//         axisRight={null}
//         axisBottom={{
//             tickSize: 5,
//             tickPadding: 5,
//             tickRotation: 0,
//             legend: 'country',
//             legendPosition: 'middle',
//             legendOffset: 32
//         }}
//         axisLeft={{
//             tickSize: 5,
//             tickPadding: 5,
//             tickRotation: 0,
//             legend: 'food',
//             legendPosition: 'middle',
//             legendOffset: -40
//         }}
//         labelSkipWidth={12}
//         labelSkipHeight={12}
//         labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
//         legends={[
//             {
//                 dataFrom: 'keys',
//                 anchor: 'bottom-right',
//                 direction: 'column',
//                 justify: false,
//                 translateX: 120,
//                 translateY: 0,
//                 itemsSpacing: 2,
//                 itemWidth: 100,
//                 itemHeight: 20,
//                 itemDirection: 'left-to-right',
//                 itemOpacity: 0.85,
//                 symbolSize: 20,
//                 effects: [
//                     {
//                         on: 'hover',
//                         style: {
//                             itemOpacity: 1
//                         }
//                     }
//                 ]
//             }
//         ]}
//         animate={true}
//         motionStiffness={90}
//         motionDamping={15}
//     />
// )

function ClassStats(){
    return (
        // <Container fluid>
            <div>
            <Row>
                <Col size="lg-3"/>
                <Col size="lg-6">
                <img className="chart" id="chart" src={fakestats} />
                </Col>
                <Col size="lg-3"/>
            </Row>
        </div>
        // </Container>
        
    );
}

export default ClassStats;