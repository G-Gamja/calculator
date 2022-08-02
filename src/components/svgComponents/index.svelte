<script lang="ts">
	// reference
	// https://css-tricks.com/how-to-make-charts-with-svg/
	export let title: string;
	export let leftLegend: string;
	export let rightLegend: string;
	// export let color: string;
	// export let numbers: number[];
	// export let max: number;
	// export let widthSize: number;
	// export let heightSive: number;
</script>


<svg class="graph">
	<g>
		<rect x="0" y="0" width="800" height="900" />
	</g>

	<text x="400" y="20">{title}</text>
	<g class="graph_back">
		<g class="grid x-grid" id="xGrid">
			<line x1="90" x2="90" y1="10" y2="370" />
		</g>
		<g class="grid y-grid" id="yGrid">
			<line x1="90" x2="700" y1="370" y2="370" />
		</g>
		<g class="labels x-labels">

			<text x="400" y="440" class="label-title">{rightLegend}</text>
		</g>
		<g class="labels y-labels">
			<!-- <text x="80" y="15">15</text>
			<text x="80" y="131">10</text>
			<text x="80" y="248">5</text>
			<text x="80" y="370">0</text> -->
			<text x="50" y="200" class="label-title">{leftLegend}</text>
		</g>

		<g class="linedata">

			<slot />
		</g>
	</g>
</svg>

<style lang="scss">
	$graph_height: 500px;
	$graph_width: 800px;
	rect {
		fill: pink;
		stroke-width: 2px;
		stroke: rgb(0, 0, 0);
	}
	// .linedata {
	// 	stroke: blue;
	// }
	.graph_back {
		background-color: #f00;
		margin-top: 20px;
	}
	.graph .labels.x-labels {
		text-anchor: middle;
	}

	.graph .labels.y-labels {
		text-anchor: end;
	}

	.graph {
		margin-top: 100px;
		height: $graph_height;
		width: $graph_width;
	}

	.graph .grid {
		stroke: black;
		stroke-dasharray: 0;
		stroke-width: 3;
		margin-top: 40px;
	}

	.labels {
		font-size: 13px;
	}

	.label-title {
		font-weight: bold;
		text-transform: uppercase;
		font-size: 12px;
		fill: black;
	}

	.root {
		$title-height: 48px;
		$under-height: 32px;
		height: 100%;
		width: 100%;
		.title-field {
			height: $title-height;
			background: #f00;
		}
		.graph-field {
			height: calc(100% - $title-height - $under-height);
			display: flex;
			position: relative;
			.l-guide {
				height: 100%;
				width: 100%;
				background: #ff0;
				display: flex;
				flex-direction: column;
				.guide-item {
					flex: 1 0;
					border-bottom: solid 1px #000;
				}
			}
			.graphics {
				right: 0;
				top: 0;
				height: 100%;
				width: calc(100% - 100px);
				position: absolute;
				background: rgba(0, 255, 0, 0.3);
				border-left: solid 2px #000;
				display: flex;
			}
		}
		.under-field {
			height: $under-height;
		}
	}
</style>
