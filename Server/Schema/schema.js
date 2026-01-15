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
export const userLoginSchema = z.object({
    // Validación para el email: debe ser un string y tener el formato de email
    email: z.string().email({ message: 'El email no es válido.' }),

    // Validación para la contraseña: debe ser un string y tener una longitud mínima de 6 caracteres
    password: z.string().min(5, { message: 'La contraseña debe tener al menos 5 caracteres.' }),
});
export const productSchema = z.object({
    id_category: z.string({
        required_error: 'La categoria es requerido.',
    }),
    name: z.string({
        required_error: 'El nombre es requerido.',
        invalid_type_error: 'El nombre debe ser un string.'
    }),
    description: z.string({
        invalid_type_error: 'La descripcion debe ser un string.'
    }).optional(),
    price: z.string({
        invalid_type_error: 'El precio debe ser un numero.'
    })
});  
export const purchaseGroupSchema = z.object({
    group_name: z.string({
        required_error: 'El nombre es requerido.',
        invalid_type_error: 'El nombre debe ser un string.'

    }),
    description: z.string({
        required_error: 'La descripcion es requerida.',
        invalid_type_error: 'La descripcion debe ser un string.'
    }),
    subtotal: z.string({
        required_error: 'El subtotal es requerido.',
        invalid_type_error: 'El subtotal debe ser un string.'
    }),
    total_tax_amount: z.string({
        invalid_type_error: 'El Iva debe ser un string.'
    }).optional()
});  
export const searchInventary = z.object({
    name: z.string().optional(),
    reference: z.string().optional(),
    cod: z.string().optional()
});  
export const categorySchema = z.object({
    name: z.string({
        required_error: 'El nombre es requerido.',
        invalid_type_error: 'El nombre debe ser un string.'
    }),
    description: z.string({
        invalid_type_error: 'La descripcion debe ser un string.'
    }).optional(),
});  
export const providerSchema = z.object({
    name: z.string({
        required_error: 'El nombre es requerido.',
        invalid_type_error: 'El nombre debe ser un string.'
    }),
    email: z.string({
        required_error: 'El email es requerido.',
        invalid_type_error: 'El Email debe ser un string.'
    }),
    description: z.string({
        invalid_type_error: 'La descripcion debe ser un string.'
    }).nullable().optional(),
    phone: z.string({
        invalid_type_error: 'El telefono debe ser un string.'
    }).nullable().optional()
});  
export const purchaseSchema = z.object({
    id_provider: z.any({
        required_error: 'El proveedor es requerido.',
    }),
    id_product: z.any({
        required_error: 'El producto es requerido.',
    }),
    quantity: z.any({
        required_error: 'La cantidad es requerida.',
    }),
    unit_cost: z.any({}),
    cost: z.any({
        required_error: 'El costo es requerido.',
    })
});  