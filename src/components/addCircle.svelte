<script>
    import { writable } from 'svelte/store';
  
    let circles = writable([]);
  
    function addCircle() {
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      circles.update(circles => [...circles, { id: Date.now(), x, y }]);
    }
  
    function onDrag(event, circle) {
      const rect = event.target.getBoundingClientRect();
      const offsetX = event.clientX - rect.left - circle.x;
      const offsetY = event.clientY - rect.top - circle.y;
  
      const moveHandler = (moveEvent) => {
        circle.x = moveEvent.clientX - rect.left - offsetX;
        circle.y = moveEvent.clientY - rect.top - offsetY;
        circles.update(circles => circles.map(c => c.id === circle.id ? circle : c));
      };
  
      const upHandler = () => {
        window.removeEventListener('mousemove', moveHandler);
        window.removeEventListener('mouseup', upHandler);
      };
  
      window.addEventListener('mousemove', moveHandler);
      window.addEventListener('mouseup', upHandler);
    }
  </script>
  
  <style>
    .circle {
      position: absolute;
      width: 400px;
      height: 400px;
      border-radius: 50%;
      background-color: rgba(237, 28, 36, 0.5);
      cursor: pointer;
    }
  </style>
  
  <div class="relative w-full h-full">
    <button on:click={addCircle} class="text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline bg-red-600" style="border-radius: 10px;">
      Agregar círculo
    </button>
    {#each $circles as circle (circle.id)}
      <div
        class="circle"
        style="left: {circle.x}px; top: {circle.y}px;"
        on:mousedown={(event) => onDrag(event, circle)}
      ></div>
    {/each}
  </div>
