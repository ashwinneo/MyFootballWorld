import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-team-manager',
  templateUrl: './team-manager.component.html',
  styleUrls: ['./team-manager.component.css']
})
export class TeamManagerComponent implements OnInit {

  @Input("teamManager") teamManager;
  chelsea: Boolean;
  manutd: Boolean;
  arsenal: Boolean;
  ethihad: Boolean;
  nike: Boolean;
  mancity: Boolean;
  realMadrid: Boolean;
  barcelona: Boolean;
  athleticoMadrid: Boolean;
  sevilla: Boolean;
  bvb: Boolean;
  bayernMunich: Boolean;
  liverpool: Boolean;
  tottenham: Boolean;
  everton: Boolean;
  juventus: Boolean;
  psg: Boolean;
  leifc: Boolean;
  teamManagerList = [];
  constructor() { }

  managerInfo = [
    {
      "teamName": "Manchester United",
      "src": "assets/images/managers/jose.jpg",
      "managerInfo": "José Mário dos Santos Mourinho Félix, GOIH, known as José Mourinho, is a Portuguese football manager and former football player. He is the manager of Premier League club Manchester United."
    },
    {
      "teamName": "Chelsea",
      "src": "assets/images/managers/sarri.jpg",
      "managerInfo": "Maurizio Sarri is an Italian professional football coach who is manager of Premier League club Chelsea. He did not play football professionally, taking part as an amateur central defender and coach while working as a banker."
    },
    {
      "teamName": "Arsenal",
      "src": "assets/images/managers/emery.jpg",
      "managerInfo": "Unai Emery Etxegoien is a Spanish football manager and former player. He is the head coach of Premier League club Arsenal."
    },
    {
      "teamName": "Manchester City",
      "src": "assets/images/managers/pep.webp",
      "managerInfo": "Josep Pep Guardiola Sala is a Spanish professional football coach and former player who is the current manager of Manchester City."
    },
    {
      "teamName": "Real Madrid",
      "src": "assets/images/managers/lopetegui.jpeg",
      "managerInfo": "Julen Lopetegui Argote is a Spanish former footballer who played as a goalkeeper and is the head coach of Real Madrid."
    },
    {
      "teamName": "Barcelona",
      "src": "assets/images/managers/valverde.jpg",
      "managerInfo": "Ernesto Valverde Tejedor is a Spanish former footballer who played as a forward, and is the current manager of Barcelona."
    },
    {
      "teamName": "Sevilla",
      "src": "assets/images/managers/machin.jpg",
      "managerInfo": "Pablo Machín Díez is a Spanish retired footballer who played as a right back, and is the coach of Sevilla FC."
    },
    {
      "teamName": "Bayern Munich",
      "src": "assets/images/managers/kovac.jpg",
      "managerInfo": "Niko Kovač is a Croatian former footballer and current manager of Bayern Munich. Kovač was the long-standing captain of the Croatia national team until his retirement from international football in January 2009."
    },
    {
      "teamName": "Borussia Dortmund",
      "src": "assets/images/managers/favre.jpg",
      "managerInfo": "Lucien Favre is a Swiss football manager and former footballer. He is the current head coach of German club Borussia Dortmund."
    },
    {
      "teamName": "Athletico Madrid",
      "src": "assets/images/managers/simeone.jpg",
      "managerInfo": "Diego Pablo Simeone, also known as El Cholo, is an Argentine football manager and former player, who played as a midfielder, and is currently the manager for Atletico Madrid."
    },
    {
      "teamName": "Liverpool",
      "src": "assets/images/managers/klopp.jpg",
      "managerInfo": "Jürgen Norbert Klopp is a German football manager and former professional player who is the current manager of Premier League club Liverpool."
    },
    {
      "teamName": "Tottenham Hotspur",
      "src": "assets/images/managers/mario.jpg",
      "managerInfo": "Mauricio Roberto Pochettino Trossero is an Argentine former footballer who played as a centre back, and is the current manager of Premier League club Tottenham Hotspur."
    },
    {
      "teamName": "Everton",
      "src": "assets/images/managers/marco.jpg",
      "managerInfo": "Marco Alexandre Saraiva da Silva is a Portuguese retired footballer who played as a right back, and is the manager of Premier League club Everton. He played for a variety of Portuguese clubs, finishing his career with a six-year spell at Estoril."
    },
    {
      "teamName": "Juventus",
      "src": "assets/images/managers/allegiri.png",
      "managerInfo": "Massimiliano Allegri is an Italian professional football manager and former player currently in charge of Serie A club Juventus. As a player, Allegri was a midfielder who spent his career playing for various Italian clubs."
    },
    {
      "teamName": "Paris Saint-Germain",
      "src": "assets/images/managers/tuchel.jpg",
      "managerInfo": "Thomas Tuchel is a German professional football coach and former player. He is the current head coach at Ligue 1 club, Paris Saint-Germain."
    },
    {
      "teamName": "Leicester City",
      "src": "assets/images/managers/claude.jpg",
      "managerInfo": "Claude Puel is a French football manager and former player who is currently the manager of Premier League club Leicester City."
    },
    {
      "teamName": "AC Milan",
      "src": "assets/images/managers/gattuso.webp",
      "managerInfo": "Gennaro Ivan Rino Gattuso, Ufficiale OMRI is a retired Italian footballer and current manager of Milan. As a player, he mainly played in the centre as a defensive midfielder, although he was also capable of playing on the wing."
    }
  ]

  src: String;
  managerData: String;

  ngOnInit() {
    this.teamManagerList = this.teamManager;
    this.getManagerList(this.teamManagerList);
  }

  getManagerList(val) {

    for(let i=0; i<this.managerInfo.length; i++){
    if (val[0].teamName === this.managerInfo[i].teamName) {
      this.src = this.managerInfo[i].src;
      this.managerData = this.managerInfo[i].managerInfo;
    }

    }
    
  }
  
}
