import { Component, OnInit } from '@angular/core';
import { RouterModule,Route } from '@angular/router'; 
import {MatButtonModule} from '@angular/material/button';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../service/appdata.service';
import Chart from 'chart.js/auto';
import { ActivatedRoute } from '@angular/router'; // เพิ่ม ActivatedRoute


@Component({
  selector: 'app-graph',
  standalone: true,
  imports: [RouterModule,MatButtonModule],
  templateUrl: './graph.component.html',
  styleUrl: './graph.component.scss'
})
export class GraphComponent implements OnInit{
  
  constructor(private api: ApiService, private route: ActivatedRoute) {}
  id!: any ;
  data : any;
  
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')||'';
    this.getData();
  }

    async getData() {
     console.log(this.id);
     
      this.data = await this.api.getgraph(this.id);
      console.log(this.data);
      this.createChart();
    }
 
 

  createChart() {
    
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;
    const myChart = new Chart(ctx, {
      
      type: 'line',
      data: {
        labels: this.data.map((item: { Date: string }) => item.Date),
        datasets: [
          {
            label: 'Image',
            data: this.data.map((item: { score : number }) => item.score),
            fill: true,
            borderColor: 'rgb(0, 0, 204)',
            tension: 0,
            backgroundColor : 'rgb(204,229,255)'
          }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              font :{
                size : 15
              },color : 'rgb(0,102,102)'
            , stepSize: 5
            }
          },  x: {
            beginAtZero: true,
            ticks: {
              font :{
                size : 15
              }
              ,color : 'rgb(51,0,102)'

            }
          }
        }
      }
    });
  }
}

 