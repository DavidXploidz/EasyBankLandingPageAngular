import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EasybankLandingPage';

  public mostrarMenu: boolean = true;

  public datosBank = [
    {
        id: 1,
        // imagen: '../assets/images/icon-online.svg',
        imagen: 'src/../assets/images/icon-online.svg',
        titulo: 'Online Banking',
        texto: `Our modern web and mobile applications allow you to keep track of your finances 
                wherever you are in the world.`
    },
    {
        id: 2,
        imagen: 'src/../assets/images/icon-budgeting.svg',
        titulo: 'Simple Budgeting',
        texto: `See exactly where your money goes each month. Receive notifications when you’re 
                close to hitting your limits.`
    },
    {
        id: 3,
        imagen: 'src/../assets/images/icon-onboarding.svg',
        titulo: 'Fast Onboarding',
        texto: `We don’t do branches. Open your account in minutes online and start taking control 
                of your finances right away.`
    },
    {
        id: 4,
        imagen: 'src/../assets/images/icon-api.svg',
        titulo: 'Open API',
        texto: `Manage your savings, investments, pension, and much more from one account. Tracking 
                your money has never been easier.`
    }
  ]

  public datosCards = [
  {
      id: 1,
      by: 'By Claire Robinson',
      titulo: 'Receive money in any currency with no fees',
      texto: `The world is getting smaller and we’re becoming more mobile. So why should you be 
              forced to only receive money in a single …`,
      imagen: 'src/../assets/images/image-currency.jpg'
  },
  {
      id: 2,
      by: 'By Wilson Hutton',
      titulo: 'Treat yourself without worrying about money',
      texto: `Our simple budgeting feature allows you to separate out your spending and set 
              realistic limits each month. That means you …`,
      imagen: 'src/../assets/images/image-restaurant.jpg'
  },
  {
      id: 3,
      by: 'By Wilson Hutton',
      titulo: 'Take your Easybank card wherever you go',
      texto: `We want you to enjoy your travels. This is why we don’t charge any fees on purchases 
              while you’re abroad. We’ll even show you …`,
      imagen: 'src/../assets/images/image-plane.jpg'
  },
  {
      id: 4,
      by: 'By Claire Robinson',
      titulo: 'Our invite-only Beta accounts are now live!',
      texto: `After a lot of hard work by the whole team, we’re excited to launch our closed beta. 
              It’s easy to request an invite through the site ...`,
      imagen: 'src/../assets/images/image-confetti.jpg'
  }
  ]

  public iconosMedia = [
    {
      id:1,
      imagen: 'src/../assets/images/icon-facebook.svg'
    },
    {
      id:2,
      imagen: 'src/../assets/images/icon-youtube.svg'
    },
    {
      id:3,
      imagen: 'src/../assets/images/icon-twitter.svg'
    },
    {
      id:4,
      imagen: 'src/../assets/images/icon-pinterest.svg'
    },
    {
      id:5,
      imagen: 'src/../assets/images/icon-instagram.svg'
    }
  ]

}
