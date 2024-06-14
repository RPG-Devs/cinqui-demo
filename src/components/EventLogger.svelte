<script> 

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
                message: 'Se corroboro que todos los trabajadores se encuentran a salvo.',
                time: '09:25 a.m',
            },
            {
                message: 'Los bomberos pudieron acceder al equipo donde se ocasiono el incidente.',
                time: '10:30 a.m',
            },
            {
                message: 'La policía llego a la zona del incidente.',
                time: '11:20 a.m',
            }
    ];

    // add new item to loadData
    function addData() {
            const newMessage = document.getElementById('new_event').value;
            const newTime = new Date().toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
            });
            const formatnewTime = newTime.replace('AM', 'a.m').replace('PM', 'p.m');

            loadData = [...loadData, { message: newMessage, time: formatnewTime }];
            document.getElementById('new_event').value = '';
        };

        // add "bombero" 
        function addBombero() {
            const textarea = document.getElementById('new_event');
            const bomberoText = '<span class="red-text">bombero</span>';
            textarea.value += ' bombero';
            textarea.focus();
        }

        
        // add "polica" 
        function addPolicia() {
            const textarea = document.getElementById('new_event');
            const policaText = '<span class="blue-text">policia</span>';
            textarea.value += ' policía';
            textarea.focus();
        }
        
        // add "SAMU" 
        function addSAMU() {
            const textarea = document.getElementById('new_event');
            const samuText = '<span class="yelow-text">SAMU</span>';
            textarea.value += ' SAMU';
            textarea.focus();
        }

</script>

<section class="flex flex-col space-y-4 mt-4">
    <div id="textoImpreso" class="border-2 border-gray p-5 rounded-lg min-h-3/4">
        <ul class="flex-col space-y-4">
            {#each loadData as data}
            <li class="flex space-x-4">
                <p class="whitespace-nowrap">{data.time}</p>
                <p class="">{data.message}</p>
            </li>
            {/each}
        </ul>
    </div>    
    <div class="border-2 border-gray p-4 rounded-lg">
            <button
                on:click={addBombero}
                id="bombero"
                type="button"
                class="text-white py-1 px-4 rounded focus:outline-none focus:shadow-outline"
                style="background-color: #E2463C; border-radius: 10px;">
                Bombero
            </button>
            <button
                on:click={addPolicia}
                id="policia"
                type="button"
                class="text-white py-1 px-4 rounded focus:outline-none focus:shadow-outline"
                style="background-color: #4048DE; border-radius: 10px;">
                Policía
            </button>
            <button
                on:click={addSAMU}
                id="samu"
                type="button"
                class="text-white py-1 px-4 rounded focus:outline-none focus:shadow-outline"
                style="background-color: #F5DF6F; border-radius: 10px;">
                SAMU
            </button>
            <div class="-mx-4">
            <hr class="my-3 border-1 border-gray" />
            </div>

            <textarea
                id="new_event"
                rows="5"
                class="shadow appearance-none border w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline border-gray p-5 rounded-lg"
                placeholder="Estación de almacen..."></textarea>      
    
        <div class="flex justify-end my-2 mb-2">
            <button
                on:click={addData}
                id="agregar"
                type="button"
                class="text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                style="background-color: #ED1C24; border-radius: 10px;">
                Agregar
            </button>
            
        </div>
    </div>
</section>
