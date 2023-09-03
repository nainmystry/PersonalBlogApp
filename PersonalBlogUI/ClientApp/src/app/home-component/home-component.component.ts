import { Component } from '@angular/core';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent {
profilePic:string = '';

ngOnInit(){
  this.profilePic = 'https://media.licdn.com/dms/image/D4D03AQFP_uyOMX-sYw/profile-displayphoto-shrink_400_400/0/1693650435893?e=1698883200&v=beta&t=LNUf-x9Ejk_b8RxsjAS-IZF2VCWboRFRdGRip_f77K0';
}

}
