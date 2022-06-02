const express = require('express');
const { engine } = require('express-handlebars');
const app = express();


app.engine(
    'hbs',
    engine({
        extname: '.hbs',
        defaultLayout: 'index.hbs'
    })
)

app.set('views', './hbs_views');
app.set('view engine', 'hbs');

app.post('/productos', (req, res) => {
    res.send(req.body);
});

app.get('/productos', (req, res) => {
    
    res.render('main', {productos: [
        
            {
                id: 1,
                title: 'remera 1',
                price: 200,
                thumbnail: 'www.google.com',
                
            },
        
            {   
                id: 2,
                title: 'remera 2',
                price: 300,
                thumbnail: 'www.google.com',
                
            },
        
            {   
                id: 3,
                title: 'remera 3',
                price: 400,
                thumbnail: 'www.google.com',
                
            }
        ]
      ,} ) // lo que se muestra en html index///
})



app.listen(8080, () => {
    console.log('Escuchando!')
});