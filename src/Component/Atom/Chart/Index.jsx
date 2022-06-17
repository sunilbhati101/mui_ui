import { Typography } from '@mui/material';
import * as React from 'react';
import { PureComponent } from 'react';
import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, } from 'recharts';

const data = [
    {
        name: 'Mon',
        uv: 42,
        pv: 11,
        num: 0,
        // amt: 1400,
        // cnt: 490,
    },
    {
        name: 'Tue',
        uv: 28,
        pv: 10,
        num: 9,
        // amt: 1506,
        // cnt: 590,
    },
    {
        name: 'Wed',
        uv: 43,
        pv: 8,
        num: 18,
        // amt: 989,
        // cnt: 350,
    },
    {
        name: 'Thu',
        uv: 34,
        pv: 11,
        num: 27,
        // amt: 1228,
        // cnt: 480,
    },
    {
        name: 'Fri',
        uv: 20,
        pv: 8,
        num: 36,
        // amt: 1100,
        // cnt: 460,
    },
    {
        name: 'Sat',
        uv: 25,
        pv: 10,
        num: 45,
        // amt: 1700,
        // cnt: 380,
    },
    {
        name: 'Sun',
        uv: 22,
        pv: 17,
        num: 54,
        // amt: 1700,
        // cnt: 380,
    },
];

export default class Example extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/simple-composed-chart-h9zif';

    render() {
        return (
            <>
                <Typography>New vs. Closed</Typography>
                <ResponsiveContainer width="100%" aspect={2}>
                    <ComposedChart
                        width={500}
                        height={400}
                        data={data}
                        margin={{
                            top: 20,
                            right: 20,
                            bottom: 20,
                            left: 20,
                        }}
                    >

                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis dataKey="name" scale="band" />
                        <YAxis dataKey="num"  />
                        <Tooltip />
                        {/* <Legend /> */}
                        <Bar dataKey="pv" barSize={34} fill="#413ea0" />
                        <Line dataKey="uv" barSize={10} fill="#181a19" stroke="#181a19" />
                        {/* <Scatter dataKey="cnt" fill="red" /> */}
                    </ComposedChart>
                </ResponsiveContainer>
            </>
        );
    }
}
