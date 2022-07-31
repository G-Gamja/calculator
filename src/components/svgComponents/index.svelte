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

<!-- <div class="root">
	<div class="title-field">{title}</div>
	<div class="graph-field">
		<div class="l-guide">
			{#each leftGuides as v}
				<div class="guide-item">{v}</div>
			{/each}
		</div>
		<div class="graphics">
			<slot />
		</div>
	</div>
	<div class="under-field">// UNDER</div>
</div> -->

<svg class="graph">
	<rect width="500" height="800" />
	<text x="400" y="20">{title}</text>
	<g class="grid x-grid" id="xGrid">
		<line x1="90" x2="90" y1="5" y2="371" />
	</g>
	<g class="grid y-grid" id="yGrid">
		<line x1="90" x2="705" y1="370" y2="370" />
	</g>
	<g class="labels x-labels">
		<text x="100" y="400">2008</text>
		<text x="246" y="400">2009</text>
		<text x="392" y="400">2010</text>
		<text x="538" y="400">2011</text>
		<text x="684" y="400">2012</text>
		<text x="400" y="440" class="label-title">{rightLegend}</text>
	</g>
	<g class="labels y-labels">
		<text x="80" y="15">15</text>
		<text x="80" y="131">10</text>
		<text x="80" y="248">5</text>
		<text x="80" y="373">0</text>
		<text x="50" y="200" class="label-title">{leftLegend}</text>
	</g>
	<g class="data" data-setname="Our first data set">
		<circle cx="90" cy="192" data-value="7.2" r="4" />
		<circle cx="240" cy="141" data-value="8.1" r="4" />
		<circle cx="388" cy="179" data-value="7.7" r="4" />
		<circle cx="531" cy="200" data-value="6.8" r="4" />
		<circle cx="677" cy="104" data-value="6.7" r="4" />
	</g>
	<g class="linedata">
		<line x1="90" x2="240" y1="192" y2="141" />
		<line x1="90" x2="90" y1="5" y2="371" />
		<line x1="90" x2="90" y1="5" y2="371" />
		<line x1="90" x2="90" y1="5" y2="371" />
	</g>
</svg>

<style lang="scss">
	rect {
		fill: pink;
		stroke-width: 2px;
		stroke: rgb(0, 0, 0);
	}
	.linedata{
		stroke: blue;
	}
	.graph .labels.x-labels {
		text-anchor: middle;
	}

	.graph .labels.y-labels {
		text-anchor: end;
	}

	.graph {
		margin-top: 100px;
		height: 500px;
		width: 800px;
	}

	.graph .grid {
		stroke: black;
		stroke-dasharray: 0;
		stroke-width: 3;
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

	.data {
		fill: red;
		stroke-width: 1;
	}
	.linedata{

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
