
<template>
    <div class="mt-10">
        <table id="tabla">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Telefono</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Juan</td>
                    <td>Fuentes</td>
                    <td>3024449776</td>
                </tr>
                <tr>
                    <td>Andres</td>
                    <td>Vargas</td>
                    <td>3024449776</td>
                </tr>
            </tbody>
        </table>
        <v-btn @click="generar()">Excel</v-btn>
    </div>
</template>
<script>
import * as XLSX from 'xlsx/xlsx.mjs';
export default {
    name: 'PageExel',
    data: () => ({

    }),
    methods: {
        generar() {
            const table=document.getElementById("tabla");
            const wb = XLSX.utils.table_to_book(table);
            XLSX.writeFile(wb,"Excel.xlsx");
        }
    }
}
</script>