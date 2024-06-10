<script>
export let damageAreas = ['Surtidores', 'Tanques', 'Punto de venta',];

function addDamage() {
    const newDamageArea = document.getElementById('new_damage_area').value;
    if (newDamageArea) {
        damageAreas = [...damageAreas, newDamageArea];
        document.getElementById('new_damage_area').value = '';
    }
}

function deleteItem(damageArea) {
    damageAreas = damageAreas.filter((item) => item !== damageArea);

}
</script>

<div class="flex flex-col space-y-2">
    <div class="flex space-x-2 w-min">
    <textarea
        id="new_damage_area"
        rows="1"
        class="shadow appearance-none border py-2 px-3
leading-tight focus:outline-none focus:shadow-outline border-gray p-5 rounded-lg"
        placeholder="Estación de almacen..."></textarea>
    <button
        on:click={addDamage}
        class="text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        style="background-color: #ED1C24; border-radius: 10px;"
    >
        Agregar
    </button>
</div>
<li class="flex flex-wrap">
    {#each damageAreas as damageArea}    
        <ul class="whitespace-nowrap bg-accent rounded-lg p-2 flex space-x-2 mr-4 mb-2 items-center">
            <img src="x.svg" alt="Eliminar" class="w-4 h-4" on:click={deleteItem(damageArea)}/>
            <p class="text-white font-bold">{damageArea}</p>
        </ul>
    {/each}
</li>
</div>