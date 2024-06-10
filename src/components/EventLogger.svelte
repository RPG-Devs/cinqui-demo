<script>

// document
// 	.getElementById('agregar')
// 	.addEventListener('click', function () {
// 		var texto = document.getElementById('texto').value;
// 		var textoImpreso =
// 			document.getElementById('textoImpreso');
// 		textoImpreso.innerText = texto;
// 	});

export let loadData = [
    {
        message: 'El incidente fue reportado por Roy Soto.',
        time: '08:40 a.m',
    },
    {
        message: 'El equipo de bomberos llego a la zona.',
        time: '09:10 a.m',
    },
    {
        message: 'El equipo de bomberos contuvo el incidente.',
        time: '09:25 a.m',
    },
    {
        message:
            'Se corroboro que todos los trabajadores se encuentran a salvo.',
        time: '09:25 a.m',
    },
    {
        message:
            'Los bomberos pudieron acceder al equipo donde se ocasiono el incidente.',
        time: '10:30 a.m',
    },
    {
        message: 'La policía llego a la zona del incidente.',
        time: '11:20 a.m',
    },
];

// add new item to loadData
function addData() {
    const newMessage = document.getElementById('new_event').value;
    const newTime = new Date().toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
    });

    loadData =  [...loadData, { message: newMessage, time: newTime }];
    document.getElementById('new_event').value = '';
};

</script>

<section class="flex-col h-screen space-y-4 fixed">
    <div
        id="textoImpreso"
        class="border-4 border-gray p-5 rounded-lg min-h-3/4"
    >
        <ul class="flex-col space-y-4">
            {#each loadData as data} 
                    <li class="flex space-x-4">
                        <p class="whitespace-nowrap">{data.time}</p>
                        <p class="">{data.message}</p>
                    </li>
            {/each}
        </ul>
    </div>    
    <div class="border-4 border-gray p-4 rounded-lg">
        <textarea
        id="new_event"
            rows="5"
            class="shadow appearance-none border w-full py-2 px-3
        leading-tight focus:outline-none focus:shadow-outline border-gray p-5 rounded-lg"
            placeholder="Estación de almacen..."></textarea>
    </div>
    <div class="mb-4">
        <button
            on:click={addData}
            id="agregar"
            type="button"
            class="text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            style="background-color: #ED1C24; border-radius: 10px;"
        >
            Agregar
        </button>
    </div>
</section>

