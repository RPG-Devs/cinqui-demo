<script>
    
    let i = 0;
	let undoStack = [[]];
	let circles = [];
	let selected;
	let adjusting = false;
	let adjusted = false;

	function handleClick(event) {
		if (adjusting) {
			adjusting = false;

			// if circle was adjusted,
			// push to the stack
			if (adjusted) push();
			return;
		}

		const circle = {
			cx: event.clientX,
			cy: event.clientY,
			r: 50
		};

		circles = circles.concat(circle);
		selected = circle;

		push();
	}

	function adjust(event) {
		selected.r = +event.target.value;
		circles = circles;
		adjusted = true;
	}

	function select(circle, event) {
		if (!adjusting) {
			event.stopPropagation();
			selected = circle;
		}
	}

	function push() {
		const newUndoStack = undoStack.slice(0, ++i);
		newUndoStack.push(clone(circles));
		undoStack = newUndoStack;
	}

	function travel(d) {
		circles = clone(undoStack[(i += d)]);
		adjusting = false;
	}

	function clone(circles) {
		return circles.map(({ cx, cy, r }) => ({ cx, cy, r }));
	}

</script>

<div class="absolute bg-transparent h-full w-full">
  <svg class="h-full w-full bg-transparent" on:click={handleClick}>
    {#each circles as circle}
		<circle
			cx={circle.cx}
			cy={circle.cy}
			r={circle.r}
			on:click={(event) => select(circle, event)}
			on:contextmenu|stopPropagation|preventDefault={() => {
				adjusting = !adjusting;
				if (adjusting) selected = circle;
			}}
			fill={circle === selected ? '#FF0000' : '#FF4800'}
		/>
	  {/each}
  </svg>
  {#if adjusting}
    <div class="adjuster">
      <p>Ajustar diámetro </p>
      <input type="range" value={selected.r} on:input={adjust} />
    </div>
  {/if}
  </div>

<style>
	.controls {
		position: absolute;
		width: 100%;
		text-align: center;
	}

	svg {
		background-color: #fff;
    opacity: 0.4;
		width: 100%;
		height: 100%;
	}

	circle {
		stroke: gray;
	}

	.adjuster {
		position: absolute;
		width: 80%;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		padding: 1em;
		text-align: center;
		background-color: rgba(255, 255, 255, 0.7);
		border-radius: 4px;
	}

	input[type='range'] {
		width: 100%;
	}
</style>