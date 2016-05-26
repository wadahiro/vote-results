import * as React from 'react';
const Progress = require('react-progressbar');

export interface Props extends React.Props<VoteResults> {
    data: {
        name: string;
        vote: number
    }[];
    test: string;
}

export class VoteResults extends React.Component<Props, void>{
    render() {
        const colors = make_color_chart(this.props.data.length);
        return (
            <div className='row'>
                {this.props.data.map((x, i) => {
                    return <div key={x.name}>
                        <hr />
                        <h6>{x.name}: {x.vote}</h6>
                        <Progress completed={x.vote} color={`rgb(${colors[i]})`} height={50}>
                        </Progress>
                        <hr />
                    </div>;
                }) }
            </div>
        );
    }
}

function make_color_chart(input, thin = true) {
    var r = 0x0;
    var g = 0x0;
    var b = 0x0;
    var thin_plus = (thin) ? 1 : 0;
    var colors_array = new Array();
    for (var i = 0; ; i++) {
        if (Math.pow(i, 3) >= input) {
            var max = i - 1 + thin_plus;
            break;
        }
    }

    var _plus = 0xff / max;
    for (var i = thin_plus; i <= max; i++) {
        r = _plus * i;
        g = 0x0;
        b = 0x0;
        for (var j = thin_plus; j <= max; j++) {
            g = _plus * j;
            b = 0x0;
            for (var k = thin_plus; k <= max; k++) {
                b = _plus * k;
                colors_array.push([Math.round(r), Math.round(g), Math.round(b)]);
                if (colors_array.length >= input) return colors_array;
            }
            if (colors_array.length >= input) return colors_array;
        }
        if (colors_array.length >= input) return colors_array;
    }
}
