import React, { Component } from "react";

// const Conversion = () => <div className="text-red-800">Conversion Baby! asdf</div>;

class Conversion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            temps: []
        };
    }

    async componentDidMount() {
        const response = await fetch("/api/temperature");
        const data = await response.json();
        this.setState({ temps: data.temps.sort((a, b) => b - a), loading: false })
    }

    fahrenheitToCelsius(t) {
        return (t - 32) * (5.0 / 9.0);
    }

    fahrenheitToKelvin(t) {
        return this.fahrenheitToCelsius(t) + 273.15;
    }


    render() {
        const TableHeader = (props) => <th scope="col" class="w-1/3 px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase">{props.text}</th>;
        const TableData = (props) => <td class="px-3 py-4 whitespace-nowrap text-center text-sm text-gray-500 slashed-zero oldstyle-nums">{props.data}</td>;

        const skeletonData = <td class="px-3 py-4"><div class="h-4 w-12 mx-auto bg-gray-300 rounded animate-pulse"></div></td>;
        const skeletonRow = <tr>{skeletonData}{skeletonData}{skeletonData}</tr>;

        let tableBody;
        if (this.state.loading) {
            tableBody = skeletonRow;
        } else {
            tableBody = this.state.temps.map((i) => {
                return (
                    <tr>
                        <TableData data={+(i).toFixed(2)} />
                        <TableData data={+this.fahrenheitToCelsius(i).toFixed(2)} />
                        <TableData data={+this.fahrenheitToKelvin(i).toFixed(2)} />
                    </tr>
                )
            });
        }

        return (
            <div class="mx-auto min-h-screen flex flex-col items-center justify-center">
                <h1 className="text-4xl py-6 px-3">Conversion Baby!</h1>
                <div class="shadow-xl border-b mb-6 border-gray-200 sm:rounded-lg flex-none w-11/12 md:w-1/2 lg:w-1/3 2xl:w-1/4">
                    <table class="min-w-full divide-y divide-gray-200" table-fixed>
                        <thead class="bg-gray-50">
                            <tr>
                                <TableHeader text="Fahrenheit" />
                                <TableHeader text="Celsius" />
                                <TableHeader text="Kelvin" />
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                            {tableBody}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Conversion;
