export default function send(req, res) {
    if (req.method === 'POST') {
         if(req.body){
            console.log(req.body)
            return res.json(req.body)
         }
    }
}