# Hash Test Front End

Live Preview here
https://newagent-ff7b5.firebaseapp.com/


### Estrutura do projeto
    .
    ├── ...
    ├── src                          # Source
    │   ├── service                  # Services    
    │   ├── views                    # Views
    │       ├── view-name          
    │           └── view-name.html   # View html source
    │           └── view-name.js     # View js source
    │           └── view-name.css    # View css source
    └── ...


### Trade-off

#### Uso de var ao invez de const
Por falta de compatibilidade de const em navagadores das versão ie 6-10 optei por utilizar var ao invez de 

#### Uso lib mathjs
Mesmo usando a lib [mathjs](https://mathjs.org) ainda tive problemas com o calculo uma solução para esse problema
seria criar uma api para realizar o calculo
