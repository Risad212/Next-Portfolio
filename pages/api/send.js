export default function send(req, res) {
    if (req.method === 'POST') {
         if(req.body){
            return res.json(req.body)
         }
    }
}