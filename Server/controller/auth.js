export class AuthController{
    static verify(req, res){
        if(!req.user || !req.user.id){
            console.log("Usuario no identificado");
        }else{
            return res.status(200).json({ message: 'Sesión activa y verificada.' });
        }
        return;
    }
}