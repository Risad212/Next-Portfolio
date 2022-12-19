export default function send(req, res) {
    if (req.method === 'POST') {
         if(req.body){
            return res.send('ok')
         }else{
            return req.error('error')
         }
    } else {
      // Handle any other HTTP method
    }
}