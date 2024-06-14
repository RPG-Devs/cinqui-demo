<script>
    import { onMount } from 'svelte';

    let hospital = '';
    let nombre = '';
    let dni = '';
    let rows = [];

    // Función para agregar 
    function agregarDatos() {
        rows = [...rows, { nombre, dni, hospital }];
        hospital = '';
        nombre = '';
        dni = '';
    }

    // Función para eliminar 
    function eliminar(index) {
        rows = rows.filter((_, i) => i !== index);
    }

    // Función para editar 
    function editar(index) {
        const { hospital: oldHospital, nombre: oldNombre, dni: oldDni } = rows[index];
        hospital = oldHospital;
        nombre = oldNombre;
        dni = oldDni;
        eliminar(index);
    }
</script>

<section id="damnificados" class="grid py-10 gap-4">
    <div class="flex-col space-y-4">
        <div class="border-4 border-gray p-4 rounded-lg">
            {#if rows.length === 0}
                <div class="text-center p-4">Puedes agregar miembros del personal que se vieron afectados por el incidente</div>
            {:else}
                <table class="min-w-full border-collapse table" rules="all">
                    <thead class="block md:table-header-group">
                        <tr class="border-gray border-2 table-row -top-full md:top-auto -left-full md:left-auto md:relative rounded-lg">
                            <th class="border-gray border-2 w-3.5/10 text-left p-2">Hospital</th>
                            <th class="border-gray border-2 w-3.5/10 text-left p-2">Nombre</th>
                            <th class="border-gray border-2 w-1.5/10 text-left p-2">DNI</th>
                            <th class="border-gray border-2 w-1.5/10 text-left p-2">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {#each rows as row, index}
                            <tr class="border-gray border-2 block md:table-row">
                                <td class="border-gray border-2 w-3.5/10 p-2">{row.hospital}</td>
                                <td class="border-gray border-2 w-3.5/10 p-2">{row.nombre}</td>
                                <td class="border-gray border-2 w-1.5/10 p-2">{row.dni}</td>
                                <td class="border-gray border-2 w-1.5/10 p-2">
                                    <div class="flex items-center">
                                        <img src="edit.png" alt="Editar" on:click={() => editar(index)}>
                                        <img src="delete.png" alt="Eliminar" on:click={() => eliminar(index)}>
                                    </div>
                                </td>
                            </tr>
                        {/each}
                    </tbody>
                </table>
            {/if}
        </div>

        <div class="border-4 border-gray p-4 rounded-lg">
            <div class="flex space-x-4 py-1">
                <textarea
                    bind:value={nombre}
                    rows="1"
                    class="shadow appearance-none border py-2 px-3 leading-tight focus:outline-none focus:shadow-outline border-gray p-5 rounded-lg"
                    placeholder="Nombre..."></textarea>
                <textarea
                    bind:value={dni}
                    rows="1"
                    class="shadow appearance-none border py-2 px-3 leading-tight focus:outline-none focus:shadow-outline border-gray p-5 rounded-lg"
                    placeholder="DNI..."></textarea>
            </div>  
            <div class="py-3">
                <textarea
                    bind:value={hospital}
                    rows="1"
                    class="shadow appearance-none border py-2 px-3 w-full leading-tight focus:outline-none focus:shadow-outline border-gray p-5 rounded-lg"
                    placeholder="Hospital..."></textarea>
            </div>
            <textarea
                rows="5"
                class="shadow appearance-none border w-full py-2 px-3
                leading-tight focus:outline-none focus:shadow-outline border-gray p-5 rounded-lg"
                placeholder=""></textarea>
        </div>

        <div class="flex w-full justify-end space-x-4">
            <a
                id="agregar"
                type="button"
                class="text-white font-bold py-2 px-20 rounded focus:outline-none focus:shadow-outline"
                style="background-color: #D9D9D9; border-radius: 10px;"
                href="/"
            >
                Cerrar
            </a>
            <button
                on:click={agregarDatos}
                class="text-white font-bold py-2 px-20 rounded focus:outline-none focus:shadow-outline"
                style="background-color: #ED1C24; border-radius: 10px;">
                Agregar
            </button>
        </div>
    </div>
</section>
