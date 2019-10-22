import React, { Component } from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';
const CanvasJSChart = CanvasJSReact.CanvasJSChart;
const CanvasJS = CanvasJSReact.CanvasJS;
 
class BarChart extends Component {
	addSymbols(e){
		const suffixes = ["", "K", "M", "B"];
		let order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
		if(order > suffixes.length - 1)
			order = suffixes.length - 1;
		const suffix = suffixes[order];
		return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
	}
	render() {
		const options = {
			animationEnabled: true,
			theme: "light2",
			title:{
				text: "Rack Gives Back"
			},
			axisX: {
				title: "Teams/Individuals",
				reversed: true,
			},
			axisY: {
				title: "Donations/Points ($)",
				labelFormatter: this.addSymbols
			},
			data: [{
				type: "bar",
				dataPoints: [
					{ y:  220, label: "APEX" },
					{ y:  180, label: "AAA & Product" },
					{ y:  80, label: "Downstairs Front" },
					{ y:  56, label: "Downstairs Back" },
					{ y:  37, label: "Mail & Infra" },
					{ y:  33, label: "Skynet" },
				]
			}]
		};
		
		return (
		<div>
			<div className="progress mb-5" style={{height: '50px'}}>
				<div className="progress-bar progress-bar-striped progress-bar-animated bg-success" style={{width: '40%'}}>
					<h3 className='px-3 pt-2'>$565.96 raised</h3>
				</div>
				 <h3 className='pl-5 pt-2'>Goal: $1,000</h3>
			</div>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
		</div>
		);
	}
}

export default BarChart;