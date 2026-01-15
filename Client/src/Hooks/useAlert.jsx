import React from 'react';
import Swal from 'sweetalert2';

export const showAlert = () => {

    const alertDelete = async () => {
        const result = await Swal.fire({
        title: "Estás seguro?",
        text: "No serás capaz de recuperarlo!",
        icon: "warning",
        theme: 'dark',
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#19191a",
        canceluttonText: "Cancelar",
        confirmButtonText: "Si, Eliminar"
        });
        if (result.isConfirmed) {
            Swal.fire({
            title: "Eliminando Registro!",
            theme: 'dark',
            text: "Tu registro está siendo eliminado.",
            icon: "success",
            confirmButtonColor: "#19191a",
            });
            return true;
        }
        return false;
    }
    return {alertDelete};
}
