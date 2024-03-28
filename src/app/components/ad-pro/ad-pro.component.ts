import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
import { ApiService } from '../../service/appdata.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ad-pro',
  standalone: true,
  imports: [MatButtonModule,RouterModule,RouterLink,CommonModule],
  templateUrl: './ad-pro.component.html',
  styleUrl: './ad-pro.component.scss'
})
export class AdProComponent {

  constructor(private api: ApiService, private route: ActivatedRoute) {}
  id!: any ;
  data! : any;

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')||'';
    console.log(this.id);
    
    this.getData();
  }

    async getData() {
     console.log(this.id);
     
      this.data = await this.api.getgame(this.id);
      console.log(this.data);
    
    }

    back() { 
      window.history.back();
  }

}
