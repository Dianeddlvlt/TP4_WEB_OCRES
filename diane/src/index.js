import React from 'react';
import ReactDOM from 'react-dom';
import'./index.css';
import Client from "./Client";
import Button from "./Button";
import Comment from "./Comment";
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>


class App extends React.Component{

  state={
    clients: [
        {id:1, nom:"de Dieuleveult", prenom:"Diane", fullname:"Diane de Dieuleveult", born:"27/04/2000", actuel:true, comment:"vrfk jsfgksvekfv:ueqgf jdfmgubvjdblrfjuvbrksgfugjbrklfg"},
        {id:2, nom:"Gommard", prenom:"Paul", fullname:"Paul Gommard", born:"12/06/2000", actuel:false, comment:" bchfdv vbsjkdbvjlsdvk dbfjvbkdfgvb dkfh"},
        {id:3, nom:"Rolland", prenom:"Léo", fullname:"Léo Rolland", born:"01/07/2000", actuel:false, comment:"chd dbjvgbdn bsdjbfvkdjf jsbefjlmoqzbfjsdbciqk"}
    ]
};

  handleChange = (id) => {
    const clients = [...this.state.clients];
    const fiche = clients.findIndex(client => client.id === id);

    clients.map(client => {client.actuel = false;});
    const client = this.state.clients[fiche];
    client.actuel = true;
    clients[fiche]=client;
    this.setState({clients});
  };

  getClient= () => {
    const clients = [...this.state.clients];
    const fiche = clients.findIndex(client => client.actuel === true);

    return clients[fiche];

  }

  render (){
    return (
    <div>
        <article class="button">
        {this.state.clients.map(client => (
          <Button 
          details={client}
          change={this.handleChange}
          />
          ))}
        </article>

        <article class="client">
          <Client
            details={this.state.clients.find(client => client.actuel === true)}
          />
        </article>

        <article class="client">
        <Comment
          details={this.state.clients.find(client => client.actuel === true)} 
        />
        </article>
       
        
    </div>

    )
  }
}

ReactDOM.render(<App/>,document.getElementById('root'));
