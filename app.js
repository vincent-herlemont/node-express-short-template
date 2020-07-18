const express = require('express')
const app = express()
const port = 3000

const short_setup = process.env.SHORT_SETUP
const short_env = process.env.SHORT_ENV;
const value1 = process.env.VAR1
const value2 = process.env.VAR2;

app.get('/', (req, res) => res.send(`<pre>Hello World!
\n short_setup=${short_setup}
\n short_env=${short_env}
\n value1=${value1}
\n value2=${value2}
</pre>`))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))