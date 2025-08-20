import cors from 'cors';
const ACCEPTED_ORIGINS = [
    'http://localhost:5173'
]
export const corsMiddleware = ({accepted_origin = ACCEPTED_ORIGINS} = {}) => cors({
    origin: (origin, callback) => {
        
        if(accepted_origin.includes(origin)){
            return callback(null, true)
        }
        if(!origin){
            return callback(null, true)
        }
        return callback(new Error('Cors not allowed'))
    }
})