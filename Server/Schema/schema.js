import z from 'zod';

export const userSchema = z.object({
    // Validación para el nombre: debe ser un string
    name: z.string({
        required_error: 'El nombre es requerido.',
        invalid_type_error: 'El nombre debe ser un string.'
    }),
    lastname: z.string({
        invalid_type_error: 'El apellido debe ser un string.'
    }),
    // Validación para el email: debe ser un string y tener el formato de email
    email: z.string().email({ message: 'El email no es válido.' }),

    // Validación para la contraseña: debe ser un string y tener una longitud mínima de 6 caracteres
    password: z.string().min(5, { message: 'La contraseña debe tener al menos 5 caracteres.' }),

    // Opcional: validaciones para otros campos
    phone: z.string().optional(),
    location: z.string().optional(),
    perfil: z.string().optional(),
});